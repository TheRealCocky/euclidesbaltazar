"use client"
import { useLanguage } from "@/context/LanguageContext"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        company: "ForLearn",
        role: {
            en: "FrontEnd Developer (Internship)",
            pt: "Desenvolvedor FrontEnd (Estagiário)"
        },
        period: "2024",
        description: {
            en: "Developed high-performance interfaces using React, Next.js, and TailwindCSS. Successfully delivered production-ready UI for two major projects, maintaining 100% completion rate in agile sprints.",
            pt: "Desenvolvimento de interfaces de alta performance com React, Next.js e TailwindCSS. Entrega de interfaces prontas para produção em dois projetos principais, com 100% de conclusão nas tarefas em sprints ágeis."
        },
        skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "Agile"]
    },
    // Aqui podes adicionar a tua experiência de Fullstack (NestJS/AWS) quando quiseres
]

export default function ExperiencePage() {
    const { lang } = useLanguage()

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <header className="mb-16">
                <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
                    {lang === 'en' ? 'Experience' : 'Experiência'}
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2 font-mono text-sm">
                    {lang === 'en' ? '// professional journey' : '// percurso profissional'}
                </p>
            </header>

            <div className="space-y-16 border-l border-zinc-100 dark:border-zinc-900 ml-2">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8">
                        {/* Indicador de linha do tempo minimalista */}
                        <div className="absolute w-2 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full -left-[5px] top-2 outline outline-4 outline-white dark:outline-zinc-950" />

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                                    {lang === 'en' ? exp.role.en : exp.role.pt}
                                </h3>
                                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                                    {exp.period}
                                </span>
                            </div>

                            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                @ {exp.company}
                            </span>

                            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed max-w-2xl">
                                {lang === 'en' ? exp.description.en : exp.description.pt}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.skills.map(skill => (
                                    <Badge
                                        key={skill}
                                        variant="outline"
                                        className="text-[10px] font-mono uppercase tracking-tight py-0 px-2 bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}