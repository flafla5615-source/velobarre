import Benefits from "@/components/Benefits";
import DirectorTeaser from "@/components/DirectorTeaser";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import ProgramProcess from "@/components/ProgramProcess";
import StudioGallery from "@/components/StudioGallery";
import TrialForm from "@/components/TrialForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProgramProcess />
        <StudioGallery />
        <DirectorTeaser />
        <TrialForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
