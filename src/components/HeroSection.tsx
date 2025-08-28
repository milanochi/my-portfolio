import { Button } from "./ui/button";
import "../index.css";
import NavBar from "./NavBar";
import { ExternalLink } from "lucide-react";
import { MessageSquareMore } from "lucide-react";
import { Quote } from "lucide-react";
import { Mail } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

function handleSendMail() {
  window.location.href = "mailto:dtonye338@gmail.com";
}

function HeroSection() {
  return (
    <section className="overflow-hidden relative min-h-screen gradient-bg text-center px-6 ">
      <h1 className="absolute top-3 left-6 p-3 flex items-center text-white text-xl font-bold">
        ødaton.dev
      </h1>
      <NavBar />
      {/*RIGHT NAV SIDE */}
      <section className="hidden lg:block absolute top-6 right-6 z-0">
        <Button
          variant="default"
          className="cursor-pointer bg-[#1F2937] text-white shadow-xl hover:shadow-[#1F2937]/50"
        >
          Get Started
        </Button>
      </section>

      {/* HeroSection */}
      {/* TOP SIDE LEFT*/}
      {/* TOP SIDE LEFT */}
      <div className="absolute max-w-md top-32 left-6 overflow-x-hidden z-50">
        <motion.div
          className="text-white bg-[#1F2937] rounded-md p-5 space-y-4 shadow-xl shadow-[#1F2937]/50"
          initial={{ x: -450, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            x: { duration: 1.5, ease: "easeInOut", delay: 0.8 },
            opacity: { duration: 1.5, ease: "easeInOut", delay: 0.8 },
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <p className="text-lg text-[#9CA3AF]">
            Hello, I'm Daniel <span className="inline-block wave">👋</span>
          </p>
          <h1 className="text-3xl font-bold">Front End Developer</h1>
          <p className="text-md text-[#9CA3AF]">
            Crafting engaging and user-friendly digital experiences. I'll help
            you build efficient, secure, and scalable websites your users will
            love.
          </p>
        </motion.div>
      </div>

      {/* BOTTOM LEFT SIDE */}
      <section className="hidden lg:inline absolute top-112 left-36 flex space-x-4 z-50">
        <Button
          variant="default"
          className="cursor-pointer bg-[#1F2937] rounded-full text-white shadow-xl hover:shadow-[#1F2937]/50"
        >
          <FiGithub className="inline-block text-white" />
        </Button>
        <Button
          variant="default"
          className="cursor-pointer bg-[#1F2937] text-white shadow-xl hover:shadow-[#1F2937]/50 rounded-full"
        >
          <LuLinkedin className="inline-block text-white" />
        </Button>{" "}
        <Button
          variant="default"
          className="cursor-pointer bg-[#1F2937] text-white shadow-xl hover:shadow-[#1F2937]/50 rounded-full"
          onClick={handleSendMail}
        >
          <Mail className="inline-block text-white h-24 w-24" />
        </Button>
      </section>
      {/* TOP RIGHT SIDE */}
      <section className="hidden lg:block absolute top-70 right-12 max-w-sm space-y-4 z-50 ">
        <p className="text-md text-[#1F2937] font-normal leading-6">
          <Quote className="inline-block text-[#1F2937] mr-2" />I am confident
          that my skills and expertise will be of great value in your company.
          With my extensive experience of about 4 YEARS and a passion for
          building dynamic and well accessible web pages, I believe I will be a
          good fit for the position{" "}
          <Quote className="inline-block text-[#1F2937] ml-2" />
        </p>
      </section>

      {/* BOTTOM RIGHT SIDE */}
      <section className="absolute top-115 right-20 flex space-x-4 z-50">
        <div className="overflow-x-hidden">
          <motion.div
            className="cursor-pointer bg-[#1F2937] text-white shadow-xl hover:shadow-[#1F2937]/50 px-3 py-2 rounded-md text-sm w-full h-full"
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: { duration: 1.6, ease: "easeInOut", delay: 0.8 },
              opacity: { duration: 1.6, ease: "easeInOut", delay: 0.8 },
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <MessageSquareMore className="inline-block text-[#9CA3AF] mr-2 text-sm" />
            Get In Touch{" "}
          </motion.div>
        </div>
        <div className="overflow-x-hidden">
          <motion.div
            className="cursor-pointer bg-[#1F2937] text-white shadow-xl hover:shadow-[#1F2937]/50 px-3 py-2 rounded-md text-sm w-full h-full"
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: { duration: 1.6, ease: "easeInOut", delay: 0.8 },
              opacity: { duration: 1.6, ease: "easeInOut", delay: 0.8 },
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ExternalLink className="inline-block text-[#9CA3AF] mr-2 text-sm" />
            View Projects{" "}
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-6xl px-6 md:px-12 lg:px-24 py-12">
        {/* BACK SIDE */}
        <img
          src="hero-img.png"
          alt="Decorative"
          className=" absolute top-18 left-34 rounded-full w-[600px] h-[600px] object-cover mx-auto inset-0 z-0"
        />
      </section>
    </section>
  );
}

export default HeroSection;
