/**
 * Todas as secoes da landing page em um unico arquivo.
 * A ordem abaixo e a mesma em que as secoes aparecem na pagina.
 */
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseMedical,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Copy,
  ExternalLink,
  FileCheck2,
  FileSearch,
  HelpCircle,
  Info,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Quote,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  TrendingUp,
  Umbrella,
  X,
} from "lucide-react";
import {
  buildWhatsAppUrl,
  FAQ_DATA,
  JURISDICTIONS_LIST,
  LAWYER_INFO,
  SPECIALTIES_DATA,
  STATES_DETAIL,
  TESTIMONIALS_DATA,
  TriagePrefill,
} from "./data";
import {
  CaseMetricCounter,
  DossierReveal,
  JurisdictionTicker,
  LEGAL_EASE,
  SpotlightCaseCard,
} from "./ui";

/* ------------------------------------------------------------------
 * Navbar
 * ------------------------------------------------------------------ */

interface NavbarProps {
  onOpenTriage: (prefill?: TriagePrefill) => void;
}

const NAV_LINKS = [
  { label: "Especialidades", href: "#especialidades" },
  { label: "Simulador INSS", href: "#simulador" },
  { label: "Como Funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Honorários", href: "#honorarios" },
  { label: "Dúvidas", href: "#faq" },
];

export function Navbar({ onOpenTriage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#080C14]/88 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/40"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Identity & Custom SVG Monogram */}
        <a
          href="#topo"
          className="group flex items-center gap-3.5 focus:outline-none"
          aria-label={`${LAWYER_INFO.shortName} - Início`}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/35 bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent shadow-inner transition-transform duration-200 group-hover:scale-105">
            <span
              className="font-display text-sm font-extrabold tracking-tight text-amber-400"
              aria-hidden="true"
            >
              {LAWYER_INFO.initials}
            </span>
            <span
              className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm sm:text-base font-bold tracking-tight text-white">
                {LAWYER_INFO.shortName}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-amber-300">
                <ShieldCheck className="h-3 w-3 text-amber-400" />
                {LAWYER_INFO.oab}
              </span>
            </div>
            <span className="text-[11px] font-medium tracking-wide text-slate-400">
              Especialista em Acidente de Trabalho &amp; Auxílio-Acidente
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Navegação Principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenTriage()}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4.5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-400 active:scale-[0.98] cursor-pointer"
          >
            <MessageSquare className="h-4 w-4 stroke-[2.2]" />
            <span>Avaliar Meu Caso</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => onOpenTriage()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Avaliar</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: LEGAL_EASE }}
            className="overflow-hidden border-b border-white/10 bg-[#0B101B]/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 pt-3 pb-5">
              <div className="mb-3 flex items-center justify-between rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2 text-xs text-amber-200">
                <span className="font-mono font-semibold">{LAWYER_INFO.oab}</span>
                <span>{LAWYER_INFO.statesLabel}</span>
              </div>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenTriage();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Verificar Meu Direito Agora (Gratuito)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ------------------------------------------------------------------
 * HeroSection
 * ------------------------------------------------------------------ */

interface HeroSectionProps {
  onOpenTriage: (prefill?: TriagePrefill) => void;
}

export function HeroSection({ onOpenTriage }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 38]);

  return (
    <section
      id="topo"
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:min-h-[92vh] lg:flex lg:items-center bg-legal-grid"
    >
      {/* Subtle Ambient Radial Illumination */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-amber-500/8 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-0 h-[440px] w-[500px] rounded-full bg-emerald-500/7 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Core Persuasive Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Credential Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: LEGAL_EASE }}
              className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-medium text-amber-200 backdrop-blur-md"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span className="font-semibold text-white">
                {LAWYER_INFO.fullName}
              </span>
              <span className="text-amber-400/70">•</span>
              <span className="font-mono font-semibold text-amber-300">
                {LAWYER_INFO.oab}
              </span>
            </motion.div>

            {/* Primary Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: LEGAL_EASE }}
              className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-[-0.025em] leading-[1.1] text-white"
            >
              Sofreu acidente e ficou com sequela?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Você pode receber todo mês
              </span>{" "}
              até se aposentar.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: LEGAL_EASE }}
              className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300"
            >
              Com atuação no{" "}
              <strong className="font-semibold text-white">
                Distrito Federal e nos estados de Santa Catarina, Amazonas, Rio
                Grande do Sul e São Paulo
              </strong>
              , atuamos na conquista do{" "}
              <strong className="font-semibold text-amber-300">
                Auxílio-Acidente no INSS
              </strong>{" "}
              (mesmo continuando a trabalhar de carteira assinada) e em{" "}
              <strong className="font-semibold text-white">
                Indenizações por Acidente de Trabalho
              </strong>
              , Seguros e Responsabilidade Civil.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: LEGAL_EASE }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <button
                type="button"
                onClick={() => onOpenTriage()}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-4 text-base font-bold text-slate-950 shadow-xl shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-400 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Avaliar Meu Direito Gratuitamente</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-4 text-sm sm:text-base font-semibold text-slate-100 backdrop-blur-md transition-all duration-200 hover:border-amber-400/40 hover:bg-white/[0.08]"
              >
                <Calculator className="h-4.5 w-4.5 text-amber-400" />
                <span>Simular Valor do Auxílio</span>
              </a>
            </motion.div>

            {/* Key Reassurance Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.34, ease: LEGAL_EASE }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10"
            >
              {[
                "Receba trabalhando CLT normalmente",
                "Atendimento 100% digital no DF, SC, AM, RS e SP",
                "Sem adiantamento inicial de honorários",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Executive Portrait + Authority Glass Cards */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: portraitY }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.14, ease: LEGAL_EASE }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Architectural Portrait Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#101827] shadow-2xl shadow-black/60">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/images/dr-alan-jantsch.jpg"
                    alt="Dr. Alan Jantsch — Advogado especialista em Acidentes de Trabalho e Auxílio-Acidente — OAB/SC 73.129"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    width={563}
                    height={563}
                  />
                </div>

                {/* Lawyer Signature Block */}
                <div className="border-t border-white/10 bg-gradient-to-b from-[#0D1422] to-[#090E18] p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-editorial-italic text-base text-amber-300">
                        Advocacia Especializada em Acidentados
                      </p>
                      <h2 className="font-display text-lg sm:text-xl font-bold text-white">
                        {LAWYER_INFO.fullName}
                      </h2>
                      <p className="font-mono text-xs text-slate-300 mt-0.5">
                        Inscrito na {LAWYER_INFO.oab}
                      </p>
                    </div>
                    <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/15 text-amber-300">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    {LAWYER_INFO.states.map((uf) => (
                      <span
                        key={uf}
                        className="inline-flex items-center rounded-md border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-300"
                      >
                        {uf}
                      </span>
                    ))}
                    <span className="text-[11px] text-slate-400">
                      Unidades da federação de atuação
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Authority Pill */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease: LEGAL_EASE }}
                className="mt-4 sm:mt-0 sm:absolute sm:-top-4 sm:-right-4 rounded-2xl border border-amber-500/35 bg-[#0D1422]/95 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/20 font-mono text-sm font-bold text-amber-300">
                    5
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-white">
                      Atuação em 5 UFs
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {LAWYER_INFO.statesLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * AuthorityMetricsSection
 * ------------------------------------------------------------------ */

export function AuthorityMetricsSection() {
  return (
    <section
      aria-label="Indicadores de Autoridade Jurídica"
      className="relative border-y border-white/10 bg-[#0B101B]"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <DossierReveal>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            <div className="rounded-2xl border border-white/8 bg-[#0F1726]/80 p-5 sm:p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                <MapPin className="h-4.5 w-4.5" />
              </div>
              <div className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                <CaseMetricCounter target={5} suffix=" UFs" />
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-300">
                {LAWYER_INFO.statesLabel}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                Atuação no DF, SC, AM, RS e SP
              </p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-[#0F1726]/80 p-5 sm:p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <Building2 className="h-4.5 w-4.5" />
              </div>
              <div className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-emerald-400">
                <CaseMetricCounter target={50} suffix="%" />
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-300">
                Do Salário de Benefício Mensal
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                Auxílio-Acidente pago até a aposentadoria
              </p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-[#0F1726]/80 p-5 sm:p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                <FileCheck2 className="h-4.5 w-4.5" />
              </div>
              <div className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                <CaseMetricCounter target={5} suffix=" Anos" />
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-300">
                De Valores Atrasados Retroativos
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                Processo 100% digital • Perícia na sua cidade
              </p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-[#0F1726]/80 p-5 sm:p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                <Shield className="h-4.5 w-4.5" />
              </div>
              <div className="font-mono text-xl sm:text-3xl font-bold tracking-tight text-amber-300 pt-1">
                {LAWYER_INFO.oab}
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-300">
                Inscrição Ativa e Regular
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                {LAWYER_INFO.fullName}
              </p>
            </div>
          </div>
        </DossierReveal>

        {/* Office & Territorial Coverage */}
        <DossierReveal delay={0.12}>
          <div className="mt-8 grid grid-cols-1 gap-6 rounded-3xl border border-white/8 bg-[#0F1726]/60 p-5 sm:p-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B101B]">
                <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-[3/4]">
                  <img
                    src="/images/escritorio-fachada.jpg"
                    alt="Fachada do edifício onde fica o escritório do Dr. Alan Jantsch"
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="border-t border-white/10 px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-amber-300">
                    Sede do Escritório
                  </p>
                  <p className="mt-0.5 text-xs text-slate-300">
                    Atendimento presencial com hora marcada e acompanhamento
                    digital em todas as UFs de atuação.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                Onde o escritório atua
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                {LAWYER_INFO.fullName} ({LAWYER_INFO.oab}) atua{" "}
                {LAWYER_INFO.statesSentenceInflected}, com processos eletrônicos
                protocolados na Justiça Federal ou do Trabalho da sua
                cidade/região.
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {STATES_DETAIL.map((state) => (
                  <li
                    key={state.uf}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-3"
                  >
                    <span className="flex h-8 w-9 shrink-0 items-center justify-center rounded-lg border border-amber-500/25 bg-amber-500/10 font-mono text-xs font-bold text-amber-300">
                      {state.uf}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {state.name}
                      </span>
                      <span className="block text-[11px] leading-snug text-slate-400">
                        {state.note}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DossierReveal>
      </div>

      {/* Seamless Jurisdiction Strip */}
      <div className="border-t border-white/6 bg-[#080C14]/70">
        <div className="mx-auto max-w-7xl px-4">
          <JurisdictionTicker items={JURISDICTIONS_LIST} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * SpecialtiesSection
 * ------------------------------------------------------------------ */

interface SpecialtiesSectionProps {
  onOpenTriage: (prefill?: TriagePrefill) => void;
}

export function SpecialtiesSection({ onOpenTriage }: SpecialtiesSectionProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case "auxilio-acidente":
        return <BriefcaseMedical className="h-6 w-6 text-emerald-400" />;
      case "acidente-trabalho":
        return <ShieldAlert className="h-6 w-6 text-amber-400" />;
      case "seguros-obrigatorios":
        return <Umbrella className="h-5 w-5 text-amber-400" />;
      default:
        return <Scale className="h-5 w-5 text-amber-400" />;
    }
  };

  const featuredItems = SPECIALTIES_DATA.filter((item) => item.featured);
  const secondaryItems = SPECIALTIES_DATA.filter((item) => !item.featured);

  return (
    <section
      id="especialidades"
      className="relative py-20 sm:py-28 bg-[#080C14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <DossierReveal className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-amber-300 uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Atuação Especializada • DF · SC · AM · RS · SP</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-white leading-[1.15]">
            Proteção jurídica completa para quem sofreu{" "}
            <span className="text-amber-300">acidente ou lesão laboral</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Um único acidente pode gerar até{" "}
            <strong className="text-white font-semibold">
              três indenizações independentes e cumuláveis
            </strong>{" "}
            (benefício mensal no INSS + indenização trabalhista/civil + apólice
            de seguro). Analisamos todos os seus direitos de uma só vez.
          </p>
        </DossierReveal>

        {/* Primary Focus Row: Auxílio-Acidente & Acidente de Trabalho */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
          {featuredItems.map((item, idx) => (
            <DossierReveal key={item.id} delay={idx * 0.1}>
              <SpotlightCaseCard
                accentColor={idx === 0 ? "emerald" : "amber"}
                className={`h-full p-6 sm:p-8 flex flex-col justify-between ${
                  idx === 0
                    ? "border-emerald-500/30 bg-gradient-to-b from-emerald-950/25 to-[#0F1623]/95"
                    : "border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-[#0F1623]/95"
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${
                        idx === 0
                          ? "border-emerald-500/30 bg-emerald-500/15"
                          : "border-amber-500/30 bg-amber-500/15"
                      }`}
                    >
                      {getIcon(item.id)}
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase ${
                        idx === 0
                          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                          : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs text-slate-400">
                    {item.legalBasis}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-slate-200"
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            idx === 0 ? "text-emerald-400" : "text-amber-400"
                          }`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenTriage({
                        accidentType: item.title,
                      })
                    }
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-200 cursor-pointer ${
                      idx === 0
                        ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
                        : "bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-lg shadow-amber-500/15"
                    }`}
                  >
                    <span>{item.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </SpotlightCaseCard>
            </DossierReveal>
          ))}
        </div>

        {/* Supporting Areas Row: Seguros Obrigatórios & Responsabilidade Civil */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {secondaryItems.map((item, idx) => (
            <DossierReveal key={item.id} delay={0.18 + idx * 0.08}>
              <SpotlightCaseCard className="h-full p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      {getIcon(item.id)}
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-slate-400">
                    {item.legalBasis}
                  </p>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-white/8 pt-4">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenTriage({
                        accidentType: item.title,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200 cursor-pointer"
                  >
                    <span>{item.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </SpotlightCaseCard>
            </DossierReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * BenefitSimulatorSection
 * ------------------------------------------------------------------ */

interface BenefitSimulatorSectionProps {
  onOpenTriage: (prefill?: TriagePrefill) => void;
}

const ACCIDENT_TYPES = [
  {
    id: "Acidente de Trabalho ou Trajeto",
    label: "Acidente de Trabalho / Trajeto",
    hasLaborClaim: true,
  },
  {
    id: "Doença Ocupacional (Coluna, Ombro, LER)",
    label: "Doença Ocupacional (Ombro / Coluna / LER)",
    hasLaborClaim: true,
  },
  {
    id: "Acidente de Trânsito (Moto ou Carro)",
    label: "Acidente de Trânsito (Moto / Carro)",
    hasLaborClaim: false,
  },
  {
    id: "Acidente Doméstico ou Outra Natureza",
    label: "Acidente Doméstico / Qualquer Natureza",
    hasLaborClaim: false,
  },
];

function formatCurrency(val: number): string {
  return val.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function BenefitSimulatorSection({
  onOpenTriage,
}: BenefitSimulatorSectionProps) {
  const [selectedAccident, setSelectedAccident] = useState(ACCIDENT_TYPES[0]);
  const [salary, setSalary] = useState<number>(3200);
  const [yearsSinceAlta, setYearsSinceAlta] = useState<number>(2);

  // Statutory estimation: 50% of Benefit Salary (Art. 86 Lei 8.213/91)
  const monthlyBenefit = Math.round(salary * 0.5 * 100) / 100;
  // 13 monthly installments per year (12 months + 13º) capped at last 5 years
  const effectiveRetroYears = Math.min(yearsSinceAlta, 5);
  const retroactiveEstimate = Math.round(
    monthlyBenefit * 13 * effectiveRetroYears
  );
  // 10-year projection (130 installments) + retroactive
  const tenYearProjection =
    Math.round(monthlyBenefit * 130) + retroactiveEstimate;

  const salaryPercentage = ((salary - 1600) / (8157 - 1600)) * 100;
  const yearsPercentage = (yearsSinceAlta / 5) * 100;

  return (
    <section
      id="simulador"
      className="relative py-20 sm:py-28 border-y border-white/10 bg-[#0B101C] overflow-hidden"
    >
      {/* Subtle Ambient Gold/Emerald Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[420px] w-[760px] rounded-full bg-emerald-500/6 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DossierReveal className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-300 uppercase">
            <Calculator className="h-3.5 w-3.5" />
            <span>Simulador Interativo de Auxílio-Acidente</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-white leading-[1.15]">
            Descubra quanto você pode estar{" "}
            <span className="text-emerald-400">deixando de receber</span> no INSS.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Ajuste abaixo sua média salarial e o tempo desde o acidente/alta
            médica para visualizar o potencial do benefício mensal e dos
            atrasados.
          </p>
        </DossierReveal>

        <DossierReveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-white/15 bg-[#0F1728]/95 shadow-2xl shadow-black/50 overflow-hidden">
            {/* Left Side: Interactive Inputs */}
            <div className="lg:col-span-7 p-6 sm:p-9 lg:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-white/10">
              {/* Step 1: Type of Accident */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
                  1. Qual foi a natureza do acidente ou lesão?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ACCIDENT_TYPES.map((type) => {
                    const active = selectedAccident.id === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedAccident(type)}
                        className={`text-left rounded-xl px-4 py-3 text-xs sm:text-sm font-medium transition-all duration-150 border cursor-pointer ${
                          active
                            ? "border-amber-400 bg-amber-500/15 text-white shadow-sm"
                            : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:bg-white/[0.06]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span>{type.label}</span>
                          {active && (
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Average Salary */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <label
                    htmlFor="salary-slider"
                    className="text-xs font-bold uppercase tracking-wider text-amber-300"
                  >
                    2. Sua média salarial aproximada na época
                  </label>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                    {formatCurrency(salary)}
                  </span>
                </div>

                <input
                  id="salary-slider"
                  type="range"
                  min={1600}
                  max={8157}
                  step={100}
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${salaryPercentage}%, rgba(255,255,255,0.12) ${salaryPercentage}%, rgba(255,255,255,0.12) 100%)`,
                  }}
                  className="legal-slider w-full"
                />

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {[
                    { label: "R$ 2.000", val: 2000 },
                    { label: "R$ 3.200", val: 3200 },
                    { label: "R$ 4.800", val: 4800 },
                    { label: "R$ 6.500", val: 6500 },
                    { label: "Teto INSS (R$ 8.157)", val: 8157 },
                  ].map((preset) => (
                    <button
                      key={preset.val}
                      type="button"
                      onClick={() => setSalary(preset.val)}
                      className={`rounded-lg px-2.5 py-1 font-mono text-xs transition-colors cursor-pointer ${
                        salary === preset.val
                          ? "bg-amber-500 text-slate-950 font-bold"
                          : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Time since INSS discharge */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <label
                    htmlFor="years-slider"
                    className="text-xs font-bold uppercase tracking-wider text-amber-300"
                  >
                    3. Há quanto tempo recebeu alta médica ou ficou com sequela?
                  </label>
                  <span className="font-mono text-lg sm:text-xl font-bold text-white tabular-nums">
                    {yearsSinceAlta === 0
                      ? "Alta recente (< 6 meses)"
                      : yearsSinceAlta === 5
                        ? "5 anos ou mais"
                        : `${yearsSinceAlta} ${yearsSinceAlta === 1 ? "ano" : "anos"}`}
                  </span>
                </div>

                <input
                  id="years-slider"
                  type="range"
                  min={0}
                  max={5}
                  step={1}
                  value={yearsSinceAlta}
                  onChange={(e) => setYearsSinceAlta(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${yearsPercentage}%, rgba(255,255,255,0.12) ${yearsPercentage}%, rgba(255,255,255,0.12) 100%)`,
                  }}
                  className="legal-slider w-full"
                />

                <div className="mt-2 flex justify-between text-[11px] font-mono text-slate-500">
                  <span>Recente</span>
                  <span>1 ano</span>
                  <span>2 anos</span>
                  <span>3 anos</span>
                  <span>4 anos</span>
                  <span>5+ anos (Teto Retroativo)</span>
                </div>
              </div>
            </div>

            {/* Right Side: Live Calculation Dossier */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0A1320] to-[#080D16] p-6 sm:p-9 lg:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Resultado Estimado (Art. 86)
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                    Isento de IR • Vitalício até Aposentar
                  </span>
                </div>

                {/* Primary Monthly Value */}
                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Benefício Mensal Estimado no INSS:
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-mono text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-400 tabular-nums">
                      {formatCurrency(monthlyBenefit)}
                    </span>
                    <span className="text-sm font-semibold text-slate-400">
                      /mês
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-400">
                    Pago todo mês + 13º anual, acumulável com seu salário CLT.
                  </p>
                </div>

                {/* Secondary Breakdown Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                      Atrasados Estimados
                    </p>
                    <p className="mt-1 font-mono text-xl font-bold text-white tabular-nums">
                      {yearsSinceAlta === 0
                        ? "A partir da alta"
                        : formatCurrency(retroactiveEstimate)}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      {yearsSinceAlta === 0
                        ? "Implantação imediata do benefício"
                        : `Últimos ${effectiveRetroYears * 13} pagamentos acumulados`}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>Soma em 10 Anos</span>
                    </div>
                    <p className="mt-1 font-mono text-xl font-bold text-white tabular-nums">
                      {formatCurrency(tenYearProjection)}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      130 parcelas + atrasados estimados
                    </p>
                  </div>
                </div>

                {/* Conditional Bonus Box if Work Accident */}
                {selectedAccident.hasLaborClaim && (
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-100 leading-relaxed">
                    <strong className="font-semibold text-amber-300">
                      + Direito Extra Identificado:
                    </strong>{" "}
                    Por se tratar de{" "}
                    <span className="underline decoration-amber-400/50">
                      acidente ou doença do trabalho
                    </span>
                    , você também pode acumular{" "}
                    <strong>
                      Indenização por Danos Morais, Estéticos, Pensão Mensal e
                      Seguro Coletivo
                    </strong>
                    .
                  </div>
                )}
              </div>

              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  onClick={() =>
                    onOpenTriage({
                      accidentType: selectedAccident.id,
                      salary,
                      estimatedMonthly: monthlyBenefit,
                      estimatedRetroactive: retroactiveEstimate,
                      yearsSinceAlta,
                    })
                  }
                  className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-sm sm:text-base font-bold text-slate-950 shadow-xl shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-400 cursor-pointer"
                >
                  <span>Validar Este Cálculo com o Dr. Alan</span>
                  <ArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <p className="flex items-start gap-1.5 text-[11px] text-slate-500 leading-snug">
                  <Info className="h-3.5 w-3.5 shrink-0 mt-0.5 text-slate-400" />
                  <span>
                    Estimativa educativa baseada em 50% da média salarial. O
                    cálculo exato do RMI considera 100% dos salários de
                    contribuição no CNIS analisados gratuitamente pela nossa
                    equipe.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </DossierReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * ProcessBenefitsSection
 * ------------------------------------------------------------------ */

interface ProcessBenefitsSectionProps {
  onOpenTriage: (prefill?: TriagePrefill) => void;
}

const STEPS = [
  {
    step: "01",
    icon: Smartphone,
    title: "Atendimento 100% pelo WhatsApp",
    description:
      "Sem sair de casa e sem perder dia de serviço. Você nos conta o acidente e envia fotos simples dos laudos, receitas, raio-X ou carta do INSS pelo próprio celular.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "Diagnóstico Jurídico & Cálculo CNIS",
    description:
      "Nossa equipe liderada pelo Dr. Alan Jantsch analisa a viabilidade do Auxílio-Acidente, indenização trabalhista e seguros, calculando o valor exato do seu benefício.",
  },
  {
    step: "03",
    icon: Stethoscope,
    title: "Protocolo Digital & Orientação Pericial",
    description:
      "Protocolamos o processo eletronicamente na Justiça da sua cidade/região. Antes da perícia médica, preparamos você com checklist completo de exames e quesitos técnicos.",
  },
  {
    step: "04",
    icon: Landmark,
    title: "Benefício Mensal Implantado + Atrasados",
    description:
      "Reconhecido o direito, o INSS implanta o pagamento mensal direto na sua conta até sua aposentadoria, liberando também os valores atrasados dos últimos 5 anos.",
  },
];

const SEQUEL_EXAMPLES = [
  "Fraturas com colocação de placas, pinos ou parafusos",
  "Lesão em dedos, mão ou punho (perda parcial de força/pinça)",
  "Rompimento de tendão / manguito rotador no ombro",
  "Hérnia de disco ou limitação na coluna lombar/cervical",
  "Lesão de menisco, ligamento (LCA) ou tornozelo",
  "Encurtamento de membro ou marcha claudicante",
  "Perda auditiva induzida por ruído (PAIR) ou visão monocular",
  "Cicatrizes cirúrgicas/estéticas e LER/DORT",
];

export function ProcessBenefitsSection({
  onOpenTriage,
}: ProcessBenefitsSectionProps) {
  return (
    <section id="processo" className="relative py-20 sm:py-28 bg-[#080C14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Part: Visual Editorial Split — Sequelas que dão direito */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
          <DossierReveal className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#101827] shadow-2xl">
              <div className="aspect-[4/4.3] w-full overflow-hidden">
                <img
                  src="/images/worker-rehabilitation.jpg"
                  alt="Trabalhador brasileiro em atendimento jurídico digital especializado"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="border-t border-white/10 bg-[#0D1422] p-5">
                <p className="text-xs font-mono uppercase tracking-wider text-amber-300">
                  Jurisprudência Consolidada STJ (Tema 416)
                </p>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  &ldquo;Ainda que a lesão ou redução da capacidade seja{" "}
                  <strong className="text-white">mínima</strong>, o trabalhador
                  faz jus ao Auxílio-Acidente de 50%.&rdquo;
                </p>
              </div>
            </div>
          </DossierReveal>

          <DossierReveal delay={0.1} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-300 uppercase">
              <span>Você Não Precisa Estar Inválido</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
              Ficou com dor ao fazer força, limitação de movimento ou pino
              cirúrgico?{" "}
              <span className="text-amber-300">Isso já gera direito.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              O maior erro do trabalhador brasileiro é achar que só tem direito
              quem ficou totalmente incapaz. Na verdade, quando o INSS dá{" "}
              <strong className="text-white">alta do auxílio-doença</strong>{" "}
              porque você já consegue voltar a trabalhar — mas ficou com uma
              sequela definitiva — nasce exatamente aí o direito ao{" "}
              <strong className="text-emerald-300">Auxílio-Acidente</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {SEQUEL_EXAMPLES.map((example) => (
                <div
                  key={example}
                  className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{example}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  onOpenTriage({
                    currentStatus:
                      "Quero confirmar se minha lesão/sequela se enquadra",
                  })
                }
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/15 transition-all hover:bg-amber-400 cursor-pointer"
              >
                <span>Confirmar Se Minha Sequela Dá Direito</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </DossierReveal>
        </div>

        {/* Bottom Part: 4-Step Digital Workflow */}
        <div className="pt-6 border-t border-white/10">
          <DossierReveal className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Rápido, Seguro e Sem Burocracia
            </p>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-white">
              Como funciona o atendimento para qualquer cidade do Brasil
            </h3>
          </DossierReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <DossierReveal key={item.step} delay={idx * 0.08}>
                  <div className="relative h-full rounded-2xl border border-white/10 bg-[#0E1523] p-6 transition-colors duration-200 hover:border-amber-500/35">
                    <div className="flex items-center justify-between mb-5">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-2xl font-bold text-white/15">
                        {item.step}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </DossierReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * TestimonialsSection
 * ------------------------------------------------------------------ */

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="relative py-20 sm:py-28 border-t border-white/10 bg-[#0B101C]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DossierReveal className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-amber-300 uppercase">
            <span>Histórias Reais de Trabalhadores</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
            Quem já teve seu direito conquistado com o{" "}
            <span className="text-amber-300">{LAWYER_INFO.shortName}</span>.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Trabalhadores do DF, SC, AM, RS e SP que voltaram ao trabalho
            após acidentes e garantiram renda mensal vitalícia até a
            aposentadoria.
          </p>
        </DossierReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => {
            const initials = item.name
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("");

            return (
              <DossierReveal key={item.name} delay={(idx % 3) * 0.08}>
                <SpotlightCaseCard className="h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className="flex items-center gap-1 text-amber-400"
                        aria-label="Avaliação 5 estrelas"
                      >
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <Quote className="h-4 w-4 text-white/20" />
                    </div>

                    <span className="inline-block rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-amber-200 mb-3">
                      {item.caseTag}
                    </span>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      <span>{item.outcomeHighlight}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/15 font-display text-xs font-bold text-amber-300">
                        {initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-400">
                          {item.roleAndCity}
                        </p>
                      </div>
                    </div>
                  </div>
                </SpotlightCaseCard>
              </DossierReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * FeeTransparencySection
 * ------------------------------------------------------------------ */

interface FeeTransparencySectionProps {
  onOpenTriage: (prefill?: TriagePrefill) => void;
}

export function FeeTransparencySection({
  onOpenTriage,
}: FeeTransparencySectionProps) {
  return (
    <section
      id="honorarios"
      className="relative py-20 sm:py-28 border-t border-white/10 bg-[#080C14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DossierReveal className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-300 uppercase">
            <Scale className="h-3.5 w-3.5" />
            <span>Transparência Total • Ética {LAWYER_INFO.oab}</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
            Você <span className="text-emerald-400">não precisa pagar nada</span>{" "}
            adiantado para lutar pelo seu direito.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Trabalhamos com contrato digital claro, seguro e registrado, na
            modalidade <strong className="text-white">ad exitum</strong>{" "}
            (pagamento condicionado ao resultado positivo do processo).
          </p>
        </DossierReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Triagem */}
          <DossierReveal delay={0.05} className="flex">
            <div className="w-full rounded-3xl border border-white/10 bg-[#0E1523] p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Etapa 1 • Diagnóstico
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  Triagem de Direito &amp; Laudos
                </h3>
                <div className="mt-4 pb-5 border-b border-white/10">
                  <span className="font-display text-3xl font-extrabold text-white">
                    Sem Compromisso
                  </span>
                  <p className="mt-1 text-xs text-slate-400">
                    Avaliação rápida de viabilidade pelo WhatsApp
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {[
                    "Análise da sequela e histórico do acidente",
                    "Verificação de qualidade de segurado no INSS",
                    "Identificação de prazos prescricionais",
                    "Orientação honesta se vale a pena ingressar",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenTriage({
                    currentStatus: "Desejo fazer a Triagem de Direito",
                  })
                }
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1] cursor-pointer"
              >
                <span>Solicitar Triagem Agora</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </DossierReveal>

          {/* Card 2: Highlighted Ad Exitum Flagship */}
          <DossierReveal delay={0.12} className="flex">
            <div className="relative w-full rounded-3xl border-2 border-emerald-500/50 bg-gradient-to-b from-emerald-950/35 via-[#0F1728] to-[#0B111E] p-7 sm:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-950/40">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Modalidade Principal
                  </p>
                  <span className="rounded-full bg-emerald-500 px-3 py-0.5 text-[11px] font-extrabold text-slate-950 uppercase">
                    Mais Procurado
                  </span>
                </div>

                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  Auxílio-Acidente no Êxito
                </h3>

                <div className="mt-4 pb-5 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-400">
                      R$ 0
                    </span>
                    <span className="text-sm font-semibold text-slate-300">
                      para iniciar a ação
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    Pagamento somente ao final se ganhar o processo
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {[
                    "Zero honorários iniciais ou mensalidades de manutenção",
                    "Pedido de Justiça Gratuita (isenção de custas processuais)",
                    "Cobrança dos últimos 5 anos de valores atrasados",
                    "Preparação individualizada antes da perícia médica",
                    "Contrato 100% digital em conformidade com a Tabela OAB",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenTriage({
                    accidentType: "Auxílio-Acidente (Modalidade no Êxito)",
                  })
                }
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-4 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 cursor-pointer"
              >
                <span>Iniciar Meu Caso Sem Custo Inicial</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </DossierReveal>

          {/* Card 3: Complete 360 Protection */}
          <DossierReveal delay={0.18} className="flex">
            <div className="w-full rounded-3xl border border-amber-500/25 bg-[#0E1523] p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Reparação Integral 360°
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  Trabalho + INSS + Seguros
                </h3>
                <div className="mt-4 pb-5 border-b border-white/10">
                  <span className="font-display text-3xl font-extrabold text-white">
                    Honorários no Êxito
                  </span>
                  <p className="mt-1 text-xs text-slate-400">
                    Cumulação máxima de indenizações no mesmo escritório
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {[
                    "Ação Trabalhista (Danos Morais, Estéticos e Pensão)",
                    "Concessão simultânea do Auxílio-Acidente no INSS",
                    "Cobrança judicial de Seguros de Vida/Acidentes (IPA)",
                    "Acompanhamento direto pelo Dr. Alan Jantsch (" +
                      LAWYER_INFO.oab +
                      ")",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenTriage({
                    accidentType:
                      "Proteção Completa 360° (Trabalho + INSS + Seguro)",
                  })
                }
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400 cursor-pointer"
              >
                <span>Avaliar Indenização Completa</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </DossierReveal>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
          <ShieldCheck className="h-4 w-4 shrink-0 text-amber-400/80" />
          <span>
            Todos os contratos seguem estritamente os preceitos éticos da Ordem
            dos Advogados do Brasil ({LAWYER_INFO.oab}).
          </span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * FaqSection
 * ------------------------------------------------------------------ */

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 border-t border-white/10 bg-[#0B101C]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <DossierReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-amber-300 uppercase">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Perguntas essenciais sobre{" "}
            <span className="text-amber-300">
              Auxílio-Acidente e Acidente de Trabalho
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Respostas diretas e sem juridiquês sobre o Auxílio-Acidente e as
            indenizações por acidente de trabalho.
          </p>
        </DossierReveal>

        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <DossierReveal key={item.question} delay={idx * 0.04}>
                <div
                  className={`rounded-2xl border transition-colors duration-200 ${
                    isOpen
                      ? "border-amber-500/40 bg-[#101829]"
                      : "border-white/10 bg-[#0D1422]/80 hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-300/90">
                        {item.category}
                      </span>
                      <span className="block font-display text-base sm:text-lg font-bold text-white leading-snug">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-amber-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: LEGAL_EASE }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/8 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </DossierReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
 * FinalCtaAndFooter
 * ------------------------------------------------------------------ */

interface FinalCtaAndFooterProps {
  onOpenTriage: (prefill?: TriagePrefill) => void;
}

export function FinalCtaAndFooter({ onOpenTriage }: FinalCtaAndFooterProps) {
  return (
    <>
      {/* Final Conversion Section */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[#080C14] overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <DossierReveal>
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-[#0E1626] shadow-2xl">
              {/* Atmospheric Background Image */}
              <img
                src="/images/escritorio-fachada.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-18 mix-blend-luminosity"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080C14] via-[#0B1220]/92 to-[#080C14]/88"
                aria-hidden="true"
              />

              <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                <div className="lg:col-span-8 space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/15 px-3.5 py-1 text-xs font-semibold text-amber-300">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Não deixe seu direito prescrever mês a mês</span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight text-white leading-[1.15]">
                    Descubra em poucos minutos se sua sequela gera{" "}
                    <span className="text-emerald-400">
                      Auxílio-Acidente ou Indenização
                    </span>
                    .
                  </h2>

                  <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                    Conte diretamente com a atuação de{" "}
                    <strong className="text-white">
                      {LAWYER_INFO.fullName} ({LAWYER_INFO.oab})
                    </strong>{" "}
                    {LAWYER_INFO.statesSentenceInflected}, com acompanhamento
                    conduzido com seriedade e comprometimento do protocolo à
                    perícia.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3.5">
                  <button
                    type="button"
                    onClick={() => onOpenTriage()}
                    className="w-full group inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-4 text-base font-bold text-slate-950 shadow-xl shadow-emerald-500/25 transition-all hover:bg-emerald-400 cursor-pointer"
                  >
                    <span>Avaliar Meu Direito Agora</span>
                    <ArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/[0.12]"
                  >
                    <MessageSquare className="h-4 w-4 text-emerald-400" />
                    <span>Chamar Direto no WhatsApp</span>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                  </a>

                  <p className="text-center text-xs text-slate-400">
                    Atendimento 100% Digital ({LAWYER_INFO.statesShortSentence})
                    • Sigilo Garantido
                  </p>
                </div>
              </div>
            </div>
          </DossierReveal>
        </div>
      </section>

      {/* Authoritative Footer */}
      <footer className="border-t border-white/10 bg-[#06090F] pt-16 pb-24 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Lawyer Identity Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/35 bg-amber-500/15 font-display font-bold text-amber-400">
                  {LAWYER_INFO.initials}
                </div>
                <div>
                  <p className="font-display text-base font-bold text-white">
                    {LAWYER_INFO.fullName}
                  </p>
                  <p className="font-mono text-xs text-amber-300">
                    Advogado Especialista • {LAWYER_INFO.oab}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Advocacia especializada na defesa de trabalhadores e
                acidentados {LAWYER_INFO.statesSentenceInflected}, com foco em
                Auxílio-Acidente (INSS), Acidentes de Trabalho, Seguro
                Obrigatório e Responsabilidade Civil.
              </p>

              <div className="space-y-2 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{LAWYER_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                  <a
                    href={`mailto:${LAWYER_INFO.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {LAWYER_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Practice Areas Column */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Áreas de Especialidade
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a
                    href="#especialidades"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Auxílio-Acidente (INSS — Art. 86)
                  </a>
                </li>
                <li>
                  <a
                    href="#especialidades"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Indenização por Acidente de Trabalho &amp; Trajeto
                  </a>
                </li>
                <li>
                  <a
                    href="#especialidades"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Doenças Ocupacionais (Coluna, Ombro, LER/DORT)
                  </a>
                </li>
                <li>
                  <a
                    href="#especialidades"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Seguro Obrigatório, Vida em Grupo &amp; IPA
                  </a>
                </li>
                <li>
                  <a
                    href="#especialidades"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Responsabilidade Civil em Acidentes Graves
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Navigation Column */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Acesso Rápido
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a
                    href="#simulador"
                    className="hover:text-white transition-colors"
                  >
                    Simulador de Auxílio-Acidente
                  </a>
                </li>
                <li>
                  <a
                    href="#processo"
                    className="hover:text-white transition-colors"
                  >
                    Como Funciona o Atendimento Digital
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="hover:text-white transition-colors"
                  >
                    Depoimentos de Trabalhadores
                  </a>
                </li>
                <li>
                  <a
                    href="#honorarios"
                    className="hover:text-white transition-colors"
                  >
                    Honorários no Êxito (Tabela OAB)
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Perguntas Frequentes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Ethical Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <p className="max-w-3xl leading-relaxed">
              © {new Date().getFullYear()} {LAWYER_INFO.fullName} — Inscrito na{" "}
              <strong className="text-slate-400">{LAWYER_INFO.oab}</strong>.
              Conteúdo meramente informativo, elaborado em estrita observância
              ao Código de Ética e Disciplina e ao Provimento nº 205/2021 do
              Conselho Federal da OAB. Este site não tem vínculo oficial com o
              Governo Federal ou INSS.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1.5 text-slate-400 shrink-0">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Sigilo Profissional OAB</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ------------------------------------------------------------------
 * EvaluationModal
 * ------------------------------------------------------------------ */

interface EvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: TriagePrefill;
}

export function EvaluationModal({
  isOpen,
  onClose,
  prefill,
}: EvaluationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cityState, setCityState] = useState("");
  const [caseType, setCaseType] = useState("Auxílio-Acidente (INSS)");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefill?.accidentType) {
      setCaseType(prefill.accidentType);
    }
    if (prefill?.currentStatus && !details) {
      setDetails(prefill.currentStatus);
    }
  }, [prefill]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const formattedMessage = [
    `Olá, ${LAWYER_INFO.shortName} (${LAWYER_INFO.oab})! Solicito avaliação gratuita do meu caso:`,
    `• Nome: ${name || "Trabalhador(a)"}`,
    phone ? `• WhatsApp: ${phone}` : null,
    cityState ? `• Cidade/UF: ${cityState}` : null,
    `• Demanda: ${caseType}`,
    prefill?.salary
      ? `• Média Salarial Simulada: R$ ${prefill.salary.toLocaleString("pt-BR")}`
      : null,
    prefill?.estimatedMonthly
      ? `• Auxílio Estimado: R$ ${prefill.estimatedMonthly.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}/mês`
      : null,
    details ? `• Relato / Sequela: ${details}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl = buildWhatsAppUrl(formattedMessage);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard fallback ignored safely
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="triage-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: LEGAL_EASE }}
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#0D1422] p-6 sm:p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                  <span>
                    {LAWYER_INFO.shortName} • {LAWYER_INFO.oab}
                  </span>
                </div>
                <h3
                  id="triage-modal-title"
                  className="mt-1 font-display text-xl sm:text-2xl font-bold text-white"
                >
                  {submitted
                    ? "Triagem Pronta para Atendimento"
                    : "Avaliação Gratuita do Seu Caso"}
                </h3>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 hover:bg-white/10 hover:text-white cursor-pointer"
                aria-label="Fechar janela"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                {prefill?.estimatedMonthly && (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-200 flex items-center justify-between gap-2">
                    <span>Simulação anexada ao seu atendimento:</span>
                    <strong className="font-mono text-sm text-emerald-300">
                      R${" "}
                      {prefill.estimatedMonthly.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                      /mês
                    </strong>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João Carlos da Silva"
                    className="w-full rounded-xl border border-white/12 bg-[#080C14] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full rounded-xl border border-white/12 bg-[#080C14] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Cidade / Estado (UF) *
                    </label>
                    <input
                      type="text"
                      required
                      value={cityState}
                      onChange={(e) => setCityState(e.target.value)}
                      placeholder="Ex: Florianópolis / SC"
                      className="w-full rounded-xl border border-white/12 bg-[#080C14] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Qual direito deseja avaliar?
                  </label>
                  <select
                    value={caseType}
                    onChange={(e) => setCaseType(e.target.value)}
                    className="w-full rounded-xl border border-white/12 bg-[#080C14] px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Auxílio-Acidente (INSS)">
                      Auxílio-Acidente no INSS (Mensal até Aposentar)
                    </option>
                    <option value="Acidente de Trabalho + Auxílio-Acidente">
                      Acidente de Trabalho + Auxílio-Acidente Cumulado
                    </option>
                    <option value="Doença Ocupacional (Coluna, Ombro, LER)">
                      Doença Ocupacional (Coluna, Ombro, LER/DORT)
                    </option>
                    <option value="Seguro Obrigatório / Seguro de Vida ou IPA">
                      Seguro Obrigatório / Seguro de Vida ou Acidentes
                    </option>
                    <option value="Responsabilidade Civil em Acidente">
                      Responsabilidade Civil em Acidente Grave
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Conte brevemente o acidente e a sequela (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Ex: Sofri acidente de moto em 2022, coloquei placa na perna, recebi alta do INSS e voltei a trabalhar CLT."
                    className="w-full rounded-xl border border-white/12 bg-[#080C14] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 cursor-pointer"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                  <span>Gerar Ficha &amp; Falar com Especialista</span>
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  100% Gratuito e Sigiloso • {LAWYER_INFO.oab}
                </p>
              </form>
            ) : (
              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-emerald-500/35 bg-emerald-500/10 p-4 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <strong className="text-white block mb-0.5">
                      Ficha de pré-análise registrada com sucesso!
                    </strong>
                    Clique abaixo para enviar seu resumo diretamente no WhatsApp
                    da equipe do {LAWYER_INFO.shortName}.
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#080C14] p-4 font-mono text-xs text-slate-300 whitespace-pre-line">
                  {formattedMessage}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Enviar no WhatsApp Agora</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-xs font-semibold text-white hover:bg-white/10 cursor-pointer"
                  >
                    <Copy className="h-3.5 w-3.5 text-amber-400" />
                    <span>{copied ? "Resumo Copiado!" : "Copiar Resumo"}</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------
 * FloatingConversionButton
 * ------------------------------------------------------------------ */

interface FloatingConversionButtonProps {
  onOpenTriage: (prefill?: TriagePrefill) => void;
}

export function FloatingConversionButton({
  onOpenTriage,
}: FloatingConversionButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.94 }}
          transition={{ duration: 0.25, ease: LEGAL_EASE }}
          className="fixed bottom-5 right-4 sm:right-6 z-40"
        >
          <button
            type="button"
            onClick={() => onOpenTriage()}
            className="group flex items-center gap-2.5 rounded-full border border-emerald-300/30 bg-emerald-500 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-2xl shadow-emerald-950/70 transition-all duration-200 hover:bg-emerald-400 hover:-translate-y-0.5 cursor-pointer"
            aria-label="Avaliar meu caso gratuitamente"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-50" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950" />
            </span>
            <MessageSquare className="h-4 w-4 stroke-[2.3]" />
            <span>Avaliar Meu Direito</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
