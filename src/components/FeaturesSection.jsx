import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Complete SEC Climate Disclosure Solution</h3>
                    <p className="mt-4 text-lg text-slate-400">
                        From emissions calculation to SEC filing packages, we handle the technical complexity of climate disclosure compliance so you can focus on your business.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature Card 1 */}
                    <div className="feature-card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="0">
                        <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M4.22 12.22a3 3 0 0 0 0 4.24l8.49 8.49a3 3 0 0 0 4.24 0l8.49-8.49a3 3 0 0 0 0-4.24l-8.49-8.49a3 3 0 0 0-4.24 0Z"/><path d="M16 12h-4"/></svg>
                        </div>
                        <h4 className="mt-6 text-xl font-bold text-white">Emissions Calculation</h4>
                        <p className="mt-2 text-slate-400">Calculate Scope 1 & 2 emissions using EPA-approved factors with complete audit trails for regulatory compliance and verification.</p>
                    </div>
                    {/* Feature Card 2 */}
                    <div className="feature-card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        </div>
                        <h4 className="mt-6 text-xl font-bold text-white">EPA Cross-Validation</h4>
                        <p className="mt-2 text-slate-400">Automatically compare your emissions against EPA facility data to detect anomalies and ensure accuracy before SEC filing.</p>
                    </div>
                    {/* Feature Card 3 */}
                    <div className="feature-card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3-3 3 3"/></svg>
                        </div>
                        <h4 className="mt-6 text-xl font-bold text-white">SEC Export Package</h4>
                        <p className="mt-2 text-slate-400">Generate complete SEC filing packages with 10-K compliant tables, audit trails, and supporting documentation ready for submission.</p>
                    </div>
                    {/* Feature Card 4 */}
                    <div className="feature-card p-8 rounded-xl" data-aos="fade-up" data-aos-delay="300">
                        <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                        </div>
                        <h4 className="mt-6 text-xl font-bold text-white">Forensic Audit Trail</h4>
                        <p className="mt-2 text-slate-400">Maintain complete documentation of all calculations, inputs, and methodologies for regulatory audits and compliance verification.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
