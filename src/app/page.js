"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Aplikasi Catatan Harian",
    description:
      "Web sederhana untuk mencatat tugas harian dan ide cepat dengan antarmuka bersih.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "#proyek",
  },
  {
    id: 2,
    title: "Landing Page Kedai Kopi",
    description:
      "Halaman promosi produk kopi lokal yang responsif di perangkat seluler maupun desktop.",
    tech: ["React", "Tailwind CSS"],
    link: "#proyek",
  },
  {
    id: 3,
    title: "Kalkulator Anggaran Bulanan",
    description:
      "Alat bantu menghitung pemasukan dan pengeluaran bulanan secara langsung.",
    tech: ["JavaScript", "Next.js"],
    link: "#proyek",
  },
];

export default function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // Mencegah halaman reload otomatis saat form dikirim
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* 1. Bagian Hero */}
        <section className="pt-8 space-y-5">
          <p className="text-sm font-medium text-emerald-400">
            Portofolio Web Developer Pemula
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Halo, saya <span className="text-emerald-400">[Nama Kamu]</span>.
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Saya sedang belajar membangun aplikasi web modern menggunakan React,
            Next.js, dan Supabase. Fokus saya membuat tampilan yang rapi,
            cepat, dan mudah digunakan.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="#proyek"
              className="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition"
            >
              Lihat Proyek
            </a>
            <a
              href="#kontak"
              className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-900 transition"
            >
              Hubungi Saya
            </a>
          </div>
        </section>

        {/* 2. Bagian Tentang Saya */}
        <section
          id="tentang"
          className="space-y-4 border-t border-slate-800 pt-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Tentang Saya
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            Saya memulai perjalanan pemrograman dari nol dan terus berlatih
            membangun proyek nyata sedikit demi sedikit. Bagi saya, cara paling
            efektif untuk paham adalah langsung mencoba, membaca pesan error,
            dan memperbaiki kode hingga berjalan dengan baik.
          </p>
        </section>

        {/* 3. Bagian Kartu Proyek Statis */}
        <section
          id="proyek"
          className="space-y-6 border-t border-slate-800 pt-12"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Proyek Pilihan
            </h2>
            <p className="text-slate-400 mt-1">
              Beberapa latihan dan proyek awal yang sedang atau sudah saya buat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-emerald-500/50 transition"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-emerald-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Bagian Kontak Sederhana */}
        <section
          id="kontak"
          className="space-y-6 border-t border-slate-800 pt-12"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Kontak
            </h2>
            <p className="text-slate-400 mt-1">
              Punya pertanyaan, saran belajar, atau ingin berdiskusi? Kirim
              pesan lewat formulir di bawah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Informasi Kontak Langsung */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Jalur Langsung
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Kamu juga bisa menghubungi saya langsung melalui email atau
                profil sosial media.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-slate-300">
                  <span className="text-slate-400">Email:</span>{" "}
                  <a
                    href="mailto:emailkamu@contoh.com"
                    className="text-emerald-400 hover:underline"
                  >
                    emailkamu@contoh.com
                  </a>
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400">GitHub:</span>{" "}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    github.com/username-kamu
                  </a>
                </p>
              </div>
            </div>

            {/* Formulir Pesan */}
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama kamu"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="kamu@email.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesanmu di sini..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition cursor-pointer"
              >
                Kirim Pesan
              </button>

              {submitted && (
                <p className="text-sm text-emerald-400 pt-1">
                  Terima kasih! Pesanmu sudah tercatat di formulir (belum
                  tersimpan ke database).
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}