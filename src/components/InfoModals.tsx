import React from 'react';
import { X, BookOpen, CheckCircle, Info, MapPin, Award } from 'lucide-react';
import { INFOGRAPHIC_IMAGE, BANNER_IMAGE } from '../data/questions';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200">
        <div className="bg-blue-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-base">Petunjuk Pengerjaan Ujian SD</h3>
          </div>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white p-1 rounded-lg hover:bg-blue-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-sm text-slate-700 max-h-[70vh] overflow-y-auto">
          <div className="space-y-2">
            <h4 className="font-bold text-blue-950 text-sm">Tata Cara Menjawab:</h4>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-600">
              <li>Pastikan identitas (Nama Siswa dan Kelas) sudah diisi dengan benar.</li>
              <li>Jumlah butir soal sebanyak <strong>30 soal Pilihan Ganda Tunggal</strong> dengan opsi A, B, C, dan D.</li>
              <li>Pilihlah satu jawaban yang menurutmu paling tepat dengan mengeklik kotak opsi.</li>
              <li>Tiap kelompok soal diawali oleh <strong>stimulus teks narasi (~100 kata)</strong> dan <strong>infografis kontekstual Wanaraya Barito Kuala</strong>. Bacalah dengan saksama.</li>
              <li>Gunakan tombol <strong>"Ragu-ragu"</strong> jika kamu belum yakin dengan jawaban yang dipilih.</li>
              <li>Waktu pengerjaan adalah <strong>60 menit</strong>. Selesaikan sebelum waktu habis.</li>
              <li>Setelah menyelesaikan ujian, nilai dan analisis capaian akan langsung ditampilkan, dan kamu dapat mengunduh atau mencetak <strong>Sertifikat Penghargaan</strong> resmi.</li>
            </ol>
          </div>

          <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong>Kriteria Ketuntasan Minimal (KKM):</strong> Nilai 75. Bila nilai mencapai 75 ke atas, peserta didik dinyatakan tuntas dan berhak atas sertifikat predikat Baik / Sangat Baik.
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 cursor-pointer"
          >
            Mengerti, Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
};

export const KisiKisiModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200">
        <div className="bg-blue-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-base">Kisi-Kisi Soal & Taksonomi Bloom (C1–C3)</h3>
          </div>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white p-1 rounded-lg hover:bg-blue-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-slate-700 max-h-[70vh] overflow-y-auto">
          <p className="text-slate-600">
            Ujian Tengah Semester Bahasa Indonesia Kelas V SD ini disusun mengacu pada Buku Siswa Kemendikbudristek 2021 dengan integrasi kontekstual wilayah Wanaraya Barito Kuala.
          </p>

          <div className="border rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-blue-50 text-blue-950 font-bold border-b">
                <tr>
                  <th className="p-2.5">No</th>
                  <th className="p-2.5">Materi Pokok</th>
                  <th className="p-2.5">Level Kognitif</th>
                  <th className="p-2.5">Jumlah Soal</th>
                </tr>
              </thead>
              <tbody className="divide-y text-slate-700">
                <tr>
                  <td className="p-2.5 font-medium">1</td>
                  <td className="p-2.5">Kata Sifat & Imbuhan Awalan pe-</td>
                  <td className="p-2.5">Level 1 (C1, C2) & Level 2 (C3)</td>
                  <td className="p-2.5 font-bold">5 Butir</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-medium">2</td>
                  <td className="p-2.5">Sinonim dan Antonim Kata</td>
                  <td className="p-2.5">Level 1 (C2) & Level 2 (C3)</td>
                  <td className="p-2.5 font-bold">4 Butir</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-medium">3</td>
                  <td className="p-2.5">Kalimat Majemuk Setara (Sejalan, Berlawanan, Sebab-Akibat)</td>
                  <td className="p-2.5">Level 2 (C3)</td>
                  <td className="p-2.5 font-bold">4 Butir</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-medium">4</td>
                  <td className="p-2.5">Unsur Intrinsik Cerita & Majas (Metafora, Personifikasi, Hiperbola)</td>
                  <td className="p-2.5">Level 1 (C1, C2) & Level 2 (C3)</td>
                  <td className="p-2.5 font-bold">6 Butir</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-medium">5</td>
                  <td className="p-2.5">Kalimat Langsung dan Kalimat Tidak Langsung</td>
                  <td className="p-2.5">Level 1 (C1) & Level 2 (C3)</td>
                  <td className="p-2.5 font-bold">3 Butir</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-medium">6</td>
                  <td className="p-2.5">Teks Fiksi, Nonfiksi, Bagian Buku & Proses Penerbitan</td>
                  <td className="p-2.5">Level 1 (C1, C2) & Level 2 (C3)</td>
                  <td className="p-2.5 font-bold">5 Butir</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-medium">7</td>
                  <td className="p-2.5">Stimulus Narasi & Infografis Barito Kuala Wanaraya</td>
                  <td className="p-2.5">Level 1 (C2) & Level 2 (C3)</td>
                  <td className="p-2.5 font-bold">3 Butir</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export const AboutModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200">
        <div className="bg-blue-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-base">Profil Wilayah Kec. Wanaraya, Barito Kuala</h3>
          </div>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white p-1 rounded-lg hover:bg-blue-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-slate-700 max-h-[70vh] overflow-y-auto">
          <div className="rounded-xl overflow-hidden border border-slate-200 h-40">
            <img
              src={INFOGRAPHIC_IMAGE}
              alt="Wanaraya Barito Kuala"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-sm text-blue-950">
              Kecamatan Wanaraya, Kabupaten Barito Kuala
            </h4>
            <p className="leading-relaxed text-slate-600">
              Kecamatan Wanaraya terletak di Kabupaten Barito Kuala, Provinsi Kalimantan Selatan (Bumi Selidah). Dikenal sebagai daerah lumbung padi pasang surut dan sentra perkebunan jeruk siam yang subur.
            </p>
            <p className="leading-relaxed text-slate-600">
              Dalam bidang pendidikan, gugus sekolah dasar di Wanaraya aktif menggalakkan gerakan literasi sekolah, pojok baca desa, serta pelayanan perahu pustaka keliling yang menghubungkan anak-anak di sepanjang aliran kanal pasang surut Barito Kuala.
            </p>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 grid grid-cols-2 gap-2 text-slate-700">
            <div>
              <span className="font-semibold block text-blue-900">Kabupaten:</span>
              <span>Barito Kuala (Batola)</span>
            </div>
            <div>
              <span className="font-semibold block text-blue-900">Kecamatan:</span>
              <span>Wanaraya (13 Desa)</span>
            </div>
            <div>
              <span className="font-semibold block text-blue-900">Semboyan Daerah:</span>
              <span>Bumi Selidah</span>
            </div>
            <div>
              <span className="font-semibold block text-blue-900">Fokus Pembelajaran:</span>
              <span>Bahasa Indonesia Kelas 5 SD</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
