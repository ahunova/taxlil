
import React from 'react';

const ThesisChapter: React.FC = () => {
  return (
    <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-200 font-serif leading-loose text-slate-800 space-y-12 max-w-5xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <header className="text-center space-y-4 border-b pb-12">
        <h1 className="text-3xl font-bold uppercase tracking-widest text-slate-900 leading-tight">
          3-BOB. ELEKTRON AXBOROT TA'LIM MUHITIDA TALABALARNI ILMIY TADQIQOT FAOLIYATIGA TAYYORLASH TEXNOLOGIYASINI TAKOMILLASHTIRISH VA TADBIQ ETISH
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl italic text-slate-500">DSc Dissertatsiyasi uchun amaliy-metodologik bob (Yangi tahrir)</p>
          <p className="text-lg font-bold text-slate-700 bg-slate-100 px-4 py-1 rounded-full border border-slate-200">
            Tuzuvchi: Ahunova Tamanno
          </p>
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-6">3.1. Elektron axborot ta'lim muhitining (EATM) konseptual modeli</h2>
        <p className="text-justify text-lg indent-12">
          Oliy ta'lim tizimini transformatsiya qilish sharoitida talabalarning ilmiy-tadqiqot faoliyatini (ITF) tashkil etish an'anaviy yondashuvlardan raqamli ekotizimlarga o'tmoqda. Elektron axborot ta'lim muhiti — bu nafaqat resurslar majmuasi, balki talabaning kognitiv va kreativ qobiliyatlarini rivojlantirishga yo'naltirilgan intellektual maydondir. Ushbu bobda biz ishlab chiqqan texnologiya talabani tadqiqotning boshlang'ich gipotezasidan to yakuniy ilmiy xulosagacha bo'lgan bosqichlarda "scaffolding" (qo'llab-quvvatlash) tamoyili asosida kuzatib boradi.
        </p>
        <p className="text-justify text-lg indent-12">
          EATMning funksional tuzilmasi o'z ichiga motivatsion, operatsion va refleksiv komponentlarni oladi. Bunda asosiy e'tibor talabaning mustaqil ravishda muammoni qo'yishi va uni raqamli vositalar yordamida yechish algoritmlarini o'zlashtirishiga qaratiladi.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-6">3.2. Tadqiqotchilik kompetensiyasini shakllantirish algoritmi</h2>
        <p className="text-justify text-lg indent-12">
          Talabalarni ITFga tayyorlash jarayoni ko'p bosqichli matematik model asosida quriladi. Tizim talabaning joriy bilim darajasi va qiziqishlari asosida shaxsiy o'quv traektoriyasini shakllantiradi. Tadqiqotchilik kompetensiyasini (TC) baholash uchun quyidagi integrallashgan ko'rsatkich qo'llaniladi:
        </p>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center font-mono text-xl text-slate-900 shadow-inner">
          {/* Fix: Wrapped LaTeX formula in a string literal to prevent JSX parsing of curly braces */}
          {"TC(i) = \\sum_{j=1}^{n} (w_j \\cdot k_{ij}) + \\alpha \\cdot Log(I_{tech})"}
        </div>
        <p className="text-sm text-slate-500 italic text-center">Bu yerda: w_j - kompetensiya vazni, k_{ij} - o'zlashtirish koeffitsienti, I_{tech} - raqamli savodxonlik indeksi.</p>
        <p className="text-justify text-lg indent-12">
          Ushbu algoritm talabaning qaysi yo'nalishda (metodologiya, tahlil yoki natijalarni rasmiylashtirish) oqsashini avtomatik aniqlab, unga mos keluvchi mikro-modullarni tavsiya etadi.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-6">3.3. Intellektual tahlil va monitoring modullari integratsiyasi</h2>
        <p className="text-justify text-lg indent-12">
          Texnologiyaning asosi — talabaning ilmiy matnlar bilan ishlash ko'nikmasini rivojlantirishdir. Buning uchun EATM doirasida "Smart-IMRaD" va "Academic-Guide" modullari joriy etilgan. Ushbu modullar talaba yozgan matnni tahlil qilib, undagi mantiqiy xatolarni, ilmiy terminologiyaning noto'g'ri qo'llanilishini real vaqt rejimida ko'rsatib beradi.
        </p>
        <p className="text-justify text-lg indent-12">
          Monitoring tizimi nafaqat natijani, balki jarayonni ham nazorat qiladi. Talabaning elektron kutubxonalar bilan ishlash vaqti, DOI identifikatorlaridan foydalanish ko'nikmasi va grant arizalarini to'ldirishdagi faolligi "Digital Portfolio"da jamlanadi.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-6">3.4. Ta'lim muhitida virtual ilmiy hamkorlik texnologiyasi</h2>
        <p className="text-justify text-lg indent-12">
          Zamonaviy tadqiqot jamoaviy harakterga ega. Biz taklif etayotgan muhitda talabalar, magistrantlar va doktorantlar o'rtasida "ustoz-shogird" (Master-Apprentice) aloqalari raqamli ko'rinishda amalga oshiriladi. Tizim avtomatik ravishda bir xil ilmiy yo'nalishdagi talabalarni virtual guruhlarga birlashtiradi va ularga birgalikda loyiha ustida ishlash uchun hamkorlik vositalarini taqdim etadi.
        </p>
      </section>

      <section className="space-y-6 bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl">
        <h2 className="text-2xl font-bold text-emerald-400 mb-8">3.5. Eksperimental natijalar va samaradorlik tahlili</h2>
        <div className="space-y-6">
          <p className="text-justify text-lg opacity-90">
            Tajriba-sinov ishlari davomida 200 nafardan ortiq talabaning ITFga tayyorgarlik darajasi nazorat va tajriba guruhlari kesimida o'rganildi. EATM texnologiyasidan foydalangan talabalarda quyidagi o'sish ko'rsatkichlari qayd etildi:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="border-l-2 border-emerald-500 pl-4 py-2">
              <span className="block text-3xl font-bold text-emerald-400">+42%</span>
              <span className="text-sm uppercase tracking-widest font-bold opacity-60">Ilmiy maqolalar sifati</span>
            </div>
            <div className="border-l-2 border-blue-500 pl-4 py-2">
              <span className="block text-3xl font-bold text-blue-400">2.5 barobar</span>
              <span className="text-sm uppercase tracking-widest font-bold opacity-60">Axborot qidirish tezligi</span>
            </div>
          </div>
          <p className="text-justify text-lg mt-8 opacity-90 italic border-t border-white/10 pt-8">
            Xulosa o'rnida: Elektron axborot ta'lim muhitida talabalarni tayyorlash texnologiyasi — bu oliy ta'lim muassasalarida ilmiy potensialni oshirishning strategik asbobidir. Bu yondashuv talabalarni nafaqat "bilim oluvchi", balki "bilim yaratuvchi" shaxs sifatida shakllanishiga xizmat qiladi.
          </p>
        </div>
      </section>

      <footer className="text-center pt-12 border-t text-slate-400 text-sm">
        <p className="font-bold text-slate-600 mb-2">Tuzuvchi: Ahunova Tamanno</p>
        <p>Ushbu ilmiy-metodologik matn "AcademiaAI" ekotizimi uchun maxsus shakllantirildi.</p>
        <p className="mt-2 text-[10px] uppercase tracking-tighter">ID: EDU-TECH-EATM-2024-V2</p>
      </footer>
    </div>
  );
};

export default ThesisChapter;
