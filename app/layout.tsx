import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Metadatas preservadas para o Mercado Internacional
export const metadata: Metadata = {
    title: {
        default: "Euclides Baltazar | Fullstack Software Engineer",
        template: "%s | Euclides Baltazar"
    },
    description: "Fullstack Developer especializado em ecossistemas de alta performance: Next.js, NestJS e AWS. Soluções escaláveis de Angola para o mundo.",
    keywords: ["Fullstack Developer", "Software Engineer Angola", "Next.js", "NestJS", "Euclides Baltazar", "Web Development"],
    authors: [{ name: "Euclides Baltazar" }],
    creator: "Euclides Baltazar",
    openGraph: {
        type: "website",
        locale: "pt_AO",
        url: "https://euclidesbaltazar.vercel.app/",
        title: "Euclides Baltazar | Fullstack Software Engineer",
        description: "Expert em Next.js e NestJS. Construindo o futuro digital.",
        siteName: "Euclides Baltazar Portfolio",
        images: [{
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: "Euclides Baltazar Portfolio",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Euclides Baltazar | Fullstack Developer",
        description: "Next.js, NestJS & Cloud Architecture",
        creator: "@teu_twitter",
    },
    robots: {
        index: true,
        follow: true,
    }
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <LanguageProvider>
                <Navbar />
                <main className="pt-20 pb-10">
                    {children}
                </main>
                {/* O Footer foi removido daqui para aparecer só na Home */}
            </LanguageProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
