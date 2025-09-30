import React from 'react';
import Button from '../components/Button';
import CevsCalculator from '../components/CevsCalculator';
import InfoCard from '../components/InfoCard';
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
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark-light)' }}>
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

            {/* SEC Calculator Section */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--envoyou-white)' }}>
                            Try SEC Emissions Calculator
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--envoyou-gray)' }}>
                            Calculate your Scope 1 & 2 emissions for SEC Climate Disclosure compliance
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-xl border border-slate-700 p-8">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-white mb-4">Interactive Demo</h3>
                            <p className="text-slate-400 mb-6">Experience our SEC compliance tools with real EPA emission factors</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="primary" size="lg" onClick={handleGetStarted}>
                                    Start Free Trial
                                </Button>
                                <Button variant="outline" size="lg" onClick={handleViewDocumentation}>
                                    View API Docs
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEC Compliance Features */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--envoyou-white)' }}>
                            Complete SEC Compliance Solution
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--envoyou-gray)' }}>
                            Everything you need for SEC Climate Disclosure compliance in one API
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Database />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>EPA Factors</h3>
                            <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Official EPA emission factors for accurate calculations</p>
                        </div>

                        <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <CheckCircle />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>Cross-Validation</h3>
                            <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Automatic validation against EPA facility data</p>
                        </div>

                        <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Shield />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>Audit Trail</h3>
                            <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Forensic-grade documentation for regulatory review</p>
                        </div>

                        <div className="text-center p-6 rounded-lg border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <TrendingUp />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--envoyou-white)' }}>SEC Export</h3>
                            <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>10-K compliant filing packages ready for submission</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark-light)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--envoyou-white)' }}>
                            Transparent Methodology
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--envoyou-gray)' }}>
                            Our scoring algorithm combines multiple environmental factors into a single, standardized metric
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--envoyou-white)' }}>
                                Scoring Factors
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <CheckCircle className="text-green-500 mr-3" size={20} />
                                    <span style={{ color: 'var(--envoyou-gray)' }}>Carbon emissions and climate impact</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="text-green-500 mr-3" size={20} />
                                    <span style={{ color: 'var(--envoyou-gray)' }}>Water usage and conservation</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="text-green-500 mr-3" size={20} />
                                    <span style={{ color: 'var(--envoyou-gray)' }}>Waste management practices</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="text-green-500 mr-3" size={20} />
                                    <span style={{ color: 'var(--envoyou-gray)' }}>Energy efficiency metrics</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="text-green-500 mr-3" size={20} />
                                    <span style={{ color: 'var(--envoyou-gray)' }}>Regulatory compliance history</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--envoyou-white)' }}>
                                Score Ranges
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--envoyou-dark)', borderColor: 'var(--envoyou-border)' }}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold" style={{ color: 'var(--envoyou-green)' }}>90-100</span>
                                        <span className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Excellent</span>
                                    </div>
                                    <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Industry-leading environmental performance</p>
                                </div>

                                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--envoyou-dark)', borderColor: 'var(--envoyou-border)' }}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold" style={{ color: 'var(--envoyou-yellow)' }}>70-89</span>
                                        <span className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Good</span>
                                    </div>
                                    <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Above-average environmental practices</p>
                                </div>

                                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--envoyou-dark)', borderColor: 'var(--envoyou-border)' }}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold" style={{ color: 'var(--envoyou-orange)' }}>50-69</span>
                                        <span className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Average</span>
                                    </div>
                                    <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Meeting basic environmental standards</p>
                                </div>

                                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--envoyou-dark)', borderColor: 'var(--envoyou-border)' }}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold" style={{ color: 'var(--envoyou-red)' }}>0-49</span>
                                        <span className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Needs Improvement</span>
                                    </div>
                                    <p className="text-sm" style={{ color: 'var(--envoyou-gray)' }}>Significant environmental concerns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--envoyou-white)' }}>
                            Perfect for ESG & Supply Chain Teams
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--envoyou-gray)' }}>
                            Streamline your environmental assessment process with standardized scoring
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group cursor-pointer" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Shield />
                            </div>
                            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--envoyou-white)' }}>
                                ESG Reporting
                            </h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>
                                Automate environmental scoring for comprehensive ESG reports and stakeholder communications
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group cursor-pointer" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <TrendingUp />
                            </div>
                            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--envoyou-white)' }}>
                                Supply Chain Risk
                            </h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>
                                Evaluate supplier environmental performance to mitigate supply chain risks and ensure compliance
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group cursor-pointer" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Users />
                            </div>
                            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--envoyou-white)' }}>
                                Investor Relations
                            </h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>
                                Provide transparent environmental metrics to investors and demonstrate sustainability commitments
                            </p>
                        </div>

                        <div className="p-6 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group cursor-pointer" style={{ backgroundColor: 'var(--envoyou-dark-light)', borderColor: 'var(--envoyou-border)' }}>
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--envoyou-green)' }}>
                                <Code />
                            </div>
                            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--envoyou-white)' }}>
                                Developer
                            </h3>
                            <p style={{ color: 'var(--envoyou-gray)' }}>
                                Integrate CEVS scoring into your applications with our comprehensive API and developer tools
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" style={{ backgroundColor: 'var(--envoyou-dark-light)' }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--envoyou-white)' }}>
                        Ready to Get Your CEVS Score?
                    </h2>
                    <p className="text-lg mb-8" style={{ color: 'var(--envoyou-gray)' }}>
                        Join leading companies using Envoyou's CEVS API for transparent environmental assessment
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
