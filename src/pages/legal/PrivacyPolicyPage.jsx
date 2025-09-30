import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="pt-20">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
                        <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-white">Privacy Policy</span>
                    </nav>

                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            This Privacy Policy describes how Envoyou ("we," "us," or "our") collects, uses, and discloses your information when you use our SEC Climate Disclosure compliance platform (the "Service").
                        </p>
                        <p className="text-sm text-slate-500 mt-2">Last updated: September 30, 2025</p>
                    </div>

                    <div className="prose prose-slate prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                            <p>We collect information necessary to provide and improve our Service, ensure security, and comply with legal obligations.</p>
                            <h3 className="text-xl font-medium text-white mt-6 mb-3">a. Information You Provide to Us</h3>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Account Information:</strong> When you register for an account, we collect your name, email address, and company name.</li>
                                <li><strong>User Input Data:</strong> To perform emissions calculations, you must provide facility-level data, which may include fuel consumption, electricity usage (kWh), and grid region. This is the core data required for the Service to function.</li>
                                <li><strong>Communications:</strong> If you contact us directly for support or inquiries, we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</li>
                            </ul>
                            <h3 className="text-xl font-medium text-white mt-6 mb-3">b. Information We Collect Automatically</h3>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Log and Usage Data:</strong> We collect information related to your access to and use of the Service, including the type of browser you use, app version, access times, pages viewed, your IP address, and the page you visited before navigating to our Service.</li>
                                <li><strong>API Usage Data:</strong> We monitor API requests to track usage, prevent abuse, and ensure service stability. This includes endpoint paths, request timestamps, and response statuses. We do not log the specific content of your API payloads.</li>
                                <li><strong>Cookies and Similar Tracking Technologies:</strong> We use cookies to operate and administer our Site, gather usage data on our Site, and improve your experience on it. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                            <p>We use the information we collect for various purposes:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>To provide, operate, and maintain our Service, including calculating GHG emissions and generating reports.</li>
                                <li>To create and manage your account, including authenticating you and sending you technical notices, updates, and security alerts.</li>
                                <li>To improve, personalize, and expand our Service by analyzing how you and other users interact with it.</li>
                                <li>To provide customer support and respond to your requests, questions, and feedback.</li>
                                <li>To monitor and prevent security incidents, fraud, and other malicious activity.</li>
                                <li>For compliance purposes, including enforcing our Terms of Service or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Share Your Information</h2>
                            <p>We do not sell your personal information. We may share the information we collect in the following limited circumstances:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Service Providers:</strong> We share information with third-party vendors and service providers that perform services on our behalf. These include:
                                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                                        <li>**Supabase:** For database hosting, storage, and user authentication. Supabase is SOC 2 compliant.</li>
                                        <li>**Netlify:** For hosting our landing page and documentation site.</li>
                                        <li>**Google Analytics:** To analyze website traffic and usage patterns (anonymized data).</li>
                                    </ul>
                                </li>
                                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, or in urgent circumstances to protect the personal safety of users of the Service or the public.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                            <p>We implement a variety of security measures to maintain the safety of your personal information. Our security measures include:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Data encryption in transit (TLS 1.3) and at rest (AES-256).</li>
                                <li>Use of Supabase for secure authentication, including JSON Web Tokens (JWTs) and Role-Level Security.</li>
                                <li>Regular security assessments and vulnerability scanning.</li>
                                <li>Strict internal access controls to ensure only authorized personnel can access user data.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Data Rights and Choices</h2>
                            <p>You have certain rights regarding the personal information we hold about you. You may access, update, or delete your account information at any time by logging into your account settings. You may also opt-out of marketing communications by following the unsubscribe link in our emails.</p>
                            <p>Depending on your location, you may have additional rights under local law, such as GDPR or CCPA (see below).</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">6. GDPR and CCPA</h2>
                            <h3 className="text-xl font-medium text-white mt-6 mb-3">a. European Union (GDPR)</h3>
                            <p>If you are a resident of the European Economic Area (EEA), you have the right to access, rectify, or erase your personal data, as well as the right to data portability and the right to object to our processing of your personal data.</p>
                            <h3 className="text-xl font-medium text-white mt-6 mb-3">b. California (CCPA)</h3>
                            <p>If you are a California resident, you have the right to know what personal information we collect, use, and disclose. You also have the right to request deletion of your personal information and to opt-out of the sale of your personal information (for the record, we do not sell your data).</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">7. Children's Privacy</h2>
                            <p>Our Service is not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that a child under 16 has provided us with personal information, we will take steps to delete such information.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Privacy Policy</h2>
                            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                            <a href="mailto:privacy@envoyou.com" className="text-emerald-400 hover:text-emerald-300">privacy@envoyou.com</a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicyPage;