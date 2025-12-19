
import React, { useState, useEffect } from 'react';
import { GrantOpportunity } from '../types';

const GrantHub: React.FC = () => {
  const [grants, setGrants] = useState<GrantOpportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchGrants = async () => {
      setLoading(true);
      setTimeout(() => {
        const mockGrants: GrantOpportunity[] = [
          {
            id: '1',
            title: 'Iqlim o\'zgarishi va barqaror qishloq xo\'jaligi bo\'yicha xalqaro tadqiqotlar',
            agency: 'Horizon Europe',
            deadline: '2024-12-15',
            amount: '€2,500,000',
            link: '#',
            description: 'Yevropa Ittifoqining tadqiqot va innovatsiyalar bo\'yicha asosiy dasturi (Global challenges).'
          },
          {
            id: '2',
            title: 'Ilm-fanni rivojlantirish uchun davlat grantlari - DSc tadqiqotchilari uchun',
            agency: 'Innovatsiya Vazirligi',
            deadline: '2024-11-20',
            amount: '500,000,000 UZS',
            link: '#',
            description: 'Mahalliy olimlar uchun fundamental tadqiqot loyihalarini moliyalashtirish bo\'yicha tanlov.'
          },
          {
            id: '3',
            title: 'Fulbright Visiting Scholar Program for Research',
            agency: 'US Embassy',
            deadline: '2025-01-10',
            amount: 'Fully Funded',
            link: '#',
            description: 'AQSH universitetlarida 3 tadan 9 oygacha bo\'lgan tadqiqot olib borish imkoniyati.'
          },
          {
            id: '4',
            title: 'World Bank Science & Technology Policy Grant',
            agency: 'World Bank Group',
            deadline: '2025-03-01',
            amount: '$150,000',
            link: '#',
            description: 'Developing innovation policy frameworks in Central Asia context.'
          },
          {
            id: '5',
            title: 'UNESCO Young Scientist Research Grant 2025',
            agency: 'UNESCO',
            deadline: '2025-04-15',
            amount: '$10,000',
            link: '#',
            description: 'Support for early-career researchers in biosciences and environmental science.'
          }
        ];
        setGrants(mockGrants);
        setLoading(false);
      }, 800);
    };

    fetchGrants();
  }, []);

  const filteredGrants = filter === 'all' 
    ? grants 
    : grants.filter(g => g.agency.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 serif mb-1">Grant Monitoring (RSS Feed)</h2>
          <p className="text-slate-500 text-sm">Global grant platformalaridan avtomatik yig'ilgan so'nggi ma'lumotlar</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
           <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full bg-blue-500 border-2 border-white"></div>
              <div className="h-6 w-6 rounded-full bg-indigo-500 border-2 border-white"></div>
              <div className="h-6 w-6 rounded-full bg-amber-500 border-2 border-white"></div>
           </div>
           <span className="text-xs font-bold text-slate-600 uppercase tracking-widest flex items-center gap-2">
             <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
             Live Monitoring
           </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-2">
        {['all', 'Horizon', 'Innovatsiya', 'US Embassy', 'World Bank', 'UNESCO'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              filter === cat 
              ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
              : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat === 'all' ? 'Barcha Grantlar' : cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center p-32 space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-200 border-t-blue-600"></div>
          <p className="text-slate-400 font-medium animate-pulse">RSS oqimlari yangilanmoqda...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          {filteredGrants.map((grant) => (
            <div key={grant.id} className="bg-white flex flex-col p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C7.47 8.127 7.332 7.74 7.332 7.5s.138-.627.433-.748c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C7.47 8.127 7.332 7.74 7.332 7.5s.138-.627.433-.748zM10 5c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm1 8.5v.5a1 1 0 11-2 0v-.5c-1.103 0-2-.897-2-2s.897-2 2-2v-.5a1 1 0 11 2 0v.5c1.103 0 2 .897 2 2s-.897 2-2 2z"/></svg>
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <span className="bg-indigo-50 text-indigo-700 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest">{grant.agency}</span>
                <div className="flex flex-col items-end">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">Deadline</span>
                  <span className="text-slate-900 text-xs font-bold">{grant.deadline}</span>
                </div>
              </div>
              
              <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight min-h-[3rem]">{grant.title}</h3>
              <p className="text-sm text-slate-500 mb-8 line-clamp-3 leading-relaxed">{grant.description}</p>
              
              <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Taxminiy Budjet</span>
                  <span className="font-bold text-slate-900 text-lg">{grant.amount}</span>
                </div>
                <button className="bg-slate-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 border border-slate-800">
        <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-blue-500/20 shrink-0">🤖</div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-xl font-bold mb-2">AI-Powered Personalized Alerts</h4>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
            Tizim siz yuklagan IMRaD matnlari asosida tadqiqot yo'nalishingizni (Research Interest) aniqlaydi va faqat 
            sizga mos keluvchi DSc darajasidagi grantlar haqida avtomatik xabar beradi.
          </p>
        </div>
        <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-bold text-sm whitespace-nowrap hover:bg-blue-50 transition-all">Filtrni sozlash</button>
      </div>
    </div>
  );
};

export default GrantHub;
