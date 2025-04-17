import '../css/style.css'

import AboutHero from "../components/about/a-hero";
import AboutApproach from "../components/about/approach";
import AboutMission from "../components/about/mission";
import AboutStats from "../components/about/stats";
import AboutTimeline from "../components/about/timeline";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";

export default function AboutUs() {
    return (
      <main className="flex min-h-screen flex-col items-center bg-black">
        <Navbar />
        <AboutHero />
        <AboutMission />
        <AboutTimeline />
        <AboutApproach />
        <AboutStats />
        <Newsletter />
        <Footer />
      </main>
    )
  }