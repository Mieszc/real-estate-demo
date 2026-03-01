"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const NAV_LINKS = [
    { name: "How it Works", href: "/#process" },
    { name: "Our Guarantee", href: "/#guarantee" },
    { name: "Success Stories", href: "/#success" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Handle scroll state for glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMobileMenuOpen(false);

        // If it's the contact page, let Next.js Link handle it
        if (href === '/contact') return;

        // If it's an anchor link and we are NOT on the home page, let Next.js navigate to Home then scroll
        if (href.startsWith('/#') && pathname !== '/') {
            return; // Link component will handle the route change
        }

        // If it's an anchor link and we ARE on the home page, smooth scroll
        e.preventDefault();
        const targetId = href.replace('/#', '#');
        const element = document.querySelector(targetId);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-ink/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
                    }`}
            >
                <div className="container mx-auto px-6 max-w-[1280px] flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-white font-bold text-xl tracking-tight"
                    >
                        Apex <span className="text-brand-amber">Horizon.</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-sm font-medium text-brand-stone/80 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <MagneticWrapper>
                            <Button
                                variant="amber"
                                size="sm"
                                onClick={() => {
                                    if (pathname !== '/') {
                                        router.push('/#hero-form');
                                    } else {
                                        const element = document.querySelector("#hero-form");
                                        if (element) element.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >
                                Get Valuation
                            </Button>
                        </MagneticWrapper>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-[60px] left-0 right-0 bg-brand-ink/95 backdrop-blur-xl border-b border-white/10 z-40 overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-lg font-medium text-white/90 hover:text-brand-amber transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <MagneticWrapper className="w-full mt-2">
                                <Button
                                    variant="amber"
                                    className="w-full"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        if (pathname !== '/') {
                                            router.push('/#hero-form');
                                        } else {
                                            const element = document.querySelector("#hero-form");
                                            if (element) element.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                >
                                    Get My Valuation
                                </Button>
                            </MagneticWrapper>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
