"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle2, AlertCircle, Home, BedDouble, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useTranslations } from "next-intl";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";

export function ValuationForm() {
    const t = useTranslations('ValuationForm');

    // Form state
    const [formData, setFormData] = useState({
        address: "",
        propertyType: "",
        bedrooms: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.address.trim() || !formData.propertyType || !formData.bedrooms || !formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
            setStatus("error");
            setMessage(t('errorInvalid'));
            return;
        }

        setStatus("loading");

        // Simulate API delay
        setTimeout(() => {
            if (formData.address.toLowerCase().includes("fail")) {
                setStatus("error");
                setMessage(t('errorVerify'));
            } else {
                setStatus("success");
                setMessage(t('successMessage'));
                // Reset form on success
                setFormData({
                    address: "",
                    propertyType: "",
                    bedrooms: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: ""
                });
            }

            // Reset status after 5 seconds
            setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 5000);
        }, 1500);
    };

    // Shared input styling base for native selects
    const selectClasses = "w-full rounded-full border border-brand-stone/20 bg-white/5 px-6 py-4 text-white placeholder:text-brand-stone/50 focus:border-brand-amber/50 focus:outline-none focus:ring-1 focus:ring-brand-amber/50 transition-all duration-300 appearance-none";

    return (
        <div className="relative w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">

                {/* Property Details Row */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-brand-amber uppercase tracking-wider">Property Details</h4>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <Input
                                type="text"
                                name="address"
                                placeholder={t('addressPlaceholder')}
                                value={formData.address}
                                onChange={handleChange}
                                disabled={status === "loading" || status === "success"}
                                icon={<MapPin className="w-5 h-5" />}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                            <Home className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-stone/50 pointer-events-none" />
                            <select
                                name="propertyType"
                                value={formData.propertyType}
                                onChange={handleChange}
                                disabled={status === "loading" || status === "success"}
                                className={`${selectClasses} pl-14 ${!formData.propertyType ? "text-brand-stone/50" : ""}`}
                            >
                                <option value="" disabled className="text-brand-ink">{t('propertyTypeLabel')}</option>
                                <option value="house" className="text-brand-ink">{t('propertyTypeHouse')}</option>
                                <option value="flat" className="text-brand-ink">{t('propertyTypeFlat')}</option>
                                <option value="other" className="text-brand-ink">{t('propertyTypeOther')}</option>
                            </select>
                        </div>

                        <div className="relative">
                            <BedDouble className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-stone/50 pointer-events-none" />
                            <select
                                name="bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                                disabled={status === "loading" || status === "success"}
                                className={`${selectClasses} pl-14 ${!formData.bedrooms ? "text-brand-stone/50" : ""}`}
                            >
                                <option value="" disabled className="text-brand-ink">{t('bedroomsLabel')}</option>
                                <option value="1" className="text-brand-ink">1 {t('bedroomsLabel')}</option>
                                <option value="2" className="text-brand-ink">2 {t('bedroomsLabel')}</option>
                                <option value="3" className="text-brand-ink">3 {t('bedroomsLabel')}</option>
                                <option value="4" className="text-brand-ink">4+ {t('bedroomsLabel')}</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Contact Details Row */}
                <div className="space-y-4 mt-2">
                    <h4 className="text-sm font-semibold text-brand-amber uppercase tracking-wider">Contact Details</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                            type="text"
                            name="firstName"
                            placeholder={t('firstNamePlaceholder')}
                            value={formData.firstName}
                            onChange={handleChange}
                            disabled={status === "loading" || status === "success"}
                            icon={<User className="w-5 h-5" />}
                        />
                        <Input
                            type="text"
                            name="lastName"
                            placeholder={t('lastNamePlaceholder')}
                            value={formData.lastName}
                            onChange={handleChange}
                            disabled={status === "loading" || status === "success"}
                            icon={<User className="w-5 h-5" />}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                            type="email"
                            name="email"
                            placeholder={t('emailPlaceholder')}
                            value={formData.email}
                            onChange={handleChange}
                            disabled={status === "loading" || status === "success"}
                            icon={<Mail className="w-5 h-5" />}
                        />
                        <Input
                            type="tel"
                            name="phone"
                            placeholder={t('phonePlaceholder')}
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={status === "loading" || status === "success"}
                            icon={<Phone className="w-5 h-5" />}
                        />
                    </div>
                </div>

                <MagneticWrapper className="w-full mt-4">
                    <Button
                        type="submit"
                        variant="amber"
                        size="lg"
                        disabled={status === "loading" || status === "success"}
                        className="w-full text-lg"
                    >
                        {status === "loading" ? t('submittingButton') : t('submitButton')}
                    </Button>
                </MagneticWrapper>
            </form>

            <AnimatePresence>
                {(status === "success" || status === "error") && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className={`absolute top-full left-0 mt-4 p-4 rounded-xl shadow-lg flex items-start gap-3 w-full backdrop-blur-md border ${status === "success"
                            ? "bg-green-500/10 border-green-500/20 text-green-400"
                            : "bg-red-500/10 border-red-500/20 text-red-400"
                            }`}
                    >
                        {status === "success" ? (
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                        ) : (
                            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        )}
                        <p className="text-sm font-medium leading-relaxed">{message}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
