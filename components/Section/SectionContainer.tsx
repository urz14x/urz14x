"use client";
import { forwardRef } from "react";
const SectionContainer = forwardRef(
  (
    {
      id,
      children,
      className,
    }: Readonly<{
      id: string;
      children: React.ReactNode;
      className: string;
    }>,
    ref
  ) => {
    return (
      <section id={id} ref={ref} className={`${className && className}`}>
        {children}
      </section>
    );
  }
);
SectionContainer.displayName = "SectionContainer";
export default SectionContainer;
