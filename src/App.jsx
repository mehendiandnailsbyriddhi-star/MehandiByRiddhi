import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppStickyButton from "./components/WhatsAppStickyButton";

const Hero = lazy(() => import("./components/Hero"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const About = lazy(() => import("./components/About"));
const Booking = lazy(() => import("./components/Booking"));

function App() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#1F3D2B] font-body selection:bg-[#C9A646] selection:text-white">
      <Navbar />
      <main>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center text-[#C9A646] font-heading text-2xl animate-pulse">
              Loading...
            </div>
          }
        >
          <Hero />
          <Portfolio />
          <Services />
          <About />
          <Testimonials />
          <Booking />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppStickyButton />
    </div>
  );
}

export default App;
