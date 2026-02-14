"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation" // 1. Hook para ver a rota atual
import { useLanguage } from "@/context/LanguageContext"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Languages, Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

export function Navbar() {
    const { lang, setLang } = useLanguage()
    const [open, setOpen] = React.useState(false)
    const pathname = usePathname() // 2. Definir a constante da rota

    const navItems = [
        { id: "01", name: { en: "Home", pt: "Início" }, href: "/" },
        { id: "02", name: { en: "About", pt: "Sobre" }, href: "/about" },
        { id: "03", name: { en: "Experience", pt: "Experiência" }, href: "/experience" },
        { id: "04", name: { en: "Projects", pt: "Projetos" }, href: "/projects" },
        { id: "05", name: { en: "Contact", pt: "Contacto" }, href: "/contact" },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="font-bold text-lg tracking-tighter hover:opacity-70 transition-opacity">
                    Euclides Baltazar<span className="text-zinc-400">.</span>
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href // 3. Lógica do Active
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm transition-colors ${
                                    isActive
                                        ? "font-bold text-zinc-950 dark:text-zinc-50"
                                        : "font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                                }`}
                            >
                                {lang === "en" ? item.name.en : item.name.pt}
                            </Link>
                        )
                    })}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-1 md:gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setLang(lang === "en" ? "pt" : "en")}
                        className="text-xs font-bold px-2"
                    >
                        <Languages className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:inline">{lang.toUpperCase()}</span>
                        <span className="md:hidden ml-1">{lang.toUpperCase()}</span>
                    </Button>
                    <ThemeToggle />

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="ml-1">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[280px] flex flex-col bg-zinc-50 dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800">
                                <SheetHeader className="mt-8">
                                    <SheetTitle className="text-left text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
                                        Navigation
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col items-start justify-center flex-1 gap-8 mt-10">
                                    {navItems.map((item) => {
                                        const isActive = pathname === item.href // Lógica Active Mobile
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className="group flex items-baseline gap-4"
                                            >
                                                <span className={`text-[10px] font-mono mt-1 transition-colors ${isActive ? "text-zinc-950 dark:text-zinc-50 font-bold" : "text-zinc-400"}`}>
                                                    {item.id}
                                                </span>
                                                <span className={`text-xl tracking-tight transition-all ${isActive ? "text-zinc-950 dark:text-zinc-50 font-bold" : "text-zinc-600 dark:text-zinc-400"}`}>
                                                    {lang === "en" ? item.name.en : item.name.pt}
                                                </span>
                                            </Link>
                                        )
                                    })}
                                </div>

                                <div className="pb-10 pt-6">
                                    <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                                        Luanda • {new Date().getFullYear()}
                                    </p>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}