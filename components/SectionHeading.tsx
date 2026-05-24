type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-normal text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p> : null}
    </div>
  );
}
