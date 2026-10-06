"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SheetContextType {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextType | null>(null);

function useSheet() {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used within a Sheet provider");
  }
  return context;
}

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Sheet({ open: controlledOpen, onOpenChange: setControlledOpen, children }: SheetProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const onOpenChange = React.useCallback(
    (value: boolean) => {
      if (isControlled) {
        setControlledOpen?.(value);
      } else {
        setUncontrolledOpen(value);
      }
    },
    [isControlled, setControlledOpen]
  );

  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
}

interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function SheetTrigger({ children, onClick, ...props }: SheetTriggerProps) {
  const { onOpenChange } = useSheet();
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        onOpenChange(true);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export function SheetClose({ children, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = useSheet();
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        onOpenChange(false);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface SheetContentProps {
  children: React.ReactNode;
  className?: string;
  side?: "right" | "left" | "top" | "bottom";
}

export function SheetContent({ children, className = "" }: SheetContentProps) {
  const { open, onOpenChange } = useSheet();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easeCurve }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: easeCurve }}
            className={`relative z-50 w-full max-w-xl h-full bg-[#080808] border-l border-white/10 p-6 sm:p-10 flex flex-col shadow-2xl overflow-y-auto ${className}`}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-white/50 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-white/20"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function SheetHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-col space-y-2 mb-8 ${className}`}>{children}</div>;
}

export function SheetTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`font-serif text-2xl sm:text-3xl font-normal text-[#EDEDED] tracking-tight ${className}`}>{children}</h2>;
}

export function SheetDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed ${className}`}>{children}</p>;
}
