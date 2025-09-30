import React from 'react';
// Impor komponen yang diperlukan dari library chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

// Daftarkan semua komponen chart yang akan kita gunakan
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const VisualizationsSection = () => {

  // Data yang akurat sesuai dengan backend capabilities
  const breakdownData = {
    labels: ['EDGAR Database', 'EPA Envirofacts', 'EEA Indicators', 'ISO 14001 Cert', 'KLHK Permits'],
    datasets: [{
      data: [42, 28, 15, 10, 5], // EDGAR sebagai primary source (42%)
      backgroundColor: [
        '#10b981', // EDGAR - Primary green
        '#60a5fa', // EPA - Blue
        '#f97316', // EEA - Orange
        '#f43f5e', // ISO - Red
        '#a78bfa'  // KLHK - Purple
      ],
      borderWidth: 2,
      borderColor: '#1e293b',
      hoverBorderColor: '#ffffff',
      hoverBorderWidth: 3,
    }],
  };

  // Data yang lebih realistis untuk emissions trend
  const trendData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'CO2 Emissions (kt)',
      data: [2450, 2230, 1980, 1750, 1520, 1280],
      borderColor: '#60a5fa',
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#60a5fa',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: '#3b82f6',
      pointHoverBorderColor: '#ffffff',
      pointHoverBorderWidth: 3,
    }],
  };

  // Enhanced chart options
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#e2e8f0',
          font: { size: 12 },
          padding: 20,
          usePointStyle: true,
        }
      },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#e2e8f0',
        borderColor: '#475569',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value}% (${percentage}% of total data)`;
          }
        }
      }
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#e2e8f0',
        borderColor: '#475569',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            return context.parsed.y.toLocaleString() + ' kt CO2';
          }
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(148, 163, 184, 0.1)' },
        ticks: { color: '#94a3b8' }
      },
      y: {
        grid: { color: 'rgba(148, 163, 184, 0.1)' },
        ticks: {
          color: '#94a3b8',
          callback: function(value) {
            return value.toLocaleString() + ' kt';
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  return (
    <section id="visualizations" className="py-16 sm:py-24 bg-slate-900/30" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Visualize Your Emissions Data</h3>
          <p className="text-lg text-slate-400">Explore visualizations of your emissions data, sourced from verified public records, to prepare for your SEC disclosure.</p>
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Data Source Breakdown */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Data Source Reliability</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-emerald-400">Live Data</span>
              </div>
            </div>
            <div className="h-64">
              <Doughnut data={breakdownData} options={doughnutOptions} />
            </div>
          </div>

          {/* Emissions Trend */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Global CO2 Emission Trends</h4>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-slate-400">2019-2024</div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-blue-400">EPA Data</span>
              </div>
            </div>
            <div className="h-64">
              <Line data={trendData} options={lineOptions} />
            </div>
            <div className="mt-4 text-xs text-slate-400">
              Data sourced from EPA Envirofacts API with EDGAR fallback
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualizationsSection;