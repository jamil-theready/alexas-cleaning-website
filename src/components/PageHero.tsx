interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-burgundy pt-24 pb-16 md:min-h-[420px] md:pt-32 md:pb-20">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-burgundy/75" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h1 className="mb-4 font-[family-name:var(--font-serif)] text-[36px] leading-tight text-white md:text-[54px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto max-w-[620px] text-[18px] leading-relaxed text-white/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
