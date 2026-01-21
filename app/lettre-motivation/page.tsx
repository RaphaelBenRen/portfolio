import Link from "next/link";
import { coverLetter } from "@/data/resume";
import { ArrowLeft } from "lucide-react";

export default function CoverLetterPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-900">
            {/* Simple Header */}
            <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-3xl mx-auto px-6 py-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Retour au CV
                    </Link>
                </div>
            </header>

            <div className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                        Lettre de Motivation
                    </h1>

                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-8">
                        <p className="mb-1">À l&apos;attention de :</p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                            {coverLetter.recipient.company}
                        </p>
                        <p>{coverLetter.recipient.position}</p>
                    </div>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    {coverLetter.content.split('\n\n').map((paragraph, index) => (
                        <p
                            key={index}
                            className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Retour au CV
                    </Link>
                </div>
            </div>
        </main>
    );
}
