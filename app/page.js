import Image from "next/image";
import Shapes from "./components/Shapes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import CareerCoach from "./components/CareerCoach";
import LearnNewSkill from "./components/LearnNewSkill";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <main id="content" className="relative">
          <div>
            <Shapes />
            <div className="pb-10 bg-gray-50">
              <Navbar />
              <Hero />
            </div>
            <Companies />
          </div>
          <CareerCoach />
          <LearnNewSkill />
        </main>
        <Footer />
      </div>
    </>
  );
}
