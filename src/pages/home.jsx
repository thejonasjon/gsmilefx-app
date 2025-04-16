import '../css/style.css'

import Hero from "../components/hero"
import TrainingPrograms from "../components/training-programs"
import Mentorship from "../components/mentorship"
import AccountManagement from "../components/account-management"
import PricingPlans from "../components/pricing-plans"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      <Navbar />
      <Hero />
      <TrainingPrograms />
      <Mentorship />
      <AccountManagement />
      <PricingPlans />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  )
}
