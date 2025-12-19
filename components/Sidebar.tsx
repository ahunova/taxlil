
import React from 'react';
import { ModuleType } from '../types';

interface SidebarProps {
  activeModule: ModuleType;
  onModuleChange: (module: ModuleType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, onModuleChange }) => {
  const navItems = [
    { type: ModuleType.DASHBOARD, label: 'Boshqaruv Paneli', icon: '📊' },
    { type: ModuleType.THESIS_CHAPTER, label: 'Dissertatsiya Bobi', icon: '📜' },
    { type: ModuleType.ANALYTICS, label: 'Analitika', icon: '📈' },
    { type: ModuleType.IMRAD_ANALYZER, label: 'IMRaD Analizi', icon: '📑' },
    { type: ModuleType.GRANT_HUB, label: 'Grantlar (RSS)', icon: '💰' },
    { type: ModuleType.SCIENTIFIC_JUSTIFICATION, label: 'DSc Asosnomasi', icon: '🎓' },
    { type: ModuleType.BACKEND_LOGIC, label: 'Backend Mantiqi', icon: '🐍' },
  ];

  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col shadow-2xl print:hidden">
      <div className="p-8">
        <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-xl font-bold mb-4">A</div>
        <h2 className="text-xl font-bold tracking-tight">Academia Suite</h2>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.type}
            onClick={() => onModuleChange(item.type)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
              activeModule === item.type
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-800 text-xs text-slate-500">
        <p>&copy; 2024 Academic AI Platform v3.1</p>
      </div>
    </aside>
  );
};

export default Sidebar;
