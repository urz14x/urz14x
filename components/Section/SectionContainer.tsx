"use client";

const SectionContainer = ({
  id,
  children,
  className,
}: Readonly<{
  id: string;
  children: React.ReactNode;
  className: string;
}>) => {
  return (
    <section id={id} className={`${className && className}`}>
      {children}
    </section>
  );
};

SectionContainer.displayName = "SectionContainer";
export default SectionContainer;
