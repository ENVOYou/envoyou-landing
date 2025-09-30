import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    const [isAnnual, setIsAnnual] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});

    // Pricing configuration
    const pricingConfig = {
        premium: {
            monthlyPrice: 49, // Adjusted for more value
            annualDiscount: 0.20, // 20% discount for annual
        }
    };

    // Dynamic pricing calculations
    const monthlyPrice = pricingConfig.premium.monthlyPrice;
    const annualDiscount = pricingConfig.premium.annualDiscount;
    const annualPrice = Math.round(monthlyPrice * 12 * (1 - annualDiscount));
    const discountedMonthlyPrice = Math.round(annualPrice / 12);
    const savings = Math.round(annualDiscount * 100);

    // Billing & Terms configuration - Made more realistic for a solo dev
    const billingConfig = {
        title: "Billing & Terms",
        sections: [
            {
                id: "subscription",
                title: "Subscription Billing",
                content: "Charges are processed securely via Stripe. All plans are subject to a 14-day money-back guarantee."
            },
            {
                id: "plan_changes",
                title: "Plan Changes",
                content: "Upgrades or downgrades can be requested at any time and will be prorated."
            },
            {
                id: "special_programs",
                title: "Special Programs",
                content: "We offer discounts for non-profits, students, and early-stage startups. These programs are subject to review and approval.",
                subItems: [
                    "Startup Program: Eligible companies receive a significant discount on their first year.",
                    "Academic/NGO Program: Verified institutions and non-profits receive a substantial discount."
                ]
            },
            {
                id: "support",
                title: "Support & Service Levels",
                content: "",
                subItems: [
                    "Free Plan: Community support via GitHub issues and documentation.",
                    "Premium Plan: Direct email support, with responses typically within 1-2 business days.",
                    "Business Plan: Priority email support and scheduled consultation calls."
                ]
            },
            {
                id: "contact",
                title: "Contact Information",
                content: "For any questions regarding billing, sales, or custom plans, please reach out.",
                contactLinks: [
                    {
                        type: "email",
                        label: "Sales & Billing",
                        value: "sales@envoyou.com"
                    }
                ]
            }
        ]
    };

    // Toggle accordion section
    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const pricingData = {
        basic: {
            name: "Free",
            price: 0,
            requests: "100 requests/day",
            target: "For students, researchers, and developers exploring the API."
        },
        premium: {
            name: "Premium",
            monthlyPrice: monthlyPrice,
            annualPrice: annualPrice,
            discountedMonthlyPrice: discountedMonthlyPrice,
            requests: "2,000 requests/day",
            target: "For small to medium-sized businesses needing reliable compliance tools."
        },
        business: {
            name: "Business",
            price: "Custom",
            requests: "Custom request limits",
            target: "For businesses with specific needs for data, support, or features."
        }
    };

    return (
        <section id="pricing" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Simple, Transparent Pricing</h3>
                    <p className="mt-4 text-lg text-slate-400">
                        Choose a plan that scales with your needs. Start for free and upgrade when you're ready.
                    </p>
                </div>

                <div className="mt-12 flex justify-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="bg-slate-800 p-1 rounded-lg flex items-center">
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                                !isAnnual
                                    ? 'bg-emerald-500 text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all relative ${
                                isAnnual
                                    ? 'bg-emerald-500 text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            Annual
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                                SAVE {savings}%
                            </span>
                        </button>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Free Plan */}
                    <div className="feature-card p-8 rounded-xl flex flex-col" data-aos="fade-up">
                        <h4 className="text-lg font-semibold text-emerald-400">{pricingData.basic.name}</h4>
                        <p className="mt-2 text-4xl font-bold text-white">$0</p>
                        <p className="text-slate-400">{pricingData.basic.target}</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{pricingData.basic.requests}</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Scope 1 & 2 Emissions Calculation</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Community Support</li>
                        </ul>
                        <a href="https://app.envoyou.com/auth/register" className="mt-8 w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors block">Get Started</a>
                    </div>

                    {/* Premium Plan */}
                    <div className="relative feature-card p-8 rounded-xl flex flex-col border-2 border-emerald-500" data-aos="fade-up" data-aos-delay="150">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">Most Popular</div>
                        <h4 className="text-lg font-semibold text-emerald-400">{pricingData.premium.name}</h4>
                        <div className="mt-2">
                            {isAnnual ? (
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-4xl font-bold text-white">${discountedMonthlyPrice}</span>
                                        <span className="text-lg font-medium text-slate-400">/month</span>
                                    </div>
                                    <p className="text-xs text-slate-400">Billed annually (${annualPrice}/year)</p>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-bold text-white">${monthlyPrice}</span>
                                    <span className="text-lg font-medium text-slate-400">/month</span>
                                </div>
                            )}
                        </div>
                        <p className="text-slate-400 mt-2">{pricingData.premium.target}</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{pricingData.premium.requests}</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>All features from the Free plan</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Audit Trail & SEC Exports</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>EPA Cross-Validation</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Direct Email Support</li>
                        </ul>
                        <a href="https://app.envoyou.com/auth/register" className="mt-8 w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors block">Choose Premium</a>
                    </div>

                    {/* Business Plan */}
                    <div className="feature-card p-8 rounded-xl flex flex-col" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="text-lg font-semibold text-emerald-400">{pricingData.business.name}</h4>
                        <p className="mt-2 text-4xl font-bold text-white">{pricingData.business.price}</p>
                        <p className="text-slate-400">{pricingData.business.target}</p>
                        <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>All features from the Premium plan</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{pricingData.business.requests}</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Dedicated Onboarding & Support</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Custom Feature Development</li>
                            <li className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Direct Consultation Calls</li>
                        </ul>
                        <a href="mailto:sales@envoyou.com" className="mt-8 w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors block">Contact Sales</a>
                    </div>
                </div>

                {/* Feature Comparison Table */}
                <div className="mt-20 max-w-6xl mx-auto" data-aos="fade-up">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Full Feature Comparison</h3>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4">
                        <p className="md:hidden text-sm text-slate-400 text-center mb-4">Scroll table horizontally to see all plans &rarr;</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse min-w-[600px]">
                                <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="text-left py-4 px-6 text-slate-300 font-semibold">Feature</th>
                                    <th className="text-center py-4 px-6 text-slate-300 font-semibold">Free</th>
                                    <th className="text-center py-4 px-6 text-emerald-400 font-semibold">Premium</th>
                                    <th className="text-center py-4 px-6 text-slate-300 font-semibold">Business</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-800/50"><td colSpan="4" className="py-3 px-6 text-sm font-semibold text-slate-400 bg-slate-800/30">Core</td></tr>
                                <tr className="border-b border-slate-800/50">
                                    <td className="py-4 px-6 text-white font-medium">API Request Limit</td>
                                    <td className="py-4 px-6 text-center text-slate-300">100 / day</td>
                                    <td className="py-4 px-6 text-center text-emerald-400 font-semibold">2,000 / day</td>
                                    <td className="py-4 px-6 text-center text-slate-300">Custom</td>
                                </tr>
                                <tr className="border-b border-slate-800/50 bg-slate-900/20">
                                    <td className="py-4 px-6 text-white font-medium">Scope 1 & 2 Calculation</td>
                                    <td className="py-4 px-6 text-center"><span className="text-emerald-400 text-xl">✔</span></td>
                                    <td className="py-4 px-6 text-center"><span className="text-emerald-400 text-xl">✔</span></td>
                                    <td className="py-4 px-6 text-center"><span className="text-emerald-400 text-xl">✔</span></td>
                                </tr>
                                <tr className="border-b border-slate-800/50"><td colSpan="4" className="py-3 px-6 text-sm font-semibold text-slate-400 bg-slate-800/30">Reporting & Compliance</td></tr>
                                <tr className="border-b border-slate-800/50">
                                    <td className="py-4 px-6 text-white font-medium">Audit Trail</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center"><span className="text-emerald-400 text-xl">✔</span></td>
                                    <td className="py-4 px-6 text-center"><span className="text-emerald-400 text-xl">✔</span></td>
                                </tr>
                                <tr className="border-b border-slate-800/50 bg-slate-900/20">
                                    <td className="py-4 px-6 text-white font-medium">SEC-Ready Exports (JSON, CSV)</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center"><span className="text-emerald-400 text-xl">✔</span></td>
                                    <td className="py-4 px-6 text-center"><span className="text-emerald-400 text-xl">✔</span></td>
                                </tr>
                                <tr className="border-b border-slate-800/50">
                                    <td className="py-4 px-6 text-white font-medium">EPA Data Cross-Validation</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center"><span className="text-emerald-400 text-xl">✔</span></td>
                                    <td className="py-4 px-6 text-center"><span className="text-emerald-400 text-xl">✔</span></td>
                                </tr>
                                <tr className="border-b border-slate-800/50"><td colSpan="4" className="py-3 px-6 text-sm font-semibold text-slate-400 bg-slate-800/30">Support & Services</td></tr>
                                <tr className="border-b border-slate-800/50">
                                    <td className="py-4 px-6 text-white font-medium">Support Level</td>
                                    <td className="py-4 px-6 text-center text-slate-300">Community</td>
                                    <td className="py-4 px-6 text-center text-emerald-400 font-semibold">Direct Email</td>
                                    <td className="py-4 px-6 text-center text-slate-300">Priority & Calls</td>
                                </tr>
                                <tr className="border-b border-slate-800/50 bg-slate-900/20">
                                    <td className="py-4 px-6 text-white font-medium">Dedicated Onboarding</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center text-slate-500">—</td>
                                    <td className="py-4 px-6 text-center"><span className="text-emerald-400 text-xl">✔</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>

                {/* Billing & Terms Section */}
                <div className="mt-20 max-w-4xl mx-auto" data-aos="fade-up">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{billingConfig.title}</h3>
                        <p className="text-slate-400">Clear, simple rules for all our plans.</p>
                    </div>
                    <div className="space-y-4">
                        {billingConfig.sections.map((section) => (
                            <div key={section.id} className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden">
                                <button onClick={() => toggleSection(section.id)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors">
                                    <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                                    <svg className={`w-5 h-5 text-emerald-400 transform transition-transform ${expandedSections[section.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                {expandedSections[section.id] && (
                                    <div className="px-6 pb-4 pt-4 border-t border-slate-700/50">
                                        {section.content && <p className="text-slate-300 mb-3">{section.content}</p>}
                                        {section.contactLinks && (
                                            <a href={`mailto:${section.contactLinks[0].value}`} className="text-emerald-400 hover:text-emerald-300 underline">{section.contactLinks[0].value}</a>
                                        )}
                                        {section.subItems && (
                                            <ul className="space-y-2">
                                                {section.subItems.map((item, index) => (
                                                    <li key={index} className="text-slate-400 flex items-start">
                                                        <span className="text-emerald-400 mr-2 mt-1">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;