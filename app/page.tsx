import HeroSection from "@/components/HeroSection";
import ChairpersonSection from "@/components/ChairpersonSection";
import AtAGlance from "@/components/AtAGlance";
import FeaturedImageSection from "@/components/FeaturedImageSection";
import GradientSection from "@/components/GradientSection";
import ServicesSection from "@/components/ServicesSection";
import InfoImageSections from "@/components/InfoImageSections";
import WorkforceCSR from "@/components/WorkforceCSR";
import CaseStudies from "@/components/CaseStudies";
import DownloadCenter from "@/components/DownloadCenter";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeroSection />
      <AtAGlance />
      <FeaturedImageSection />
      <ChairpersonSection />
      <GradientSection />
      <ServicesSection />
      <InfoImageSections />
      <WorkforceCSR />
      <CaseStudies />
      <DownloadCenter />
    </div>
  );
}
