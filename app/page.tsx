import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff" }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <Benefits />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
