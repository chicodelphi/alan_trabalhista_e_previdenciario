import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import "./index.css";
import { TriagePrefill } from "./data";
import { ScrollReadingProgress } from "./ui";
import {
  AuthorityMetricsSection,
  BenefitSimulatorSection,
  EvaluationModal,
  FaqSection,
  FeeTransparencySection,
  FinalCtaAndFooter,
  FloatingConversionButton,
  HeroSection,
  Navbar,
  ProcessBenefitsSection,
  SpecialtiesSection,
  TestimonialsSection,
} from "./sections";

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [triagePrefill, setTriagePrefill] = useState<TriagePrefill | undefined>(
    undefined
  );

  const handleOpenTriage = (prefill?: TriagePrefill) => {
    setTriagePrefill(prefill);
    setModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#080C14] text-slate-50 selection:bg-amber-500/30 selection:text-amber-200">
        <ScrollReadingProgress />
        <Navbar onOpenTriage={handleOpenTriage} />

        <main>
          <HeroSection onOpenTriage={handleOpenTriage} />
          <AuthorityMetricsSection />
          <SpecialtiesSection onOpenTriage={handleOpenTriage} />
          <BenefitSimulatorSection onOpenTriage={handleOpenTriage} />
          <ProcessBenefitsSection onOpenTriage={handleOpenTriage} />
          <TestimonialsSection />
          <FeeTransparencySection onOpenTriage={handleOpenTriage} />
          <FaqSection />
          <FinalCtaAndFooter onOpenTriage={handleOpenTriage} />
        </main>

        <FloatingConversionButton onOpenTriage={handleOpenTriage} />

        <EvaluationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          prefill={triagePrefill}
        />
      </div>
    </MotionConfig>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
