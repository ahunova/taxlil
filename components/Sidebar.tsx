
import React from 'react';
import { ModuleType } from '../types';

interface SidebarProps {
  activeModule: ModuleType;
  onModuleChange: (module: ModuleType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, onModuleChange }) => {
  const navItems = [
    { type: ModuleType.DASHBOARD, label: 'Boshqaruv paneli', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
    )},
    { type: ModuleType.ANTI_PLAGIARISM, label: 'Antiplagiat', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
    )},
    { type: ModuleType.IMRAD_ANALYZER, label: 'IMRaD tahlili', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
    )},
    { type: ModuleType.GRAMMAR_MONITOR, label: 'Uslub monitoringi', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
    )},
    { type: ModuleType.DOI_IDENTIFIER, label: 'DOI qidiruvi', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
    )},
    { type: ModuleType.GRANT_HUB, label: 'Grantlar oqimi', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )},
    { type: ModuleType.CONTACT_CREATOR, label: 'Savol yo\'llash', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
    )},
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col z-30 print:hidden shadow-sm">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-blue-500/30">
            IV
          </div>
          <div className="flex flex-col">
            <span className="font-black text-slate-900 leading-none text-xl tracking-tighter">PhD <span className="text-blue-600">InnoVision</span></span>
            <span className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] mt-1">Science Hub v4.0</span>
          </div>
        </div>

        <nav className="space-y-1.5">
          <p className="px-3 text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Intellektual Maydon</p>
          {navItems.map((item) => (
            <button
              key={item.type}
              onClick={() => onModuleChange(item.type)}
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl transition-all duration-300 text-left group ${
                activeModule === item.type
                  ? 'bg-slate-900 text-white font-bold shadow-xl shadow-slate-900/20 translate-x-1'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`transition-colors duration-300 ${activeModule === item.type ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-600'}`}>
                {item.icon}
              </span>
              <span className="text-sm tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-8 pt-0 space-y-6">
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[2rem] p-6 text-white relative overflow-hidden group cursor-pointer shadow-xl shadow-blue-500/10" onClick={() => onModuleChange(ModuleType.SCIENTIFIC_JUSTIFICATION)}>
          <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=200&h=200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700" alt="Deco" />
          <div className="relative z-10">
            <p className="text-[9px] font-black text-blue-300 uppercase tracking-widest mb-2">Knowledge Base</p>
            <h4 className="text-sm font-bold mb-1">PhD Metodologiya</h4>
            <p className="text-[10px] text-blue-100/70 leading-relaxed font-medium">Asosnoma va tahlil tamoyillari.</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-black px-2 uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></span>
            Online
          </span>
          <span className="opacity-50">2024</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
