import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary to-secondary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">MedCycle</h3>
            <p className="text-white/80 text-sm">
              Turning surplus into lifesaving impact
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <a
              href="#about"
              className="hover:text-white/80 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
            >
              About
            </a>
            <a
              href="#privacy"
              className="hover:text-white/80 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
            >
              Privacy
            </a>
            <a
              href="#contact"
              className="hover:text-white/80 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm flex items-center justify-center gap-2">
            © {currentYear} MedCycle. Made with <Heart className="w-4 h-4 fill-current" /> for a healthier India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
