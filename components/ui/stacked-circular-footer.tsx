import { Icons } from "@/components/ui/Icons"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { MagneticWrapper } from "@/components/ui/MagneticWrapper"
import { Logo } from "@/components/ui/Logo"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

function StackedCircularFooter() {
    const t = useTranslations('Navigation');
    return (
        <footer className="w-full bg-brand-ink py-24 border-t border-white/10 relative overflow-hidden">
            {/* Background glow injected for brand consistency */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-amber/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <div className="flex flex-col items-center">
                    <div className="mb-8">
                        <Logo iconClassName="w-10 h-10" textClassName="text-white text-2xl" />
                    </div>

                    <nav className="mb-12 flex flex-wrap justify-center gap-6">
                        <Link href="/#how-it-works" className="text-brand-stone/80 hover:text-white transition-colors font-medium">{t('howItWorks')}</Link>
                        <Link href="/#guarantee" className="text-brand-stone/80 hover:text-white transition-colors font-medium">{t('ourGuarantee')}</Link>
                        <Link href="/#success-stories" className="text-brand-stone/80 hover:text-white transition-colors font-medium">{t('successStories')}</Link>
                        <Link href="/#faq" className="text-brand-stone/80 hover:text-white transition-colors font-medium">{t('faq')}</Link>
                        <Link href="/contact" className="text-brand-stone/80 hover:text-white transition-colors font-medium">{t('contact')}</Link>
                    </nav>

                    <div className="mb-12 flex space-x-4">
                        <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                    </div>

                    <div className="mb-12 w-full max-w-md">
                        <form className="flex space-x-2">
                            <div className="flex-grow">
                                <Label htmlFor="email" className="sr-only">Email</Label>
                                <Input id="email" placeholder="Enter your email" type="email" className="rounded-full h-12 bg-glass-bg border-glass-border focus-visible:ring-brand-amber" />
                            </div>
                            <MagneticWrapper>
                                <Button type="submit" variant="amber" className="rounded-full h-12 px-6">Subscribe</Button>
                            </MagneticWrapper>
                        </form>
                    </div>

                    <div className="text-center w-full pt-8 border-t border-white/10 flex flex-col items-center">
                        <p className="text-sm text-brand-stone/40">
                            © {new Date().getFullYear()} Apex Horizon Realty. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { StackedCircularFooter }
