"use client";

import { useActionState } from "react";
import { importBuyersFromCsv } from "@/actions/buyer";
import { z } from "zod";
import Link from "next/link";

const initialState = {
    message: "",
    errors: [],
    validationErrors: [],
};

type FormState = {
    message: string;
    errors: z.ZodIssue[];
    validationErrors: { row: number; errors: z.ZodIssue[] }[];
};

export default function ImportPage() {
    const [state, formAction] = useActionState(importBuyersFromCsv, initialState);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Professional Header */}
            <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-4">
                    <Link href="/buyers" className="inline-flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-xl">B</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 dark:text-white">BuyerLead</h1>
                            <p className="text-xs text-slate-500">Lead Management System</p>
                        </div>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                {/* Back Button */}
                <div className="mb-6">
                    <Link href="/buyers" className="back-btn">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Dashboard
                    </Link>
                </div>

                {/* Main Card */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
                                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Import Buyer Leads</h1>
                            <p className="text-slate-600 dark:text-slate-400">Upload a CSV file to bulk import leads (maximum 200 rows)</p>
                        </div>

                        <form action={formAction} className="space-y-6">
                            {/* Messages */}
                            {state.message && (
                                <div className={`p-4 rounded-lg border ${state.message.includes("successfully") ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'}`}>
                                    <div className="flex items-center gap-2">
                                        {state.message.includes("successfully") ? (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        <span className="font-semibold">{state.message}</span>
                                    </div>
                                </div>
                            )}

                            {state.errors && state.errors.length > 0 && (
                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg" role="alert">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <strong className="font-semibold">Error!</strong>
                                    </div>
                                    <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                                        {state.errors.map((err, index: number) => (
                                            <li key={index}><strong>{err.path.join(".")}</strong>: {err.message}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* File Upload Area */}
                            <div className="relative">
                                <label htmlFor="csvFile" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    CSV File
                                </label>
                                <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900/50 hover:border-purple-400 dark:hover:border-purple-600 transition-colors cursor-pointer group">
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📁</div>
                                    <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Choose CSV File</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Maximum 200 rows • Click to browse</p>
                                    <input
                                        type="file"
                                        id="csvFile"
                                        name="csvFile"
                                        accept=".csv"
                                        required
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <div className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-semibold transition-colors">
                                        Select File
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white rounded-lg font-semibold shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 transition-all"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    Import Leads
                                </span>
                            </button>
                        </form>

                        {/* CSV Format Help */}
                        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">CSV Format Requirements</h3>
                                    <p className="text-sm text-blue-800 dark:text-blue-400 mb-2">Your CSV file should include these columns:</p>
                                    <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block overflow-x-auto border border-blue-200 dark:border-blue-800">
                                        fullName, email, phone, city, propertyType, bhk, purpose, budgetMin, budgetMax, timeline, source, notes, tags, status
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Validation Errors Table */}
                    {(state.validationErrors ?? []).length > 0 && (
                        <div className="mt-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">Import Errors</h2>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">The following rows failed validation</p>
                                </div>
                            </div>
                            <div className="overflow-x-auto rounded-lg border border-red-200 dark:border-red-800">
                                <table className="min-w-full">
                                    <thead className="bg-red-50 dark:bg-red-900/20">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-red-900 dark:text-red-300 uppercase tracking-wider">Row #</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-red-900 dark:text-red-300 uppercase tracking-wider">Errors</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-red-200 dark:divide-red-800">
                                        {(state.validationErrors ?? []).map((rowError) => (
                                            <tr key={rowError.row} className="hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full font-semibold text-sm">
                                                        {rowError.row}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
                                                        {rowError.errors.map((err, index) => (
                                                            <li key={index}>
                                                                <strong className="text-red-600 dark:text-red-400">{err.path.join('.')}</strong> - {err.message}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
