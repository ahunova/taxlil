
import React, { useState } from 'react';
import { ModuleType } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import IMRaDAnalyzer from './components/IMRaDAnalyzer';
import GrammarMonitor from './components/GrammarMonitor';
import DOIIdentifier from './components/DOIIdentifier';
import GrantHub from './components/GrantHub';
import ScientificJustification from './components/ScientificJustification';
import BackendView from './components/BackendView';
import AnalyticsView from './components/AnalyticsView';
import ContactCreator from './components/ContactCreator';
import AntiPlagiarism from './components/AntiPlagiarism';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>(ModuleType.DASHBOARD);

  const getModuleUzbekName = (type: ModuleType) => {
    switch (type) {
      case ModuleType.DASHBOARD: return 'Boshqaruv paneli';
      case ModuleType.ANALYTICS: return 'Tadqiqot tahlillari';
      case ModuleType.IMRAD_ANALYZER: return 'IMRaD tahlili';
      case ModuleType.GRAMMAR_MONITOR: return 'Uslub monitoringi';
      case ModuleType.DOI_IDENTIFIER: return 'DOI qidiruvi';
      case ModuleType.GRANT_HUB: return 'Grantlar oqimi';
      case ModuleType.SCIENTIFIC_JUSTIFICATION: return 'PhD Metodologiyasi';
      case ModuleType.BACKEND_LOGIC: return 'Backend mantiqi';
      case ModuleType.CONTACT_CREATOR: return 'Yaratuvchiga murojaat';
      case ModuleType.ANTI_PLAGIARISM: return 'Antiplagiat';
      default: return 'PhD InnoVision';
    }
  };

  const renderModule = () => {
    switch (activeModule) {
      case ModuleType.DASHBOARD:
        return <Dashboard onNavigate={setActiveModule} />;
      case ModuleType.ANALYTICS:
        return <AnalyticsView />;
      case ModuleType.IMRAD_ANALYZER:
        return <IMRaDAnalyzer />;
      case ModuleType.GRAMMAR_MONITOR:
        return <GrammarMonitor />;
      case ModuleType.DOI_IDENTIFIER:
        return <DOIIdentifier />;
      case ModuleType.GRANT_HUB:
        return <GrantHub />;
      case ModuleType.SCIENTIFIC_JUSTIFICATION:
        return <ScientificJustification />;
      case ModuleType.BACKEND_LOGIC:
        return <BackendView />;
      case ModuleType.CONTACT_CREATOR:
        return <ContactCreator />;
      case ModuleType.ANTI_PLAGIARISM:
        return <AntiPlagiarism />;
      default:
        return <Dashboard onNavigate={setActiveModule} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans selection:bg-blue-100 selection:text-blue-900">
      <Sidebar activeModule={activeModule} onModuleChange={setActiveModule} />
      
      <main className="flex-1 h-screen overflow-y-auto custom-scrollbar relative">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex justify-between items-center print:hidden">
          <div>
            <nav className="flex items-center text-sm text-slate-500 gap-2 mb-0.5">
              <span>PhD InnoVision</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-medium">{getModuleUzbekName(activeModule)}</span>
            </nav>
            <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              PhD Digital Workspace
              <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-black">v4.0 Pro</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">Ahunova Tamanno</p>
                <p className="text-[10px] text-blue-600 uppercase font-black tracking-tight">PhD Candidate</p>
              </div>
              <div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold ring-4 ring-slate-100 overflow-hidden shadow-lg shadow-slate-200">
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop" alt="User Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {renderModule()}
        </div>

        <footer className="py-8 px-12 border-t border-slate-200 text-slate-400 text-xs flex justify-between items-center mt-12 bg-white print:hidden">
          <div>&copy; 2024 PhD InnoVision. Digital Science Intelligence.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
          </div>
        </footer>
      </main>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }
      `}</style>
    </div>
  );
};

export default App;
