import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  /* darkBgBlue: bg-[#111827] 
    darkBgGray: bg-[#1f2937]
    darkGreyGlass: bg-[#374151]
  */
  return (
    <section className="bg-[#111827] w-full min-h-[300px] mx-auto ">
      {/* This is a placeholder component for Stack */}
      <div className="flex items-center justify-center py-12">
        <h1 className="text-white font-bold text-4xl">Projects</h1>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
        <Card className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-none bg-[#374151] py-4 md:py-6 px-3 min-h-[200px]">
          {/* RIGHT SIDE CARD (Image) */}
          <div className="rounded-xs md:rounded-lg w-full h-[200px] md:h-full bg-red-300 order-1 md:order-2">
            <img
              src="card1.png"
              alt="Card Image"
              className="rounded-xs md:rounded-lg w-full h-full object-cover"
              style={{ aspectRatio: "1 / 1", height: "100%" }}
            />
          </div>
          {/* LEFT SIDE CARD (Content) */}
          <div className="flex flex-col justify-between rounded-md p-4 order-2 md:order-1">
            <CardTitle className="text-white font-bold text-xl mb-2 text-center md:text-left">
              Card Title
            </CardTitle>
            <CardDescription className="text-gray-300 mb-4 leading-relaxed text-center md:text-left">
              This is a description of the card. It provides additional context
              about the content.
            </CardDescription>
            <CardAction className="w-full md:w-auto">
              <div className="overflow-x-hidden">
                <motion.div
                  className="flex justify-center cursor-pointer bg-[#1F2937] text-white shadow-xl hover:shadow-[#1F2937]/50 p-4 md:p-3 rounded-md text-sm w-full h-full"
                  initial={{ x: 150 }}
                  animate={{ x: 0 }}
                  transition={{
                    x: { duration: 1.6, ease: "easeInOut", delay: 0.8 },
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <ExternalLink
                    className="inline-block text-[#9CA3AF] mr-2 text-sm"
                    style={{ height: "18px", width: "18px" }}
                  />
                  View Project
                </motion.div>
              </div>
            </CardAction>
          </div>
        </Card>
        <Card className="border-none bg-[#374151] glass">
          <CardContent>
            <h1 className="text-white font-bold">Card Content</h1>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
