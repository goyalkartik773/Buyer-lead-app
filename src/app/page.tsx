import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Professional Header */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">BuyerLead</h1>
              <p className="text-xs text-slate-500">Lead Management System</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/buyers" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">
              Dashboard
            </Link>
            <Link href="/buyers/new" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
              Add Lead
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6">
        <section className="py-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            Professional CRM Solution
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Streamline Your
            <span className="block bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Lead Management
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
            A powerful, intuitive platform designed to help sales teams capture, track, and convert leads efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/buyers"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 transition-all"
            >
              View Dashboard →
            </Link>
            <Link
              href="/buyers/new"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 hover:border-purple-600 dark:hover:border-purple-600 rounded-lg font-semibold transition-all"
            >
              Create New Lead
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-200 dark:border-slate-700">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">99.9%</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">10K+</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Leads Tracked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">&lt;100ms</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">24/7</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Support</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Powerful features designed to help your team work smarter, not harder.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "📊",
                title: "Smart Analytics",
                description: "Track performance metrics and gain insights into your sales pipeline with real-time dashboards."
              },
              {
                icon: "🔍",
                title: "Advanced Search",
                description: "Find any lead instantly with powerful search and filtering capabilities across all fields."
              },
              {
                icon: "📁",
                title: "Bulk Operations",
                description: "Import and export leads in bulk with CSV support for seamless data management."
              },
              {
                icon: "🔔",
                title: "Status Tracking",
                description: "Monitor lead progression through customizable stages from initial contact to conversion."
              },
              {
                icon: "📝",
                title: "Detailed History",
                description: "Complete audit trail of all changes with timestamps for full transparency and accountability."
              },
              {
                icon: "🚀",
                title: "Fast Performance",
                description: "Lightning-fast load times and instant updates ensure your team stays productive."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-emerald-50 dark:from-purple-900/20 dark:to-emerald-900/20 rounded-2xl p-12 border border-purple-100 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="text-xl text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
              "BuyerLead has transformed how our sales team operates. The intuitive interface and powerful features have helped us increase our conversion rate by 45% in just three months."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                KG
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">Kartik Goel</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Founder & CEO</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-600 to-emerald-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Sales Process?
            </h3>
            <p className="text-lg mb-8 text-purple-50">
              Join thousands of teams already using BuyerLead to manage their leads effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/buyers"
                className="px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 rounded-lg font-semibold transition-colors"
              >
                Get Started Now
              </Link>
              <Link
                href="/buyers/import"
                className="px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-lg font-semibold transition-colors"
              >
                Import Your Data
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-slate-600 dark:text-slate-300 text-sm">
                © {new Date().getFullYear()} BuyerLead. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <span>Created by Kartik Goel</span>
              <span>•</span>
              <span>Professional CRM Solution</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}