import { Button } from "./ui/button";
import "../index.css";
import NavBar from "./NavBar";
import { ExternalLink } from "lucide-react";
import { MessageSquareMore } from "lucide-react";

function HeroSection() {
  return (
    <section className="overflow-hidden relative min-h-screen gradient-bg text-center px-6 ">
      <h1 className="absolute top-3 left-6 p-3 flex items-center text-white text-xl font-bold">
        ødaton.dev
      </h1>
      <NavBar />

      {/* HeroSection */}
      {/* TOP SIDE LEFT*/}
      <div className="absolute text-center text-white z-50 bg-[#1F2937] max-w-md top-32 left-6 rounded-md p-5 space-y-4 shadow-xl shadow-[#1F2937]/50">
        <p className="text-lg text-[#9CA3AF]">
          Hello, I'm Daniel <span className="inline-block wave ">👋</span>
        </p>
        <h1 className="text-3xl font-bold">Front End Developer</h1>
        <p className="text-md text-[#9CA3AF]">
          Crafting engaging and user-friendly digital experiences.I'll help you
          build efficent, secured and scalable websites your users will love.
        </p>
      </div>

      {/* TOP RIGHT SIDE */}
      <section className="absolute top-110 right-13 flex space-x-4 z-50">
        <div>
          <Button
            variant="default"
            className="cursor-pointer bg-[#1F2937] text-white shadow-xl"
          >
            <MessageSquareMore className="inline-block text-[#9CA3AF]" />
            Get In Touch{" "}
          </Button>
        </div>
        <Button
          variant="default"
          className="cursor-pointer bg-[#1F2937] text-white shadow-xl"
        >
          <ExternalLink className="inline-block text-[#9CA3AF]" />
          View Projects{" "}
        </Button>
      </section>

      <section className="w-full max-w-6xl px-6 md:px-12 lg:px-24 py-12">
        {/* BACK SIDE */}
        <img
          src="hero-img.png"
          alt="Decorative"
          className=" absolute top-18 left-29 rounded-full w-[600px] h-[600px] object-cover mx-auto inset-0 z-0"
        />
      </section>
    </section>
  );
}

export default HeroSection;
