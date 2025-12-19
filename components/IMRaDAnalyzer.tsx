
import React, { useState } from 'react';
import { analyzeIMRaD } from '../geminiService';
import { IMRaDResult } from '../types';

const IMRaDAnalyzer: React.FC = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState<IMRaDResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'tool' | 'logic'>('tool');

  const handleAnalyze = async () => {
    if (!text) return;
    setLoading(true);
    try {
      const res = await analyzeIMRaD(text);
      setResults(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 mb-2">
        <button 
          onClick={() => setActiveTab('tool')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'tool' ? 'bg-blue-600 text-white' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}`}
        >
          Tahlil Asbobi
        </button>
        <button 
          onClick={() => setActiveTab('logic')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'logic' ? 'bg-blue-600 text-white' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}`}
        >
          Algoritm Mantiqi
        </button>
      </div>

      {activeTab === 'tool' ? (
        <>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">IMRaD Struktura Analizi</h2>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Maqola matnini bu yerga kiriting (Introduction, Methods, Results, Discussion qismlarini o'z ichiga olgan holda)..."
              className="w-full h-64 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none font-serif text-lg leading-relaxed"
            />
            <button
              onClick={handleAnalyze}
              disabled={loading || !text}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:bg-slate-300 transition-all shadow-lg shadow-blue-600/20"
            >
              {loading ? 'Tahlil qilinmoqda...' : 'Strukturani aniqlash'}
            </button>
          </div>

          {results.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4">
              {results.map((res, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 border border-slate-200">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-slate-800">{res.section}</h3>
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-bold">
                      Ishonch: {(res.confidence * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-600 mb-1">Tavsiyalar:</h4>
                      <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        {res.suggestions.map((s, idx) => <li key={idx}>{s}</li>)}
                      </ul>
                    </div>
                    {res.missingElements.length > 0 && (
                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                        <h4 className="text-sm font-semibold text-amber-700 mb-1 italic">Yetishmayotgan elementlar:</h4>
                        <div className="flex flex-wrap gap-2">
                          {res.missingElements.map((e, idx) => (
                            <span key={idx} className="bg-white border border-amber-200 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-medium">
                              {e}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 animate-in fade-in zoom-in-95 duration-300">
          <h2 className="text-3xl font-bold mb-6 text-slate-800 serif">IMRaD Bo'limlarini Aniqlash Algoritmi</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold text-slate-700 mb-3 underline decoration-blue-500 underline-offset-4">Algoritm Mantiqi</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tizim akademik matndagi semantik o'zgarish nuqtalarini aniqlash uchun uch bosqichli mantiqdan foydalanadi:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-blue-600 font-bold block mb-1">1. Leksik Tahlil</span>
                  <span className="text-sm text-slate-500 text-justify">Terminologik klasterlarni (masalan, "statistical significance" -> Results) aniqlash.</span>
                </li>
                <li className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-blue-600 font-bold block mb-1">2. Strukturaviy Mapping</span>
                  <span className="text-sm text-slate-500 text-justify">Bo'lim sarlavhalari va paragraflar joylashuvini xalqaro standartlar bilan solishtirish.</span>
                </li>
                <li className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-blue-600 font-bold block mb-1">3. Semantik Integratsiya</span>
                  <span className="text-sm text-slate-500 text-justify">Matn mazmunining mantiqiy maqsadini (Description vs. Argumentation) aniqlash.</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-700 mb-4">Yondashuvlar Solishtiruvi</h3>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Xususiyat</th>
                      <th className="px-6 py-4">Qidaviy (Rule-based)</th>
                      <th className="px-6 py-4">AI (Large Language Model)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-700">Mantiq asosi</td>
                      <td className="px-6 py-4 text-slate-500 italic">Regex, kalit so'zlar, sarlavhalar.</td>
                      <td className="px-6 py-4 text-blue-700 font-medium">Semantik kontekst va neyron tarmoqlar.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-700">Moslashuvchanlik</td>
                      <td className="px-6 py-4 text-slate-500">Past. Faqat qat'iy formatda ishlaydi.</td>
                      <td className="px-6 py-4 text-blue-700 font-medium">Yuqori. Erkin va noan'anaviy matnni tushunadi.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-700">Xatolik darajasi</td>
                      <td className="px-6 py-4 text-slate-500">Sarlavha bo'lmasa, butunlay adashadi.</td>
                      <td className="px-6 py-4 text-blue-700 font-medium">Kam. Matn mazmunidan bo'limni anglay oladi.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-700">DSc talablari</td>
                      <td className="px-6 py-4 text-slate-500">Faqat texnik tekshiruv uchun mos.</td>
                      <td className="px-6 py-4 text-blue-700 font-medium">Metodologik va mantiqiy tahlilga qodir.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <span className="text-xl">💡</span> Tizim xulosasi
              </h4>
              <p className="text-sm text-blue-50 leading-relaxed">
                AcademiaAI ikkala yondashuvni birlashtiradi: Qoidaviy mantiq orqali hujjatning texnik karkasini ushlab turadi, 
                Gemini AI modeli yordamida esa matnning chuqur semantik tahlilini amalga oshirib, IMRaD mantiqiy bog'liqligini baholaydi.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IMRaDAnalyzer;
