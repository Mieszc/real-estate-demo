"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
    question: string;
    answer: string | React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

export function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-brand-ink/10">
            <button
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber rounded-md px-4 transition-colors hover:bg-brand-ink/5"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-brand-ink pr-8">{question}</span>
                <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                    <ChevronDown className="h-5 w-5 text-brand-amber flex-shrink-0" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-6 pt-2 text-brand-ink/80 text-base leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Accordion({ items, className }: { items: Omit<AccordionItemProps, "isOpen" | "onClick">[], className?: string }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <div className={cn("w-full max-w-3xl mx-auto glass-panel p-2 sm:p-4", className)}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}
