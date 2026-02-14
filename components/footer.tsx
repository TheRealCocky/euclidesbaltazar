"use client"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export function Footer() {
    const { lang } = useLanguage()
    const year = new Date().getFullYear()

    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 mt-20">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Lado Esquerdo: Info */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="font-bold text-lg tracking-tighter">
                            Euclides Baltazar<span className="text-zinc-400">.</span>
                        </Link>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                            © {year} — Luanda, Angola. {lang === 'en' ? 'Built with Next.js' : 'Feito com Next.js'}
                        </p>
                    </div>

                    {/* Lado Direito: Links Rápidos & Redes */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                {lang === 'en' ? 'About' : 'Sobre'}
                            </Link>
                            <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                {lang === 'en' ? 'Projects' : 'Projetos'}
                            </Link>
                            <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                {lang === 'en' ? 'Contact' : 'Contacto'}
                            </Link>
                        </div>


                    </div>

                </div>
            </div>
        </footer>
    )
}