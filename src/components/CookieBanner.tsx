import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-4 sm:p-6 shadow-2xl">
        <div className="flex items-start gap-3">
          <Cookie className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div className="flex-1 space-y-3">
            <p className="text-sm text-foreground/90">
              Questo sito utilizza cookie tecnici e, previo consenso, cookie analitici e di profilazione per migliorare la tua esperienza.{" "}
              <Link to="/cookie-policy" className="text-primary hover:underline font-medium">
                Leggi la Cookie Policy
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button onClick={accept} size="sm" className="text-xs">
                Accetta tutti
              </Button>
              <Button onClick={reject} variant="outline" size="sm" className="text-xs">
                Solo necessari
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
