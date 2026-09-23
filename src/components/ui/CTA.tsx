import type { ReactNode } from "react";

type CTAProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
};

export function CTA({ children, href, external, variant = "primary" }: CTAProps) {
  return (
    <a href={href} className={`button button--${variant}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}<span aria-hidden="true">{external ? "↗" : "→"}</span>
    </a>
  );
}
