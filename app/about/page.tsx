"use client"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function AboutPage() {
    const { lang } = useLanguage()

    const t = {
        en: {
            greeting: "Engineering with purpose.",
            bio: "I am a final-year Computer Engineering student at ISP Katangoji, specializing in full-stack development with a focus on building digital products with real social impact.",
            projectStart: "Currently, I am developing ",
            projectLink: "Nonhande",
            projectEnd: ", a digital preservation platform for the Nhaneca-Humbe language, where I apply Next.js, NestJS, Vercel, Render and MongoDB to transform complex ethnolinguistic data into scalable digital experiences.",
            ambition: "My ambition is to bridge the gap between advanced technology and local context, integrating AI through projects like AngoIA to solve problems that matter.",
            educationTitle: "Education",
            skillsTitle: "Technical Stack",
            schools: [
                {
                    name: "Institute Polytechnic Katangoji (ISPK)",
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
            bio: "Sou finalista de Engenharia Informática no ISP Katangoji, especializado em desenvolvimento full-stack com foco na criação de produtos digitais com real impacto social.",
            projectStart: "Atualmente, desenvolvo a ",
            projectLink: "Nonhande",
            projectEnd: ", uma plataforma de preservação digital da língua Nhaneca-Humbe, onde aplico Next.js, NestJS, Vercel, Render e MongoDB para transformar dados etnolinguísticos em experiências digitais escaláveis.",
            ambition: "A minha ambição é unir a tecnologia avançada ao contexto local, integrando IA através de projetos como o AngoIA para resolver problemas reais.",
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
        { name: "Backend", items: ["NestJS", "Node.js", "Fastify", "C# / ASP.NET Core"] },
        { name: "Frontend", items: ["Next.js", "Vite + React", "TypeScript", "TailwindCSS", "Figma"] },
        { name: "Database", items: ["MongoDB", "PostgreSQL","Prisma", "Database Admin"] },
        { name: "DevOps", items: ["AWS", "Vercel", "Render", "Docker", "CI/CD", "GitHub Actions"] },
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
