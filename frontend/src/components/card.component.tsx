import type { ReactNode } from "react";

interface SiteSectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const SiteSection = ({
  children,
  title,
  subtitle,
  className = "",
}: SiteSectionProps) => {
  return (
    <section className={`site-section ${className}`}>
      {title && <h2 className="section-heading">{title}</h2>}

      {subtitle && <p className="section-subheading">{subtitle}</p>}

      {children}
    </section>
  );
};
