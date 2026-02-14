"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext" // Importar o teu contexto

export default function NotFound() {
    const { lang } = useLanguage()

    const t = {
        en: {
            title: "Page not found",
            description: "It seems you got lost in the code. The page you are looking for doesn't exist or has been moved to a new repository.",
            backHome: "Back to Home",
            goBack: "Go Back",
            errorMsg: "Error: Page vanished!"
        },
        pt: {
            title: "Página não encontrada",
            description: "Parece que te perdeste no código. A página que procuras não existe ou foi movida para um novo repositório.",
            backHome: "Voltar ao Início",
            goBack: "Voltar atrás",
            errorMsg: "Erro: Página sumiu!"
        }
    }

    const content = lang === 'en' ? t.en : t.pt

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
            {/* Animação do Número 404 */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <h1 className="text-[12rem] md:text-[18rem] font-bold tracking-tighter text-zinc-100 dark:text-zinc-900 leading-none select-none">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl md:text-3xl font-medium text-zinc-900 dark:text-zinc-100 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm px-4 py-2 rounded-xl">
                        {content.title}
                    </p>
                </div>
            </motion.div>

            {/* Texto Descritivo */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-md mt-8 space-y-4"
            >
                <p className="text-zinc-500 dark:text-zinc-400">
                    {content.description}
                </p>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button asChild variant="default" className="rounded-full px-8 h-12 font-bold bg-zinc-900 dark:bg-zinc-100">
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" /> {content.backHome}
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        className="rounded-full px-8 h-12 font-bold border-zinc-200 dark:border-zinc-800"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> {content.goBack}
                    </Button>
                </div>
            </motion.div>

            {/* Elemento Decorativo */}
            <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none hidden lg:block">
                <pre className="text-xs font-mono text-left">
                    <code>{`
function findPage(url) {
  if (!exists(url)) {
    throw new Error("${content.errorMsg}");
  }
}
                    `}</code>
                </pre>
            </div>
        </div>
    )
}