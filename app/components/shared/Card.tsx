import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
