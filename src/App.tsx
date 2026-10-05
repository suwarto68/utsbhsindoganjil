/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { LoginScreen } from './components/LoginScreen';
import { ExamScreen } from './components/ExamScreen';
import { ResultScreen } from './components/ResultScreen';
import { CertificateModal } from './components/CertificateModal';
import { GuideModal, KisiKisiModal, AboutModal } from './components/InfoModals';
import { StudentProfile, ExamResult } from './types';

export default function App() {
  const [stage, setStage] = useState<'login' | 'exam' | 'result'>('login');
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  // Modals state
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isKisiKisiOpen, setIsKisiKisiOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleStartExam = (profile: StudentProfile) => {
    setStudent(profile);
    setStage('exam');
  };

  const handleFinishExam = (result: ExamResult) => {
    setExamResult(result);
    setStage('result');
    // Open certificate automatically if passed or student can click to open
    if (result.score >= 75) {
      setTimeout(() => {
        setIsCertOpen(true);
      }, 700);
    }
  };

  const handleRetakeExam = () => {
    setExamResult(null);
    setStage('exam');
  };

  const handleBackToLogin = () => {
    setStudent(null);
    setExamResult(null);
    setStage('login');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col font-sans antialiased text-slate-800">
      {/* Top Navigation conforming to Top Bar Contract */}
      <Header
        currentStage={stage}
        studentName={student?.username}
        studentClass={student?.studentClass}
        onOpenGuideModal={() => setIsGuideOpen(true)}
        onOpenKisiKisiModal={() => setIsKisiKisiOpen(true)}
        onOpenAboutModal={() => setIsAboutOpen(true)}
      />

      {/* Main View Port */}
      <main className="flex-1 flex flex-col">
        {stage === 'login' && (
          <LoginScreen
            onStartExam={handleStartExam}
            onOpenGuide={() => setIsGuideOpen(true)}
          />
        )}

        {stage === 'exam' && student && (
          <ExamScreen
            student={student}
            onFinishExam={handleFinishExam}
          />
        )}

        {stage === 'result' && examResult && (
          <ResultScreen
            result={examResult}
            onOpenCertificate={() => setIsCertOpen(true)}
            onRetakeExam={handleRetakeExam}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="no-print bg-blue-950 border-t border-blue-900 py-4 px-4 text-center text-xs text-blue-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © 2026 Ujian Tengah Semester SD · Gugus Sekolah Kec. Wanaraya, Kab. Barito Kuala
          </span>
          <div className="flex items-center gap-4 text-[11px] text-blue-400">
            <span>Kurikulum Merdeka</span>
            <span>·</span>
            <span>Bahasa Indonesia Kelas V</span>
            {stage !== 'login' && (
              <>
                <span>·</span>
                <button
                  type="button"
                  onClick={handleBackToLogin}
                  className="hover:text-white underline cursor-pointer"
                >
                  Keluar / Ganti Siswa
                </button>
              </>
            )}
          </div>
        </div>
      </footer>

      {/* Modals */}
      {examResult && (
        <CertificateModal
          result={examResult}
          isOpen={isCertOpen}
          onClose={() => setIsCertOpen(false)}
        />
      )}

      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      <KisiKisiModal
        isOpen={isKisiKisiOpen}
        onClose={() => setIsKisiKisiOpen(false)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
