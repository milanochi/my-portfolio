import { Button } from "./ui/button";
import "../index.css";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { MessageSquareMore } from "lucide-react";
import { Quote } from "lucide-react";
import { Mail } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import ResumeButton from "./ResumeButton";

const handleSendMail = () => {
  const email = "dtonye338@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Email copied to clipboard!");
  return;
};
const lines = [
  {
    content: (
      <>
        <Quote className="inline-block text-[#1F2937] mr-2 wave2" />I am
        confident that my skills and expertise will be of great value in your
        company.
      </>
    ),
    delay: 0.8,
  },
  {
    content:
      "With my extensive experience of about 4 YEARS and a passion for building dynamic and well accessible web pages, I believe I will be",
    delay: 1.0,
  },
  {
    content: (
      <>
        a good fit for the position{" "}
        <Quote className="inline-block text-[#1F2937] ml-2 wave2" />
      </>
    ),
    delay: 1.2,
  },
];

function HeroSection() {
  return (
    <section
      className="overflow-hidden relative min-h-screen md:min-h-[600px] gradient-bg text-center px-6 w-full"
      id="home"
    >
      <h1 className="absolute top-3 left-6 p-3 flex items-center text-white text-xl font-bold">
        ødaton.dev
      </h1>
      <NavBar />
      {/*RIGHT NAV SIDE */}
      <div className="cursor-pointer flex justify-end w-[180px] w-full -mt-12 z-[9999]">
        <div
          className={`flex items-center gap-2`}
          role="status"
          aria-label="Active status"
        >
          <span
            className="h-3 w-3 rounded-full bg-green-300 animate-pulse"
            aria-hidden="true"
          />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Available for work{" "}
          </span>
        </div>
      </div>

      {/* HeroSection */}
      {/* TOP SIDE LEFT*/}
      {/* TOP SIDE LEFT CARD */}
      <div className="absolute max-w-md top-20 md:top-32 left-2 md:left-6 px-2 md:px-0 overflow-x-hidden z-50">
        <motion.div
          className=" text-white bg-[#1F2937] rounded-md p-5 space-y-4 shadow-xl shadow-[#1F2937]/50 "
          initial={{ x: -470 }}
          animate={{ x: 0 }}
          transition={{
            x: { duration: 1.5, ease: "easeInOut", delay: 0.8 },
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
            you build efficient, secure, seo-friendly, and scalable websites
            your users will love.
          </p>
        </motion.div>
      </div>

      {/* BOTTOM LEFT SIDE BUTTONS*/}
      <section className="hidden lg:inline absolute top-112 left-36 flex space-x-4 z-50">
        <Button
          onClick={handleSendMail}
          variant="default"
          className="scale-up cursor-pointer bg-[#1F2937] text-white shadow-xl hover:shadow-[#1F2937]/50 rounded-full"
        >
          <Mail className="inline-block text-white h-24 w-24" />
        </Button>
        <Button
          asChild
          variant="default"
          className="scale-up cursor-pointer bg-[#1F2937] rounded-full text-white shadow-xl hover:shadow-[#1F2937]/50"
        >
          <a
            href="https://github.com/milanochi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub className="inline-block text-white" />
          </a>
        </Button>
        <Button
          asChild
          variant="default"
          className="scale-up cursor-pointer bg-[#1F2937] text-white shadow-xl hover:shadow-[#1F2937]/50 rounded-full"
        >
          <a
            href="https://www.linkedin.com/in/daniel-ochi-4ab514316/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LuLinkedin className="inline-block text-white" />
          </a>
        </Button>
      </section>
      {/* TOP RIGHT SIDE */}
      <section className="hidden lg:block absolute top-70 right-12 max-w-sm space-y-4 z-50 ">
        <div className="overflow-y-hidden text-center">
          <motion.div className="text-md text-[#1F2937] dark:text-gray-300 font-normal space-y-2 ">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                className="text-md text-[#1F2937] dark:text-gray-300 leading-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  y: {
                    duration: 1.5,
                    ease: [0.22, 1, 0.22, 1],
                    delay: line.delay,
                  },
                  opacity: {
                    duration: 2,
                    ease: [0.22, 1, 0.22, 1],
                    delay: line.delay,
                  },
                }}
              >
                {line.content}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BOTTOM RIGHT SIDE */}
      <section className="absolute top-180 md:top-125 md:top-117 right-20 md:right-25 flex space-x-12 md:space-x-6 z-50 ">
        <div className="overflow-x-hidden">
          <motion.button
            className="cursor-pointer bg-[#1F2937] text-white hover:bg-black/90 p-3 rounded-md text-sm w-full h-full"
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{
              x: { duration: 1.6, ease: "easeInOut", delay: 0.8 },
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <MessageSquareMore
              className="inline-block text-[#9CA3AF] mr-2 text-sm"
              style={{ height: "18px", width: "18px" }}
            />
            <a href="#contact">Let's Talk</a>
          </motion.button>
        </div>
        <div className="overflow-x-hidden">
          <motion.div
            className="flex justify-between cursor-pointer bg-[#1F2937] text-white shadow-xl hover:bg-black/90 p-3 rounded-md text-sm w-full h-full"
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{
              x: { duration: 1.6, ease: "easeIn", delay: 0.8 },
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ResumeButton />
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-6xl px-6 md:px-12 lg:px-24 py-12">
        {/* BACK SIDE */}
        <img
          src="hero-img.png"
          alt="Hero Image"
          className="absolute top-55 md:top-18 left-18 md:left-34 rounded-full w-[600px] h-[600px] object-cover mx-auto inset-0 z-0"
        />
      </section>
    </section>
  );
}

export default HeroSection;
