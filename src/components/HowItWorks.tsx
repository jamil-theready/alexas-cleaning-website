export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Get a Free Estimate",
      description:
        "Call us or fill out our quick form. We will ask about your space, your needs, and provide a transparent quote with no hidden fees.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Set a Convenient Time",
      description:
        "Pick a date and time that works for you. We offer flexible scheduling including weekends. No contracts, cancel or reschedule anytime.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Enjoy a Fresh, Clean Space",
      description:
        "Our team arrives on time, fully equipped with eco-friendly supplies. Sit back and enjoy your spotless home or office.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[13px] font-semibold tracking-[0.2em] text-burgundy/60 uppercase">
            Simple Process
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] text-burgundy md:text-[44px]">
            Book Your Cleaning in 3 Easy Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-burgundy/10 bg-light-bg p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow/30 text-burgundy transition-colors group-hover:bg-yellow/50">
                {step.icon}
              </div>
              <span className="mb-2 block text-[13px] font-bold tracking-widest text-burgundy/40">
                STEP {step.number}
              </span>
              <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[22px] text-burgundy">
                {step.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-dark-gray">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block rounded-full bg-burgundy px-10 py-4 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
