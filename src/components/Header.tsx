import React from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

interface HeaderProps {
  currentStage: 'login' | 'exam' | 'result';
  studentName?: string;
  studentClass?: string;
  onOpenGuideModal?: () => void;
  onOpenKisiKisiModal?: () => void;
  onOpenAboutModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentStage,
  studentName,
  studentClass,
  onOpenGuideModal,
  onOpenKisiKisiModal,
  onOpenAboutModal,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-blue-900/95 backdrop-blur-md text-white border-b border-blue-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-inner">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap">
            UTS Bahasa Indonesia SD · Wanaraya
          </span>
        </div>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-blue-100">
          <button
            type="button"
            onClick={onOpenGuideModal}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Petunjuk Ujian
          </button>
          <button
            type="button"
            onClick={onOpenKisiKisiModal}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Kisi-Kisi Soal
          </button>
          <button
            type="button"
            onClick={onOpenAboutModal}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Profil Wanaraya
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions / user badge */}
        <div className="flex items-center gap-3">
          {currentStage === 'login' && (
            <button
              type="button"
              onClick={onOpenGuideModal}
              className="px-3.5 py-1.5 text-xs font-semibold bg-blue-700/80 hover:bg-blue-600 text-white rounded-lg border border-blue-500/50 transition-colors whitespace-nowrap"
            >
              Panduan Siswa
            </button>
          )}

          {currentStage === 'exam' && studentName && (
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-800/80 rounded-lg border border-blue-700 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white max-w-[120px] truncate">{studentName}</span>
              <span className="text-blue-300 font-mono">({studentClass})</span>
            </div>
          )}

          {currentStage === 'result' && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-400/40 rounded-lg text-xs font-medium">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Selesai Ujian</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
