import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, CheckCircle2, XCircle, AlertCircle, RotateCcw, 
  Eye, FileText, ChevronRight, Check, X, BookOpen, Sparkles, Filter 
} from 'lucide-react';
import { ExamResult, Question } from '../types';
import { QUESTIONS_DATA } from '../data/questions';

interface ResultScreenProps {
  result: ExamResult;
  onOpenCertificate: () => void;
  onRetakeExam: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  onOpenCertificate,
  onRetakeExam,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'correct' | 'wrong'>('all');
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  useEffect(() => {
    if (result.score >= 75) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore if canvas-confetti fails
      }
    }
  }, [result.score]);

  // Competency mastery calculation
  const topicsMap: Record<string, { total: number; correct: number }> = {};
  QUESTIONS_DATA.forEach((q) => {
    if (!topicsMap[q.topic]) {
      topicsMap[q.topic] = { total: 0, correct: 0 };
    }
    topicsMap[q.topic].total += 1;
    if (result.answers[q.id] === q.correctAnswer) {
      topicsMap[q.topic].correct += 1;
    }
  });

  const filteredQuestions = QUESTIONS_DATA.filter((q) => {
    const isCorrect = result.answers[q.id] === q.correctAnswer;
    if (activeFilter === 'correct') return isCorrect;
    if (activeFilter === 'wrong') return !isCorrect;
    return true;
  });

  const isPassed = result.score >= 75;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 py-8 px-4 sm:px-6 lg:px-8 text-slate-100">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Main Score Hero Card */}
        <div className="bg-slate-900/90 border border-blue-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center lg:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-800/60 border border-blue-600/50 text-xs text-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Hasil Resmi Ujian Tengah Semester (UTS)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {result.student.username}
              </h2>
              <p className="text-sm text-blue-200">
                Kelas: <span className="font-semibold text-white">{result.student.studentClass}</span>
                <span className="mx-2 text-slate-500">·</span>
                {result.student.schoolName}
              </p>
              <div className="text-xs text-slate-400 pt-1">
                Diselesaikan pada: {result.completedAt}
              </div>
            </div>

            {/* Score Display Card */}
            <div className="flex items-center gap-4 bg-blue-950/80 p-5 rounded-2xl border border-blue-700/60 shadow-inner">
              <div className="text-center">
                <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold block">
                  Nilai Akhir
                </span>
                <span className="text-4xl sm:text-5xl font-black text-amber-400 tabular-nums">
                  {result.score}
                </span>
                <span className="text-xs text-blue-300 block">Skala 0 - 100</span>
              </div>

              <div className="w-px h-16 bg-blue-800" />

              <div className="space-y-1 text-left">
                <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${isPassed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}`}>
                  {isPassed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                  <span>{isPassed ? 'TUNTAS (LULUS)' : 'PERLU PENGAYAAN'}</span>
                </div>
                <div className="text-xs text-slate-300">
                  Benar: <strong className="text-emerald-400">{result.correctCount}</strong> / 30 Soal
                </div>
                <div className="text-xs text-slate-400">
                  Salah: <strong className="text-rose-400">{result.wrongCount}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onOpenCertificate}
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/25 transition-all text-sm cursor-pointer"
            >
              <Award className="w-4 h-4 text-slate-950" />
              <span>Lihat & Cetak Sertifikat Kelulusan</span>
            </button>

            <button
              onClick={onRetakeExam}
              type="button"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-colors text-sm cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-slate-400" />
              <span>Ulangi Ujian</span>
            </button>
          </div>
        </div>

        {/* Competency Analysis Grid */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>Analisis Penguasaan Materi (Capaian Pembelajaran)</span>
            </h3>
            <span className="text-xs text-slate-400">KKM: 75</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(topicsMap).map(([topic, stats]) => {
              const pct = Math.round((stats.correct / stats.total) * 100);
              return (
                <div
                  key={topic}
                  className="bg-slate-800/70 p-3.5 rounded-xl border border-slate-700/60 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-200 line-clamp-1">
                      {topic}
                    </span>
                    <span className={`text-xs font-bold tabular-nums ${pct >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {pct}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 rounded-full ${pct >= 75 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Benar {stats.correct} dari {stats.total} soal</span>
                    <span>{pct >= 75 ? 'Menguasai' : 'Perlu Diulang'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Question Review Section with Filter */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                <span>Review Kunci Jawaban & Pembahasan Lengkap</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Pelajari pembahasan setiap butir soal untuk memperdalam pemahaman
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg border border-slate-700 text-xs">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${activeFilter === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                Semua (30)
              </button>
              <button
                onClick={() => setActiveFilter('correct')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${activeFilter === 'correct' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                Benar ({result.correctCount})
              </button>
              <button
                onClick={() => setActiveFilter('wrong')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${activeFilter === 'wrong' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                Salah ({result.wrongCount})
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {filteredQuestions.map((q) => {
              const studentAnswer = result.answers[q.id];
              const isCorrect = studentAnswer === q.correctAnswer;
              const isExpanded = expandedQuestion === q.id;

              return (
                <div
                  key={q.id}
                  className={`border rounded-xl transition-all overflow-hidden ${isCorrect ? 'bg-slate-800/40 border-slate-700/60' : 'bg-rose-950/20 border-rose-800/40'}`}
                >
                  <button
                    onClick={() => setExpandedQuestion(isExpanded ? null : q.id)}
                    type="button"
                    className="w-full p-4 flex items-start justify-between gap-3 text-left hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${isCorrect ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'}`}>
                        {q.id}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-semibold text-blue-300">{q.topic}</span>
                          <span className="text-slate-500">·</span>
                          <span className="text-slate-400">{q.level}</span>
                        </div>
                        <p className="text-sm font-medium text-slate-100 line-clamp-2">
                          {q.question}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right text-xs">
                        <span className="block text-slate-400">Jawabanmu:</span>
                        <span className={`font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {studentAnswer || 'Kosong'}
                        </span>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-2 border-t border-slate-700/50 bg-slate-900/60 space-y-3 text-xs">
                      {/* Stimulus recap */}
                      <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-300">
                        <span className="font-semibold text-blue-300 block mb-1">
                          {q.stimulusTitle}
                        </span>
                        <p className="italic text-slate-300 whitespace-pre-line leading-relaxed">
                          "{q.stimulusText}"
                        </p>
                      </div>

                      {/* Options */}
                      <div className="space-y-1.5">
                        <span className="font-semibold text-slate-300">Pilihan Jawaban:</span>
                        {q.options.map((opt) => {
                          const isOptionCorrect = opt.key === q.correctAnswer;
                          const isStudentSelected = opt.key === studentAnswer;

                          let bg = 'bg-slate-800/60 border-slate-700 text-slate-300';
                          if (isOptionCorrect) {
                            bg = 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200 font-semibold';
                          } else if (isStudentSelected && !isCorrect) {
                            bg = 'bg-rose-950/40 border-rose-500/50 text-rose-200 font-semibold';
                          }

                          return (
                            <div
                              key={opt.key}
                              className={`p-2.5 rounded-lg border flex items-center justify-between text-xs ${bg}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold w-5">{opt.key}.</span>
                                <span>{opt.text}</span>
                              </div>
                              {isOptionCorrect && (
                                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-bold">
                                  <Check className="w-3.5 h-3.5" /> Kunci Jawaban
                                </span>
                              )}
                              {isStudentSelected && !isCorrect && (
                                <span className="text-[11px] text-rose-400 flex items-center gap-1 font-bold">
                                  <X className="w-3.5 h-3.5" /> Pilihanmu
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      <div className="p-3 bg-blue-950/50 rounded-lg border border-blue-800/60 text-blue-100 space-y-1">
                        <span className="font-bold text-amber-300 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          Penjelasan & Pembahasan:
                        </span>
                        <p className="leading-relaxed text-slate-200">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
