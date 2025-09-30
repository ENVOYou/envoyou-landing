import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is the SEC Climate Disclosure Rule?',
        answer: "The SEC's rule requires public companies to disclose climate-related risks and greenhouse gas (GHG) emissions. Our platform is specifically designed to help you meet the requirements for Scope 1 and Scope 2 emissions reporting.",
    },
    {
        question: 'What are Scope 1 and Scope 2 emissions?',
        answer: "Scope 1 emissions are direct emissions from sources your company owns or controls (e.g., fuel combustion). Scope 2 emissions are indirect emissions from the generation of purchased electricity, steam, heating, and cooling consumed by your company.",
    },
    {
        question: 'Is this service compliant with the new SEC rule?',
        answer: "Yes, our platform is built to align with the SEC's final rule for climate disclosure. We provide the necessary calculations, audit trails, and data exports to support your filing.",
    },
    {
        question: 'What data do I need to provide?',
        answer: "You will need to provide data on your facility's fuel consumption (e.g., natural gas, diesel) for Scope 1 and electricity purchase records (in kWh) for Scope 2. Our system uses this data along with official EPA emission factors to perform the calculations.",
    },
    {
        question: 'How does the EPA cross-validation work?',
        answer: "After calculating your emissions, our system can automatically compare your results with publicly available data from the EPA's databases (like eGRID and FLIGHT). This helps identify potential discrepancies and adds a layer of verification to your disclosure.",
    },
    {
        question: 'Can I use this for non-US companies?',
        answer: 'While our system is primarily designed for SEC compliance, the underlying emissions calculation engine is globally applicable. We use standard GHG Protocol methodologies and can incorporate various regional emission factors. Contact us for more details on international use cases.',
    },
];

const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0); // Open the first item by default

    return (
        <div className="border-b border-slate-700 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left"
            >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="mt-4 text-slate-400">
                    <p>{faq.answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    return (
        <section id="faq" className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-slate-400">Everything you need to know about our SEC compliance solution.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
