import { Question } from '../types';

export const BANNER_IMAGE = '/src/assets/images/banner_ujian_sd_1791205905533.jpg';
export const INFOGRAPHIC_IMAGE = '/src/assets/images/infografik_barito_kuala_1791205923160.jpg';
export const CERTIFICATE_EMBLEM = '/src/assets/images/emblem_sertifikat_prestasi_1791205935974.jpg';

export const QUESTIONS_DATA: Question[] = [
  // ==========================================
  // STIMULUS 1: NARASI TEKS LOKAL WANARAYA BARITO KUALA (~100 kata)
  // ==========================================
  {
    id: 1,
    level: 'Level 1 (C1: Mengingat)',
    topic: 'Literasi Wanaraya Barito Kuala',
    stimulusTitle: 'Stimulus Narasi 1: Semangat Literasi di Kecamatan Wanaraya',
    stimulusText: 
      'Pagi hari di bantaran saluran irigasi Desa Roham Raya, Kecamatan Wanaraya, Kabupaten Barito Kuala, tampak anak-anak berseragam merah putih berkumpul riang. Banu dan Galih adalah sahabat karib yang bersekolah di SDN Wanaraya. Mereka selalu menyempatkan diri membaca di Pojok Baca Tunas Mandiri sebelum bel masuk berbunyi. Banu gemar membaca cerita fabel dan dongeng nusantara, sedangkan Galih lebih senang membaca ensiklopedia pertanian pasang surut. Meskipun memiliki kegemaran membaca yang berbeda, keduanya selalu rukun dan saling menghargai. Bagi mereka, buku adalah jendela dunia yang membuka cakrawala pengetahuan.',
    stimulusType: 'narasi',
    stimulusImage: INFOGRAPHIC_IMAGE,
    question: 'Berdasarkan teks narasi di atas, di manakah Banu dan Galih membaca buku sebelum jam masuk sekolah?',
    options: [
      { key: 'A', text: 'Di teras balai desa Wanaraya' },
      { key: 'B', text: 'Di Pojok Baca Tunas Mandiri Desa Roham Raya' },
      { key: 'C', text: 'Di dalam perahu motor nelayan Barito' },
      { key: 'D', text: 'Di ruang laboratorium komputer sekolah' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada teks narasi paragraf pertama disebutkan secara eksplisit: "Mereka selalu menyempatkan diri membaca di Pojok Baca Tunas Mandiri sebelum bel masuk berbunyi."'
  },
  {
    id: 2,
    level: 'Level 1 (C2: Memahami)',
    topic: 'Kata Sifat & Imbuhan pe-',
    stimulusTitle: 'Stimulus Narasi 1: Semangat Literasi di Kecamatan Wanaraya',
    stimulusText: 
      'Pagi hari di bantaran saluran irigasi Desa Roham Raya, Kecamatan Wanaraya, Kabupaten Barito Kuala, tampak anak-anak berseragam merah putih berkumpul riang. Banu dan Galih adalah sahabat karib yang bersekolah di SDN Wanaraya. Mereka selalu menyempatkan diri membaca di Pojok Baca Tunas Mandiri sebelum bel masuk berbunyi. Banu gemar membaca cerita fabel dan dongeng nusantara, sedangkan Galih lebih senang membaca ensiklopedia pertanian pasang surut. Meskipun memiliki kegemaran membaca yang berbeda, keduanya selalu rukun dan saling menghargai. Bagi mereka, buku adalah jendela dunia yang membuka cakrawala pengetahuan.',
    stimulusType: 'narasi',
    question: 'Kata sifat yang menggambarkan suasana hati anak-anak saat berkumpul di bantaran saluran irigasi pada teks adalah...',
    options: [
      { key: 'A', text: 'Riang' },
      { key: 'B', text: 'Cemas' },
      { key: 'C', text: 'Bimbang' },
      { key: 'D', text: 'Bosan' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam teks tertulis: "...tampak anak-anak berseragam merah putih berkumpul riang." Kata "riang" adalah kata sifat yang menyatakan kegembiraan atau suasana suka cita.'
  },
  {
    id: 3,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Kalimat Majemuk Setara',
    stimulusTitle: 'Stimulus Narasi 1: Semangat Literasi di Kecamatan Wanaraya',
    stimulusText: 
      'Pagi hari di bantaran saluran irigasi Desa Roham Raya, Kecamatan Wanaraya, Kabupaten Barito Kuala, tampak anak-anak berseragam merah putih berkumpul riang. Banu dan Galih adalah sahabat karib yang bersekolah di SDN Wanaraya. Mereka selalu menyempatkan diri membaca di Pojok Baca Tunas Mandiri sebelum bel masuk berbunyi. Banu gemar membaca cerita fabel dan dongeng nusantara, sedangkan Galih lebih senang membaca ensiklopedia pertanian pasang surut. Meskipun memiliki kegemaran membaca yang berbeda, keduanya selalu rukun dan saling menghargai. Bagi mereka, buku adalah jendela dunia yang membuka cakrawala pengetahuan.',
    stimulusType: 'narasi',
    question: 'Perhatikan kalimat: "Banu gemar membaca cerita fabel dan dongeng nusantara, sedangkan Galih lebih senang membaca ensiklopedia." Kalimat majemuk setara tersebut menyatakan hubungan...',
    options: [
      { key: 'A', text: 'Penjumlahan (sejalan)' },
      { key: 'B', text: 'Sebab-akibat' },
      { key: 'C', text: 'Perlawanan atau pertentangan' },
      { key: 'D', text: 'Urutan waktu peristiwa' }
    ],
    correctAnswer: 'C',
    explanation: 'Kata penghubung (konjungsi) "sedangkan", "tetapi", dan "namun" merupakan penanda kalimat majemuk setara yang menyatakan hubungan perlawanan atau perbedaan antara dua gagasan.'
  },

  // ==========================================
  // STIMULUS 2: INFOGRAFIS LITERASI KECAMATAN WANARAYA BARITO KUALA
  // ==========================================
  {
    id: 4,
    level: 'Level 1 (C2: Memahami)',
    topic: 'Literasi Wanaraya Barito Kuala',
    stimulusTitle: 'Stimulus Infografis: Data Pojok Baca & Gerakan Gemar Membaca Wanaraya 2026',
    stimulusText: 
      'Pemerintah Kecamatan Wanaraya di Kabupaten Barito Kuala meluncurkan program "Selidah Membaca" yang menjangkau 13 desa eks-transmigrasi. Sebanyak 1.450 siswa SD tercatat aktif meminjam buku setiap bulan. Koleksi bacaan terdiri dari 60% buku cerita fiksi (dongeng, fabel, komik budi pekerti) dan 40% buku nonfiksi (pertanian jeruk siam, panduan iptek, dan ensiklopedia). Sarana pendukung berupa "Perahu Pustaka Batola" rutin mengunjungi dermaga desa setiap hari Sabtu untuk mengantarkan buku-buku baru ke sekolah.',
    stimulusType: 'infografis',
    stimulusImage: INFOGRAPHIC_IMAGE,
    infographicData: {
      location: 'Kecamatan Wanaraya, Kab. Barito Kuala',
      highlights: [
        { label: 'Siswa Aktif', value: '1.450 Anak', desc: 'Peserta didik SD se-Kecamatan Wanaraya' },
        { label: 'Buku Fiksi', value: '60%', desc: 'Cerita rakyat, fabel, komik anak' },
        { label: 'Buku Nonfiksi', value: '40%', desc: 'Ensiklopedia sains & pertanian pasang surut' },
        { label: 'Armada Khusus', value: 'Perahu Pustaka', desc: 'Keliling kanal sungai setiap akhir pekan' }
      ],
      chartNote: 'Sumber: Pusat Layanan Sumber Belajar Gugus SD Wanaraya Barito Kuala'
    },
    question: 'Berdasarkan data infografis di atas, jenis buku yang mendominasi (paling banyak) di sudut baca Kecamatan Wanaraya adalah...',
    options: [
      { key: 'A', text: 'Buku nonfiksi sebanyak 40%' },
      { key: 'B', text: 'Buku cerita fiksi sebesar 60%' },
      { key: 'C', text: 'Kamus bahasa asing sebesar 50%' },
      { key: 'D', text: 'Majalah olahraga sebesar 75%' }
    ],
    correctAnswer: 'B',
    explanation: 'Infografis mencatat bahwa koleksi bacaan didominasi oleh buku fiksi (cerita fabel, dongeng, komik) sebesar 60%, sedangkan buku nonfiksi sebesar 40%.'
  },
  {
    id: 5,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Teks Fiksi, Nonfiksi & Bagian Buku',
    stimulusTitle: 'Stimulus Infografis: Data Pojok Baca & Gerakan Gemar Membaca Wanaraya 2026',
    stimulusText: 
      'Pemerintah Kecamatan Wanaraya di Kabupaten Barito Kuala meluncurkan program "Selidah Membaca" yang menjangkau 13 desa eks-transmigrasi. Sebanyak 1.450 siswa SD tercatat aktif meminjam buku setiap bulan. Koleksi bacaan terdiri dari 60% buku cerita fiksi (dongeng, fabel, komik budi pekerti) dan 40% buku nonfiksi (pertanian jeruk siam, panduan iptek, dan ensiklopedia). Sarana pendukung berupa "Perahu Pustaka Batola" rutin mengunjungi dermaga desa setiap hari Sabtu untuk mengantarkan buku-buku baru ke sekolah.',
    stimulusType: 'infografis',
    stimulusImage: INFOGRAPHIC_IMAGE,
    question: 'Jika seorang siswa di Wanaraya ingin membaca buku nonfiksi sesuai data di atas, buku manakah yang tepat untuk ia pilih?',
    options: [
      { key: 'A', text: 'Kisah Kancil dan Buaya Penjaga Sungai' },
      { key: 'B', text: 'Petualangan Peri Hutan Pulau Kembang' },
      { key: 'C', text: 'Panduan Praktis Budidaya Jeruk Siam di Lahan Basah' },
      { key: 'D', text: 'Komik Fantasi Naga Penjelajah Langit' }
    ],
    correctAnswer: 'C',
    explanation: 'Buku nonfiksi berisi fakta, data, atau penelitian ilmu pengetahuan nyata. "Panduan Praktis Budidaya Jeruk Siam di Lahan Basah" adalah teks nonfiksi, sedangkan opsi lainnya merupakan cerita imajinasi/fiksi.'
  },

  // ==========================================
  // STIMULUS 3: TEKS BACAAN KISAH RANA DAN RANI (BAB I Hal 4)
  // ==========================================
  {
    id: 6,
    level: 'Level 1 (C1: Mengingat)',
    topic: 'Kata Sifat & Imbuhan pe-',
    stimulusTitle: 'Stimulus Teks: Kisah Kembar Rana dan Rani (Buku Siswa Bab I)',
    stimulusText: 
      'Rana dan Rani adalah dua bersaudara kembar identik yang memiliki rupa sama. Wajah, mata, dan alis mereka mirip, berhidung mancung, serta berdagu lancip. Kelahiran mereka berjarak tujuh menit. Meskipun berwajah kembar, sifat dan kegemaran mereka sangat berbeda. Rana anak yang pendiam dan gemar berolahraga senam, sedangkan Rani anak yang periang dan suka merangkai kembang. Rana bercita-cita menjadi atlet nasional berprestasi, sementara Rani ingin menjadi pengusaha ternama untuk mengabdi pada bangsa.',
    stimulusType: 'narasi',
    question: 'Berapa jarak waktu kelahiran antara Rana dan Rani berdasarkan cerita di atas?',
    options: [
      { key: 'A', text: 'Lima menit' },
      { key: 'B', text: 'Tujuh menit' },
      { key: 'C', text: 'Sepuluh menit' },
      { key: 'D', text: 'Lima belas menit' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai dengan teks pada buku Bab I: "Kelahiran mereka berjarak tujuh menit. Rana adalah kakak dan Rani adalah adik."'
  },
  {
    id: 7,
    level: 'Level 1 (C2: Memahami)',
    topic: 'Kata Sifat & Imbuhan pe-',
    stimulusTitle: 'Stimulus Teks: Kisah Kembar Rana dan Rani (Buku Siswa Bab I)',
    stimulusText: 
      'Rana dan Rani adalah dua bersaudara kembar identik yang memiliki rupa sama. Wajah, mata, dan alis mereka mirip, berhidung mancung, serta berdagu lancip. Kelahiran mereka berjarak tujuh menit. Meskipun berwajah kembar, sifat dan kegemaran mereka sangat berbeda. Rana anak yang pendiam dan gemar berolahraga senam, sedangkan Rani anak yang periang dan suka merangkai kembang. Rana bercita-cita menjadi atlet nasional berprestasi, sementara Rani ingin menjadi pengusaha ternama untuk mengabdi pada bangsa.',
    stimulusType: 'narasi',
    question: 'Perbedaan sifat yang paling menonjol antara si kembar Rana dan Rani adalah...',
    options: [
      { key: 'A', text: 'Rana penakut, sedangkan Rani pemberani' },
      { key: 'B', text: 'Rana pendiam, sedangkan Rani periang' },
      { key: 'C', text: 'Rana pemarah, sedangkan Rani pemaaf' },
      { key: 'D', text: 'Rana pemalas, sedangkan Rani rajin' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks menyatakan: "Rana dan Rani memiliki sifat yang berbeda. Rana pendiam, tetapi Rani periang."'
  },
  {
    id: 8,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Kata Sifat & Imbuhan pe-',
    stimulusTitle: 'Stimulus Tata Bahasa: Pembentukan Kata dengan Imbuhan Awalan pe-',
    stimulusText: 
      'Imbuhan awalan pe- berfungsi untuk menyatakan orang yang memiliki sifat tertentu. Dalam pembentukannya, awalan pe- dapat mengalami perubahan bunyi (asimilasi), misalnya: pe- + diam menjadi pendiam, pe- + sabar menjadi penyabar, dan pe- + maaf menjadi pemaaf. Penggunaan kata berimbuhan pe- sangat sering digunakan untuk mendeskripsikan watak tokoh dalam teks narasi.',
    stimulusType: 'tabel',
    question: 'Pembentukan kata berimbuhan awalan pe- yang tepat untuk kata dasar "bohong" dan "malas" adalah...',
    options: [
      { key: 'A', text: 'Penybohong dan pelmalas' },
      { key: 'B', text: 'Pembohong dan pemalas' },
      { key: 'C', text: 'Perbohong dan pengmalas' },
      { key: 'D', text: 'Pebohong dan penyimalas' }
    ],
    correctAnswer: 'B',
    explanation: 'Awalan pe- bila bertemu huruf b berubah menjadi pem- (pe- + bohong = pembohong), dan bila bertemu huruf m menjadi pe- (pe- + malas = pemalas).'
  },
  {
    id: 9,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Kata Sifat & Imbuhan pe-',
    stimulusTitle: 'Stimulus Tata Bahasa: Makna Imbuhan pe-',
    stimulusText: 
      'Ibu Guru di SDN Wanaraya mengingatkan para siswa: "Jadilah anak yang selalu berlapang dada dan jangan menyimpan amarah kepada teman." Beliau memuji Budi yang tidak membalas ejekan temannya dan langsung memberikan senyuman maaf.',
    stimulusType: 'dialog',
    question: 'Orang yang memiliki sifat suka memaafkan kesalahan orang lain disebut...',
    options: [
      { key: 'A', text: 'Pendiam' },
      { key: 'B', text: 'Penyabar' },
      { key: 'C', text: 'Pemaaf' },
      { key: 'D', text: 'Periang' }
    ],
    correctAnswer: 'C',
    explanation: 'Berasal dari pe- + maaf = pemaaf, yaitu orang yang rela dan mudah memaafkan kesalahan orang lain.'
  },

  // ==========================================
  // STIMULUS 4: KOSAKATA DAN TEKA-TEKI KATA SIFAT (BAB I Hal 10-11)
  // ==========================================
  {
    id: 10,
    level: 'Level 1 (C1: Mengingat)',
    topic: 'Kata Sifat & Imbuhan pe-',
    stimulusTitle: 'Stimulus Kamus: Pencarian Makna Kata Menurut Abjad',
    stimulusText: 
      'Dalam Kamus Besar Bahasa Indonesia (KBBI), kata disusun berdasarkan urutan abjad A sampai Z. Kata sifat digunakan untuk menggambarkan watak manusia atau keadaan benda. Beberapa kata sifat yang dipelajari siswa kelas 5 antara lain: cerdas (tajam pikiran), cerdik (banyak akal), jeli (tajam/awas penglihatan), jujur (tidak berbohong), serta mandiri (dapat mengerjakan sesuatu sendiri tanpa selalu bergantung pada orang lain).',
    stimulusType: 'narasi',
    question: 'Menurut kamus, kata sifat yang memiliki arti "banyak akal atau pandai mencari jalan keluar" adalah...',
    options: [
      { key: 'A', text: 'Jeli' },
      { key: 'B', text: 'Cerdik' },
      { key: 'C', text: 'Ramah' },
      { key: 'D', text: 'Rapi' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada materi Latihan Kosakata Bab I halaman 10, kata "cerdik" didefinisikan memiliki makna "banyak akal".'
  },
  {
    id: 11,
    level: 'Level 1 (C2: Memahami)',
    topic: 'Sinonim & Antonim',
    stimulusTitle: 'Stimulus Sinonim: Persamaan Makna Kata Sifat',
    stimulusText: 
      'Sinonim adalah persamaan makna kata. Mengetahui sinonim kata memperkaya tuturan bahasa kita. Contohnya: kata "pintar" bersinonim dengan "pandai", "rapi" bersinonim dengan "apik", "nakal" bersinonim dengan "badung", dan "lucu" bersinonim dengan "jenaka". Pemilihan kata yang tepat membuat tulisan deskripsi menjadi lebih variatif.',
    stimulusType: 'tabel',
    question: 'Pasangan kata di bawah ini yang merupakan pasangan sinonim (persamaan kata) yang benar adalah...',
    options: [
      { key: 'A', text: 'Supel = luwes' },
      { key: 'B', text: 'Rajin = malas' },
      { key: 'C', text: 'Angkuh = rendah hati' },
      { key: 'D', text: 'Hemat = boros' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai daftar latihan Bab I hal 15: supel artinya pandai bergaul/luwes (sinonim). Pilihan B, C, dan D merupakan pasangan antonim (lawan kata).'
  },
  {
    id: 12,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Sinonim & Antonim',
    stimulusTitle: 'Stimulus Antonim: Pasangan Lawan Kata Sifat',
    stimulusText: 
      'Antonim adalah perbedaan makna kata yang bermakna saling berlawanan. Memahami antonim membantu siswa dalam mendeskripsikan sifat-sifat yang kontras pada dua orang yang berbeda, seperti pada tokoh Rana dan Rani atau Darman dan Darmin.',
    stimulusType: 'narasi',
    question: 'Antonim yang tepat untuk kata sifat "optimistis" dan "hemat" secara berurutan adalah...',
    options: [
      { key: 'A', text: 'Dinamis dan pelit' },
      { key: 'B', text: 'Pesimistis dan boros' },
      { key: 'C', text: 'Pemarah dan kikir' },
      { key: 'D', text: 'Cerewet dan manja' }
    ],
    correctAnswer: 'B',
    explanation: 'Lawan kata (antonim) dari optimistis adalah pesimistis, dan lawan kata dari hemat adalah boros (Bab I hal 16).'
  },
  {
    id: 13,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Sinonim & Antonim',
    stimulusTitle: 'Stimulus Kalimat Rumpang: Melengkapi Kalimat Kata Sifat',
    stimulusText: 
      'Ayu adalah siswi teladan di kelas lima. Setiap hari ia selalu membawa bekal makanan sehat dari rumah dan tidak pernah menghambur-hamburkan uang jajannya. Ia rajin menabung di celengan ayam miliknya untuk membeli perlengkapan sekolah.',
    stimulusType: 'narasi',
    question: 'Berdasarkan kebiasaan Ayu pada kutipan di atas, kata sifat yang paling tepat menggambarkan karakter Ayu adalah...',
    options: [
      { key: 'A', text: 'Boros' },
      { key: 'B', text: 'Hemat' },
      { key: 'C', text: 'Pemarah' },
      { key: 'D', text: 'Cerewet' }
    ],
    correctAnswer: 'B',
    explanation: 'Kebiasaan membawa bekal dari rumah dan menyimpan uang jajan menunjukkan sifat anak yang hemat (Bab I hal 17 latihan nomor 6).'
  },

  // ==========================================
  // STIMULUS 5: CERITA DARMAN DAN DARMIN (BAB I Hal 13)
  // ==========================================
  {
    id: 14,
    level: 'Level 1 (C2: Memahami)',
    topic: 'Unsur Intrinsik & Majas',
    stimulusTitle: 'Stimulus Cerita: Darman dan Darmin (Cerita Rakyat Betawi)',
    stimulusText: 
      'Pak Salim mempunyai dua orang anak laki-laki bernama Darman dan Darmin. Sepeninggal istrinya, ia merawat anak-anaknya seorang diri. Darman senang bermain silat, namun ilmu silatnya disalahgunakan untuk berkelahi dan ia sering membolos sekolah. Sebaliknya, adiknya Darmin adalah anak yang saleh, rajin mengaji di surau, suka menolong tetangga miskin, dan pintar di sekolah sehingga dipercaya membantu pembukuan ayahnya. Pak Salim juga mengasuh keponakannya bernama Amini yang berwatak rajin seperti Darmin.',
    stimulusType: 'narasi',
    question: 'Sifat terpuji yang dimiliki oleh tokoh Darmin yang patut kita teladani adalah...',
    options: [
      { key: 'A', text: 'Suka berkelahi untuk menunjukkan kehebatan silat' },
      { key: 'B', text: 'Sering membolos sekolah bersama teman sebaya' },
      { key: 'C', text: 'Rajin mengaji, suka menolong tetangga, dan tekun belajar' },
      { key: 'D', text: 'Sombong karena berasal dari keluarga tuan tanah berada' }
    ],
    correctAnswer: 'C',
    explanation: 'Dalam teks dijelaskan bahwa Darmin rajin mengikuti pengajian, sering menolong tetangga yang kesusahan, dan pintar di sekolah.'
  },
  {
    id: 15,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Kalimat Majemuk Setara',
    stimulusTitle: 'Stimulus Kaidah Bahasa: Penggabungan Kalimat Majemuk Setara',
    stimulusText: 
      'Kalimat 1: "Radi menyukai sepak bola."\nKalimat 2: "Radi menyukai bulu tangkis."\nKedua kalimat tunggal tersebut memiliki subjek yang sama dan menyatakan penggabungan (penjumlahan/sejalan) hobi yang dimiliki seseorang.',
    stimulusType: 'dialog',
    question: 'Penggabungan kedua kalimat tunggal di atas menjadi kalimat majemuk setara sejalan yang paling tepat adalah...',
    options: [
      { key: 'A', text: 'Radi menyukai sepak bola, tetapi menyukai bulu tangkis.' },
      { key: 'B', text: 'Radi menyukai sepak bola dan bulu tangkis.' },
      { key: 'C', text: 'Radi menyukai sepak bola karena bulu tangkis.' },
      { key: 'D', text: 'Radi menyukai sepak bola sehingga bulu tangkis.' }
    ],
    correctAnswer: 'B',
    explanation: 'Hubungan penjumlahan/sejalan menggunakan kata penghubung "dan". Kalimat yang ringkas dan efektif adalah: "Radi menyukai sepak bola dan bulu tangkis."'
  },
  {
    id: 16,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Kalimat Majemuk Setara',
    stimulusTitle: 'Stimulus Kalimat Majemuk Sebab-Akibat',
    stimulusText: 
      'Perhatikan situasi berikut:\n"Yosa sering tidur hingga larut malam. Akibatnya pada pagi hari Yosa sering bangun kesiangan dan terlambat tiba di sekolah."',
    stimulusType: 'narasi',
    question: 'Kata hubung yang tepat untuk menggabungkan dua peristiwa sebab-akibat tersebut adalah...',
    options: [
      { key: 'A', text: 'Sehingga' },
      { key: 'B', text: 'Tetapi' },
      { key: 'C', text: 'Sedangkan' },
      { key: 'D', text: 'Atau' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata penghubung "sehingga" atau "karena" digunakan untuk menyatakan hubungan sebab dan akibat: "Yosa sering tidur hingga larut malam sehingga ia sering bangun kesiangan."'
  },

  // ==========================================
  // STIMULUS 6: TEKS FABEL KELINCI KECIL DAN BURUNG PIPIT (BAB II Hal 28-30)
  // ==========================================
  {
    id: 17,
    level: 'Level 1 (C1: Mengingat)',
    topic: 'Unsur Intrinsik & Majas',
    stimulusTitle: 'Stimulus Fabel: Kelinci Kecil dan Burung Pipit (Karya Desri M. Putri)',
    stimulusText: 
      '“Aduh, sakit!” Suara Kelinci Kecil menggelegar di sudut kebun Pak Rusa. Wajahnya seputih kapas dan titik-titik air mulai membanjiri matanya karena kakinya terantuk batu saat hendak mengambil wortel tanpa izin. Burung Pipit yang bertengger di pohon mengingatkannya bahwa Pak Singa telah memerintahkan semua hewan tinggal di sarang karena ada wabah penyakit menular. Burung Pipit menasihati Kelinci Kecil agar meminta izin kepada pemilik kebun dan segera pulang untuk meminta maaf kepada ibunya.',
    stimulusType: 'narasi',
    question: 'Di manakah latar tempat terjadinya peristiwa terjatuhnya Kelinci Kecil pada cerita tersebut?',
    options: [
      { key: 'A', text: 'Di dalam sarang bawah tanah' },
      { key: 'B', text: 'Di sudut kebun Pak Rusa' },
      { key: 'C', text: 'Di tepi telaga air tawar' },
      { key: 'D', text: 'Di atas dahan pohon beringin' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada awal cerita disebutkan secara tersurat: "Suara Kelinci Kecil menggelegar di sudut kebun Pak Rusa."'
  },
  {
    id: 18,
    level: 'Level 1 (C2: Memahami)',
    topic: 'Unsur Intrinsik & Majas',
    stimulusTitle: 'Stimulus Fabel: Kelinci Kecil dan Burung Pipit (Karya Desri M. Putri)',
    stimulusText: 
      '“Aduh, sakit!” Suara Kelinci Kecil menggelegar di sudut kebun Pak Rusa. Wajahnya seputih kapas dan titik-titik air mulai membanjiri matanya karena kakinya terantuk batu saat hendak mengambil wortel tanpa izin. Burung Pipit yang bertengger di pohon mengingatkannya bahwa Pak Singa telah memerintahkan semua hewan tinggal di sarang karena ada wabah penyakit menular. Burung Pipit menasihati Kelinci Kecil agar meminta izin kepada pemilik kebun dan segera pulang untuk meminta maaf kepada ibunya.',
    stimulusType: 'narasi',
    question: 'Amanat atau pesan moral utama yang dapat dipetik dari fabel di atas adalah...',
    options: [
      { key: 'A', text: 'Bolehlah keluar sarang asalkan tidak ketahuan raja hutan' },
      { key: 'B', text: 'Kita harus mematuhi nasihat orang tua dan meminta izin sebelum mengambil milik orang lain' },
      { key: 'C', text: 'Mengambil makanan tanpa izin dibenarkan jika sedang kelaparan' },
      { key: 'D', text: 'Berolahraga di kebun orang lain lebih menyenangkan daripada di rumah' }
    ],
    correctAnswer: 'B',
    explanation: 'Amanat cerita adalah pentingnya mematuhi anjuran orang tua (tidak berkeliaran saat bahaya/wabah) serta selalu meminta izin pemilik sebelum mengambil sesuatu.'
  },
  {
    id: 19,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Unsur Intrinsik & Majas',
    stimulusTitle: 'Stimulus Majas: Pengenalan Gaya Bahasa (Bab II Hal 32-33)',
    stimulusText: 
      'Majas adalah gaya bahasa dengan makna kiasan. Tiga majas yang dipelajari siswa kelas 5 SD:\n1. Metafora: mewakili simbol/makna kiasan langsung (contoh: buku adalah jendela dunia, si jago merah = api).\n2. Personifikasi: mengumpamakan benda mati bersikap seperti manusia hidup (contoh: angin berbisik lembut, daun melambai-lambai memanggilku).\n3. Hiperbola: ungkapan berlebihan melebihi kenyataan (contoh: suaranya menggelegar membelah angkasa, berlari secepat kilat).',
    stimulusType: 'tabel',
    question: 'Perhatikan kalimat: "Aku melihat daun-daun tanaman wortel itu melambai-lambai memanggilku." Kalimat tersebut menggunakan majas...',
    options: [
      { key: 'A', text: 'Personifikasi' },
      { key: 'B', text: 'Metafora' },
      { key: 'C', text: 'Hiperbola' },
      { key: 'D', text: 'Litotes' }
    ],
    correctAnswer: 'A',
    explanation: 'Majas personifikasi menyematkan sifat atau tingkah laku manusia (melambai-lambai memanggil) kepada benda yang bukan manusia (daun wortel).'
  },
  {
    id: 20,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Unsur Intrinsik & Majas',
    stimulusTitle: 'Stimulus Majas: Pengenalan Gaya Bahasa (Bab II Hal 32-33)',
    stimulusText: 
      'Berikut ini adalah beberapa kutipan kalimat bermajas:\n(1) Rumah kayu di ujung gang ludes dilalap si jago merah.\n(2) Pelari itu melesat secepat kilat meninggalkan lawan-lawannya.\n(3) Titik-titik air mulai membanjiri kedua pelupuk matanya.\n(4) Mentari pagi menyapa ramah dari balik jendela kamar.',
    stimulusType: 'narasi',
    question: 'Kalimat nomor (2) dan (3) yang menggunakan ungkapan berlebihan secara nyata termasuk jenis majas...',
    options: [
      { key: 'A', text: 'Metafora' },
      { key: 'B', text: 'Personifikasi' },
      { key: 'C', text: 'Hiperbola' },
      { key: 'D', text: 'Asosiasi' }
    ],
    correctAnswer: 'C',
    explanation: 'Ungkapan "melesat secepat kilat" dan "membanjiri kedua pelupuk matanya" menggunakan kata bermakna berlebihan untuk mempertegas suasana, yaitu majas hiperbola.'
  },
  {
    id: 21,
    level: 'Level 1 (C2: Memahami)',
    topic: 'Unsur Intrinsik & Majas',
    stimulusTitle: 'Stimulus Makna Kiasan: Ungkapan Metafora',
    stimulusText: 
      'Dalam kehidupan sehari-hari dan bacaan sastra, kita sering mendengar ungkapan kiasan seperti: "Ali adalah anak emas di keluarganya karena ia anak tunggal yang berbudi pekerti luhur."',
    stimulusType: 'dialog',
    question: 'Makna kiasan dari ungkapan "anak emas" pada kalimat di atas adalah...',
    options: [
      { key: 'A', text: 'Anak yang memakai perhiasan emas berkilau' },
      { key: 'B', text: 'Anak yang paling disayang atau kesayangan' },
      { key: 'C', text: 'Anak yang dilahirkan dari keluarga penambang emas' },
      { key: 'D', text: 'Anak yang memiliki warna kulit kuning langsat' }
    ],
    correctAnswer: 'B',
    explanation: 'Ungkapan metafora "anak emas" bermakna anak kesayangan (Buku Siswa Bab II hal 33 latihan nomor 5).'
  },

  // ==========================================
  // STIMULUS 7: KALIMAT LANGSUNG DAN TIDAK LANGSUNG (BAB II Hal 34-35)
  // ==========================================
  {
    id: 22,
    level: 'Level 1 (C1: Mengingat)',
    topic: 'Kalimat Langsung & Tidak Langsung',
    stimulusTitle: 'Stimulus Aturan Penulisan: Ciri-Ciri Kalimat Langsung',
    stimulusText: 
      'Kalimat langsung adalah kalimat yang diucapkan secara langsung oleh penutur kepada orang yang dituju. Ciri khas utama kalimat langsung dalam teks cerita adalah diapit oleh tanda petik dua ("..."), intonasi bagian kutipan lebih tinggi, serta huruf awal kalimat di dalam tanda petik menggunakan huruf kapital.',
    stimulusType: 'narasi',
    question: 'Tanda baca utama yang wajib digunakan untuk mengapit kutipan pada kalimat langsung adalah...',
    options: [
      { key: 'A', text: 'Tanda kurung siku [ ... ]' },
      { key: 'B', text: 'Tanda petik dua (" ... ")' },
      { key: 'C', text: 'Tanda garis miring ( / ... / )' },
      { key: 'D', text: 'Tanda hubung strip ( - ... - )' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat langsung wajib diapit oleh tanda baca petik ganda/dua ("...").'
  },
  {
    id: 23,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Kalimat Langsung & Tidak Langsung',
    stimulusTitle: 'Stimulus Perubahan Bentuk Kalimat',
    stimulusText: 
      'Perhatikan kalimat langsung berikut ini:\nBudi mengatakan, “Baju yang kupakai ini hadiah ulang tahunku.”\nKetika diubah menjadi kalimat tidak langsung, kata ganti "kupakai / -ku" (orang pertama) berubah menjadi kata ganti orang ketiga, dan tanda petik dihilangkan.',
    stimulusType: 'dialog',
    question: 'Bentuk kalimat tidak langsung yang paling tepat dari kalimat tersebut adalah...',
    options: [
      { key: 'A', text: 'Budi mengatakan bahwa baju yang kaupakai itu hadiah ulang tahunnya.' },
      { key: 'B', text: 'Budi mengatakan bahwa baju yang dipakainya adalah hadiah ulang tahunnya.' },
      { key: 'C', text: 'Budi berkata: "Baju itu adalah hadiah ulang tahun kawan-kawan."' },
      { key: 'D', text: 'Budi mengatakan bahwa kami semua memakai hadiah ulang tahun.' }
    ],
    correctAnswer: 'B',
    explanation: 'Perubahan kalimat langsung ke tidak langsung: hilangkan tanda petik, tambahkan kata "bahwa", dan kata ganti "kupakai/ulang tahunku" berubah menjadi "dipakainya/ulang tahunnya" (Bab II hal 35).'
  },

  // ==========================================
  // STIMULUS 8: TEKS FIKSI VS NONFIKSI (BAB II Hal 38-39 & 44-45)
  // ==========================================
  {
    id: 24,
    level: 'Level 1 (C2: Memahami)',
    topic: 'Teks Fiksi, Nonfiksi & Bagian Buku',
    stimulusTitle: 'Stimulus Perbandingan: Karakteristik Teks Fiksi dan Teks Nonfiksi',
    stimulusText: 
      'Teks fiksi memuat cerita rekaan hasil daya imajinasi pengarang yang bertujuan menghibur pembaca, memiliki alur, tokoh, dan pesan moral, contohnya: dongeng, fabel, cerpen, novel, dan komik. Sebaliknya, teks nonfiksi menyajikan informasi berdasarkan fakta, hasil penelitian ilmiah, atau data nyata untuk menambah wawasan pembaca, contohnya: buku pelajaran, ensiklopedia, kamus, dan biografi tokoh pahlawan.',
    stimulusType: 'tabel',
    question: 'Di antara pilihan buku berikut, manakah yang seluruhnya tergolong ke dalam buku FIKSI?',
    options: [
      { key: 'A', text: 'Kamus Besar Bahasa Indonesia dan Buku Biografi Sultan Hasanuddin' },
      { key: 'B', text: 'Dongeng Si Kancil, Cerpen Sahabat Sejati, dan Novel Anak Petualang' },
      { key: 'C', text: 'Ensiklopedia Tata Surya dan Buku Pelajaran IPA' },
      { key: 'D', text: 'Atlas Geografi Indonesia dan Buku Panduan Pertanian Padi' }
    ],
    correctAnswer: 'B',
    explanation: 'Dongeng, cerpen, dan novel merupakan karya sastra imajinatif (fiksi). Sedangkan KBBI, ensiklopedia, atlas, dan biografi merupakan buku nonfiksi.'
  },
  {
    id: 25,
    level: 'Level 1 (C1: Mengingat)',
    topic: 'Teks Fiksi, Nonfiksi & Bagian Buku',
    stimulusTitle: 'Stimulus Teks Nonfiksi: Biografi Sultan Hasanuddin (Bab II Hal 45)',
    stimulusText: 
      'Sultan Hasanuddin adalah pahlawan nasional dari Gowa, Sulawesi Selatan. Beliau memimpin perlawanan rakyat menentang monopoli perdagangan rempah-rempah Kompeni Belanda (VOC) di Indonesia Timur pada abad ke-17. Karena kegigihan dan keberaniannya yang tak pernah gentar, pihak VOC menjulukinya dengan sebutan Ayam Jantan dari Timur.',
    stimulusType: 'narasi',
    question: 'Julukan kehormatan yang diberikan pihak VOC kepada Sultan Hasanuddin karena keberaniannya adalah...',
    options: [
      { key: 'A', text: 'Elang Pengelana Samudra' },
      { key: 'B', text: 'Ayam Jantan dari Timur' },
      { key: 'C', text: 'Singa Padang Pasir' },
      { key: 'D', text: 'Pangeran Penakluk Benteng' }
    ],
    correctAnswer: 'B',
    explanation: 'Dalam teks biografi nonfiksi buku halaman 45 tercantum jelas: "Perlawanan gigih dan berani membuat VOC menjulukinya Ayam Jantan dari Timur."'
  },
  {
    id: 26,
    level: 'Level 1 (C1: Mengingat)',
    topic: 'Teks Fiksi, Nonfiksi & Bagian Buku',
    stimulusTitle: 'Stimulus Anatomi Buku: Mengenal Bagian-Bagian Buku (Bab II Hal 43)',
    stimulusText: 
      'Sebuah buku cetak terdiri dari beberapa bagian fisik penting:\n1. Sampul Depan: memuat judul buku, nama penulis/pengarang, ilustrator, dan ilustrasi sampul.\n2. Punggung Buku: bagian tepi penjilidan yang menghubungkan sampul depan dan belakang.\n3. Sampul Belakang: memuat sinopsis ringkas, nomor ISBN, dan barcode buku.\n4. Halaman Dalam: memuat halaman judul, kata pengantar, daftar isi, isi bab teks, dan indeks.',
    stimulusType: 'narasi',
    question: 'Bagian buku yang berfungsi memuat judul buku, nama pengarang, dan gambar ilustrasi utama adalah...',
    options: [
      { key: 'A', text: 'Punggung buku' },
      { key: 'B', text: 'Sampul depan (cover depan)' },
      { key: 'C', text: 'Daftar pustaka' },
      { key: 'D', text: 'Glosarium' }
    ],
    correctAnswer: 'B',
    explanation: 'Sampul depan (front cover) merupakan bagian luar muka yang menampilkan judul buku, gambar ilustrasi menarik, serta nama pengarang/penulis.'
  },
  {
    id: 27,
    level: 'Level 1 (C2: Memahami)',
    topic: 'Teks Fiksi, Nonfiksi & Bagian Buku',
    stimulusTitle: 'Stimulus Bagian Buku: Kegunaan Daftar Isi',
    stimulusText: 
      'Saat Dafa membuka buku pelajaran Bahasa Indonesia di perpustakaan sekolahnya di Wanaraya Barito Kuala, ia ingin langsung menemukan halaman yang memuat materi "Majas dan Gaya Bahasa" tanpa harus membalik lembar buku satu per satu dari awal.',
    stimulusType: 'dialog',
    question: 'Bagian buku yang paling tepat dilihat oleh Dafa untuk mencari nomor halaman suatu bab secara cepat adalah...',
    options: [
      { key: 'A', text: 'Daftar isi' },
      { key: 'B', text: 'Kata pengantar' },
      { key: 'C', text: 'Sampul belakang' },
      { key: 'D', text: 'Biodata penulis' }
    ],
    correctAnswer: 'A',
    explanation: 'Daftar isi menyajikan susunan judul bab beserta nomor halaman sehingga pembaca dapat menemukan materi dengan cepat.'
  },

  // ==========================================
  // STIMULUS 9: INFOGRAFIS PROSES MEMBUAT BUKU (BAB II Hal 41-42)
  // ==========================================
  {
    id: 28,
    level: 'Level 1 (C1: Mengingat)',
    topic: 'Teks Fiksi, Nonfiksi & Bagian Buku',
    stimulusTitle: 'Stimulus Infografis: Alur Pembuatan Buku (Bab II Hal 41)',
    stimulusText: 
      'Proses pembuatan buku dimulai dari ide penulis yang dituangkan dalam bentuk naskah tulisan. Naskah tersebut kemudian dikirim kepada pihak penerbit dan diperiksa serta disunting oleh editor. Setelah naskah selesai diperbaiki, ilustrator membuat gambar-gambar menarik, lalu penata grafis (desainer grafis) mengatur tata letak tulisan dan gambar. Setelah tata letak selesai, file dikirim ke percetakan untuk dicetak banyak sebelum didistribusikan ke toko buku dan perpustakaan.',
    stimulusType: 'infografis',
    stimulusImage: BANNER_IMAGE,
    question: 'Orang yang bertugas memeriksa, memperbaiki ejaan, dan menyunting naskah tulisan penulis sebelum dibukukan disebut...',
    options: [
      { key: 'A', text: 'Ilustrator' },
      { key: 'B', text: 'Editor' },
      { key: 'C', text: 'Distributor' },
      { key: 'D', text: 'Pustakawan' }
    ],
    correctAnswer: 'B',
    explanation: 'Buku Siswa Bab II hal 41-42: "Naskah cerita akan diperiksa dan diperbaiki terlebih dahulu oleh Editor."'
  },
  {
    id: 29,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Teks Fiksi, Nonfiksi & Bagian Buku',
    stimulusTitle: 'Stimulus Infografis: Peran Profesi Perbukuan',
    stimulusText: 
      'Di sebuah penerbit buku anak yang mencetak buku dongeng flora Barito Kuala, seorang staf sedang sibuk menggambar sketsa karakter bekantan lucu dan mendesain gambar sampul yang berwarna ceria agar menarik minat baca anak-anak SD.',
    stimulusType: 'narasi',
    question: 'Berdasarkan tugas yang dilakukannya, profesi yang sedang dijalankan oleh staf tersebut adalah...',
    options: [
      { key: 'A', text: 'Penulis naskah' },
      { key: 'B', text: 'Ilustrator' },
      { key: 'C', text: 'Kasir toko buku' },
      { key: 'D', text: 'Pustakawan' }
    ],
    correctAnswer: 'B',
    explanation: 'Ilustrator adalah orang yang bertugas membuat gambar, lukisan, atau sketsa visual untuk melengkapi cerita dalam buku.'
  },
  {
    id: 30,
    level: 'Level 2 (C3: Mengaplikasikan)',
    topic: 'Literasi Wanaraya Barito Kuala',
    stimulusTitle: 'Stimulus Sintesis: Refleksi Nilai Belajar Bahasa Indonesia',
    stimulusText: 
      'Kalian telah mempelajari materi keunikan karakter diri, menghargai sesama teman, memahami buku fiksi dan nonfiksi, serta mengamati kegiatan gemar membaca di daerah Kecamatan Wanaraya, Kabupaten Barito Kuala. Membaca buku secara rajin akan memperluas wawasan dan membentuk budi pekerti yang luhur.',
    stimulusType: 'narasi',
    question: 'Sikap yang mencerminkan pemanfaatan ilmu membaca dan berbahasa yang baik dalam kehidupan sehari-hari di sekolah adalah...',
    options: [
      { key: 'A', text: 'Mengejek teman yang memiliki kekurangan fisik saat berbicara' },
      { key: 'B', text: 'Menggunakan tutur kata yang santun, jujur, serta saling tolong-menolong' },
      { key: 'C', text: 'Menyimpan buku perpustakaan di rumah tanpa mengembalikannya' },
      { key: 'D', text: 'Hanya mau berteman dengan kawan yang kaya dan sepaham saja' }
    ],
    correctAnswer: 'B',
    explanation: 'Tujuan pembelajaran Bahasa Indonesia adalah menumbuhkan budi pekerti yang baik, bertutur kata sopan, bersikap jujur, ramah, dan saling menghargai keberagaman kawan.'
  }
];
