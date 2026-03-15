const reasons = [
  {
    title: "No Contracts Ever",
    description:
      "We earn your business every visit. No long-term commitments, no cancellation fees. Stay because you want to, not because you have to.",
    icon: "\uD83D\uDCDD",
  },
  {
    title: "No Rescheduling Fees",
    description:
      "Life happens. If you need to reschedule, we make it easy and free. Flexibility is built into how we work.",
    icon: "\uD83D\uDCC5",
  },
  {
    title: "Trusted Local Team",
    description:
      "We live and work in El Dorado County. Every member of our team is background-checked, insured, and trained to our high standards.",
    icon: "\uD83E\uDD1D",
  },
  {
    title: "Consistent Quality",
    description:
      "We use detailed checklists for every job. You get the same thorough clean every time, not a different experience each visit.",
    icon: "\u2705",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-light-bg-alt py-20 md:py-28">
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[14px] font-semibold tracking-widest text-red-highlight uppercase">
            The Alexa&apos;s Difference
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] text-burgundy md:text-[44px]">
            Why Placerville Chooses Us
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[17px] text-dark-gray">
            We built this business on trust, reliability, and doing the job
            right. Here is what sets us apart from other cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl bg-white p-8"
              style={{ boxShadow: "0 2px 4px #00000040" }}
            >
              <span className="mb-4 block text-[36px]">{reason.icon}</span>
              <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[24px] text-burgundy">
                {reason.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-dark-gray">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Area callout */}
        <div className="mt-14 rounded-2xl bg-yellow p-8 text-center md:p-12">
          <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[28px] text-burgundy">
            Proudly Serving El Dorado County
          </h3>
          <p className="mx-auto max-w-[600px] text-[17px] leading-relaxed text-dark-gray">
            Based in Placerville, we serve homes and businesses throughout El
            Dorado County including Cameron Park, Shingle Springs, Diamond
            Springs, El Dorado Hills, and surrounding communities.
          </p>
        </div>
      </div>
    </section>
  );
}
