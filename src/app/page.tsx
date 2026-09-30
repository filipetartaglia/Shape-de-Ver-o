import Hero from "@/components/Hero";
import Identification from "@/components/Identification";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Pillars from "@/components/Pillars";
import Journey from "@/components/Journey";
import Deliverables from "@/components/Deliverables";
import Differentiator from "@/components/Differentiator";
import Audience from "@/components/Audience";
import NotFor from "@/components/NotFor";
import EightWeeks from "@/components/EightWeeks";
import SocialProof from "@/components/SocialProof";
import OfferStack from "@/components/OfferStack";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <FadeIn><Identification /></FadeIn>
      <FadeIn><Problem /></FadeIn>
      <FadeIn><Solution /></FadeIn>
      <FadeIn><Pillars /></FadeIn>
      <FadeIn><Journey /></FadeIn>
      <FadeIn><Deliverables /></FadeIn>
      <FadeIn><Differentiator /></FadeIn>
      <FadeIn><Audience /></FadeIn>
      <FadeIn><NotFor /></FadeIn>
      <FadeIn><EightWeeks /></FadeIn>
      <FadeIn><SocialProof /></FadeIn>
      <FadeIn><OfferStack /></FadeIn>
      <FadeIn><Guarantee /></FadeIn>
      <FadeIn><FAQ /></FadeIn>
      <FadeIn><FinalCTA /></FadeIn>
      <Footer />
    </main>
  );
}
