import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "es" | "eu";

type Ctx = { lang: Language; setLang: (l: Language) => void; t: (es: string, eu: string) => string };

const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return saved === "eu" ? "eu" : "es";
  });
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  const t = (es: string, eu: string) => (lang === "eu" ? eu : es);
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
