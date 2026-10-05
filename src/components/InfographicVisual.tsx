import React from 'react';
import { BookMarked, MapPin, Users, Ship, Award, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import { INFOGRAPHIC_IMAGE, BANNER_IMAGE } from '../data/questions';

interface InfographicProps {
  type: 'literasi_wanaraya' | 'alur_buku' | 'diagram_venn' | 'mini_stat';
  caption?: string;
}

export const InfographicVisual: React.FC<InfographicProps> = ({ type, caption }) => {
  if (type === 'literasi_wanaraya') {
    return (
      <div className="bg-white rounded-xl border border-blue-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-300" />
              <h4 className="font-bold text-sm sm:text-base">
                Infografis Literasi: Kec. Wanaraya, Kab. Barito Kuala
              </h4>
            </div>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white font-medium">
              Data Resmi 2026
            </span>
          </div>
          <p className="text-xs text-blue-100 mt-1">
            Program "Selidah Membaca" menjangkau 13 Desa & Sudut Baca Sungai
          </p>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-blue-50/70 p-3 rounded-lg border border-blue-100 text-center">
              <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-blue-900 tabular-nums">1.450</div>
              <div className="text-xs text-slate-600 font-medium">Siswa SD Aktif</div>
            </div>

            <div className="bg-emerald-50/70 p-3 rounded-lg border border-emerald-100 text-center">
              <BookOpen className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-emerald-900 tabular-nums">60%</div>
              <div className="text-xs text-slate-600 font-medium">Buku Fiksi</div>
            </div>

            <div className="bg-amber-50/70 p-3 rounded-lg border border-amber-100 text-center">
              <BookMarked className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-amber-900 tabular-nums">40%</div>
              <div className="text-xs text-slate-600 font-medium">Buku Nonfiksi</div>
            </div>

            <div className="bg-indigo-50/70 p-3 rounded-lg border border-indigo-100 text-center">
              <Ship className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-indigo-900 tabular-nums">13 Desa</div>
              <div className="text-xs text-slate-600 font-medium">Layanan Perahu</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 h-36">
              <img
                src={INFOGRAPHIC_IMAGE}
                alt="Perahu Pustaka Wanaraya Barito Kuala"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2">
                <span className="text-[11px] text-white font-medium">
                  Perahu Pustaka Menyusuri Kanal Wanaraya
                </span>
              </div>
            </div>

            <div className="text-xs space-y-2 text-slate-700">
              <div className="font-semibold text-blue-900 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Pojok Baca Unggulan: Desa Roham Raya</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Menyediakan bacaan cerita rakyat Barito, ensiklopedia lahan gambut pasang surut, serta majalah pertanian jeruk Wanaraya.
              </p>
              <div className="text-[11px] text-slate-500 italic">
                * Sumber: Pusat Sumber Belajar Gugus SD Kec. Wanaraya, Barito Kuala
              </div>
            </div>
          </div>
        </div>

        {caption && (
          <div className="px-4 py-2 bg-blue-50/50 border-t border-blue-100 text-[11px] text-blue-800 italic">
            {caption}
          </div>
        )}
      </div>
    );
  }

  if (type === 'alur_buku') {
    return (
      <div className="bg-white rounded-xl border border-blue-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 p-3.5 text-white">
          <h4 className="font-bold text-sm sm:text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-300" />
            Infografis: Tahapan Proses Pembuatan Buku (Bab II Buku Siswa)
          </h4>
          <p className="text-xs text-blue-200 mt-0.5">
            Dari gagasan ide penulis hingga siap dibaca di perpustakaan sekolah
          </p>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              { step: '1', role: 'Penulis', act: 'Menulis ide & naskah cerita', color: 'bg-amber-50 border-amber-200 text-amber-900' },
              { step: '2', role: 'Editor', act: 'Memeriksa & memperbaiki naskah', color: 'bg-blue-50 border-blue-200 text-blue-900' },
              { step: '3', role: 'Ilustrator', act: 'Membuat gambar & ilustrasi', color: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
              { step: '4', role: 'Desain Grafis', act: 'Menata tata letak isi buku', color: 'bg-purple-50 border-purple-200 text-purple-900' },
              { step: '5', role: 'Percetakan', act: 'Mencetak buku dalam jumlah banyak', color: 'bg-rose-50 border-rose-200 text-rose-900' },
              { step: '6', role: 'Perpustakaan', act: 'Didistribusikan & dibaca siswa', color: 'bg-sky-50 border-sky-200 text-sky-900' },
            ].map((item) => (
              <div
                key={item.step}
                className={`p-2.5 rounded-lg border ${item.color} flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-white font-bold text-xs flex items-center justify-center shadow-sm">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider opacity-75">
                    Langkah {item.step}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-xs">{item.role}</div>
                  <div className="text-[11px] text-slate-600 leading-tight mt-0.5">
                    {item.act}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {caption && (
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 italic">
            {caption}
          </div>
        )}
      </div>
    );
  }

  if (type === 'diagram_venn') {
    return (
      <div className="bg-white rounded-xl border border-blue-200 p-4 shadow-sm">
        <h4 className="font-bold text-sm text-blue-900 mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          Diagram Venn: Perbandingan Tokoh Kembar Rana & Rani
        </h4>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-red-50 p-2.5 rounded-lg border border-red-200">
            <span className="font-bold text-red-900 block mb-1">Khusus Rana</span>
            <ul className="text-[11px] text-red-800 space-y-1 text-left list-disc pl-3">
              <li>Lahir 7 menit lebih dulu (Kakak)</li>
              <li>Sifat: Pendiam</li>
              <li>Hobi: Senam</li>
              <li>Cita-cita: Atlet nasional</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200 flex flex-col justify-center">
            <span className="font-bold text-amber-900 block mb-1">Persamaan (Irisan)</span>
            <ul className="text-[11px] text-amber-800 space-y-1 text-left list-disc pl-3">
              <li>Kembar identik</li>
              <li>Wajah, mata, alis mirip</li>
              <li>Hidung mancung, dagu lancip</li>
              <li>Rajin belajar untuk berbakti</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-2.5 rounded-lg border border-orange-200">
            <span className="font-bold text-orange-900 block mb-1">Khusus Rani</span>
            <ul className="text-[11px] text-orange-800 space-y-1 text-left list-disc pl-3">
              <li>Adik kembar</li>
              <li>Sifat: Periang</li>
              <li>Hobi: Merangkai bunga</li>
              <li>Cita-cita: Pengusaha ternama</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
