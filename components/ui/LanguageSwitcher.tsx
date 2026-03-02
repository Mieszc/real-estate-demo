"use client";

import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export function LanguageSwitcher({ isScrolled }: { isScrolled?: boolean }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale as 'en' | 'de' | 'pl' });
        });
    };

    return (
        <div className={`relative inline-flex items-center transition-colors duration-300`}>
            <Globe className={`absolute left-3 w-4 h-4 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`} />
            <select
                value={locale}
                onChange={handleLocaleChange}
                disabled={isPending}
                className={`appearance-none bg-transparent border rounded-full pl-9 pr-8 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-brand-amber ${isScrolled ? 'border-black/30 text-black hover:border-black hover:bg-black/5 drop-shadow-sm' : 'border-white/30 text-white hover:border-white hover:bg-white/10'}`}
            >
                <option value="en" className="bg-brand-ink text-white">EN</option>
                <option value="de" className="bg-brand-ink text-white">DE</option>
                <option value="pl" className="bg-brand-ink text-white">PL</option>
            </select>
            <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
                <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );
}
