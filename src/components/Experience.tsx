import { type FC, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

//  "Built interactive user interfaces for enterprise-level applications.",

// Define TypeScript interfaces for experience data
interface Experience {
  company: string;
  role: string;
  dates: string;
  description: string;
  achievements: string[];
  skills: string[]; // Optional: Skills used in this role
}

interface ExperienceSectionProps {
  experiences?: Experience[];
}

// Example data (replace with your actual experiences)
const defaultExperiences: Experience[] = [
  {
    company: "Dinesurf",
    role: "Full Stack Developer at Dinesurf",
    dates: "Feb 2025 - Present",
    description: "Stack: Vue JS, TypeScript, Laravel & MYSQL.",
    achievements: [
      "I was involved in developing a structured system that allows for automated reservations, online ordering, and booking of Events through a secured means of payment.",
      "I was part of a team that worked on the backend APIs and infrastructure that helps restaurants save on third party fees and enhance guest experience.",
      "Debugged and fixed an outstanding issue responsible for restricting users from making bookings and payments on the company's website.",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "shadcn"],
  },
  {
    company: "Mhino Healthcare",
    role: "Front End Engineer at Mhino",
    dates: "Jun 2022 - Dec 2024",
    description: "Stack: Vue JS, TypeScript",
    achievements: [
      "Led API integration for core functionalities, including Login, Register, Logout, Forgot Password, Create Password, Email Verifi cation, and Password Confi rmation, ensuring a secure and effi cient user authentication process",
      "Designed and developed intuitive, multi-page user interfaces for a dynamic website, enhancing user experience and engagement.",
      "Performed advanced debugging and implemented robust fixes, while integrating secure authentication and cutting-edge security features to safeguard the website.",
    ],
    skills: ["Vite", "React", "TypeScript", "Framer Motion"],
  },
  {
    company: "Mojoy Tech",
    role: "Front End Engineer at Mojoy",
    dates: "April - July 2025",
    description: "Stack: Next JS, TypeScript",
    achievements: [
      "Built a responsive full-stack E-commerce IT solutions platform using Next.js, SEO-optimized platform, integrating Sanity as the headless CMS to manage product and wishlist data, ensuring a scalable and dynamic content management system.",
      "Designed and implemented a wishlist feature with REST API, enabling users to manage wishlist, authenticated via NextAuth.js.",
      "Optimized (Amazon)AWS SES email delivery, resolved port 587 issues in production, ensuring reliable transactional emails .",
    ],
    skills: ["Vite", "React", "TypeScript", "Framer Motion"],
  },
  // Add more experiences as needed
];

const Experience: FC<ExperienceSectionProps> = ({
  experiences = defaultExperiences,
}) => {
  const [activeTab, setActiveTab] = useState(experiences[0]?.company || "");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  return (
    <section
      className="relative bg-[#111827] w-full md:h-screen mx-auto py-6"
      id="experience"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center py-6 md:py-12">
          <h1 className="text-white font-bold text-2xl md:text-4xl">
            Professional Experience
          </h1>{" "}
        </div>
        <Tabs
          defaultValue={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          className="grid grid-cols-1 md:grid-cols-[1fr_2.3fr]"
          orientation="vertical" // For vertical tabs on left
        >
          {/* Left Section: Company Tabs */}
          {/* bg-[#111827] */}
          <TabsList className="flex justify-center items-center md:justify-center md:flex-col bg-[#111827] md:space-y-2 px-2  md:mt-12 mt-0 min-h-[100px] w-full">
            {experiences.map((exp, index) => {
              const isActive = activeTab === exp.company;
              return (
                <div key={index} className="relative w-full">
                  {/* Vertical line indicator */}
                  <span
                    className={`absolute left-0 top-0 h-full w-1 transition-all ${
                      isActive ? "bg-blue-500" : "bg-none"
                    }`}
                  />
                  <TabsTrigger
                    value={exp.company}
                    className={`flex items-center justify-start w-full h-full p-4 rounded-sm text-md text-left transition-all text-[#9CA3AF] text-sm data-[state=active]:bg-[#374151] data-[state=active]:text-white hover:text-gray-100 cursor-pointer uppercase font-medium`}
                  >
                    {exp.company}
                  </TabsTrigger>
                </div>
              );
            })}
          </TabsList>
          {/* Right Section: Details */}
          <div className="mt-8 md:mt-0 px-6 ">
            {experiences.map((exp) => (
              <TabsContent key={exp.company} value={exp.company}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Card className="glass bg-green-300 px-6 py-6">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">
                        {exp.role}
                      </CardTitle>
                      <div className="flex items-center text-[#9CA3AF]">
                        <Calendar className="mr-2 h-4 w-4" />
                        {exp.dates}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-md text-white">{exp.description}</p>
                      <h3 className="text-lg font-semibold text-[#9CA3AF]">
                        Key Achievements
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.achievements.map((ach, idx) => (
                          <motion.li
                            key={idx}
                            className="text-md text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={
                              isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: -20 }
                            }
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            {ach}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
