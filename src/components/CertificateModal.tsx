import React from 'react';
import { X, Printer, Download, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { ExamResult } from '../types';
import { CERTIFICATE_EMBLEM } from '../data/questions';

interface CertificateModalProps {
  result: ExamResult;
  isOpen: boolean;
  onClose: () => void;
}

function numberToIndonesianWords(n: number): string {
  const angka = [
    '', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan',
    'Sepuluh', 'Sebelas', 'Dua Belas', 'Tiga Belas', 'Empat Belas', 'Lima Belas',
    'Enam Belas', 'Tujuh Belas', 'Delapan Belas', 'Sembilan Belas'
  ];
  if (n === 0) return 'Nol';
  if (n === 100) return 'Seratus';
  if (n < 20) return angka[n];
  const tens = ['', '', 'Dua Puluh', 'Tiga Puluh', 'Empat Puluh', 'Lima Puluh', 'Enam Puluh', 'Tujuh Puluh', 'Delapan Puluh', 'Sembilan Puluh'];
  const t = Math.floor(n / 10);
  const r = n % 10;
  return `${tens[t]}${r > 0 ? ' ' + angka[r] : ''}`;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  result,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const getPredicate = (score: number) => {
    if (score >= 90) return { title: 'SANGAT BAIK (A)', desc: 'Lulus dengan Prestasi Istimewa' };
    if (score >= 80) return { title: 'BAIK (B)', desc: 'Lulus dengan Prestasi Memuaskan' };
    if (score >= 75) return { title: 'CUKUP (C)', desc: 'Lulus Memenuhi Kriteria Ketuntasan Minimal' };
    return { title: 'PERLU BIMBINGAN (D)', desc: 'Telah Menyelesaikan Ujian Remedial' };
  };

  const predicate = getPredicate(result.score);
  const scoreInWords = numberToIndonesianWords(result.score);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Modal Controls (Hidden in Print) */}
        <div className="no-print bg-blue-900 px-6 py-3.5 text-white flex items-center justify-between border-b border-blue-800">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-300" />
            <span className="font-bold text-sm sm:text-base">
              Sertifikat Resmi Ujian Tengah Semester SD
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-blue-200 hover:text-white rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Container: Beautiful Academic Certificate Frame */}
        <div className="certificate-print-area p-6 sm:p-10 bg-[#fafcff] relative selection:bg-amber-100">
          {/* Outer Border with Double Inset Pattern */}
          <div className="border-[6px] border-double border-blue-900 p-6 sm:p-8 rounded-xl bg-white relative shadow-sm">
            {/* Corner Decorative Accents */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-600" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-600" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-600" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-600" />

            {/* Certificate Header */}
            <div className="text-center space-y-1 mb-6">
              <div className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">
                KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI
              </div>
              <div className="text-xs uppercase tracking-wider text-blue-900 font-bold">
                DINAS PENDIDIKAN KABUPATEN BARITO KUALA · KECAMATAN WANARAYA
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-blue-950 font-serif-title tracking-tight pt-2">
                SERTIFIKAT PENGHARGAAN
              </h1>
              <div className="text-xs font-mono text-slate-500 pt-0.5">
                Nomor: {result.certificateNumber}
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-amber-400 via-blue-800 to-amber-400 mx-auto rounded-full mt-2" />
            </div>

            {/* Recipient Statement */}
            <div className="text-center space-y-3 mb-6">
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Diberikan dengan penuh apresiasi kepada peserta didik:
              </p>

              <div className="text-xl sm:text-3xl font-extrabold text-blue-900 border-b-2 border-blue-200 pb-1 inline-block px-8 max-w-full">
                {result.student.username}
              </div>

              <div className="text-xs sm:text-sm text-slate-700">
                Kelas: <span className="font-bold text-blue-950">{result.student.studentClass}</span>
                <span className="mx-2 text-slate-400">·</span>
                Sekolah: <span className="font-semibold text-blue-950">{result.student.schoolName}</span>
              </div>

              <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed pt-1">
                Atas partisipasi dan keberhasilan dalam menuntaskan <strong>Ujian Tengah Semester (UTS) Mata Pelajaran Bahasa Indonesia Kelas V SD</strong> yang mencakup materi Karakteristik Diri, Kata Sifat & Imbuhan, Kalimat Majemuk Setara, Unsur Intrinsik Cerita & Majas, serta Teks Fiksi dan Nonfiksi.
              </p>
            </div>

            {/* Score Showcase */}
            <div className="bg-gradient-to-r from-blue-50 via-amber-50/50 to-blue-50 border border-blue-200 rounded-xl p-4 my-6 flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Nilai Angka
                </span>
                <span className="text-3xl sm:text-4xl font-black text-blue-900 tabular-nums">
                  {result.score}
                </span>
                <span className="text-xs text-slate-500"> / 100</span>
              </div>

              <div className="h-10 w-px bg-slate-200 hidden sm:block" />

              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Nilai Huruf & Terbilang
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-800 block">
                  "{scoreInWords}"
                </span>
                <span className="text-xs text-blue-700 font-semibold">{predicate.title}</span>
              </div>

              <div className="h-10 w-px bg-slate-200 hidden sm:block" />

              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Hasil Butir Soal
                </span>
                <span className="text-sm font-bold text-emerald-700">
                  {result.correctCount} Benar
                </span>
                <span className="text-xs text-slate-500"> dari 30 Soal PG</span>
              </div>
            </div>

            {/* Signatures & Seal Section */}
            <div className="grid grid-cols-3 gap-2 items-center pt-4 border-t border-slate-200 text-center">
              {/* Left Signee: Teacher */}
              <div className="space-y-1">
                <p className="text-[11px] text-slate-500 font-medium">Mengetahui,</p>
                <p className="text-xs font-bold text-slate-800">Guru Bahasa Indonesia</p>
                <div className="h-12 flex items-center justify-center font-serif-title italic text-blue-800 text-sm opacity-85">
                  Nurul Hidayati, S.Pd.
                </div>
                <p className="text-[11px] text-slate-600 font-medium">NIP. 19850412 201001 2 018</p>
              </div>

              {/* Center Seal / Insignia */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <img
                    src={CERTIFICATE_EMBLEM}
                    alt="Medali Prestasi Kelulusan"
                    className="w-full h-full object-contain filter drop-shadow"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-bold text-blue-900 tracking-wider uppercase mt-1">
                  TERVERIFIKASI
                </span>
              </div>

              {/* Right Signee: Principal / Committee */}
              <div className="space-y-1">
                <p className="text-[11px] text-slate-500 font-medium">Wanaraya, {result.completedAt}</p>
                <p className="text-xs font-bold text-slate-800">Kepala SD Gugus Wanaraya</p>
                <div className="h-12 flex items-center justify-center font-serif-title italic text-blue-800 text-sm opacity-85">
                  Drs. H. Syamsudin, M.Pd.
                </div>
                <p className="text-[11px] text-slate-600 font-medium">NIP. 19740921 199803 1 005</p>
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
              <span>Sistem Ujian Online SD · Kecamatan Wanaraya, Kabupaten Barito Kuala</span>
              <span className="font-mono">ID: {result.certificateNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
