const testimonials = [
  {
    name: "Sarah T.",
    location: "Placerville, CA",
    text: "Alexa and her team have been a lifesaver for our office in Placerville. They are professional, thorough, and always on time. Our workspace has never looked better. Highly recommend their commercial cleaning services.",
    stars: 5,
  },
  {
    name: "James L.",
    location: "Placerville, CA",
    text: "I have tried several cleaning companies in Placerville, but Alexa and her team stand out. They pay attention to every detail and leave my home spotless every time. Trustworthy and reliable.",
    stars: 5,
  },
  {
    name: "Emily R.",
    location: "Placerville, CA",
    text: "Alexa and her team transformed my home. Their residential cleaning service is top-notch. They are friendly, professional, and truly care about their work. My house has never felt so fresh.",
    stars: 5,
  },
  {
    name: "Deborah A.",
    location: "Placerville, CA",
    text: "Your team is always helpful with speedy turnover and friendly too. Have used them for 15 years. Could not be happier with the consistent quality and reliability.",
    stars: 5,
  },
  {
    name: "Michael T.",
    location: "Placerville, CA",
    text: "You guys are awesome. I have been using them for almost 4 years. They are quick, friendly, and reliable. My home always looks and smells amazing after every visit.",
    stars: 5,
  },
  {
    name: "Ben B.",
    location: "Placerville, CA",
    text: "Your team has cleaned our Placerville office for a year. Consistent, reliable, and fantastic service. We have never had a single complaint from our staff.",
    stars: 5,
  },
  {
    name: "Cory D.",
    location: "Placerville, CA",
    text: "Best in Placerville. My home has never been cleaner. Trustworthy and reliable every single time. Would not go anywhere else for cleaning services.",
    stars: 5,
  },
  {
    name: "Han A.",
    location: "El Dorado County, CA",
    text: "The cleaners are friendly, efficient, and do a fantastic job every time. I appreciate how thorough they are and how easy scheduling is with no contracts.",
    stars: 5,
  },
  {
    name: "Maria G.",
    location: "Placerville, CA",
    text: "I have tried several cleaning companies in Placerville, but Alexa and her team stand out. They pay attention to every detail and leave my home spotless every time. Trustworthy and reliable.",
    stars: 5,
  },
];

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="#fae084">
      <path d="M10 1.3l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.47l-4.77 2.55.91-5.33L2.27 6.92l5.34-.78L10 1.3z"/>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-yellow-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[14px] font-semibold tracking-widest text-red-highlight uppercase">
            What Our Clients Say
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] text-burgundy md:text-[44px]">
            Trusted by Homeowners Across El Dorado County
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-8 transition-shadow hover:shadow-md"
              style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.25)" }}
            >
              <div className="mb-4 flex gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="mb-6 text-[16px] leading-relaxed text-dark-gray italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-[14px] font-semibold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-burgundy">
                    {t.name}
                  </p>
                  <p className="text-[13px] text-gray">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/Alexa's+Cleaning+Services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-burgundy transition-colors hover:text-red-highlight"
          >
            See all reviews on Google
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
