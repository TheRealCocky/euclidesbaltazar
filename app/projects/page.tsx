"use client"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code2, Globe } from "lucide-react"
import {SiGithub } from '@icons-pack/react-simple-icons';
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ProjectsPage() {
    const { lang } = useLanguage()

    const projects = [
        {
            title: "AngoIA",
            tag: "AI & Fullstack",
            description: {
                en: "Fullstack AI expert on Angola powered by Gemini API, featuring authentication and usage plans.",
                pt: "Aplicação Fullstack de IA especializada em Angola via Gemini API, com autenticação e planos de uso."
            },
            image: "https://res.cloudinary.com/dwp3wuum6/image/upload/v1771098699/Screen_Shot_2026-02-14_at_20.51.04_epi69w.png", // Adiciona as fotos nesta rota
            tech: ["Next.js", "NestJS", "Gemini API", "MongoDB"],
            links: { github: "https://github.com/TheRealCocky/AngoIA", demo: "https://angoia.vercel.app/" }
        },
        {
            title: "Nonhande",
            tag: "Social Impact",
            description: {
                en: "Digital preservation platform for the Nhaneca-Humbe language.",
                pt: "Plataforma de preservação digital para a língua Nhaneca-Humbe."
            },
            image: "https://res.cloudinary.com/dwp3wuum6/image/upload/v1771098165/Screen_Shot_2026-02-14_at_20.41.59_ku9zqp.png",
            tech: ["Next.js", "NestJS", "MongoDB", "Tailwind"],
            links: { github: "https://github.com/TheRealCocky/nonhande-client", demo: "https://nonhande.vercel.app/" }
        },
        {
            title: "LeilaoApp",
            tag: "Real-time Auction",
            description: {
                en: "Real-time auction platform with Socket.io synchronization.",
                pt: "Plataforma de leilões em tempo real com sincronização via Socket.io."
            },
            image: "https://res.cloudinary.com/dwp3wuum6/image/upload/v1771098924/Screen_Shot_2026-02-14_at_20.54.52_tabzku.png",
            tech: ["Next.js", "NestJS", "Prisma", "Socket.io"],
            links: { github: "https://github.com/TheRealCocky/Leilao-client", demo: "https://leilaoapp.vercel.app/" }
        },
        {
            title: "StreamSentra",
            tag: "Video Streaming",
            description: {
                en: "Secure video management platform using Kafka and Cloudinary.",
                pt: "Gestão segura de streaming de vídeo com Kafka e Cloudinary."
            },
            image: "https://res.cloudinary.com/dwp3wuum6/image/upload/v1771099058/Screen_Shot_2026-02-14_at_20.56.53_bpkfkf.png",
            tech: ["NestJS", "Kafka", "Cloudinary", "Prisma"],
            links: { github: "https://github.com/TheRealCocky/stremaforge-client", demo: "https://streamsentra.vercel.app/" }
        },
        {
            title: "PalancaMedia",
            tag: "Education CMS",
            description: {
                en: "University multimedia platform for educational content management.",
                pt: "Plataforma multimédia universitária para gestão de conteúdos educativos."
            },
            image: "https://res.cloudinary.com/dwp3wuum6/image/upload/v1771099210/Screen_Shot_2026-02-14_at_20.59.39_s9zcjy.png",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            links: { github: "https://github.com/TheRealCocky/palancamedia", demo: "https://palancamedia-frontend.vercel.app/" }
        }
    ]

    return (
        <div className="max-w-6xl mx-auto py-20 px-6">
            <header className="mb-16 space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl italic">
                    {lang === 'en' ? 'Featured Work' : 'Trabalhos de Destaque'}
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl font-mono text-sm uppercase tracking-widest">
                    {lang === 'en' ? '// selected fullstack applications' : '// aplicações fullstack selecionadas'}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-none transition-all"
                    >
                        {/* Imagem do Projeto */}
                        <div className="relative h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Conteúdo */}
                        <div className="p-8 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1 block">
                                        {project.tag}
                                    </span>
                                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.links.github} target="_blank" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                        <SiGithub size={20} />
                                    </a>
                                    <a href={project.links.demo} target="_blank" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                        <Globe size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                                {lang === 'en' ? project.description.en : project.description.pt}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <Badge key={t} variant="secondary" className="text-[10px] font-mono font-normal bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-none">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}