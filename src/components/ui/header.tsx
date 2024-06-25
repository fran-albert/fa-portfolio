import Link from "next/link";
import { FaComputer } from "react-icons/fa6";

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
}

const Header = ({ language, toggleLanguage }: HeaderProps) => {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <FaComputer className="h-6 w-6" color="#0c4a6e" />
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {language === "en" ? "About" : "Acerca"}
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {language === "en" ? "Portfolio" : "Portfolio"}
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {language === "en" ? "Skills" : "Skills"}
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {language === "en" ? "Contact" : "Contacto"}
          </Link>
          <button onClick={toggleLanguage} className="flex items-start">
            <img
              src={
                language === "en"
                  ? "https://img.icons8.com/?size=100&id=18099&format=png&color=000000"
                  : "https://img.icons8.com/?size=100&id=15532&format=png&color=000000"
              }
              alt={language === "en" ? "Español" : "English"}
              className="h-6 w-6"
            />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
