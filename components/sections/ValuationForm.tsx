"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function ValuationForm() {
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!address.trim()) {
            setStatus("error");
            setMessage("Please enter a valid London address.");
            return;
        }

        setStatus("loading");
        // Simulate API delay
        setTimeout(() => {
            if (address.toLowerCase().includes("fail")) {
                setStatus("error");
                setMessage("We couldn't verify this address. Please try again.");
            } else {
                setStatus("success");
                setMessage("Success! Your dedicated Lead Strategist will contact you shortly.");
            }

            // Reset after 4 seconds
            setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 4000);
        }, 1200);
    };

    return (
        <div className="relative w-full max-w-xl">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                <Input
                    type="text"
                    placeholder="Enter Your Home Address (e.g., Kensington High St)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                    icon={<Search className="w-5 h-5" />}
                    className="flex-1"
                />
                <Button
                    type="submit"
                    variant="amber"
                    size="default"
                    disabled={status === "loading" || status === "success"}
                    className="sm:w-auto w-full"
                >
                    {status === "loading" ? "Analyzing..." : "Get My Valuation"}
                </Button>
            </form>

            <AnimatePresence>
                {(status === "success" || status === "error") && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className={`absolute top-full left-0 mt-4 p-4 rounded-md shadow-lg flex items-start gap-3 w-full backdrop-blur-md border ${status === "success"
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
