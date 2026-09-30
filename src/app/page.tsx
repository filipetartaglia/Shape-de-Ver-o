import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Identification from "@/components/Identification";
import Solution from "@/components/Solution";
import EightWeeks from "@/components/EightWeeks";
import Pillars from "@/components/Pillars";
import Journey from "@/components/Journey";
import Deliverables from "@/components/Deliverables";
import OfferStack from "@/components/OfferStack";
import MaterialPreview from "@/components/MaterialPreview";
import Audience from "@/components/Audience";
import NotFor from "@/components/NotFor";
import SocialProof from "@/components/SocialProof";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <FadeIn><Problem /></FadeIn>
      <FadeIn><Identification /></FadeIn>
      <FadeIn><Solution /></FadeIn>
      <FadeIn><EightWeeks /></FadeIn>
      <FadeIn><Pillars /></FadeIn>
      <FadeIn><Journey /></FadeIn>
      <FadeIn><Deliverables /></FadeIn>
      <FadeIn><OfferStack /></FadeIn>
      <FadeIn><MaterialPreview /></FadeIn>
      <FadeIn><Audience /></FadeIn>
      <FadeIn><NotFor /></FadeIn>
      <FadeIn><SocialProof /></FadeIn>
      <FadeIn><Guarantee /></FadeIn>
      <FadeIn><FAQ /></FadeIn>
      <FadeIn><FinalCTA /></FadeIn>
      <Footer />
    </main>
  );
}
