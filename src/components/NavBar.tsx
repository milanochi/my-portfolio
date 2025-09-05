// import { useContext } from "react";
// import { UserContext } from "../contexts/UserContext";

const navlinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];
function NavBar() {
  // const user = useContext(UserContext);
  return (
    <nav className="hidden md:flex sticky top-0 left-0 w-full p-3 flex justify-center z-64">
      <ul className="flex space-x-3 justify-center glass p-4 rounded-md ">
        {navlinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-white text-sm font-semibold hover:bg-[#1F2937] transition-colors p-3 rounded-md "
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
