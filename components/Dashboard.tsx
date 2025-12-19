
import React, { useState, useEffect } from 'react';
import { ModuleType, GrantOpportunity } from '../types';

interface DashboardProps {
  onNavigate: (module: ModuleType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [recentGrants, setRecentGrants] = useState<GrantOpportunity[]>([]);

  useEffect(() => {
    // Mocking the latest 3 grants from the RSS stream
    const mockGrants: GrantOpportunity[] = [
      {
        id: '1',
        title: "Iqlim o'zgarishi va barqaror qishloq xo'jaligi",
        agency: 'Horizon Europe',
        deadline: '2024-12-15',
        amount: '€2,500,000',
        link: '#',
        description: '...'
      },
      {
        id: '2',
        title: "DSc tadqiqotchilari uchun davlat grantlari",
        agency: 'Innovatsiya Vazirligi',
        deadline: '2024-11-20',
        amount: '500M UZS',
        link: '#',
        description: '...'
      },
      {
        id: '3',
        title: "Fulbright Visiting Scholar Program",
        agency: 'US Embassy',
        deadline: '2025-01-10',
        amount: 'Full Fund',
        link: '#',
        description: '...'
      }
    ];
    setRecentGrants(mockGrants);
  }, []);

  return (
    <div className="space-y-6">
      <div className="col-span-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 serif leading-tight">Akademik Intellektual <br/>Tizimga Xush Kelibsiz</h2>
          <p className="text-blue-100/80 text-lg max-w-2xl mb-6">
            DSc darajasidagi tadqiqotchilar uchun yagona kognitiv ekotizim. 
            Ilmiy ishingizni IMRaD standartiga moslang va global grantlar oqimini real vaqtda kuzating.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate(ModuleType.SCIENTIFIC_JUSTIFICATION)}
              className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-all shadow-xl shadow-blue-500/20"
            >
              Ilmiy Asosnoma
            </button>
            <button 
              onClick={() => onNavigate(ModuleType.IMRAD_ANALYZER)}
              className="bg-blue-600/30 border border-blue-400/30 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-600/50 transition-all"
            >
              Tahlilni Boshlash
            </button>
          </div>
        </div>
        {/* Abstract shapes for aesthetics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full -ml-32 -mb-32"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group" onClick={() => onNavigate(ModuleType.IMRAD_ANALYZER)}>
          <div className="h-14 w-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">📑</div>
          <h3 className="font-bold text-lg text-slate-800 mb-2">IMRaD Analizi</h3>
          <p className="text-slate-500 text-xs leading-relaxed">Ilmiy matn segmentatsiyasi va mantiqiy validatsiya.</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group" onClick={() => onNavigate(ModuleType.GRAMMAR_MONITOR)}>
          <div className="h-14 w-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">✍️</div>
          <h3 className="font-bold text-lg text-slate-800 mb-2">Grammatika</h3>
          <p className="text-slate-500 text-xs leading-relaxed">Akademik stil va terminologik monitoring.</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group" onClick={() => onNavigate(ModuleType.DOI_IDENTIFIER)}>
          <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">🔗</div>
          <h3 className="font-bold text-lg text-slate-800 mb-2">DOI Search</h3>
          <p className="text-slate-500 text-xs leading-relaxed">Crossref API orqali bibliometrik identifikatsiya.</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group" onClick={() => onNavigate(ModuleType.GRANT_HUB)}>
          <div className="h-14 w-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">💰</div>
          <h3 className="font-bold text-lg text-slate-800 mb-2">Grantlar</h3>
          <p className="text-slate-500 text-xs leading-relaxed">Global RSS monitoring va prediktiv saralash.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-800">So'nggi Grant Imkoniyatlari (Live Feed)</h3>
            <button onClick={() => onNavigate(ModuleType.GRANT_HUB)} className="text-blue-600 text-sm font-bold hover:underline">Hammasini ko'rish</button>
          </div>
          <div className="space-y-4">
            {recentGrants.map(grant => (
              <div key={grant.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer">
                <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold shrink-0">{grant.agency[0]}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 truncate">{grant.title}</h4>
                  <p className="text-xs text-slate-500">{grant.agency} • Muddat: {grant.deadline}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-600 text-sm">{grant.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-600 p-8 rounded-[2rem] text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
          <h3 className="text-xl font-bold mb-4 relative z-10">DSc Analitika</h3>
          <div className="space-y-4 relative z-10">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <p className="text-xs text-indigo-100 uppercase font-bold tracking-widest mb-1">IMRaD Score</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">84%</span>
                <span className="text-xs text-emerald-300 mb-1">▲ 12%</span>
              </div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <p className="text-xs text-indigo-100 uppercase font-bold tracking-widest mb-1">Grammatik Aniqlik</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">92%</span>
                <span className="text-xs text-indigo-200 mb-1">Stabil</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
