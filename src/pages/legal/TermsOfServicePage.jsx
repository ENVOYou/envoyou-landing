import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="pt-20">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
                        <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-white">Terms of Service</span>
                    </nav>

                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            These Terms of Service govern your access to and use of the Envoyou SEC Climate Disclosure compliance platform.
                        </p>
                        <p className="text-sm text-slate-500 mt-2">Last updated: September 30, 2025</p>
                    </div>

                    <div className="prose prose-slate prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                            <p>By creating an account or using the Envoyou platform, API, or any related services (collectively, the "Service"), you agree to be bound by these Terms of Service and our <Link to="/legal/privacy" className="text-emerald-400 hover:text-emerald-300 underline">Privacy Policy</Link>. If you do not agree to these Terms, do not use the Service.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                            <p>Envoyou provides a software-as-a-service platform designed to assist companies in calculating, managing, and reporting greenhouse gas (GHG) emissions for the purpose of complying with the SEC Climate Disclosure rule. The Service includes:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>A GHG Emissions Calculator for Scope 1 and Scope 2 emissions.</li>
                                <li>An Audit Trail feature that provides traceability for all calculations.</li>
                                <li>Cross-validation capabilities against public EPA data.</li>
                                <li>Export functionalities for generating SEC-ready data packages (e.g., JSON, CSV).</li>
                                <li>A REST API for programmatic access to the Service.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
                            <p>You are responsible for safeguarding your account and API keys. You agree to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Provide accurate, current, and complete information during the registration process.</li>
                                <li>Keep your password and API keys confidential and not disclose them to any third party.</li>
                                <li>Notify us immediately of any unauthorized use of your account.</li>
                                <li>Accept full responsibility for all activities that occur under your account.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">4. User Data and Intellectual Property</h2>
                            <h3 className="text-xl font-medium text-white mt-6 mb-3">a. Your Data</h3>
                            <p>You retain all ownership rights to the data you submit to the Service (e.g., your company's fuel and electricity consumption data), hereafter referred to as "User Data." You are solely responsible for the accuracy, legality, and integrity of your User Data. By using the Service, you grant Envoyou a worldwide, non-exclusive, royalty-free license to use, process, and transmit your User Data as necessary to provide and improve the Service.</p>
                            <h3 className="text-xl font-medium text-white mt-6 mb-3">b. Our Intellectual Property</h3>
                            <p>The Service itself, including the underlying software, algorithms, API, documentation, and all related trademarks and branding, are the exclusive property of Envoyou and its licensors. You may not copy, modify, or reverse engineer any part of the Service.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Acceptable Use</h2>
                            <p>You agree not to misuse the Service. Prohibited actions include, but are not limited to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Using the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
                                <li>Submitting knowingly false, inaccurate, or misleading information to the Service or for regulatory filings.</li>
                                <li>Interfering with or disrupting the integrity or performance of the Service or its infrastructure.</li>
                                <li>Attempting to gain unauthorized access to the Service or its related systems.</li>
                                <li>Reselling, sublicensing, or otherwise making the Service available to any third party without our express written consent.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">6. Fees and Payment</h2>
                            <p>Access to certain features of the Service may require payment of fees. All fees are based on the subscription plan you select. You agree to pay all applicable fees as described on our pricing page or in a separate agreement with us. Specific billing terms, including frequency and payment methods, will be specified in your subscription plan or order form.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
                            <p>You may terminate your account at any time through your account settings. We may suspend or terminate your access to the Service at any time, with or without cause, if you violate these Terms. Upon termination, your right to use the Service will immediately cease, and we may delete your User Data in accordance with our data retention policies.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">8. Disclaimer of Warranties</h2>
                            <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Envoyou expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, timely, secure, or error-free.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
                            <p>To the fullest extent permitted by law, Envoyou shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of the Service.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">10. Governing Law</h2>
                            <p>These Terms shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to Terms</h2>
                            <p>We reserve the right to modify these Terms at any time. If we make material changes, we will provide you with notice, such as by sending an email or displaying a prominent notice within the Service. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
                            <p>If you have any questions about these Terms of Service, please contact us at:</p>
                            <a href="mailto:legal@envoyou.com" className="text-emerald-400 hover:text-emerald-300">legal@envoyou.com</a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsOfServicePage;