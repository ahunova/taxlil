
import { GoogleGenAI, Type } from "@google/genai";
import { IMRaDResult, GrammarFix } from "./types";

// Always use process.env.API_KEY directly for initialization
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeIMRaD = async (text: string): Promise<IMRaDResult[]> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Quyidagi akademik matnni IMRaD (Kirish, Metodlar, Natijalar va Muhokama) strukturasi bo'yicha tahlil qiling. 
    DSc darajasidagi dissertatsiyaga xos bo'lgan bo'limlarni aniqlang, ishonchlilik ballarini bering va yetishmayotgan elementlar bo'yicha tavsiyalar bering.
    DIQQAT: Barcha javoblar (section nomlari, suggestions va missingElements) O'zbek tilida bo'lishi shart.
    Matn: ${text.substring(0, 5000)}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            section: { type: Type.STRING, description: "Bo'lim nomi (masalan: Kirish, Metodologiya, va h.k.)" },
            confidence: { type: Type.NUMBER },
            suggestions: { type: Type.ARRAY, items: { type: Type.STRING }, description: "O'zbek tilidagi tavsiyalar" },
            missingElements: { type: Type.ARRAY, items: { type: Type.STRING }, description: "O'zbek tilida yetishmayotgan elementlar" }
          },
          required: ["section", "confidence", "suggestions", "missingElements"]
        }
      }
    }
  });
  return JSON.parse(response.text);
};

export const monitorGrammar = async (text: string): Promise<GrammarFix[]> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Professional akademik muharrir sifatida harakat qiling. Quyidagi matnni grammatika, akademik uslub (rasmiy ohang) va sintaksis xatolari bo'yicha ko'rib chiqing. 
    Tahrirlar ro'yxatini JSON formatida qaytaring.
    DIQQAT: "explanation" (tushuntirish) qismi O'zbek tilida bo'lishi shart. "severity" qismi 'low', 'medium' yoki 'high' bo'lsin.
    Matn: ${text.substring(0, 3000)}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            original: { type: Type.STRING },
            suggestion: { type: Type.STRING },
            explanation: { type: Type.STRING, description: "Xato sababi va tahrir bo'yicha o'zbekcha tushuntirish" },
            severity: { type: Type.STRING }
          },
          required: ["original", "suggestion", "explanation", "severity"]
        }
      }
    }
  });
  return JSON.parse(response.text);
};

export const identifyDOI = async (query: string): Promise<any> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Berilgan iqtibos yoki DOI satri: "${query}" asosida metama'lumotlarni (Sarlavha, Mualliflar, Jurnal, Yil, DOI) aniqlang. 
    Agar bu matnli iqtibos bo'lsa, Crossref bazasidan eng mos keluvchi DOI-ni toping.
    Javob JSON formatida bo'lsin. 'status' maydoni 'valid' yoki 'invalid' bo'lishi kerak.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          doi: { type: Type.STRING },
          title: { type: Type.STRING },
          authors: { type: Type.ARRAY, items: { type: Type.STRING } },
          journal: { type: Type.STRING },
          year: { type: Type.NUMBER },
          status: { type: Type.STRING }
        }
      }
    }
  });
  return JSON.parse(response.text);
};
