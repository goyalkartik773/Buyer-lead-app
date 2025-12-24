import React from "react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { format } from "date-fns";
import { Suspense } from "react";
import SearchAndFilters from "@/components/SearchAndFilters";
import ExportButton from "@/components/ExportButton";

// Define the props for our page component, which will receive URL search parameters
type BuyersPageProps = {
    searchParams: {
        page?: string;
        city?: string;
        propertyType?: string;
        status?: string;
        timeline?: string;
        search?: string;
    };
};

const PAGE_SIZE = 10;

// This component will fetch the data based on the URL parameters
async function BuyersTable({ searchParams }: BuyersPageProps) {
    const page = parseInt(searchParams.page || "1");
    const skip = (page - 1) * PAGE_SIZE;

    // Build the WHERE clause for our Prisma query based on filters and search
    const where: any = {};
    if (searchParams.city) {
        where.city = searchParams.city;
    }
    if (searchParams.propertyType) {
        where.propertyType = searchParams.propertyType;
    }
    if (searchParams.status) {
        where.status = searchParams.status;
    }
    if (searchParams.timeline) {
        where.timeline = searchParams.timeline;
    }
    if (searchParams.search) {
        const searchTerm = Array.isArray(searchParams.search)
            ? searchParams.search[0].toLowerCase()
            : searchParams.search.toLowerCase();
        where.OR = [
            { fullName: { contains: searchTerm } },
            { phone: { contains: searchTerm } },
            { email: { contains: searchTerm } },
        ];
    }

    // Fetch the leads and the total count for pagination
    const [buyers, totalBuyers] = await prisma.$transaction([
        prisma.buyer.findMany({
            where,
            take: PAGE_SIZE,
            skip,
            orderBy: {
                updatedAt: "desc",
            },
        }),
        prisma.buyer.count({ where }),
    ]);

    const totalPages = Math.ceil(totalBuyers / PAGE_SIZE);

    // Helper function to get status badge class
    const getStatusClass = (status: string) => {
        const statusMap: Record<string, string> = {
            "New": "status-new",
            "Qualified": "status-qualified",
            "Contacted": "status-contacted",
            "Visited": "status-visited",
            "Negotiation": "status-negotiation",
            "Converted": "status-converted",
            "Dropped": "status-dropped",
        };
        return `status-badge ${statusMap[status] || "status-new"}`;
    };

    return (
        <div className="overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-2xl fade-in">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Name</th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">City</th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Property</th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Budget</th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Timeline</th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Updated</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {buyers.length === 0 ? (
                            <tr>
                                <td colSpan={9} className="px-6 py-12 text-center">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="text-6xl">🔍</div>
                                        <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">No buyer leads found</p>
                                        <p className="text-gray-400 dark:text-gray-500">Try adjusting your filters or create a new lead</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            buyers.map((buyer) => (
                                <tr key={buyer.id} className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-semibold text-gray-900 dark:text-gray-100">{buyer.fullName}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {buyer.phone}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{buyer.city}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{buyer.propertyType}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                                        {buyer.budgetMin !== null && buyer.budgetMax !== null ? (
                                            <span className="font-semibold">₹{(buyer.budgetMin / 100000).toFixed(1)}L - ₹{(buyer.budgetMax / 100000).toFixed(1)}L</span>
                                        ) : 'N/A'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{buyer.timeline}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={getStatusClass(buyer.status)}>{buyer.status}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        {format(new Date(buyer.updatedAt), 'MMM dd, yyyy')}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <Link
                                            href={`/buyers/${buyer.id}`}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                {page <= 1 ? (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                    </span>
                ) : (
                    <Link
                        href={
                            (() => {
                                const params = new URLSearchParams(searchParams.toString());
                                params.set("page", (page - 1).toString());
                                return `/buyers?${params.toString()}`;
                            })()
                        }
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                    </Link>
                )}

                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Page <span className="text-purple-600 dark:text-purple-400">{page}</span> of <span className="text-purple-600 dark:text-purple-400">{totalPages}</span>
                </span>

                {page >= totalPages ? (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed">
                        Next
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                ) : (
                    <Link
                        href={
                            (() => {
                                const params = new URLSearchParams(searchParams.toString());
                                params.set("page", (page + 1).toString());
                                return `/buyers?${params.toString()}`;
                            })()
                        }
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                        Next
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default function BuyersPage({ searchParams }: BuyersPageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Premium Header */}
            <header className="bg-white dark:bg-gray-800 shadow-lg border-b-2 border-purple-500/20 mb-8">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-3 group mb-2">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <span className="text-white font-bold text-2xl">B</span>
                                </div>
                                <span className="text-3xl font-extrabold gradient-text">BuyerLead</span>
                            </Link>
                            <p className="text-gray-600 dark:text-gray-400 ml-16">Manage your leads efficiently</p>
                        </div>
                        <div className="flex space-x-4">
                            <ExportButton />
                            <Link
                                href="/buyers/new"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                New Lead
                            </Link>
                            <Link
                                href="/buyers/import"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-bold border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                Import CSV
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 pb-12">
                <Suspense fallback={
                    <div className="flex justify-center items-center py-12">
                        <div className="spinner"></div>
                    </div>
                }>
                    <SearchAndFilters />
                </Suspense>

                <Suspense fallback={
                    <div className="flex justify-center items-center py-20">
                        <div className="spinner"></div>
                    </div>
                }>
                    <BuyersTable searchParams={searchParams} />
                </Suspense>
            </main>
        </div>
    );
}
