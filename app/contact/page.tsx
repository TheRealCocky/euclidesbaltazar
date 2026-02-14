"use client"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, Phone } from "lucide-react"

export default function ContactPage() {
    const { lang } = useLanguage()
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('loading')
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.ok) setStatus('success')
            else setStatus('error')
        } catch (error) {
            setStatus('error')
        }
    }

    const t = {
        en: {
            title: "Get in touch",
            subtitle: "Ready to join a team or lead a project. Let's talk business.",
            formName: "Full Name",
            formEmail: "Email Address",
            formMessage: "Tell me about your project...",
            formButton: status === 'loading' ? "Sending..." : "Send Message",
            success: "Message sent!",
            error: "Something went wrong. Try WhatsApp?",
            socials: "Digital Presence",
            location: "Luanda, Angola • Worldwide",
            status: "Open for professional offers",
            call: "Call Me"
        },
        pt: {
            title: "Entrar em contacto",
            subtitle: "Pronto para integrar uma equipa ou liderar um projeto.",
            formName: "Nome Completo",
            formEmail: "E-mail de Contacto",
            formMessage: "Fala-me sobre a tua proposta...",
            formButton: status === 'loading' ? "A enviar..." : "Enviar Mensagem",
            success: "Mensagem enviada!",
            error: "Erro ao enviar. Tenta o WhatsApp?",
            socials: "Presença Digital",
            location: "Luanda, Angola • Remoto",
            status: "Disponível para propostas",
            call: "Ligar Agora"
        }
    }

    const content = lang === 'en' ? t.en : t.pt

    return (
        <div className="max-w-6xl mx-auto py-12 md:py-20 px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16"
            >
                {/* Lado Esquerdo: Formulário */}
                <div className="space-y-6 md:space-y-8">
                    <header>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 italic">
                            {content.title}
                        </h1>
                        <p className="text-zinc-500 text-sm md:text-base max-w-md">
                            {content.subtitle}
                        </p>
                    </header>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                name="name"
                                required
                                placeholder={content.formName}
                                className="h-14 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-base"
                            />
                            <Input
                                name="email"
                                type="email"
                                required
                                placeholder={content.formEmail}
                                className="h-14 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-base"
                            />
                        </div>
                        <Textarea
                            name="message"
                            required
                            placeholder={content.formMessage}
                            className="min-h-[150px] md:min-h-[200px] bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-base p-4"
                        />

                        <Button
                            disabled={status === 'loading' || status === 'success'}
                            className={`w-full md:w-auto px-10 py-7 rounded-2xl gap-2 font-bold text-lg transition-all active:scale-95 ${status === 'success' ? 'bg-green-600 hover:bg-green-600 text-white' : ''}`}
                        >
                            {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                            {status === 'success' ? content.success : content.formButton}
                        </Button>

                        {status === 'error' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 text-red-600 dark:text-red-400 text-sm">
                                {content.error} <a href="https://wa.me/244945303860" className="underline font-bold">WhatsApp</a>
                            </motion.div>
                        )}
                    </form>
                </div>

                {/* Lado Direito: Info / Socials */}
                <div className="flex flex-col gap-10 md:gap-12 lg:pl-10">
                    {/* Card de Status Responsivo */}
                    <div className="p-6 md:p-10 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-[2rem] md:rounded-[3rem] space-y-4 md:space-y-6 shadow-xl">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] opacity-70 font-bold">
                                {content.status}
                            </span>
                        </div>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight italic">
                            {content.location}
                        </p>
                    </div>

                    {/* Social Links Responsivos */}
                    <div className="space-y-6">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold px-1">
                            {content.socials}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {[
                                { href: "https://www.linkedin.com/in/euclides-baltazar-456331366/", icon: <FaLinkedin />, label: "LinkedIn", color: "group-hover:text-[#0077b5]" },
                                { href: "https://github.com/TheRealCocky", icon: <SiGithub size={22} />, label: "GitHub", color: "group-hover:text-white dark:group-hover:text-black" },
                                { href: "https://wa.me/244945303860", icon: <FaWhatsapp />, label: "WhatsApp", color: "group-hover:text-[#25D366]" },
                                { href: "tel:+244945303860", icon: <Phone size={22} />, label: content.call, color: "group-hover:text-blue-500" }
                            ].map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? "_blank" : undefined}
                                    className="flex items-center gap-4 p-4 md:p-5 rounded-2xl border border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all group"
                                >
                                    <span className={`text-xl md:text-2xl text-zinc-400 transition-colors ${link.color}`}>
                                        {link.icon}
                                    </span>
                                    <span className="font-bold text-sm md:text-base">{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}