import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border/50">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <p className="text-sm font-semibold text-foreground/80">
          Diventa un Super Programmatore con il{" "}
          <span className="text-primary">Super Potere dell'AI!</span>
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Eugenio Carlo Fontana — P.IVA 07097370485 — Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
