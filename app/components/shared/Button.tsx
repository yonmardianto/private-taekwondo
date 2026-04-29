import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "outline";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  href,
  className = "",
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-block";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
