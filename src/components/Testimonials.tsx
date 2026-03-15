const testimonials = [
  {
    name: "Sarah M.",
    location: "Placerville, CA",
    text: "Alexa's team has been cleaning our home bi-weekly for over a year now. They are always on time, incredibly thorough, and so easy to communicate with. Our house has never looked better. I recommend them to everyone I know.",
    stars: 5,
  },
  {
    name: "David & Karen R.",
    location: "Cameron Park, CA",
    text: "We hired them for a post-construction cleanup after our kitchen remodel. The amount of dust and debris was overwhelming, but they left every surface spotless. Even the inside of our cabinets were wiped clean. Worth every penny.",
    stars: 5,
  },
  {
    name: "Jennifer L.",
    location: "El Dorado Hills, CA",
    text: "I manage three Airbnb properties in the area and Alexa's team handles all my turnovers. They are fast, reliable, and my guests consistently comment on how clean the space is. My ratings went up after I started working with them.",
    stars: 5,
  },
  {
    name: "Mark T.",
    location: "Diamond Springs, CA",
    text: "What I appreciate most is the no-contract policy. I had to skip a month when we traveled and there was zero hassle. They just picked right back up when we got home. Professional, flexible, and genuinely nice people.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[14px] font-semibold tracking-widest text-red-highlight uppercase">
            What Our Clients Say
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] text-burgundy md:text-[44px]">
            Trusted by Homeowners Across El Dorado County
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-8"
              style={{ boxShadow: "0 2px 4px #00000040" }}
            >
              <div className="mb-4 text-[20px] text-yellow">
                {"\u2605".repeat(t.stars)}
              </div>
              <p className="mb-6 text-[16px] leading-relaxed text-dark-gray italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-[16px] font-semibold text-burgundy">
                  {t.name}
                </p>
                <p className="text-[14px] text-gray">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
