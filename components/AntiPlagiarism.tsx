
import React, { useState } from 'react';
import { checkPlagiarism } from '../geminiService';
import { PlagiarismResult } from '../types';

const AntiPlagiarism: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<PlagiarismResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!text || text.length < 50) return;
    setLoading(true);
    try {
      const res = await checkPlagiarism(text);
      setResult(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Visual Header */}
      <section className="relative h-[350px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop" 
          alt="Security Scan" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center px-12 lg:px-20 max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 shadow-lg shadow-emerald-500/20">
            Scientific Integrity System
          </span>
          <h2 className="text-5xl font-bold text-white leading-tight mb-6 tracking-tighter">
            Antiplagiat <br/> <span className="text-emerald-400">& Originallik</span>
          </h2>
          <p className="text-slate-200 text-lg leading-relaxed opacity-90">
            Tadqiqotingizning ilmiy yangiligini va originalligini tekshiring. AI tizimimiz matnni global ilmiy bazalar bilan solishtiradi.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-3">
               <span className="h-8 w-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">📝</span>
               Tekshirish uchun matn
            </h3>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Kamida 50 ta so'zdan iborat ilmiy matningizni bu yerga joylang..."
              className="w-full h-96 p-8 border border-slate-100 rounded-3xl bg-slate-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-400 outline-none transition-all resize-none font-serif text-lg leading-relaxed shadow-inner"
            />
            <div className="flex items-center justify-between mt-8">
               <p className="text-xs text-slate-400 font-medium italic">Simvollar soni: {text.length} / 4000</p>
               <button
                  onClick={handleScan}
                  disabled={loading || text.length < 50}
                  className="px-12 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-emerald-600 disabled:bg-slate-300 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      Skanerlanmoqda...
                    </>
                  ) : (
                    <>Originallikni tekshirish <span className="text-xl">🔍</span></>
                  )}
                </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-200 flex flex-col items-center justify-center h-[500px] text-center space-y-6">
               <div className="relative">
                  <div className="h-24 w-24 border-4 border-slate-100 border-t-emerald-600 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl">⚡</div>
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-xs">AI Deep Scan</h4>
                  <p className="text-sm text-slate-400 leading-relaxed px-6">Global ilmiy nashrlar va dissertatsiyalar bazasi bilan solishtirilmoqda...</p>
               </div>
            </div>
          ) : result ? (
            <div className="space-y-6 animate-in slide-in-from-right-10 duration-500">
               <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm text-center">
                  <div className="relative inline-block mb-4">
                     <svg className="h-32 w-32 transform -rotate-90">
                        <circle cx="64" cy="64" r="58" fill="transparent" stroke="#F1F5F9" strokeWidth="8" />
                        <circle 
                          cx="64" cy="64" r="58" 
                          fill="transparent" 
                          stroke={result.originalityScore > 80 ? "#10B981" : result.originalityScore > 50 ? "#F59E0B" : "#EF4444"} 
                          strokeWidth="8" 
                          strokeDasharray="364.4" 
                          strokeDashoffset={364.4 - (364.4 * result.originalityScore) / 100}
                          className="transition-all duration-1000"
                        />
                     </svg>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-black text-slate-900">{result.originalityScore}%</span>
                        <span className="text-[8px] font-black uppercase text-slate-400">Original</span>
                     </div>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Hukm:</h4>
                  <p className="text-sm text-slate-600 italic leading-relaxed">{result.verdict}</p>
               </div>

               <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                  <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-6">O'xshashliklar & Tavsiyalar</h4>
                  <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {result.matches.map((match, i) => (
                      <div key={i} className="space-y-3 border-b border-slate-800 pb-6 last:border-0">
                         <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">{match.source}</span>
                            <span className="text-[10px] font-black text-red-400">{match.similarity}% o'xshash</span>
                         </div>
                         <p className="text-xs text-slate-400 italic">"{match.text.substring(0, 100)}..."</p>
                         <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                            <p className="text-[10px] text-emerald-400 font-bold mb-1">Tavsiya:</p>
                            <p className="text-[11px] text-slate-300 leading-relaxed">{match.suggestion}</p>
                         </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          ) : (
            <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-dashed border-slate-300 flex flex-col items-center justify-center h-[500px] text-center">
               <div className="text-6xl mb-6 opacity-20">🛡️</div>
               <h4 className="text-slate-400 font-bold mb-2">Skanerlashga tayyor</h4>
               <p className="text-xs text-slate-400 leading-relaxed px-8">Maqolangizni originalligini tekshirish uchun matnni kiriting va tugmani bosing.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AntiPlagiarism;
