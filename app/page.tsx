import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KeyBenefits from "@/components/KeyBenefits";
import LocationContact from "@/components/LocationContact";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import ProblemSolution from "@/components/ProblemSolution";
import ProgramProcess from "@/components/ProgramProcess";
import Reviews from "@/components/Reviews";
import StudioGallery from "@/components/StudioGallery";
import TrialForm from "@/components/TrialForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProblemSolution />
        <ProgramProcess />
        <KeyBenefits />
        <Reviews />
        <StudioGallery />
        <TrialForm />
        <FAQ />
        <LocationContact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
