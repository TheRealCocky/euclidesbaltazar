"use client"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, Mail } from "lucide-react"
import {SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from "react-icons/fa"
import { motion } from "motion/react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function HomePage() {
    const { lang } = useLanguage()

    const t = {
        en: {
            hi: "Hi! I'm",
            role: "Full-Stack Developer",
            contact: "Get in Touch",
            cv: "Download CV",
            description: "Crafting high-performance applications with modern cloud architectures."
        },
        pt: {
            hi: "Olá! Eu sou o",
            role: "Desenvolvedor Full-Stack",
            contact: "Entrar em contacto",
            cv: "Baixar CV",
            description: "Construindo aplicações de alta performance com arquiteturas cloud modernas."
        }
    }

    const content = lang === 'en' ? t.en : t.pt

    return (
        <div className="flex flex-col min-h-screen">
            {/* O MAIN com flex-1 é que garante o espaçamento correto entre Nav e Footer */}
            <main className="flex-1 flex items-center justify-center px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl w-full text-center md:text-left flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Foto */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <Avatar className="w-40 h-40 md:w-56 md:h-56 border-2 border-zinc-200 dark:border-zinc-800 relative bg-white dark:bg-zinc-950 shadow-2xl">
                            <AvatarImage
                                src="https://res.cloudinary.com/dwp3wuum6/image/upload/v1771179613/F1C45213-D6C5-4448-BA70-9A89ED5BE735_1_201_a_rvnseu.jpg"
                                alt="Euclides Baltazar"
                                className="object-cover"
                            />
                            <AvatarFallback className="text-4xl font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-400">EB</AvatarFallback>
                        </Avatar>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-zinc-500 font-medium text-lg">
                                {content.hi}
                            </motion.p>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 leading-tight">
                                Euclides Alimador <br />
                                <span className="text-zinc-400 dark:text-zinc-500">Baltazar Isaac</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl">
                                {content.role} <span className="mx-2 text-zinc-300">|</span>
                                <span className="text-sm md:text-lg font-mono text-zinc-500"> React • Next.js • Node.js • NestJS • TypeScript • MongoDB • PostgreSQL • Prisma • AWS</span>
                            </p>
                        </div>

                        {/* Botões */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <Button asChild size="lg" className="rounded-full px-8 bg-zinc-900 dark:bg-zinc-50 hover:scale-105 transition-transform text-white dark:text-zinc-900">
                                <Link href="/contact">
                                    <Mail className="mr-2 h-4 w-4" /> {content.contact}
                                </Link>
                            </Button>

                            <Button variant="outline" size="lg" asChild className="rounded-full px-8 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all font-medium border-zinc-200 dark:border-zinc-800">
                                <a href="/storage/resume/resume.pdf" download="Euclides_Baltazar_CV.pdf">
                                    <Download className="mr-2 h-4 w-4" /> {content.cv}
                                </a>
                            </Button>
                        </div>

                        {/* Redes Sociais */}
                        <div className="flex justify-center md:justify-start gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                            <a href="https://www.linkedin.com/in/euclides-baltazar-456331366/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#0077b5] transition-all transform hover:scale-110">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/TheRealCocky" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all transform hover:scale-110">
                                <SiGithub size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}
