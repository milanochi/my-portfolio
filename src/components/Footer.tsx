import { type FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/your-username", icon: Github },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/your-username",
      icon: Linkedin,
    },
    { name: "Twitter", href: "https://x.com/your-username", icon: Twitter },
  ];

  return (
    <footer
      ref={ref}
      id="contact"
      className="relative bg-[#111827] w-full py-0 md:py-2 px-0 sm:px-6 "
    >
      <Card className="bg-black md:rounded-lg w-full border-none rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {/* Left Section: Name and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white">Daniel</h3>
            <p className="text-md text-gray-400 dark:text-gray-300 mt-2">
              Crafting engaging and user-friendly digital experiences.
            </p>
          </motion.div>

          {/* Center Section: Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Section: Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <link.icon className="h-6 w-6" aria-label={link.name} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="border-t border-gray-700/50 pt-6 text-center text-gray-400 dark:text-gray-300 text-sm"
        >
          &copy; {new Date().getFullYear()} Daniel's Portfolio | All rights
          Reserved reserved.
        </motion.div>
      </Card>
    </footer>
  );
};

export default Footer;
