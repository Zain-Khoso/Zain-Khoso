"use client";

// Lib Imports.
import Link from "next/link";

// Types.
type Props = {
  type?: "submit" | "reset" | "button";
  variant?: "default" | "outline" | "ghost";
} & ChildrenProp;

type ButtonProps = {
  onClick?: () => void;
} & Props;

type LinkProps = {
  href: string;
} & Props;

const classNames =
  "border-primary cursor-pointer rounded border-2 px-4 py-3 text-lg font-semibold ";

const variants = {
  default: "bg-primary hover:bg-primary/85 hover:border-primary/85 text-white",
  outline:
    "hover:bg-primary/15 hover:border-primary/15 text-primary bg-transparent",
  ghost:
    "bg-primary/15 text-primary border-primary/15 hover:bg-primary hover:text-white",
};

// General button component for the portfolio.
export function Button({
  type = "button",
  children,
  variant = "default",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames + variants[variant]}
    >
      {children}
    </button>
  );
}

// General button component for the portfolio in link form.
export function ButtonLink({ children, variant = "default", href }: LinkProps) {
  return (
    <Link href={href} className={classNames + variants[variant]}>
      {children}
    </Link>
  );
}
