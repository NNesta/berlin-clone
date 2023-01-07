import Head from "next/head";
import { Inter } from "@next/font/google";
import HeroSection from "../components/sections/HeroSection";
import InformationSection from "../components/sections/InformationSection";
import NewsSection from "../components/sections/NewsSection";
import StudySection1 from "../components/sections/StudySection1";
import StudySection2 from "../components/sections/StudySection2";
import GlanceSection from "../components/sections/GlanceSection";
import DistinguishSection from "../components/sections/DistinguishSection";
import PartnerSection from "../components/sections/PartnerSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeroSection/>
        <InformationSection/>
        <NewsSection/>
        <StudySection1/>
        <StudySection2/>
        <GlanceSection/>
        <DistinguishSection/>
        <PartnerSection/>
      </div>
    </>
  );
}
