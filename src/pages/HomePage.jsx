import React from 'react';
import Button from '../components/Button';
import SECCalculatorSection from '../components/SECCalculatorSection';
import InfoCard from '../components/InfoCard';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQ from '../components/FAQ';
import { CheckCircle, Shield, TrendingUp, Users, Code, Database, FileText, GitBranch, Layers } from 'lucide-react';

const HomePage = () => {
    console.log('🏠 HomePage component is rendering');
    console.log('Current URL:', window.location.href);
    console.log('User agent:', navigator.userAgent);

    const handleGetStarted = () => {
        window.location.href = 'https://app.envoyou.com/auth/register';
    };

    const handleViewDocumentation = () => {
        window.location.href = 'https://docs.envoyou.com';
    };

    return (
        <div className="min-h-screen relative" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1" fill="currentColor" style={{ color: 'var(--envoyou-green)' }}/>
                        </pattern>
                        <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" style={{ color: 'var(--envoyou-green)' }}/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)"/>
                    <rect width="100%" height="100%" fill="url(#grid)"/>
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6 flex items-center justify-center font-aileron" style={{ color: 'var(--envoyou-white)' }}>
                            <img 
                                src="/svg/dark-mode.svg" 
                                alt="Envoyou" 
                                className="h-12 w-12 text-emerald-400 mr-4"
                            />
                            <span style={{ color: 'var(--envoyou-green)' }}>Envoy</span>OU
                        </h1>
                        <h2 className="text-2xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--envoyou-white)' }}>
                            SEC Climate Disclosure Compliance Made Simple
                        </h2>
                        <p className="text-xl mb-8 max-w-4xl mx-auto" style={{ color: 'var(--envoyou-gray)' }}>
                            Envoyou SEC API provides auditable Scope 1 & 2 emissions calculation, EPA cross-validation, and SEC-ready filing packages.
                            Meet regulatory requirements with forensic-grade traceability and professional compliance tools.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={handleGetStarted}
                            >
                                Get Started Free
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleViewDocumentation}
                            >
                                View Documentation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section id="features" className="py-20" style={{ backgroundColor: 'var(--envoyou-dark-light)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--envoyou-white)' }}>
                            Built for Forensic-Grade Compliance
                        </h2>
                        <p className="mt-4 text-lg max-w-3xl mx-auto" style={{ color: 'var(--envoyou-gray)' }}>
                            Our platform provides the tools you need for auditable, transparent, and efficient SEC reporting.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <TrendingUp className="h-8 w-8 mb-4" style={{ color: 'var(--envoyou-green)' }} />,
                                title: 'GHG Emissions Calculator',
                                description: 'Calculate Scope 1 & 2 emissions using up-to-date factors from EPA and other verified sources.',
                            },
                            {
                                icon: <GitBranch className="h-8 w-8 mb-4" style={{ color: 'var(--envoyou-green)' }} />,
                                title: 'Complete Audit Trail',
                                description: 'Every calculation, input, and data source is versioned and timestamped for forensic-grade traceability.',
                            },
                            {
                                icon: <CheckCircle className="h-8 w-8 mb-4" style={{ color: 'var(--envoyou-green)' }} />,
                                title: 'EPA Cross-Validation',
                                description: 'Automatically compare your results against public EPA data to detect anomalies and ensure accuracy.',
                            },
                            {
                                icon: <FileText className="h-8 w-8 mb-4" style={{ color: 'var(--envoyou-green)' }} />,
                                title: 'SEC-Ready Exports',
                                description: 'Generate 10-K friendly disclosure packages in JSON, CSV, and Excel formats with a single API call.',
                            },
                            {
                                icon: <Shield className="h-8 w-8 mb-4" style={{ color: 'var(--envoyou-green)' }} />,
                                title: 'Robust Security',
                                description: 'Secure your data with Supabase JWT authentication and role-based access control for audit endpoints.',
                            },
                            {
                                icon: <Layers className="h-8 w-8 mb-4" style={{ color: 'var(--envoyou-green)' }} />,
                                title: 'Developer-First API',
                                description: 'Integrate climate compliance directly into your systems with a clean, well-documented REST API.',
                            },
                        ].map((feature, index) => (
                            <div key={index} className="p-8 rounded-lg" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
                                {feature.icon}
                                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--envoyou-white)' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--envoyou-gray)' }}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SECCalculatorSection />

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20" style={{ backgroundColor: 'var(--envoyou-dark-light)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--envoyou-white)' }}>
                            Get Your Report in 3 Simple Steps
                        </h2>
                        <p className="mt-4 text-lg max-w-3xl mx-auto" style={{ color: 'var(--envoyou-gray)' }}>
                            From data input to SEC-ready exports, our process is designed for speed and accuracy.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 mx-auto mb-6">
                                <span className="text-2xl font-bold text-emerald-400">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--envoyou-white)' }}>Connect Your Data</h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>Input your fuel and electricity consumption data using our intuitive interface or connect directly via our API.</p>
                        </div>
                        <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 mx-auto mb-6">
                                <span className="text-2xl font-bold text-emerald-400">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--envoyou-white)' }}>Calculate & Validate</h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>Our engine calculates your Scope 1 & 2 emissions and automatically cross-validates the results with EPA data.</p>
                        </div>
                        <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 mx-auto mb-6">
                                <span className="text-2xl font-bold text-emerald-400">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--envoyou-white)' }}>Export & File</h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>Download a forensic-grade audit trail and a 10-K friendly data package, ready for your SEC filing.</p>
                        </div>
                    </div>
                </div>
            </section>

            <PricingSection />

            <TestimonialsSection />

            <FAQ />

            {/* CTA Section */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark-light)' }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--envoyou-white)' }}>
                        Ready to Automate Your SEC Climate Disclosure?
                    </h2>
                    <p className="text-lg mb-8" style={{ color: 'var(--envoyou-gray)' }}>
                        Join leading companies using Envoyou's SEC API for transparent, auditable, and efficient compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleGetStarted}
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleViewDocumentation}
                        >
                            View API Docs
                        </Button>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default HomePage;
