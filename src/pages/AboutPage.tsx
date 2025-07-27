import React from 'react';
import { Award, BookOpen, Users, Target, } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary-800 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Tentang SD N Pakuncen</h1>
            <p className="text-lg md:text-xl text-primary-100">
              Kami berkomitmen untuk memberikan pendidikan berkualitas yang membentuk karakter dan mengembangkan potensi setiap siswa.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
  <div className="container-narrow">
    {/* Ganti 'items-center' menjadi 'items-start' di sini */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Vision */}
      <div>
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
            <Target className="h-5 w-5 text-primary-700" />
          </div>
          <h2 className="ml-3 text-2xl font-bold text-gray-900">Visi</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Terwujudnya siswa berprestasi dan berbudi pekerti luhur berdasarkan iman dan taqwa, mandiri serta dapat menguasai imtaq dan iptek"
        </p>
      </div>

      {/* Mission */}
      <div>
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-secondary-700" />
          </div>
          <h2 className="ml-3 text-2xl font-bold text-gray-900">Misi</h2>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="h-5 w-5 text-secondary-600 mr-2">•</span>
            <span>Meningkatkan keimanan dan ketakwaan kepada Tuhan Yang Maha Esa</span>
          </li>
          <li className="flex items-start">
            <span className="h-5 w-5 text-secondary-600 mr-2">•</span>
            <span>Melaksanakan pembelajaran dan bimbingan secara aktif</span>
          </li>
          <li className="flex items-start">
            <span className="h-5 w-5 text-secondary-600 mr-2">•</span>
            <span>Membina dan mengembangkan minat dan bakat untuk meraih prestasi</span>
          </li>
          <li className="flex items-start">
            <span className="h-5 w-5 text-secondary-600 mr-2">•</span>
            <span>Membina dan mengembangkan budi pekerti luhur serta budaya bangsa menuju bangsa yang santun</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sejarah Sekolah</h2>
        </div>
        <div className="container-narrow">
            <div className="text-justify mb-12">
              <p className="text-gray-600 max-w-3xl mx-auto">
                SD NEGERI PAKUNCEN merupakan salah satu sekolah jenjang SD berstatus Negeri yang berada di wilayah Kec. Selomerto, Kab. Wonosobo, Jawa Tengah. SD NEGERI PAKUNCEN didirikan pada tanggal 24 Januari 2007 dengan Nomor SK Pendirian 420/060/2003 yang berada dalam naungan Kementerian Pendidikan dan Kebudayaan. Dalam kegiatan pembelajaran, sekolah yang memiliki 138 siswa ini dibimbing oleh 8 guru yang profesional di bidangnya. Kepala Sekolah SD NEGERI PAKUNCEN saat ini adalah Sunarmi. Operator yang bertanggung jawab adalah Tri Ari Setyaningsih.
                <br /><br />
                Dengan adanya keberadaan SD NEGERI PAKUNCEN, diharapkan dapat memberikan kontribusi dalam mencerdaskan anak bangsa di wilayah Kec. Selomerto, Kab. Wonosobo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School values */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
            <p className="text-primary-100 max-w-3xl mx-auto">
              Prinsip-prinsip yang menjadi landasan dalam setiap kegiatan dan program sekolah kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-primary-800/50 rounded-lg p-6 text-center">
              <div className="h-14 w-14 rounded-full bg-primary-700 flex items-center justify-center mx-auto mb-4">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integritas</h3>
              <p className="text-primary-100">
                Kejujuran dan konsistensi dalam setiap tindakan dan keputusan
              </p>
            </div>

            <div className="bg-primary-800/50 rounded-lg p-6 text-center">
              <div className="h-14 w-14 rounded-full bg-primary-700 flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kerjasama</h3>
              <p className="text-primary-100">
                Membangun sinergi antara sekolah, orang tua, dan masyarakat
              </p>
            </div>

            <div className="bg-primary-800/50 rounded-lg p-6 text-center">
              <div className="h-14 w-14 rounded-full bg-primary-700 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kreatifitas</h3>
              <p className="text-primary-100">
                Mendorong pemikiran inovatif dan pengembangan ide-ide baru
              </p>
            </div>

            <div className="bg-primary-800/50 rounded-lg p-6 text-center">
              <div className="h-14 w-14 rounded-full bg-primary-700 flex items-center justify-center mx-auto mb-4">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Keunggulan</h3>
              <p className="text-primary-100">
                Berusaha mencapai standar tertinggi dalam setiap aspek pendidikan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Struktur Organisasi</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tim pengelola yang bertanggung jawab atas kemajuan dan perkembangan SD NEGERI PAKUNCEN
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Principal */}
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-primary-100 text-primary-800 text-4xl font-bold">
                  HM
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Hallay Megasari, S.Pd.SD</h3>
              <p className="text-primary-600 font-medium">Kepala Sekolah</p>
              <p className="mt-2 text-gray-600 text-sm">
                Memimpin dan mengarahkan seluruh kegiatan sekolah sesuai dengan visi dan misi.
              </p>
            </div>

            {/* Vice Principal */}
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-secondary-100 text-secondary-800 text-4xl font-bold">
                  UR
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Udin Rahmat, S.Ag.</h3>
              <p className="text-secondary-600 font-medium">Komite Sekolah</p>
              <p className="mt-2 text-gray-600 text-sm">
                Memberikan dukungan, saran, dan pertimbangan dalam perumusan serta pelaksanaan kebijakan sekolah demi peningkatan mutu pendidikan.
              </p>
            </div>

            {/* Admin */}
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-accent-100 text-accent-800 text-4xl font-bold">
                  W
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Windarti, S.Pust, S.Pd</h3>
              <p className="text-accent-600 font-medium">Pustakawan</p>
              <p className="mt-2 text-gray-600 text-sm">
                Mengelola perpustakaan dan menyediakan bahan bacaan untuk mendukung proses pembelajaran siswa.
              </p>
            </div>

            {/* Curriculum */}
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-primary-100 text-primary-800 text-4xl font-bold">
                  A
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Asmanah, S.Pd.SD.</h3>
              <p className="text-primary-600 font-medium">Guru Kelas 1</p>
              <p className="mt-2 text-gray-600 text-sm">
                Merencanakan dan melaksanakan pembelajaran sesuai kurikulum untuk membentuk kompetensi siswa.
              </p>
            </div>

            {/* Student Affairs */}
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-secondary-100 text-secondary-800 text-4xl font-bold">
                  RYL
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Resti Yunita Lestari, S.Pd.</h3>
              <p className="text-secondary-600 font-medium">Guru Kelas 2</p>
              <p className="mt-2 text-gray-600 text-sm">
                Merencanakan dan melaksanakan pembelajaran sesuai kurikulum untuk membentuk kompetensi siswa.
              </p>
            </div>

            {/* Facilities */}
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-accent-100 text-accent-800 text-4xl font-bold">
                  MA
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Mutawasilatul Afikah, S.Pd</h3>
              <p className="text-accent-600 font-medium">Guru Kelas 3</p>
              <p className="mt-2 text-gray-600 text-sm">
                Merencanakan dan melaksanakan pembelajaran sesuai kurikulum untuk membentuk kompetensi siswa.
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-primary-100 text-primary-800 text-4xl font-bold">
                  M
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Mufid, S.Pd</h3>
              <p className="text-primary-600 font-medium">Guru Kelas 4</p>
              <p className="mt-2 text-gray-600 text-sm">
                Merencanakan dan melaksanakan pembelajaran sesuai kurikulum untuk membentuk kompetensi siswa.
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-secondary-100 text-secondary-800 text-4xl font-bold">
                  TW
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Tri Riwayati, S.Pd</h3>
              <p className="text-secondary-600 font-medium">Guru Kelas 5</p>
              <p className="mt-2 text-gray-600 text-sm">
                Merencanakan dan melaksanakan pembelajaran sesuai kurikulum untuk membentuk kompetensi siswa.
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-accent-100 text-accent-800 text-4xl font-bold">
                  TDS
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Titik Dwi Sujarti, S.Pd</h3>
              <p className="text-accent-600 font-medium">Guru Kelas 6</p>
              <p className="mt-2 text-gray-600 text-sm">
                Merencanakan dan melaksanakan pembelajaran sesuai kurikulum untuk membentuk kompetensi siswa.
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-primary-100 text-primary-800 text-4xl font-bold">
                  WK
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Wiwik Kundari, S.Pd</h3>
              <p className="text-primary-600 font-medium">Guru Penjas</p>
              <p className="mt-2 text-gray-600 text-sm">
                Mengajarkan pendidikan jasmani, olahraga, dan kesehatan.
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-secondary-100 text-secondary-800 text-4xl font-bold">
                  MS
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Mujibatus Salamah, S.Pd.I</h3>
              <p className="text-secondary-600 font-medium">Guru PAI</p>
              <p className="mt-2 text-gray-600 text-sm">
                Mengajarkan Pendidikan Agama Islam sesuai kurikulum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;