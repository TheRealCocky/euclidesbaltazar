"use client"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function AboutPage() {
    const { lang } = useLanguage()

    const t = {
        en: {
            greeting: "Engineering with purpose.",
            bio: "I am a Full-Stack & AI Engineer and final-year Computer Engineering student at ISP Katangoji, focused on building intelligent digital products with high social impact.",
            projectStart: "Currently, I am architecting ",
            projectLink: "Nonhande",
            projectEnd: ", a language preservation platform where I implement RAG (Retrieval-Augmented Generation), LlamaIndex, and Whisper to transform oral traditions into scalable intelligent systems.",
            ambition: "My mission is to master AI Engineering to bridge the gap between advanced technology and the Angolan context, creating solutions that truly matter.",
            educationTitle: "Education",
            skillsTitle: "Technical Stack",
            schools: [
                {
                    name: "Instituto Superior Politécnico Katangoji (ISPK)",
                    degree: "BSc in Computer Engineering",
                    date: "Expected July 2026"
                },
                {
                    name: "Medium Institute of Economics (IMEL)",
                    degree: "Diploma in Applied Informatics to Management",
                    date: "2017 — 2020"
                }
            ]
        },
        pt: {
            greeting: "Engenharia com propósito.",
            bio: "Sou Engenheiro Full-Stack & IA e finalista de Engenharia Informática no ISP Katangoji, focado na criação de produtos digitais inteligentes com real impacto social.",
            projectStart: "Atualmente, sou o arquiteto da ",
            projectLink: "Nonhande",
            projectEnd: ", uma plataforma de preservação linguística onde implemento RAG (Geracão Aumentada por Recuperação), LlamaIndex e Whisper para transformar tradições orais em sistemas inteligentes escaláveis.",
            ambition: "A minha missão é dominar a Engenharia de IA para unir tecnologia de ponta ao contexto angolano, criando soluções que resolvem problemas reais.",
            educationTitle: "Formação Académica",
            skillsTitle: "Stack Tecnológico",
            schools: [
                {
                    name: "Instituto Superior Politécnico Katangoji",
                    degree: "Licenciatura em Engenharia Informática",
                    date: "Previsão Julho 2026"
                },
                {
                    name: "Instituto Médio de Economia do Lubango (IMEL)",
                    degree: "Técnico de Informática de Gestão",
                    date: "2017 — 2020"
                }
            ]
        }
    }

    const content = lang === 'en' ? t.en : t.pt

    const skillCategories = [
        { name: "Backend", items: ["NestJS", "Node.js", "Fastify", "C# / ASP.NET Core","Python"] },
        { name: "Frontend", items: ["Next.js", "Vite + React", "TypeScript", "TailwindCSS", "Figma"] },
        { name: "Database", items: ["MongoDB", "PostgreSQL","Prisma", "Database Admin"] },
        { name: "DevOps", items: ["AWS", "Vercel", "Render", "Docker", "CI/CD", "GitHub Actions"] },
        { name: "AI", items: ["RAG", "LlamaIndex", "Groq", "Vector Databases", "Hugging Face", "Google Colab", "TTS", "Whisper"] },
    ]

    return (
        <div className="max-w-4xl mx-auto py-16 px-6">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                {/* Cabeçalho */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter italic text-zinc-900 dark:text-zinc-100">
                        {content.greeting}
                    </h1>
                    <div className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100" />
                </div>

                {/* Bio Narrativa */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <p className="text-zinc-900 dark:text-zinc-100 font-medium italic">
                        {content.bio}
                    </p>
                    <div className="space-y-4 text-base">
                        <p>
                            {content.projectStart}
                            <a
                                href="https://nonhande.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 font-bold underline underline-offset-4 hover:opacity-70 transition-opacity"
                            >
                                {content.projectLink}
                                <ExternalLink size={14} />
                            </a>
                            {content.projectEnd}
                        </p>
                        <p>{content.ambition}</p>
                    </div>
                </div>

                {/* Skills */}
                <div className="pt-10">
                    <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 mb-8">
                        {content.skillsTitle}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skillCategories.map((cat) => (
                            <div key={cat.name} className="space-y-3">
                                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{cat.name}</h3>
                                <ul className="space-y-1">
                                    {cat.items.map(item => (
                                        <li key={item} className="text-xs text-zinc-500 font-mono italic">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Educação */}
                <div className="pt-10 border-t border-zinc-100 dark:border-zinc-900">
                    <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 mb-8">
                        {content.educationTitle}
                    </h2>
                    <div className="space-y-8">
                        {content.schools.map((school, index) => (
                            <div key={index}>
                                <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
                                    {school.name}
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {school.degree}
                                </p>
                                <p className="text-xs text-zinc-400 font-mono mt-1 uppercase tracking-wider">
                                    {school.date}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    )
}
