import { useLanguage, Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { lang, setLang } = useLanguage();
  const opts: { code: Language; label: string; name: string }[] = [
    { code: "es", label: "ES", name: "Español" },
    { code: "eu", label: "EU", name: "Euskara" },
  ];
  return (
    <div className={cn("inline-flex rounded-full border border-primary/30 p-0.5 text-sm", className)} role="group" aria-label="Idioma / Hizkuntza">
      {opts.map((o) => (
        <button
          key={o.code}
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          title={o.name}
          className={cn(
            "px-3 py-1 rounded-full font-medium transition-colors",
            lang === o.code ? "bg-primary text-primary-foreground" : "text-primary hover:bg-accent/40"
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
