import React, { useState, useEffect } from 'react';
import { 
  Clock, Bookmark, ChevronLeft, ChevronRight, CheckSquare, 
  AlertTriangle, Grid, HelpCircle, ZoomIn, ZoomOut, Check, Sparkles 
} from 'lucide-react';
import { Question, StudentProfile, ExamResult } from '../types';
import { QUESTIONS_DATA } from '../data/questions';
import { InfographicVisual } from './InfographicVisual';

interface ExamScreenProps {
  student: StudentProfile;
  onFinishExam: (result: ExamResult) => void;
}

const TOTAL_DURATION_SECONDS = 60 * 60; // 60 minutes

export const ExamScreen: React.FC<ExamScreenProps> = ({ student, onFinishExam }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [remainingSeconds, setRemainingSeconds] = useState(TOTAL_DURATION_SECONDS);
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [textSize, setTextSize] = useState<'normal' | 'large'>('normal');

  const currentQ: Question = QUESTIONS_DATA[currentIndex];

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitFinal();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [answers]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: key,
    }));
  };

  const handleToggleFlag = () => {
    setFlagged((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id],
    }));
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS_DATA.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = QUESTIONS_DATA.length - answeredCount;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;

  const handleSubmitFinal = () => {
    let correct = 0;
    QUESTIONS_DATA.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct += 1;
      }
    });

    const calculatedScore = Math.round((correct / QUESTIONS_DATA.length) * 100);
    const dateNow = new Date();
    const formattedDate = dateNow.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const certNum = `BATOLA-WNR/UTS5/${dateNow.getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`;

    const examResult: ExamResult = {
      student,
      answers,
      score: calculatedScore,
      correctCount: correct,
      wrongCount: QUESTIONS_DATA.length - correct,
      unansweredCount,
      totalQuestions: QUESTIONS_DATA.length,
      completedAt: formattedDate,
      certificateNumber: certNum,
      timeSpentSeconds: TOTAL_DURATION_SECONDS - remainingSeconds,
    };

    onFinishExam(examResult);
  };

  const isLowTime = remainingSeconds < 300; // < 5 mins

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-950 p-3 sm:p-6 lg:p-8 text-slate-900 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full space-y-4">
        {/* Top Floating Control Bar */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg border border-blue-200/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1.5 rounded-xl font-bold text-sm sm:text-base flex items-center gap-1.5">
              <span>Nomor Soal:</span>
              <span className="text-blue-700 text-lg tabular-nums">{currentIndex + 1}</span>
              <span className="text-slate-400 font-normal">/ 30</span>
            </div>

            <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500 font-medium">
              <span>Terjawab: <strong className="text-emerald-600">{answeredCount}</strong></span>
              <span className="mx-1">·</span>
              <span>Ragu: <strong className="text-amber-600">{flaggedCount}</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Text Zoom */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setTextSize('normal')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${textSize === 'normal' ? 'bg-white font-bold text-blue-700 shadow-sm' : 'text-slate-600'}`}
                title="Teks Normal"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setTextSize('large')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${textSize === 'large' ? 'bg-white font-bold text-blue-700 shadow-sm' : 'text-slate-600'}`}
                title="Teks Lebih Besar"
              >
                A+
              </button>
            </div>

            {/* Timer */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono font-bold text-sm sm:text-base border shadow-sm ${
                isLowTime
                  ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
                  : 'bg-blue-50 text-blue-900 border-blue-200'
              }`}
            >
              <Clock className={`w-4 h-4 ${isLowTime ? 'text-rose-600' : 'text-blue-600'}`} />
              <span className="tabular-nums">{formatTimer(remainingSeconds)}</span>
            </div>

            {/* Navigation Grid Toggle (Mobile & Desktop) */}
            <button
              type="button"
              onClick={() => setShowNavDrawer(!showNavDrawer)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-sm"
            >
              <Grid className="w-4 h-4" />
              <span className="hidden sm:inline">Daftar Soal</span>
            </button>
          </div>
        </div>

        {/* Main Content Area: Split 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column: Stimulus Box */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-blue-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Wacana / Stimulus Pembelajaran
              </span>
              <span className="text-[11px] bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-medium">
                {currentQ.stimulusType === 'narasi' ? 'Teks Narasi' : currentQ.stimulusType === 'infografis' ? 'Infografis Batola' : 'Bahan Bacaan'}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-extrabold text-blue-950 leading-snug">
              {currentQ.stimulusTitle}
            </h3>

            {/* Render Specific Infographic if question is about wanaraya or book flow */}
            {currentQ.topic === 'Literasi Wanaraya Barito Kuala' && (
              <InfographicVisual type="literasi_wanaraya" />
            )}

            {currentQ.id === 28 && (
              <InfographicVisual type="alur_buku" />
            )}

            {currentQ.id === 6 && (
              <InfographicVisual type="diagram_venn" />
            )}

            {/* Stimulus Text Box */}
            <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200">
              <p
                className={`text-slate-800 leading-relaxed font-normal whitespace-pre-line ${
                  textSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                }`}
              >
                {currentQ.stimulusText}
              </p>
            </div>

            <div className="text-[11px] text-slate-400 italic">
              * Baca dan cermati stimulus di atas untuk menjawab pertanyaan di samping.
            </div>
          </div>

          {/* Right Column: Question & Multiple Choice Options */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-blue-100 space-y-5">
              {/* Question Meta tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                  {currentQ.level}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                  {currentQ.topic}
                </span>
              </div>

              {/* Question Text */}
              <div className="pt-1">
                <h4
                  className={`font-bold text-slate-900 leading-relaxed ${
                    textSize === 'large' ? 'text-base sm:text-xl' : 'text-sm sm:text-lg'
                  }`}
                >
                  {currentQ.question}
                </h4>
              </div>

              {/* Answer Choices */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((option) => {
                  const isSelected = answers[currentQ.id] === option.key;

                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => handleSelectOption(option.key)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50 border-blue-600 text-blue-950 shadow-md ring-2 ring-blue-500/20'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-blue-300'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {option.key}
                      </div>

                      <div
                        className={`pt-0.5 leading-snug flex-1 ${
                          textSize === 'large' ? 'text-base' : 'text-sm'
                        } ${isSelected ? 'font-semibold text-blue-950' : 'text-slate-800'}`}
                      >
                        {option.text}
                      </div>

                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Navigation Buttons */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-lg border border-blue-100 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <button
                type="button"
                onClick={handleToggleFlag}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                  flagged[currentQ.id]
                    ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                    : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span className="hidden sm:inline">Ragu-ragu</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/25 transition-all cursor-pointer"
              >
                <span>{currentIndex === QUESTIONS_DATA.length - 1 ? 'Kumpulkan' : 'Berikutnya'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Question Palette Drawer Modal */}
      {showNavDrawer && (
        <div className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-white rounded-2xl p-6 shadow-2xl space-y-4 border border-blue-200">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h4 className="font-bold text-base text-blue-950">Navigasi Butir Soal (30 Soal)</h4>
                <p className="text-xs text-slate-500">Klik nomor untuk berpindah langsung ke soal yang dituju</p>
              </div>
              <button
                type="button"
                onClick={() => setShowNavDrawer(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 py-1 border-b">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-emerald-600" />
                <span>Terjawab ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-amber-500" />
                <span>Ragu-ragu ({flaggedCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-300" />
                <span>Belum ({unansweredCount})</span>
              </div>
            </div>

            {/* Grid of 30 questions */}
            <div className="grid grid-cols-6 sm:grid-cols-10 gap-2 max-h-72 overflow-y-auto p-1">
              {QUESTIONS_DATA.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = !!answers[q.id];
                const isFlagged = !!flagged[q.id];

                let bg = 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200';
                if (isFlagged) {
                  bg = 'bg-amber-500 border-amber-600 text-white font-bold';
                } else if (isAnswered) {
                  bg = 'bg-emerald-600 border-emerald-700 text-white font-bold';
                }

                if (isCurrent) {
                  bg += ' ring-2 ring-blue-500 ring-offset-2';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowNavDrawer(false);
                    }}
                    className={`h-10 rounded-lg text-xs font-semibold flex items-center justify-center border transition-all cursor-pointer ${bg}`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowNavDrawer(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-blue-200 space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
              <CheckSquare className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h4 className="text-lg font-bold text-slate-900">
                Selesaikan Ujian Sekarang?
              </h4>
              <p className="text-xs text-slate-500">
                Periksa kembali ringkasan jawabanmu sebelum mengirim lembar ujian.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between text-slate-700">
                <span>Soal Terjawab:</span>
                <span className="font-bold text-emerald-600">{answeredCount} dari 30</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Soal Ditandai Ragu-ragu:</span>
                <span className="font-bold text-amber-600">{flaggedCount}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Soal Belum Terjawab:</span>
                <span className="font-bold text-rose-600">{unansweredCount}</span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-xs flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Masih ada <strong>{unansweredCount} soal</strong> yang belum kamu jawab. Apakah kamu yakin ingin menyelesaikannya sekarang?
                </span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Kembali Periksa
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSubmitModal(false);
                  handleSubmitFinal();
                }}
                className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Ya, Kumpulkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
