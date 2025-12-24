"use client";

import { useState } from "react";
import { useActionState } from "react";
import { createBuyer } from "@/actions/buyer";
import { z } from "zod";
import Link from "next/link";

const CityEnum = ["Chandigarh", "Mohali", "Zirakpur", "Panchkula", "Other"];
const PropertyTypeEnum = ["Apartment", "Villa", "Plot", "Office", "Retail"];
const BhkEnum = ["1", "2", "3", "4", "Studio"];
const PurposeEnum = ["Buy", "Rent"];
const TimelineEnum = ["0-3m", "3-6m", ">6m", "Exploring"];
const SourceEnum = ["Website", "Referral", "Walk-in", "Call", "Other"];

type FormState = {
    message: string;
    errors?: z.ZodIssue[];
};

const initialState: FormState = {
    message: "",
    errors: [],
};

export default function NewBuyerForm() {
    const [state, formAction] = useActionState(createBuyer, initialState);
    const [formData, setFormData] = useState({
        propertyType: "Apartment",
        bhk: "1",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="fade-in">
            {/* Back Button */}
            <div className="mb-6">
                <Link href="/buyers" className="back-btn">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Leads
                </Link>
            </div>

            <form action={formAction} className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl space-y-6 card-hover">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-extrabold gradient-text mb-2">Create New Lead</h2>
                    <p className="text-gray-600 dark:text-gray-400">Fill out the form below to capture a new potential buyer</p>
                </div>

                {/* Error Display */}
                {state.errors && state.errors.length > 0 && (
                    <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border-2 border-red-400 text-red-700 dark:text-red-400 px-6 py-4 rounded-xl" role="alert">
                        <div className="flex items-center gap-2 mb-2">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <strong className="font-bold">Validation Error!</strong>
                        </div>
                        <ul className="mt-2 list-disc list-inside space-y-1">
                            {state.errors.map((err, index) => (
                                <li key={index}><strong>{err.path.join(".")}</strong>: {err.message}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Success Message */}
                {state.message && (
                    <div className={`py-4 px-6 rounded-xl font-semibold ${state.message.includes("successfully") ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-400 text-green-700 dark:text-green-400' : 'bg-gradient-to-r from-red-500/10 to-pink-500/10 border-2 border-red-400 text-red-700 dark:text-red-400'}`}>
                        {state.message}
                    </div>
                )}

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="slide-in">
                        <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Phone */}
                    <div className="slide-in">
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="9876543210"
                        />
                    </div>

                    {/* Email */}
                    <div className="slide-in">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Email (Optional)
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* City */}
                    <div className="slide-in">
                        <label htmlFor="city" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            City <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="city"
                            name="city"
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        >
                            {CityEnum.map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                    </div>

                    {/* Property Type */}
                    <div className="slide-in">
                        <label htmlFor="propertyType" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Property Type <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="propertyType"
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        >
                            {PropertyTypeEnum.map(type => <option key={type} value={type}>{type}</option>)}
                        </select>
                    </div>

                    {/* BHK (Conditional) */}
                    {(formData.propertyType === "Apartment" || formData.propertyType === "Villa") && (
                        <div className="scale-in">
                            <label htmlFor="bhk" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                BHK <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="bhk"
                                name="bhk"
                                value={formData.bhk}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            >
                                {BhkEnum.map(bhk => <option key={bhk} value={bhk}>{bhk}</option>)}
                            </select>
                        </div>
                    )}

                    {/* Purpose */}
                    <div className="slide-in">
                        <label htmlFor="purpose" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Purpose <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="purpose"
                            name="purpose"
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        >
                            {PurposeEnum.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                    </div>

                    {/* Timeline */}
                    <div className="slide-in">
                        <label htmlFor="timeline" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Timeline <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="timeline"
                            name="timeline"
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        >
                            {TimelineEnum.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>

                    {/* Source */}
                    <div className="slide-in">
                        <label htmlFor="source" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Source <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="source"
                            name="source"
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        >
                            {SourceEnum.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>

                    {/* Budget Min */}
                    <div className="slide-in">
                        <label htmlFor="budgetMin" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Min Budget (₹)
                        </label>
                        <input
                            type="number"
                            id="budgetMin"
                            name="budgetMin"
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="5000000"
                        />
                    </div>

                    {/* Budget Max */}
                    <div className="slide-in">
                        <label htmlFor="budgetMax" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Max Budget (₹)
                        </label>
                        <input
                            type="number"
                            id="budgetMax"
                            name="budgetMax"
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="10000000"
                        />
                    </div>

                    {/* Tags */}
                    <div className="md:col-span-2 slide-in">
                        <label htmlFor="tags" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Tags (comma-separated)
                        </label>
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="Hot Lead, Investor, Family"
                        />
                    </div>

                    {/* Notes */}
                    <div className="md:col-span-2 slide-in">
                        <label htmlFor="notes" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Notes (Optional)
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows={4}
                            className="mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                            placeholder="Additional information about the lead..."
                        ></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02] shimmer overflow-hidden"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        ✨ Create Lead
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                </button>
            </form>
        </div>
    );
}
