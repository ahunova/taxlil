
import React, { useState, useEffect } from 'react';
import { ModuleType, GrantOpportunity } from '../types';

interface DashboardProps {
  onNavigate: (module: ModuleType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [recentGrants, setRecentGrants] = useState<GrantOpportunity[]>([]);

  useEffect(() => {
    const mockGrants: GrantOpportunity[] = [
      {
        id: 'uz-1',
        title: "Yosh olimlar uchun fundamental tadqiqotlar loyihasi",
        agency: 'Innovatsiya Agentligi',
        deadline: '2025-02-15',
        amount: '600M UZS',
        link: '#',
        description: '...'
      },
      {
        id: 'uz-2',
        title: '"Olimpa" ilmiy loyihalar tanlovi',
        agency: 'Yoshlar Akademiyasi',
        deadline: '2024-12-30',
        amount: '100M UZS',
        link: '#',
        description: '...'
      }
    ];
    setRecentGrants(mockGrants);
  }, []);

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* 1. Immersive Hero Section */}
      <section className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
        <img 
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop" 
          alt="Science Hub" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center px-12 lg:px-20 max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 shadow-lg shadow-blue-500/20">
            PhD InnoVision Intelligence
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tighter">
            Ilm-fanni <br/> <span className="text-blue-400">vizuallashgan</span> tahlili
          </h2>
          <p className="text-slate-200 text-xl leading-relaxed mb-10 opacity-90 font-medium">
            Tadqiqotingiz uchun eng kuchli AI vositalari yagona ekotizimda. IMRaD tahlilidan tortib O'zbekistondagi eng nufuzli grantlargacha.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate(ModuleType.IMRAD_ANALYZER)}
              className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-xl hover:-translate-y-1"
            >
              Tahlilni boshlash
            </button>
            <button 
              onClick={() => onNavigate(ModuleType.SCIENTIFIC_JUSTIFICATION)}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all"
            >
              PhD Metodologiya
            </button>
          </div>
        </div>
      </section>

      {/* 2. Visual Navigation Grid - Now with full images */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 px-2">
           <div className="h-px flex-1 bg-slate-200"></div>
           <h3 className="text-xs font-black uppercase text-slate-400 tracking-[0.3em]">Xizmatlar katalogi</h3>
           <div className="h-px flex-1 bg-slate-200"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              type: ModuleType.IMRAD_ANALYZER, 
              title: 'IMRaD Analitika', 
              desc: 'Matn strukturasini avtomatik validatsiya qilish',
              img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&h=800&auto=format&fit=crop'
            },
            { 
              type: ModuleType.GRAMMAR_MONITOR, 
              title: 'Uslub Monitoringi', 
              desc: 'Akademik ohang va grammatik mukammallik',
              img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&h=800&auto=format&fit=crop'
            },
            { 
              type: ModuleType.DOI_IDENTIFIER, 
              title: 'DOI Identifikatsiyasi', 
              desc: 'Raqamli kutubxona va iqtiboslar bazasi',
              img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&h=800&auto=format&fit=crop'
            },
            { 
              type: ModuleType.GRANT_HUB, 
              title: 'Grantlar Oqimi', 
              desc: 'O\'zbekiston va global moliyaviy imkoniyatlar',
              img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&h=800&auto=format&fit=crop'
            },
          ].map((item) => (
            <button 
              key={item.title}
              onClick={() => onNavigate(item.type)}
              className="group relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                <h4 className="text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-1 transition-transform">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>
                <div className="mt-6 w-12 h-1 bg-blue-500 rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Integration Showcase - Large Image with Info */}
      <section className="bg-white rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch">
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb280d91f39?q=80&w=800&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="University"
          />
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>
        <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8">
             <div className="h-12 w-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-2xl shadow-inner">🏛️</div>
             <div>
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Local Ecosystem</p>
                <h3 className="text-3xl font-bold text-slate-900">O'zbekiston Grantlari</h3>
             </div>
          </div>
          <div className="space-y-6">
            {recentGrants.map(grant => (
              <div key={grant.id} className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer group">
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">{grant.title}</h4>
                  <p className="text-xs text-slate-400 font-medium uppercase mt-1">{grant.agency}</p>
                </div>
                <div className="text-right ml-6">
                   <p className="text-lg font-black text-slate-900">{grant.amount}</p>
                   <p className="text-[10px] font-bold text-slate-400">Muddat: {grant.deadline}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => onNavigate(ModuleType.GRANT_HUB)}
            className="mt-10 text-blue-600 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform"
          >
            Barcha mahalliy va xalqaro grantlar <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>
      </section>

      {/* 4. Statistics & Analytics - Visualization */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative h-[400px] rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl group">
           <img 
            src="https://images.unsplash.com/photo-1551288049-bbbda5366a7a?q=80&w=800&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-[10s]" 
            alt="Data"
           />
           <div className="absolute inset-0 p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Tadqiqot Analitikasi</h3>
                <p className="text-slate-400 max-w-md leading-relaxed">PhD darajasidagi barcha ilmiy ishlaringizning mantiqiy va uslubiy holatini yagona datchiklarda kuzating.</p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div>
                   <span className="block text-4xl font-black text-blue-400 mb-1">94%</span>
                   <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Akademik Stil</span>
                </div>
                <div>
                   <span className="block text-4xl font-black text-emerald-400 mb-1">82%</span>
                   <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">IMRaD Validatsiya</span>
                </div>
                <div>
                   <span className="block text-4xl font-black text-amber-400 mb-1">12</span>
                   <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Yangi Grantlar</span>
                </div>
              </div>
           </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[3rem] p-12 text-white shadow-2xl flex flex-col justify-between items-center text-center relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-1000"></div>
          <div className="relative z-10">
            <div className="text-6xl mb-6 animate-bounce">🎓</div>
            <h4 className="text-2xl font-bold mb-4">PhD Portfolio</h4>
            <p className="text-blue-100 text-sm leading-relaxed mb-8 opacity-80">
              Sizning ilmiy yutuqlaringiz va nashr etilgan maqolalaringiz bazasini avtomatik tahlil qiling.
            </p>
          </div>
          <button className="w-full bg-white text-blue-700 py-4 rounded-2xl font-black shadow-xl hover:-translate-y-1 transition-all">
            Hujjatlarni yuklash
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
