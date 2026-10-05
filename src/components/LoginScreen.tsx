import React, { useState } from 'react';
import { BookOpen, User, School, Clock, CheckCircle2, AlertCircle, Sparkles, HelpCircle } from 'lucide-react';
import { BANNER_IMAGE } from '../data/questions';
import { StudentProfile } from '../types';

interface LoginScreenProps {
  onStartExam: (profile: StudentProfile) => void;
  onOpenGuide: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onStartExam, onOpenGuide }) => {
  const [username, setUsername] = useState('');
  const [studentClass, setStudentClass] = useState('5-A');
  const [schoolName, setSchoolName] = useState('SDN Wanaraya 1, Kab. Barito Kuala');
  const [nisn, setNisn] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Mohon tuliskan nama lengkapmu terlebih dahulu.');
      return;
    }
    if (!studentClass.trim()) {
      setError('Mohon pilih atau masukkan kelasmu.');
      return;
    }
    setError('');
    onStartExam({
      username: username.trim(),
      studentClass: studentClass.trim(),
      schoolName: schoolName.trim() || 'SD di Kecamatan Wanaraya',
      nisn: nisn.trim() || undefined,
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-blue-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Visual Column */}
        <div className="lg:col-span-5 bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-900 p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/60 border border-blue-400/40 text-xs font-semibold text-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Kurikulum Merdeka SD Kelas V
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Ujian Tengah Semester
              </h2>
              <p className="text-blue-200 text-sm mt-1 font-medium">
                Bahasa Indonesia · Tahun Pelajaran 2026/2027
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-blue-400/30 shadow-md">
              <img
                src={BANNER_IMAGE}
                alt="Siswa Belajar Bahasa Indonesia"
                className="w-full h-36 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-blue-900/60 p-3.5 rounded-xl border border-blue-700/60 space-y-2 text-xs text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bab I: Aku yang Unik (Kata Sifat, Pe-, Sinonim)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bab II: Buku Jendela Dunia (Majas, Bagian Buku)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Stimulus Narasi & Infografis Kec. Wanaraya</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-blue-700/50 mt-4 text-[11px] text-blue-200">
            Kecamatan Wanaraya, Kabupaten Barito Kuala, Kalimantan Selatan
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-white">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Portal Peserta Ujian
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Selamat Datang, Siswa Cerdas!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Silakan isi nama dan kelas untuk memulai lembar soal pilihan ganda.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Lengkap Siswa <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Contoh: Muhammad Rizky Pratama"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  autoFocus
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kelas <span className="text-rose-500">*</span>
                </label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                >
                  <option value="5-A">Kelas 5-A</option>
                  <option value="5-B">Kelas 5-B</option>
                  <option value="5-C">Kelas 5-C</option>
                  <option value="5-D">Kelas 5-D</option>
                  <option value="Kelas 5 Unggulan">Kelas 5 Unggulan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  NISN / No. Peserta (Opsional)
                </label>
                <input
                  type="text"
                  value={nisn}
                  onChange={(e) => setNisn(e.target.value)}
                  placeholder="0012345678"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Asal Sekolah
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <School className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  placeholder="SDN Wanaraya 1 Barito Kuala"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Wilayah Kecamatan Wanaraya, Kabupaten Barito Kuala
              </p>
            </div>

            <div className="bg-blue-50/70 p-3 rounded-lg border border-blue-100 flex items-center justify-between text-xs text-blue-900">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Durasi: <strong>60 Menit</strong></span>
              </div>
              <div>
                Jumlah Soal: <strong>30 Butir (PG)</strong>
              </div>
              <div>
                KKM: <strong>75</strong>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Mulai Kerjakan Ujian</span>
              </button>

              <button
                type="button"
                onClick={onOpenGuide}
                className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors text-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-slate-500" />
                <span>Panduan</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
