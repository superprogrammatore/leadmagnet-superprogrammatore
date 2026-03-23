import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2, Zap } from "lucide-react";

interface EmailCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const REDIRECT_URL = "https://studenti.accademiadelcloud.it/p/web-app-in-10-minuti";

const EmailCaptureDialog = ({ open, onOpenChange }: EmailCaptureDialogProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Inserisci un'email valida");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (!res.ok) {
        throw new Error("Errore");
      }

      // Redirect on success
      window.open(REDIRECT_URL, "_blank");
      onOpenChange(false);
      setEmail("");
      setName("");
    } catch {
      setError("Errore nell'iscrizione. Riprova!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-primary/20">
        <DialogHeader className="text-center sm:text-center">
          <div className="flex justify-center mb-3">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Zap className="w-7 h-7 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-xl font-bold">🎯 Accetta la Sfida!</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Inserisci la tua email per accedere alla lezione gratuita e scoprire come creare una Web App in 10 minuti.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <Input
              type="text"
              placeholder="Il tuo nome (opzionale)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded-xl border-primary/20 bg-background focus:border-primary/50"
              maxLength={100}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="La tua email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-xl border-primary/20 bg-background focus:border-primary/50"
              maxLength={255}
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 text-base font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group glow-yellow"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>Guarda la Lezione Gratuita</span>
                <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            🔒 La tua email è al sicuro. Niente spam, promesso.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailCaptureDialog;
