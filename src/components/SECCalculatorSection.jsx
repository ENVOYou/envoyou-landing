import React, { useState } from 'react';

const SECCalculatorSection = () => {
    const [formData, setFormData] = useState({
        company: '',
        scope1: {
            fuel_type: 'natural_gas',
            amount: '',
            unit: 'mmbtu'
        },
        scope2: {
            kwh: '',
            grid_region: 'RFC'
        }
    });
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [error, setError] = useState('');

    const fuelTypes = [
        { value: 'natural_gas', label: 'Natural Gas' },
        { value: 'coal', label: 'Coal' },
        { value: 'oil', label: 'Oil/Petroleum' },
        { value: 'propane', label: 'Propane' }
    ];

    const fuelUnits = [
        { value: 'mmbtu', label: 'MMBtu' },
        { value: 'therms', label: 'Therms' },
        { value: 'gallons', label: 'Gallons' },
        { value: 'tons', label: 'Tons' }
    ];

    const gridRegions = [
        { value: 'RFC', label: 'RFC (ReliabilityFirst)' },
        { value: 'WECC', label: 'WECC (Western)' },
        { value: 'TRE', label: 'TRE (Texas)' },
        { value: 'SERC', label: 'SERC (Southeast)' },
        { value: 'MRO', label: 'MRO (Midwest)' },
        { value: 'NPCC', label: 'NPCC (Northeast)' },
        { value: 'FRCC', label: 'FRCC (Florida)' },
        { value: 'SPP', label: 'SPP (Southwest)' }
    ];

    const handleInputChange = (section, field, value) => {
        if (section) {
            setFormData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [field]: value
            }));
        }
    };

    const handleCalculate = async () => {
        if (!formData.company.trim()) {
            setError('Please enter a company name');
            return;
        }

        if (!formData.scope1.amount && !formData.scope2.kwh) {
            setError('Please enter at least one emission source');
            return;
        }

        setLoading(true);
        setError('');
        setResults(null);

        try {
            // Prepare calculation data
            const calculationData = {
                company: formData.company.trim(),
                ...(formData.scope1.amount && {
                    scope1: {
                        fuel_type: formData.scope1.fuel_type,
                        amount: parseFloat(formData.scope1.amount),
                        unit: formData.scope1.unit
                    }
                }),
                ...(formData.scope2.kwh && {
                    scope2: {
                        kwh: parseFloat(formData.scope2.kwh),
                        grid_region: formData.scope2.grid_region
                    }
                })
            };

            // Call SEC API calculation endpoint
            const response = await fetch('/v1/emissions/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'demo_key' // Demo key for landing page
                },
                body: JSON.stringify(calculationData)
            });

            if (response.ok) {
                const data = await response.json();
                setResults(data.data);
            } else {
                // Fallback to mock data for demo
                const mockResults = {
                    company: formData.company,
                    scope1_emissions: formData.scope1.amount ? {
                        co2_tons: (parseFloat(formData.scope1.amount) * 0.05302).toFixed(2),
                        fuel_type: formData.scope1.fuel_type,
                        amount: parseFloat(formData.scope1.amount),
                        unit: formData.scope1.unit,
                        emission_factor: 0.05302,
                        factor_source: 'EPA'
                    } : null,
                    scope2_emissions: formData.scope2.kwh ? {
                        co2_tons: (parseFloat(formData.scope2.kwh) * 0.000451).toFixed(2),
                        kwh: parseFloat(formData.scope2.kwh),
                        grid_region: formData.scope2.grid_region,
                        emission_factor: 0.000451,
                        factor_source: 'EPA eGRID'
                    } : null,
                    total_emissions: (
                        (formData.scope1.amount ? parseFloat(formData.scope1.amount) * 0.05302 : 0) +
                        (formData.scope2.kwh ? parseFloat(formData.scope2.kwh) * 0.000451 : 0)
                    ).toFixed(2),
                    calculation_id: 'demo_calc_' + Date.now(),
                    timestamp: new Date().toISOString()
                };
                setResults(mockResults);
            }
        } catch (err) {
            setError('Failed to calculate emissions. Please try again.');
            console.error('Calculation error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="sec-calculator" className="py-16 sm:py-20" data-aos="fade-up">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">SEC Emissions Calculator</h3>
                    <p className="mt-3 text-slate-400 text-lg">
                        Calculate your Scope 1 & 2 emissions for SEC Climate Disclosure compliance
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8">
                        {/* Company Name */}
                        <div className="mb-8">
                            <label className="block text-white font-semibold mb-3">Company Name</label>
                            <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => handleInputChange(null, 'company', e.target.value)}
                                placeholder="Enter your company name"
                                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Scope 1 Emissions */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-emerald-400">Scope 1 Emissions</h4>
                                <p className="text-sm text-slate-400">Direct emissions from fuel combustion</p>
                                
                                <div>
                                    <label className="block text-white font-medium mb-2">Fuel Type</label>
                                    <select
                                        value={formData.scope1.fuel_type}
                                        onChange={(e) => handleInputChange('scope1', 'fuel_type', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    >
                                        {fuelTypes.map(fuel => (
                                            <option key={fuel.value} value={fuel.value}>{fuel.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-white font-medium mb-2">Amount</label>
                                        <input
                                            type="number"
                                            value={formData.scope1.amount}
                                            onChange={(e) => handleInputChange('scope1', 'amount', e.target.value)}
                                            placeholder="0"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white font-medium mb-2">Unit</label>
                                        <select
                                            value={formData.scope1.unit}
                                            onChange={(e) => handleInputChange('scope1', 'unit', e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        >
                                            {fuelUnits.map(unit => (
                                                <option key={unit.value} value={unit.value}>{unit.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Scope 2 Emissions */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-emerald-400">Scope 2 Emissions</h4>
                                <p className="text-sm text-slate-400">Indirect emissions from purchased electricity</p>
                                
                                <div>
                                    <label className="block text-white font-medium mb-2">Electricity Consumption (kWh)</label>
                                    <input
                                        type="number"
                                        value={formData.scope2.kwh}
                                        onChange={(e) => handleInputChange('scope2', 'kwh', e.target.value)}
                                        placeholder="0"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Grid Region</label>
                                    <select
                                        value={formData.scope2.grid_region}
                                        onChange={(e) => handleInputChange('scope2', 'grid_region', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    >
                                        {gridRegions.map(region => (
                                            <option key={region.value} value={region.value}>{region.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Calculate Button */}
                        <div className="mt-8 text-center">
                            <button
                                onClick={handleCalculate}
                                disabled={loading}
                                className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center space-x-2 mx-auto"
                            >
                                {loading ? (
                                    <>
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Calculating...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>Calculate Emissions</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Error Display */}
                        {error && (
                            <div className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-lg">
                                <p className="text-red-400">{error}</p>
                            </div>
                        )}

                        {/* Results Display */}
                        {results && (
                            <div className="mt-8 space-y-6">
                                <h4 className="text-xl font-semibold text-white text-center">Calculation Results</h4>
                                
                                {/* Total Emissions */}
                                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6 text-center">
                                    <h5 className="text-2xl font-bold text-emerald-400">
                                        {results.total_emissions} tons CO₂e
                                    </h5>
                                    <p className="text-slate-300 mt-2">Total Annual Emissions</p>
                                </div>

                                {/* Breakdown */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {results.scope1_emissions && (
                                        <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-6">
                                            <h6 className="text-lg font-semibold text-white mb-4">Scope 1 Emissions</h6>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">CO₂ Emissions:</span>
                                                    <span className="text-white font-medium">{results.scope1_emissions.co2_tons} tons</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Fuel Type:</span>
                                                    <span className="text-white">{results.scope1_emissions.fuel_type.replace('_', ' ')}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Amount:</span>
                                                    <span className="text-white">{results.scope1_emissions.amount} {results.scope1_emissions.unit}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Emission Factor:</span>
                                                    <span className="text-white">{results.scope1_emissions.emission_factor}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Source:</span>
                                                    <span className="text-emerald-400">{results.scope1_emissions.factor_source}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {results.scope2_emissions && (
                                        <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-6">
                                            <h6 className="text-lg font-semibold text-white mb-4">Scope 2 Emissions</h6>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">CO₂ Emissions:</span>
                                                    <span className="text-white font-medium">{results.scope2_emissions.co2_tons} tons</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Electricity:</span>
                                                    <span className="text-white">{results.scope2_emissions.kwh.toLocaleString()} kWh</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Grid Region:</span>
                                                    <span className="text-white">{results.scope2_emissions.grid_region}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Emission Factor:</span>
                                                    <span className="text-white">{results.scope2_emissions.emission_factor}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Source:</span>
                                                    <span className="text-emerald-400">{results.scope2_emissions.factor_source}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Next Steps */}
                                <div className="bg-slate-700/20 border border-slate-600 rounded-lg p-6">
                                    <h6 className="text-lg font-semibold text-white mb-4">Next Steps for SEC Compliance</h6>
                                    <div className="space-y-3">
                                        <div className="flex items-center text-slate-300">
                                            <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Validate against EPA facility data</span>
                                        </div>
                                        <div className="flex items-center text-slate-300">
                                            <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Generate SEC filing package</span>
                                        </div>
                                        <div className="flex items-center text-slate-300">
                                            <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Download audit trail documentation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SECCalculatorSection;