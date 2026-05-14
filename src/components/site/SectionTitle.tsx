type Props = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  children?: React.ReactNode;
};

export function SectionTitle({ eyebrow, title, align = "left", children }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="font-display text-4xl leading-[1.05] text-ivory text-balance md:text-6xl">
        {title}
      </h2>
      {children && (
        <div className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
          {children}
        </div>
      )}
    </div>
  );
}
