import { cn } from "@/lib/utils"; // if you want a classnames utility

interface ButtonProps {
  variant?: "primary" | "secondary" | "dark";
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant = "primary", children, className }: ButtonProps) {
  const baseStyles = "rounded-full font-medium px-6 py-3 text-sm sm:text-base transition-all";
  const variants = {
    primary: "bg-[#F7C35F] text-black hover:bg-[#f0b839]",
    secondary: "border border-black text-black hover:bg-black hover:text-white",
    dark: "bg-black text-white hover:bg-gray-800",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)}>
      {children}
    </button>
  );
}
