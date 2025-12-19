
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
import ThesisChapter from './components/ThesisChapter';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>(ModuleType.DASHBOARD);

  const renderModule = () => {
    switch (activeModule) {
      case ModuleType.DASHBOARD:
        return <Dashboard onNavigate={setActiveModule} />;
      case ModuleType.ANALYTICS:
        return <AnalyticsView />;
      case ModuleType.THESIS_CHAPTER:
        return <ThesisChapter />;
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
      default:
        return <Dashboard onNavigate={setActiveModule} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar activeModule={activeModule} onModuleChange={setActiveModule} />
      <main className="flex-1 overflow-y-auto h-screen p-8 print:p-0 print:overflow-visible print:h-auto">
        <header className="mb-8 flex justify-between items-center print:hidden">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
              <span className="text-blue-600">Academia</span>AI
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">DSc Edition</span>
            </h1>
            <p className="text-slate-500 mt-1 italic">Intellektual akademik tadqiqotlar ekotizimi</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-200">
               <span className="text-sm font-medium text-slate-600">Foydalanuvchi: <span className="text-slate-900">Dr. Tadqiqotchi</span></span>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto">
          {renderModule()}
        </div>
      </main>
    </div>
  );
};

export default App;
