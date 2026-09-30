import HeroLeadForm from "@/components/HeroLeadForm";

export default function Hero() {
  return <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden pt-20 md:min-h-[calc(100svh-5rem)]">
    <img src="/images/alexa-approved-reference-illustration.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-[38%_center] md:object-center" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(46,36,25,.59)_0%,rgba(72,57,39,.38)_38%,rgba(72,57,39,.06)_70%,rgba(72,57,39,0)_100%)]" />
    <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-none items-start gap-8 px-[6%] pt-[13.5vh] pb-14 md:grid-cols-[minmax(0,40%)_minmax(25rem,33%)] md:justify-between md:gap-10 md:pt-[12.3vh] md:pb-12">
      <div className="max-w-[44rem] text-white"><p className="mb-8 text-[13px] font-semibold tracking-[.26em] sm:text-[16px] md:mb-10 md:text-[15px]">PLACERVILLE &amp; EL DORADO COUNTY</p><h1 className="font-[family-name:var(--font-serif)] text-[2.7rem] leading-[.95] sm:text-[4.7rem] md:text-[clamp(4.5rem,5.3vw,6.3rem)]">A cleaner home,<br />without the<br />runaround.</h1><a href="/contact" className="mt-7 block w-[62%] rounded-lg bg-yellow px-7 py-5 text-center text-[1.15rem] font-bold uppercase tracking-[-.02em] text-burgundy shadow-sm md:hidden">Book Cleaning</a></div>
      <aside className="hidden mt-20 rounded-2xl bg-white/95 px-7 pt-7 pb-9 text-dark-gray shadow-[0_18px_42px_rgba(45,31,19,.18)] backdrop-blur-[2px] md:block"><h2 className="mb-7 text-[1.85rem] font-bold leading-none tracking-[-.04em] text-black">Get a free estimate</h2><HeroLeadForm /></aside>
    </div>
  </section>;
}
