"use client";

import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProblemStatement from "@/components/home/ProblemStatement";
import OurApproach from "@/components/home/OurApproach";
import Offerings from "@/components/home/Offerings";
import ImpactSection from "@/components/home/ImpactSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <ProblemStatement />
            <OurApproach />
            <Offerings />
            <ImpactSection />
            <CTASection />
        </>
    );
}
