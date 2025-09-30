import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            content: "The Envoyou API provided a complete, auditable trail for our Scope 1 and 2 emissions data. It made our SEC filing process incredibly straightforward.",
            author: "Compliance Officer",
            role: "Publicly Traded Manufacturer",
            metric: "90% faster audit preparation"
        },
        {
            id: 2,
            content: "Integrating our energy consumption data was seamless. The API’s cross-validation against EPA data gave our legal team the confidence to file.",
            author: "Lead Engineer",
            role: "Energy Sector Company",
            metric: "Reduced legal review time by 60%"
        },
        {
            id: 3,
            content: "We received a 10-K ready data package in the exact format our auditors required. Envoyou is now a critical piece of our compliance stack.",
            author: "Chief Financial Officer",
            role: "Global Logistics Firm",
            metric: "Zero formatting errors on first filing"
        },
        {
            id: 4,
            content: "The developer-first approach and clear documentation had us calculating emissions within a day. A huge time-saver for our engineering team.",
            author: "VP of Engineering",
            role: "SaaS Provider",
            metric: "Integrated in under 24 hours"
        }
    ];

    return (
        <section className="py-20 bg-slate-950/50" id="testimonials">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why Leaders Choose Envoyou for SEC Compliance
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Finance, compliance, and engineering teams trust our platform to deliver auditable, investment-grade climate disclosures.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="mb-4">
                                <svg className="w-8 h-8 text-emerald-400 mb-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                </svg>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    "{testimonial.content}"
                                </p>
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-white">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-slate-400 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-emerald-400 font-semibold text-sm">
                                        {testimonial.metric}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Automate Your Climate Disclosure?
                    </h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Create your account and start calculating your emissions in minutes. No credit card required.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            to="https://app.envoyou.com/auth/register"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center space-x-2"
                        >
                            <span>Get Started for Free</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
