import "./globals.css";

export const metadata = {
  title: "Portofolio Saya | Web Developer Pemula",
  description: "Website portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased">
        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
          <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <a
              href="#"
              className="font-bold text-lg tracking-tight text-white hover:text-emerald-400 transition"
            >
              [Nama Kamu]<span className="text-emerald-400">.</span>
            </a>

            <div className="flex items-center gap-6 text-sm text-slate-300">
              <a href="#tentang" className="hover:text-emerald-400 transition">
                Tentang
              </a>
              <a href="#proyek" className="hover:text-emerald-400 transition">
                Proyek
              </a>
            </div>
          </nav>
        </header>

        {/* Isi Halaman Utama */}
        <div className="flex-1">{children}</div>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 py-8">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} [Nama Kamu]. Dibuat dengan Next.js.</p>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}