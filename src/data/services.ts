export interface ServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  description: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ServicePage[] = [
  {
    slug: "house-cleaning",
    title: "House Cleaning",
    metaTitle: "House Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional house cleaning in Placerville and El Dorado County. Licensed and insured. No contracts or rescheduling fees. Book your cleaning today.",
    heroImage: "/images/house-cleaning.jpg",
    description:
      "Your home should feel like a retreat. Alexa's Cleaning Services provides thorough, reliable house cleaning for families and homeowners throughout Placerville and El Dorado County. We handle everything from dusting and vacuuming to kitchens, bathrooms, and living areas so you can spend your time on what actually matters.\n\nEvery visit follows a detailed checklist tailored to your home. Our team arrives on time, every time. We bring our own professional grade supplies and equipment, and we treat your space with the same care we would our own. Whether you need weekly, biweekly, or monthly service, we build a schedule that works for your household.\n\nWe are fully licensed and insured for your peace of mind. There are no contracts locking you in and no fees if you need to reschedule. Placerville families trust us because we show up, do excellent work, and never cut corners.",
    benefits: [
      "Customized cleaning checklist for every room in your home",
      "Flexible weekly, biweekly, or monthly scheduling",
      "Licensed and insured with full liability coverage",
      "No contracts and no rescheduling fees ever",
      "Professional grade supplies and equipment included",
      "Trusted by hundreds of Placerville and El Dorado County families",
    ],
    faqs: [
      {
        question: "What is included in a standard house cleaning?",
        answer:
          "Our standard house cleaning covers all living areas, kitchens, and bathrooms. This includes dusting, vacuuming, mopping, surface wiping, mirror cleaning, and trash removal. We follow a detailed checklist and can customize the service based on your priorities.",
      },
      {
        question: "Do I need to provide cleaning supplies?",
        answer:
          "No. We bring all of our own professional grade cleaning supplies and equipment. If you have a preferred product or have sensitivities to certain cleaners, just let us know and we will accommodate your needs.",
      },
      {
        question: "How do I schedule my first cleaning?",
        answer:
          "Give us a call or fill out our online booking form. We will set up a time that works for you, walk through your needs, and provide a clear quote before we start. There is no obligation and no pressure.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes. Alexa's Cleaning Services is fully licensed and insured in the state of California. Every member of our team is covered, giving you complete peace of mind while we work in your home.",
      },
      {
        question: "What if I need to cancel or reschedule?",
        answer:
          "Life happens. We never charge rescheduling fees. Just give us a heads up and we will find a new time that works. There are no contracts and no penalties for adjusting your schedule.",
      },
    ],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    metaTitle: "Deep Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Detailed deep cleaning services in Placerville CA. We tackle buildup, grime, and neglected areas. Licensed, insured, no contracts. Get a free quote.",
    heroImage: "/images/deep-cleaning.jpg",
    description:
      "Sometimes a regular cleaning is not enough. Our deep cleaning service reaches the spots that get overlooked during routine maintenance. We scrub behind appliances, detail baseboards, clean inside cabinets, degrease range hoods, and remove buildup from tile and grout. If it has been a while since your last thorough cleaning, this is where we start.\n\nDeep cleaning is ideal before moving into a new home, preparing for guests, or simply resetting your space. Our team works methodically through every room using commercial strength products that cut through grime without damaging your surfaces. We pay attention to the details that make a real difference.\n\nServing Placerville and the greater El Dorado County area, we bring the same level of care to every deep cleaning job. We are licensed and insured, and we never require contracts. No hidden fees, no surprises. Just a home that looks and feels like new.",
    benefits: [
      "Thorough cleaning of areas missed during routine maintenance",
      "Degreasing of kitchen appliances, range hoods, and backsplashes",
      "Detailed baseboard, vent, and light fixture cleaning",
      "Tile and grout scrubbing in kitchens and bathrooms",
      "Inside cabinet and drawer wipe downs",
      "Perfect for move ins, seasonal refreshes, or first time clients",
    ],
    faqs: [
      {
        question: "How is deep cleaning different from regular house cleaning?",
        answer:
          "Deep cleaning goes far beyond the surface. We tackle buildup on appliances, scrub grout, clean inside cabinets, detail baseboards, and address areas that accumulate grime over time. It is a comprehensive reset for your entire home.",
      },
      {
        question: "How long does a deep cleaning take?",
        answer:
          "Most deep cleanings take between 4 and 8 hours depending on the size of your home and the level of buildup. We will give you a time estimate after learning more about your space so there are no surprises.",
      },
      {
        question: "Should I get a deep cleaning before starting regular service?",
        answer:
          "We strongly recommend it. Starting with a deep cleaning gives us a solid baseline. After that, regular maintenance cleanings keep everything looking great without the need for heavy scrubbing each visit.",
      },
      {
        question: "Do you move furniture during a deep cleaning?",
        answer:
          "We move light furniture to clean underneath and behind it. For heavier pieces like sofas or dressers, we clean as far as we can reach. If you have specific requests, let us know ahead of time and we will plan accordingly.",
      },
      {
        question: "Is there a contract required for deep cleaning?",
        answer:
          "Absolutely not. Our deep cleaning is available as a one time service or as the starting point for a recurring plan. There are no contracts and no commitments required.",
      },
    ],
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    metaTitle:
      "Commercial Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Reliable commercial cleaning for Placerville businesses. Offices, retail, and more. Licensed, insured, flexible scheduling. No contracts required.",
    heroImage: "/images/commercial-cleaning.jpg",
    description:
      "A clean workplace makes a strong impression on clients and keeps your team healthy and productive. Alexa's Cleaning Services provides dependable commercial cleaning for offices, retail spaces, medical suites, and other businesses throughout Placerville and El Dorado County. We work around your hours so your operations are never disrupted.\n\nOur commercial cleaning covers everything from lobby and reception areas to restrooms, break rooms, and individual workstations. We empty trash, sanitize high touch surfaces, vacuum, mop, and restock supplies as needed. Every job follows a consistent checklist so you get the same high standard of clean each visit.\n\nWe understand that businesses need reliability above all else. That is why we show up on schedule without exception. We are fully licensed and insured, and we offer flexible agreements with no long term contracts. Whether you need nightly, weekly, or custom scheduling, we will build a plan that fits your business.",
    benefits: [
      "After hours and weekend cleaning options available",
      "Consistent results with detailed job checklists",
      "Restroom sanitization and supply restocking included",
      "High touch surface disinfection for healthier workspaces",
      "Licensed and insured with full commercial liability coverage",
      "Flexible scheduling with no long term contracts required",
    ],
    faqs: [
      {
        question: "What types of commercial spaces do you clean?",
        answer:
          "We clean offices, retail stores, medical and dental offices, coworking spaces, salons, and other commercial properties in the Placerville area. If you have a unique space, reach out and we will let you know how we can help.",
      },
      {
        question: "Can you clean outside of business hours?",
        answer:
          "Yes. Most of our commercial clients prefer evening or early morning cleanings so their business is untouched during operating hours. We will schedule a time that keeps your workflow running smoothly.",
      },
      {
        question: "Do you provide restroom supplies?",
        answer:
          "We can restock paper towels, toilet paper, and soap as part of our service. You provide the supplies and we make sure they are always filled. We can also recommend suppliers if you need a cost effective source.",
      },
      {
        question: "How do you handle security for our building?",
        answer:
          "We follow whatever access protocol you set. Whether that means key lockbox, alarm codes, or coordinating with on site staff, we take security seriously and keep all access information strictly confidential.",
      },
      {
        question: "Is a contract required for commercial cleaning?",
        answer:
          "No. We offer flexible service agreements without binding contracts. You can adjust your cleaning schedule or frequency at any time. We earn your business through consistent, excellent work, not fine print.",
      },
    ],
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction Cleaning",
    metaTitle:
      "Post-Construction Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Post-construction cleanup in Placerville CA. Dust, debris, and detail work handled. Licensed, insured, ready for final walkthrough. Free estimates.",
    heroImage: "/images/post-construction.jpg",
    description:
      "Construction projects leave behind a mess that regular cleaning cannot handle. Sawdust settles into every crevice. Drywall dust coats every surface. Adhesive residue, paint splatters, and debris make a newly built or renovated space feel far from finished. Alexa's Cleaning Services specializes in post construction cleanup that gets your property ready for move in or final walkthrough.\n\nWe follow a phased approach to post construction cleaning. First, we remove all large debris and leftover materials. Then we address the fine dust that settles on every surface, inside cabinets, on window tracks, and in air vents. Finally, we detail clean floors, fixtures, countertops, and glass until the space shines. The result is a property that looks as good as the blueprints promised.\n\nWe work with general contractors, homeowners, and property developers across Placerville and El Dorado County. Our team is licensed, insured, and experienced with both residential and commercial construction cleanups. No contracts. No rescheduling fees. Just a spotless space delivered on your timeline.",
    benefits: [
      "Complete removal of construction dust, debris, and residue",
      "Interior window and glass cleaning including sticker and adhesive removal",
      "Cabinet, drawer, and closet interior wipe downs",
      "Floor cleaning and polishing on all surface types",
      "Vent and light fixture dusting and detail work",
      "Experienced with both residential and commercial construction sites",
    ],
    faqs: [
      {
        question: "When should I schedule post construction cleaning?",
        answer:
          "Schedule your cleaning after all construction, painting, and finishing work is complete. We recommend booking before the final walkthrough or move in date so the space is presentation ready. Contact us early so we can reserve your dates.",
      },
      {
        question: "How many visits does post construction cleaning require?",
        answer:
          "Most projects need one thorough visit. Larger or more complex jobs may benefit from two phases: an initial rough clean to remove heavy debris followed by a detail clean. We will assess your project and recommend the right approach.",
      },
      {
        question: "Do you remove construction debris and leftover materials?",
        answer:
          "We remove light debris, dust, and general construction waste from the interior. Large items like lumber, drywall sheets, or heavy equipment should be handled by your contractor before we begin our cleaning.",
      },
      {
        question: "Can you clean both new builds and renovation projects?",
        answer:
          "Yes. We handle new construction, full renovations, kitchen and bathroom remodels, and additions. The scope of cleaning is tailored to the project. We have experience with residential homes and commercial buildouts alike.",
      },
      {
        question: "How do you price post construction cleaning?",
        answer:
          "Pricing depends on the size of the space, the type of construction, and the level of cleanup required. We provide free estimates after reviewing the job site or discussing the project details with you. No surprises and no hidden charges.",
      },
    ],
  },
  {
    slug: "airbnb-cleaning",
    title: "Airbnb Cleaning",
    metaTitle: "Airbnb Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Fast, reliable Airbnb turnover cleaning in Placerville CA. Guest ready results every time. Licensed, insured, no contracts. Book your turnovers today.",
    heroImage: "/images/airbnb-cleaning.jpg",
    description:
      "Five star reviews start with a spotless space. Alexa's Cleaning Services provides fast, thorough turnover cleaning for Airbnb and vacation rental hosts in Placerville and throughout El Dorado County. We know that timing matters. Our team works efficiently between guests so your property is always ready for the next check in.\n\nOur Airbnb cleaning covers everything guests notice: fresh linens, made beds, sparkling bathrooms, a pristine kitchen, and a welcoming living area. We restock essentials, take out trash, and do a final walkthrough to make sure every detail is right. We also flag maintenance issues like burned out bulbs or low supplies so you are never caught off guard.\n\nPlacerville is a popular destination for wine country visitors, outdoor enthusiasts, and weekend travelers. Keeping your rental in top condition is what sets you apart from the competition. We are licensed, insured, and built for the pace of short term rental hosting. No contracts. No rescheduling fees. Just consistently clean properties that earn glowing reviews.",
    benefits: [
      "Quick turnovers to minimize downtime between guests",
      "Linen changes, bed making, and towel staging included",
      "Restocking of guest essentials and welcome amenities",
      "Maintenance issue reporting after every turnover",
      "Consistent cleaning checklists that protect your ratings",
      "Flexible scheduling including weekends and holidays",
    ],
    faqs: [
      {
        question: "How quickly can you turn over a property between guests?",
        answer:
          "Most turnovers are completed in 2 to 4 hours depending on the size of the property and the condition left by the previous guest. We coordinate with your booking calendar to ensure the property is guest ready before every check in.",
      },
      {
        question: "Do you handle laundry and linen changes?",
        answer:
          "Yes. We strip and remake beds with fresh linens, replace used towels, and can run laundry on site if your property has the facilities. We can also coordinate with a laundry service if you prefer that approach.",
      },
      {
        question: "Can you restock supplies for incoming guests?",
        answer:
          "Absolutely. We restock toiletries, paper products, coffee, and other welcome items. You provide the supplies or let us know your preferences and we make sure everything is set for each arrival.",
      },
      {
        question: "What happens if a guest leaves the property in bad shape?",
        answer:
          "We handle heavy messes with the same professionalism as a standard turnover. If the cleaning requires significantly more time due to excessive mess, we will communicate with you before proceeding. We document conditions with photos when needed.",
      },
      {
        question: "Do you offer same day or last minute booking?",
        answer:
          "We do our best to accommodate last minute requests, especially for our regular hosting clients. The sooner you reach out, the better we can plan. We never charge rescheduling fees if your guest schedule shifts.",
      },
    ],
  },
  {
    slug: "apartment-cleaning",
    title: "Apartment Cleaning",
    metaTitle:
      "Apartment Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Affordable apartment cleaning in Placerville and El Dorado County. Move in, move out, and recurring service. Licensed, insured, no contracts.",
    heroImage: "/images/apartment-cleaning.jpg",
    description:
      "Whether you are settling into a new apartment, keeping up with a busy schedule, or preparing to move out, Alexa's Cleaning Services has you covered. We provide apartment cleaning throughout Placerville and El Dorado County that is tailored to smaller spaces without cutting corners on quality.\n\nOur apartment cleaning includes kitchens, bathrooms, living areas, and bedrooms. We dust, vacuum, mop, scrub, and sanitize every surface. For move out cleanings, we go the extra mile to help you get your deposit back. For move in cleanings, we make sure your new place feels fresh from the moment you walk through the door.\n\nWe know that apartment living comes with unique considerations. Our team respects shared spaces, keeps noise levels reasonable, and works within any building guidelines you share with us. We are licensed and insured, and we never lock you into a contract. No rescheduling fees. Just reliable, affordable cleaning that makes your apartment feel like home.",
    benefits: [
      "Tailored cleaning plans for apartments and condos of all sizes",
      "Move in and move out cleaning to protect your security deposit",
      "Kitchen and bathroom deep sanitization included",
      "Respectful of shared building spaces and neighbor considerations",
      "No contracts with flexible recurring or one time options",
      "Affordable pricing designed for apartment living budgets",
    ],
    faqs: [
      {
        question: "Do you offer move out cleaning for apartments?",
        answer:
          "Yes. Our move out cleaning is designed to help you leave the apartment in top condition and protect your security deposit. We clean every surface, detail appliances, scrub bathrooms, and make the unit look as close to move in condition as possible.",
      },
      {
        question: "Can you work within my apartment complex guidelines?",
        answer:
          "Of course. Just share any building rules about access, parking, noise, or cleaning hours and we will follow them. We are experienced with apartment and condo communities and always respect shared spaces.",
      },
      {
        question: "How do you price apartment cleaning?",
        answer:
          "Pricing is based on the number of bedrooms and bathrooms, the overall condition, and the type of service you need. Studios and one bedrooms are our most affordable option. We provide a clear quote before any work begins.",
      },
      {
        question: "Do you clean appliances inside and out?",
        answer:
          "For standard cleanings, we wipe down appliance exteriors and clean stovetops. For deep cleanings and move out cleanings, we also detail the inside of ovens, refrigerators, and microwaves to make sure everything sparkles.",
      },
      {
        question: "Can I schedule a one time apartment cleaning?",
        answer:
          "Absolutely. While many of our apartment clients choose recurring service, one time cleanings are always available. There are no contracts and no obligations to continue. We are happy to help on your terms.",
      },
    ],
  },
  {
    slug: "church-cleaning",
    title: "Church Cleaning",
    metaTitle: "Church Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Dependable church cleaning in Placerville CA. Sanctuaries, fellowship halls, and restrooms. Licensed, insured, flexible scheduling. No contracts.",
    heroImage: "/images/church-cleaning.jpg",
    description:
      "Your congregation deserves a clean, welcoming space for worship and fellowship. Alexa's Cleaning Services provides dedicated church cleaning for houses of worship throughout Placerville and El Dorado County. We understand that churches are more than buildings. They are gathering places for your community, and we treat them with the respect they deserve.\n\nOur church cleaning service covers sanctuaries, fellowship halls, classrooms, offices, kitchens, lobbies, and restrooms. We vacuum pews and seating areas, dust elevated surfaces, sanitize high traffic zones, and ensure restrooms are spotless for every service and event. We work around your schedule so the space is fresh and ready when your doors open.\n\nMany churches operate on a limited budget, and we believe quality cleaning should still be accessible. We offer straightforward, honest pricing with no hidden fees. We are fully licensed and insured, and we never require contracts. If your schedule changes due to a special event or holiday service, we adapt without penalty. Your ministry stays focused on what matters while we handle the rest.",
    benefits: [
      "Sanctuary, pew, and altar area cleaning and dusting",
      "Fellowship hall and kitchen sanitization after events",
      "Restroom deep cleaning and supply restocking",
      "Flexible scheduling around services, events, and holidays",
      "Budget friendly pricing for nonprofit and church organizations",
      "No contracts with scheduling changes accommodated freely",
    ],
    faqs: [
      {
        question: "How do you schedule around church services and events?",
        answer:
          "We work with your church calendar to clean at times that do not interfere with worship, Bible studies, or special events. Many churches prefer midweek cleaning, but we can schedule around any regular or seasonal programming you have.",
      },
      {
        question: "Do you clean stained glass, woodwork, or delicate surfaces?",
        answer:
          "We use gentle, surface appropriate products for delicate materials like stained glass, finished wood, and stone. We take extra care with anything irreplaceable or historically significant. Let us know about any special items and we will treat them accordingly.",
      },
      {
        question: "Can you clean after large church events or gatherings?",
        answer:
          "Absolutely. We offer post event cleanups for potlucks, weddings, funerals, holiday services, and community gatherings. Reach out ahead of time so we can plan the right crew and timeline for your event.",
      },
      {
        question: "Do you offer discounted rates for churches?",
        answer:
          "We provide fair, honest pricing and work within the budget realities of churches and nonprofits. We will always be transparent about costs and help you find a cleaning plan that fits your financial situation.",
      },
      {
        question: "What areas of the church do you clean?",
        answer:
          "We clean every area your congregation uses. This includes the main sanctuary, fellowship and event halls, Sunday school rooms, offices, lobbies, entryways, kitchens, and all restrooms. We can also handle exterior entry areas and walkways by request.",
      },
    ],
  },
  {
    slug: "warehouse-cleaning",
    title: "Warehouse Cleaning",
    metaTitle:
      "Warehouse Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional warehouse cleaning in Placerville and El Dorado County. Floors, restrooms, break rooms, and more. Licensed, insured, no contracts.",
    heroImage: "/images/warehouse-cleaning.jpg",
    description:
      "A clean warehouse is a safe and efficient warehouse. Alexa's Cleaning Services provides thorough warehouse cleaning for distribution centers, storage facilities, and industrial spaces throughout Placerville and El Dorado County. Dust, debris, and grime accumulate fast in high volume environments, and we have the team and equipment to keep up.\n\nOur warehouse cleaning service includes floor sweeping and scrubbing, restroom and break room sanitization, office area cleaning, trash removal, and high dust removal from rafters and shelving. We work around your operating schedule to avoid disrupting productivity. Whether your facility runs day shifts, night shifts, or around the clock, we will find the right window to get the job done.\n\nSafety and compliance matter in industrial spaces. A clean warehouse reduces slip hazards, improves air quality, and helps you meet OSHA and facility standards. We are licensed, insured, and experienced with large scale cleaning jobs. No contracts. No rescheduling fees. Just a cleaner, safer facility for your team.",
    benefits: [
      "Industrial floor sweeping, scrubbing, and degreasing",
      "Break room and employee restroom deep sanitization",
      "High dust removal from rafters, shelving, and overhead areas",
      "Trash and recycling removal from all work zones",
      "Scheduling flexibility for day, night, and weekend shifts",
      "Licensed and insured with experience in industrial facilities",
    ],
    faqs: [
      {
        question: "What size warehouses can you handle?",
        answer:
          "We clean warehouses of all sizes, from small storage facilities to large distribution centers. We scale our crew and equipment to match the scope of the job. Reach out with your square footage and we will put together a plan.",
      },
      {
        question: "Can you clean during active warehouse operations?",
        answer:
          "Yes. We coordinate with your team to clean in zones or during shift changes to avoid interfering with operations. Safety is our priority, and we follow all facility protocols while on site.",
      },
      {
        question: "Do you handle floor scrubbing and degreasing?",
        answer:
          "We do. Our team uses commercial grade equipment to sweep, scrub, and degrease concrete and epoxy floors. Regular floor maintenance reduces slip hazards and keeps your facility looking professional.",
      },
      {
        question: "How often should a warehouse be professionally cleaned?",
        answer:
          "It depends on your operation. High traffic warehouses benefit from weekly cleaning, while lighter use facilities may only need biweekly or monthly service. We will recommend a frequency based on your specific needs and usage patterns.",
      },
      {
        question: "Do you comply with OSHA cleanliness standards?",
        answer:
          "We are familiar with OSHA guidelines related to workplace cleanliness and safety. Our cleaning practices support compliance with housekeeping standards including floor maintenance, dust control, and sanitation in employee areas.",
      },
    ],
  },
  {
    slug: "gym-cleaning",
    title: "Gym Cleaning",
    metaTitle: "Gym Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional gym and fitness center cleaning in Placerville CA. Sanitized equipment, locker rooms, and floors. Licensed, insured, no contracts required.",
    heroImage: "/images/commercial-cleaning.jpg",
    description:
      "Gyms and fitness centers demand a higher standard of clean. Sweat, bacteria, and heavy foot traffic create an environment that requires consistent, thorough sanitization. Alexa's Cleaning Services provides professional gym cleaning for fitness facilities throughout Placerville and El Dorado County. We keep your members healthy and your space looking its best.\n\nOur gym cleaning covers equipment wipe downs, rubber and hardwood floor care, locker room and shower sanitization, mirror cleaning, and restroom maintenance. We use commercial grade disinfectants that eliminate germs without leaving harsh chemical odors. Every visit follows a detailed checklist so nothing gets missed.\n\nYour members expect a clean facility. A spotless gym builds trust and keeps people coming back. We are fully licensed and insured, and we work around your operating hours so your members never experience disruption. No contracts. No rescheduling fees. Just a gym that looks and smells fresh every single day.",
    benefits: [
      "Complete equipment sanitization after every cleaning visit",
      "Locker room and shower deep cleaning and disinfection",
      "Rubber, hardwood, and turf floor care and maintenance",
      "Mirror and glass cleaning throughout the facility",
      "Flexible scheduling around peak gym hours",
      "Licensed and insured with no contracts required",
    ],
    faqs: [
      {
        question: "How often should a gym be professionally cleaned?",
        answer:
          "Most gyms benefit from daily or every other day cleaning due to heavy use and sweat accumulation. We will assess your facility and recommend a schedule that keeps your space consistently clean and safe for members.",
      },
      {
        question: "Do you sanitize gym equipment?",
        answer:
          "Yes. We wipe down and disinfect all equipment including weight machines, free weights, cardio machines, benches, and mats. We use products that kill bacteria and viruses without damaging equipment surfaces.",
      },
      {
        question: "Can you clean during off peak hours?",
        answer:
          "Absolutely. Most of our gym clients prefer early morning or late night cleanings. We schedule around your busiest times so members are never inconvenienced by our work.",
      },
      {
        question: "Do you handle locker room and shower cleaning?",
        answer:
          "Yes. Locker rooms and showers are a top priority. We scrub tile, disinfect benches, clean drains, sanitize fixtures, and restock supplies. These high moisture areas get special attention to prevent mold and bacteria growth.",
      },
      {
        question: "Are your cleaning products safe for gym environments?",
        answer:
          "We use commercial grade disinfectants that are effective against bacteria, viruses, and fungi while being safe for use around people. Our products are low odor and dry quickly so your facility stays comfortable.",
      },
    ],
  },
  {
    slug: "daycare-cleaning",
    title: "Daycare Cleaning",
    metaTitle: "Daycare Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Safe, thorough daycare cleaning in Placerville CA. Child safe products, toy sanitization, and daily disinfection. Licensed, insured, no contracts.",
    heroImage: "/images/deep-cleaning.jpg",
    description:
      "Children touch everything. That is why daycare cleaning requires extra care, attention, and the right products. Alexa's Cleaning Services provides specialized cleaning for daycares, preschools, and childcare centers throughout Placerville and El Dorado County. We create a safe, hygienic environment where kids can learn and play.\n\nOur daycare cleaning includes toy and surface sanitization, restroom disinfection, kitchen and snack area cleaning, floor care, and high touch point wiping. We use child safe, nontoxic cleaning products that meet health department standards. Every visit is thorough and consistent so parents and licensing inspectors see a facility they can trust.\n\nKeeping children healthy means keeping their environment spotless. We understand the regulations and expectations that come with childcare facilities. Our team is fully licensed and insured, and we work outside of operating hours so the children are never exposed to cleaning in progress. No contracts. No rescheduling fees. Just a daycare that sparkles.",
    benefits: [
      "Child safe and nontoxic cleaning products used exclusively",
      "Toy, play area, and learning station sanitization",
      "Restroom disinfection designed for young children",
      "Kitchen and snack prep area deep cleaning",
      "Compliance with health department cleanliness standards",
      "Licensed and insured with flexible after hours scheduling",
    ],
    faqs: [
      {
        question: "Are your cleaning products safe for children?",
        answer:
          "Yes. We exclusively use nontoxic, child safe cleaning and disinfecting products in daycare environments. Our products are effective against germs and bacteria while being gentle enough for spaces where children play and eat.",
      },
      {
        question: "Do you sanitize toys and play equipment?",
        answer:
          "We do. Toys, play mats, learning stations, and indoor play equipment are sanitized during every visit. We follow guidelines that meet or exceed health department standards for childcare facilities.",
      },
      {
        question: "Can you clean after the children have gone home?",
        answer:
          "That is our preferred approach. We schedule all daycare cleanings outside of operating hours so children are never present during the cleaning process. This ensures both safety and a distraction free clean.",
      },
      {
        question: "How often should a daycare be professionally cleaned?",
        answer:
          "Daily cleaning is recommended for most daycare facilities due to the high potential for germ spread among young children. We can also provide additional sanitization visits during cold and flu season.",
      },
      {
        question: "Do you help with licensing and inspection readiness?",
        answer:
          "While we are not inspectors ourselves, our cleaning standards are designed to meet and exceed the cleanliness requirements set by California childcare licensing agencies. A consistently clean facility makes inspections stress free.",
      },
    ],
  },
  {
    slug: "medical-cleaning",
    title: "Medical Cleaning",
    metaTitle: "Medical Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional medical office cleaning in Placerville CA. OSHA compliant sanitization for clinics and dental offices. Licensed, insured, no contracts.",
    heroImage: "/images/commercial-cleaning.jpg",
    description:
      "Medical and dental offices require a level of cleanliness that goes far beyond standard commercial cleaning. Patients expect a sterile environment, and regulatory agencies demand it. Alexa's Cleaning Services delivers specialized medical facility cleaning for clinics, dental practices, and healthcare offices throughout Placerville and El Dorado County.\n\nOur medical cleaning includes waiting room sanitization, exam room disinfection, restroom deep cleaning, floor care, and proper handling of waste receptacles. We follow infection control protocols and use hospital grade disinfectants that meet OSHA and CDC guidelines. High touch surfaces like door handles, light switches, and check in counters receive focused attention during every visit.\n\nPatient trust starts with a clean facility. When your office looks and smells pristine, patients feel confident in the care they are about to receive. We are fully licensed and insured with experience in healthcare environments. No contracts and no rescheduling fees. We work around your patient schedule so your practice never misses a beat.",
    benefits: [
      "Hospital grade disinfectants used on all surfaces",
      "Exam room and treatment area thorough sanitization",
      "Waiting room and reception area daily cleaning",
      "OSHA and CDC guideline compliant cleaning protocols",
      "Proper waste receptacle handling and liner replacement",
      "After hours scheduling to avoid patient disruption",
    ],
    faqs: [
      {
        question: "Do you follow OSHA cleaning guidelines for medical offices?",
        answer:
          "Yes. Our cleaning protocols are designed to comply with OSHA bloodborne pathogen standards and CDC infection control guidelines. We use hospital grade disinfectants and follow proper procedures for medical environments.",
      },
      {
        question: "What types of medical offices do you clean?",
        answer:
          "We clean general practice offices, dental clinics, chiropractic offices, optometry practices, dermatology clinics, and other outpatient healthcare facilities in the Placerville area. Contact us to discuss your specific needs.",
      },
      {
        question: "Do you handle biohazard waste?",
        answer:
          "We do not remove or transport biohazard waste such as sharps containers or contaminated materials. We do handle general waste, replace liners, and sanitize waste receptacle exteriors as part of our standard service.",
      },
      {
        question: "Can you clean exam rooms between patients?",
        answer:
          "Our primary service is after hours deep cleaning of the entire facility. For between patient turnover cleaning, we recommend discussing a custom plan so we can determine the best way to support your practice during operating hours.",
      },
      {
        question: "How often do medical offices need professional cleaning?",
        answer:
          "Most medical and dental offices require daily cleaning to maintain compliance and patient confidence. We recommend a minimum of five days per week for active practices. We will tailor a schedule to match your office hours and patient volume.",
      },
    ],
  },
  {
    slug: "eco-cleaning",
    title: "Eco-Friendly Cleaning",
    metaTitle:
      "Eco-Friendly Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Green cleaning services in Placerville CA. Nontoxic, biodegradable products that protect your family and the environment. Licensed, insured, no contracts.",
    heroImage: "/images/house-cleaning.jpg",
    description:
      "You should not have to choose between a clean home and a healthy environment. Alexa's Cleaning Services offers eco friendly cleaning for homes and businesses throughout Placerville and El Dorado County. We use nontoxic, biodegradable, and plant based cleaning products that deliver powerful results without harsh chemicals.\n\nOur green cleaning service covers everything a traditional cleaning does. Kitchens, bathrooms, living areas, bedrooms, and offices all get the same thorough treatment. The difference is in what we use. Our products are free from ammonia, chlorine, phthalates, and artificial fragrances. They are safe for children, pets, and anyone with allergies or chemical sensitivities.\n\nLiving in the Sierra Foothills means caring about the land around us. Our eco friendly approach reduces the chemical footprint in your home and keeps harmful substances out of local waterways. We are licensed and insured, and we never require contracts. No rescheduling fees. Just a spotless space that is gentle on the planet and safe for your family.",
    benefits: [
      "Nontoxic and biodegradable cleaning products exclusively",
      "Safe for children, pets, and allergy sensitive individuals",
      "Free from ammonia, chlorine, and artificial fragrances",
      "Full service cleaning with green products at no extra cost",
      "Reduced chemical footprint for your home and community",
      "Licensed and insured with no contracts required",
    ],
    faqs: [
      {
        question: "Are eco friendly products as effective as traditional cleaners?",
        answer:
          "Absolutely. Modern green cleaning products are formulated to match or exceed the cleaning power of traditional chemicals. We select professional grade eco friendly products that cut grease, remove grime, and disinfect effectively.",
      },
      {
        question: "What brands or types of green products do you use?",
        answer:
          "We use a curated selection of plant based, biodegradable, and EPA Safer Choice certified products. We are happy to share our product list with you so you know exactly what is being used in your home.",
      },
      {
        question: "Is eco friendly cleaning safe for pets?",
        answer:
          "Yes. Our nontoxic products are safe for homes with dogs, cats, and other pets. There are no harsh fumes or residues that could harm animals. Many clients choose our green service specifically because of their pets.",
      },
      {
        question: "Does eco friendly cleaning cost more?",
        answer:
          "No. We offer our eco friendly cleaning at the same price as our standard service. We believe green cleaning should be accessible to everyone, not a premium add on. You get the same thorough clean with better products.",
      },
      {
        question: "Can I switch to eco friendly cleaning from my current service?",
        answer:
          "Of course. If you are already a client, we can switch your service to eco friendly products at your next visit. If you are new, just let us know when you book and we will use green products from the start.",
      },
    ],
  },
  {
    slug: "floor-cleaning",
    title: "Floor Cleaning",
    metaTitle: "Floor Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Expert floor cleaning in Placerville CA. Hardwood, tile, laminate, and vinyl floor care. Licensed, insured, no contracts. Get a free estimate today.",
    heroImage: "/images/deep-cleaning.jpg",
    description:
      "Floors take more abuse than any other surface in your home or business. Foot traffic, spills, pet accidents, and everyday dirt take a toll over time. Alexa's Cleaning Services provides dedicated floor cleaning for hardwood, tile, laminate, vinyl, and stone floors throughout Placerville and El Dorado County.\n\nOur floor cleaning goes beyond basic mopping. We use surface specific products and techniques to lift embedded dirt, remove stains, restore shine, and protect your flooring investment. Tile floors get grout scrubbing and sealing attention. Hardwood floors receive gentle, pH balanced treatment that cleans without stripping the finish. Laminate and vinyl floors get thorough cleaning that avoids excess moisture.\n\nClean floors transform a room. They look better, feel better underfoot, and last longer with proper care. Whether you need a one time floor restoration or ongoing maintenance, we build a plan around your floors and your schedule. We are licensed and insured. No contracts. No rescheduling fees. Just beautifully clean floors.",
    benefits: [
      "Surface specific cleaning for hardwood, tile, laminate, and vinyl",
      "Tile grout scrubbing and deep cleaning included",
      "Hardwood safe products that protect and restore shine",
      "Stain and spot treatment for stubborn floor marks",
      "One time restoration or recurring maintenance plans available",
      "Licensed and insured with no contracts required",
    ],
    faqs: [
      {
        question: "What types of flooring do you clean?",
        answer:
          "We clean hardwood, tile, stone, laminate, vinyl, and engineered flooring. Each surface type gets a tailored approach with the right products and techniques to clean effectively without causing damage.",
      },
      {
        question: "Can you remove stains from tile grout?",
        answer:
          "Yes. Grout cleaning is one of our specialties. We use professional scrubbing techniques and targeted products to lift discoloration and restore grout to its original appearance. For heavily stained grout, multiple treatments may be needed.",
      },
      {
        question: "Is your hardwood floor cleaning safe for sealed finishes?",
        answer:
          "Absolutely. We use pH balanced, hardwood safe products that clean without stripping or dulling sealed finishes. We avoid excess moisture and use microfiber methods that are gentle on wood surfaces.",
      },
      {
        question: "How often should floors be professionally cleaned?",
        answer:
          "High traffic homes and businesses benefit from monthly professional floor cleaning. Lower traffic areas may only need quarterly service. We will recommend a schedule based on your flooring type, usage, and goals.",
      },
      {
        question: "Do you offer floor cleaning as a standalone service?",
        answer:
          "Yes. Floor cleaning is available as a standalone service or as an add on to any of our regular cleaning packages. Many clients book floor cleaning separately on a quarterly basis alongside their routine cleaning schedule.",
      },
    ],
  },
  {
    slug: "disinfecting-cleaning",
    title: "Disinfecting & Sanitization",
    metaTitle:
      "Disinfecting & Sanitization in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional disinfecting and sanitization in Placerville CA. EPA approved products for homes and businesses. Licensed, insured, no contracts required.",
    heroImage: "/images/commercial-cleaning.jpg",
    description:
      "When standard cleaning is not enough, disinfecting and sanitization provide the extra layer of protection your space needs. Alexa's Cleaning Services offers professional disinfection for homes, offices, and commercial spaces throughout Placerville and El Dorado County. We use EPA approved disinfectants that eliminate bacteria, viruses, and other harmful pathogens on contact.\n\nOur sanitization service targets high touch surfaces like door handles, light switches, countertops, desks, phones, and shared equipment. We also treat larger surfaces including floors, walls, and furniture. Every application follows CDC recommended contact times to ensure maximum effectiveness. This service is ideal for cold and flu season, after illness in the household, or as a regular supplement to your cleaning routine.\n\nA disinfected space protects your family, employees, and customers. We are trained in proper disinfection protocols and use professional grade equipment to ensure thorough coverage. We are licensed and insured, and we never require contracts. No rescheduling fees. Just a cleaner, healthier environment you can count on.",
    benefits: [
      "EPA approved disinfectants that eliminate harmful pathogens",
      "High touch surface focus including handles, switches, and counters",
      "CDC recommended contact times followed on every visit",
      "Available for homes, offices, and commercial facilities",
      "Ideal for cold and flu season or post illness treatment",
      "Licensed and insured with no contracts required",
    ],
    faqs: [
      {
        question: "What is the difference between cleaning and disinfecting?",
        answer:
          "Cleaning removes visible dirt, dust, and debris from surfaces. Disinfecting uses EPA approved chemical agents to kill bacteria, viruses, and other pathogens. Our sanitization service goes beyond cleaning to actively eliminate harmful microorganisms.",
      },
      {
        question: "What products do you use for disinfection?",
        answer:
          "We use EPA registered disinfectants that are proven effective against a broad spectrum of bacteria and viruses. Our products meet or exceed CDC recommendations for surface disinfection in residential and commercial settings.",
      },
      {
        question: "How often should I schedule disinfection services?",
        answer:
          "It depends on your environment. Offices and commercial spaces benefit from weekly disinfection. Homes may need monthly service or targeted treatments during flu season or after someone has been ill.",
      },
      {
        question: "Is disinfection safe for homes with children and pets?",
        answer:
          "Yes. We use products that are effective against pathogens while being safe for occupied spaces. We allow proper drying time before the area is used again. For extra sensitive households, we offer nontoxic disinfection options.",
      },
      {
        question: "Can disinfection be added to my regular cleaning service?",
        answer:
          "Absolutely. Many clients add disinfection as a supplement to their standard cleaning package. We can include it with every visit or schedule it periodically based on your needs and budget.",
      },
    ],
  },
  {
    slug: "retail-cleaning",
    title: "Retail Store Cleaning",
    metaTitle:
      "Retail Store Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional retail store cleaning in Placerville CA. Clean sales floors, fitting rooms, and restrooms. Licensed, insured, no contracts. Free estimates.",
    heroImage: "/images/commercial-cleaning.jpg",
    description:
      "First impressions drive sales. A clean retail store invites customers in, encourages them to browse, and builds confidence in your brand. Alexa's Cleaning Services provides reliable retail cleaning for shops, boutiques, and storefronts throughout Placerville and El Dorado County. We keep your store looking its best so you can focus on your customers.\n\nOur retail cleaning covers sales floors, fitting rooms, checkout areas, stockrooms, restrooms, and entryways. We vacuum, mop, dust shelving and displays, clean glass and mirrors, sanitize high touch surfaces, and empty trash. Every visit leaves your store sparkling and ready for business.\n\nPlacerville's Main Street and surrounding shopping areas attract locals and tourists alike. A spotless store sets you apart from the competition and keeps customers coming back. We schedule around your hours so cleaning never interferes with operations. We are licensed, insured, and committed to consistency. No contracts. No rescheduling fees. Just a retail space that makes a great impression every day.",
    benefits: [
      "Sales floor vacuuming, mopping, and display dusting",
      "Fitting room and checkout area sanitization",
      "Glass, mirror, and storefront window cleaning",
      "Restroom and stockroom cleaning included",
      "After hours scheduling to avoid disrupting customers",
      "Licensed and insured with no long term contracts",
    ],
    faqs: [
      {
        question: "What types of retail stores do you clean?",
        answer:
          "We clean clothing boutiques, gift shops, specialty stores, grocery markets, salons, and other retail businesses in the Placerville area. No matter the size or type of store, we tailor our service to fit your space and needs.",
      },
      {
        question: "Can you clean before or after store hours?",
        answer:
          "Yes. Most retail clients prefer early morning or evening cleanings so their store is fresh when the doors open. We will find a schedule that works around your operating hours and foot traffic patterns.",
      },
      {
        question: "Do you clean display cases and shelving?",
        answer:
          "We dust and wipe down display cases, shelving, racks, and product displays as part of our standard retail cleaning. For glass display cases, we use streak free products that keep merchandise looking its best.",
      },
      {
        question: "How often should a retail store be professionally cleaned?",
        answer:
          "High traffic stores benefit from daily cleaning. Smaller boutiques and specialty shops may do well with two to three visits per week. We will recommend a frequency based on your foot traffic and business needs.",
      },
      {
        question: "Do you offer seasonal deep cleaning for retail spaces?",
        answer:
          "Yes. Many retail clients book deep cleanings before holiday seasons, grand openings, or special sales events. We can schedule these in addition to your regular cleaning to make sure your store looks exceptional.",
      },
    ],
  },
  {
    slug: "weekly-cleaning",
    title: "Weekly Cleaning",
    metaTitle:
      "Weekly Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Reliable weekly cleaning service in Placerville CA. Consistent results every visit. Licensed, insured, no contracts, no rescheduling fees. Book today.",
    heroImage: "/images/house-cleaning.jpg",
    description:
      "A weekly cleaning schedule keeps your home in peak condition without the stress of doing it yourself. Alexa's Cleaning Services provides dependable weekly cleaning for households throughout Placerville and El Dorado County. Same day, same team, same thorough results. You come home to a clean house every single week.\n\nOur weekly cleaning covers all the essentials. Kitchens are wiped down and sanitized. Bathrooms are scrubbed and freshened. Living areas are dusted and vacuumed. Bedrooms are tidied, floors are mopped, and trash is taken out. Because we visit every week, buildup never has a chance to accumulate. Your home stays consistently clean rather than cycling between spotless and messy.\n\nWeekly cleaning is our most popular service for busy families, professionals, and anyone who values their free time. We are licensed and insured, and there are no contracts locking you in. No rescheduling fees if life throws you a curveball. We show up every week, do exceptional work, and earn your trust one visit at a time.",
    benefits: [
      "Consistent same day scheduling for routine and reliability",
      "All rooms cleaned including kitchens, baths, and living areas",
      "Prevents buildup so your home stays clean between visits",
      "Most popular service for busy Placerville families",
      "Licensed and insured with no contracts required",
      "No rescheduling fees when you need to adjust",
    ],
    faqs: [
      {
        question: "What is included in a weekly cleaning visit?",
        answer:
          "Every weekly visit includes kitchen cleaning, bathroom sanitization, dusting all surfaces, vacuuming carpets and rugs, mopping hard floors, wiping mirrors and glass, and emptying trash. We follow a checklist tailored to your home.",
      },
      {
        question: "Will I have the same cleaner each week?",
        answer:
          "We do our best to assign the same team to your home every week. Consistency helps our team learn your preferences and deliver better results over time. If a substitution is ever needed, we will let you know in advance.",
      },
      {
        question: "Is weekly cleaning worth the investment?",
        answer:
          "Most clients find that weekly cleaning saves them several hours per week and reduces household stress significantly. It also prevents dirt and grime from building up, which protects your surfaces and extends the life of your home finishes.",
      },
      {
        question: "Can I customize what gets cleaned each week?",
        answer:
          "Absolutely. While we follow a standard checklist, you can prioritize certain rooms or tasks based on your needs. Some clients rotate focus areas like deep cleaning the kitchen one week and bathrooms the next.",
      },
      {
        question: "What if I need to skip a week?",
        answer:
          "No problem at all. There are no penalties or fees for skipping a visit. Just let us know ahead of time and we will pick right back up the following week. Flexibility is built into everything we do.",
      },
    ],
  },
  {
    slug: "monthly-cleaning",
    title: "Monthly Cleaning",
    metaTitle:
      "Monthly Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Affordable monthly cleaning in Placerville CA. A thorough refresh every month. Licensed, insured, no contracts, no rescheduling fees. Schedule today.",
    heroImage: "/images/house-cleaning.jpg",
    description:
      "Not every home needs weekly service. For households that stay relatively tidy between visits, a monthly cleaning provides the perfect reset. Alexa's Cleaning Services offers thorough monthly cleaning for homes throughout Placerville and El Dorado County. Once a month, we come in and restore your home to a sparkling clean state.\n\nOur monthly cleaning is more detailed than a standard weekly visit because a full month of living means more buildup to address. We deep clean kitchens and bathrooms, dust all surfaces including hard to reach areas, vacuum and mop every floor, clean mirrors and glass, and handle baseboards and door frames. It is a comprehensive refresh that makes your home feel brand new.\n\nMonthly cleaning is ideal for couples, individuals, smaller homes, and anyone who handles light maintenance on their own but wants professional help with the heavy lifting. We are licensed and insured, and we never require contracts. No rescheduling fees. Just a predictable, affordable cleaning day each month that keeps your home in great shape year round.",
    benefits: [
      "Thorough monthly refresh that goes beyond surface cleaning",
      "Detailed attention to kitchens, bathrooms, and living areas",
      "Baseboards, door frames, and hard to reach areas included",
      "Affordable option for smaller homes and tidy households",
      "Licensed and insured with no contracts or commitments",
      "No rescheduling fees when life plans change",
    ],
    faqs: [
      {
        question: "How is monthly cleaning different from weekly cleaning?",
        answer:
          "Monthly cleaning includes more detailed work because a full month of use creates more buildup. We spend extra time on areas like baseboards, door frames, inside appliances, and deeper bathroom scrubbing. It is closer to a light deep clean each visit.",
      },
      {
        question: "Who is monthly cleaning best for?",
        answer:
          "Monthly cleaning works great for individuals, couples, smaller homes, and anyone who keeps up with basic tidying between visits. If you handle daily upkeep but want a professional to do the thorough work, monthly is a perfect fit.",
      },
      {
        question: "Can I upgrade from monthly to weekly later?",
        answer:
          "Of course. Many clients start with monthly service and switch to weekly or biweekly as their needs change. Since we never use contracts, you can adjust your frequency at any time without fees or penalties.",
      },
      {
        question: "How long does a monthly cleaning take?",
        answer:
          "Most monthly cleanings take between 3 and 5 hours depending on the size of your home. Because we clean more thoroughly than a routine visit, we allow extra time to make sure every area gets the attention it deserves.",
      },
      {
        question: "Do I need a deep cleaning before starting monthly service?",
        answer:
          "We recommend an initial deep cleaning to establish a baseline, especially if it has been a while since your home was professionally cleaned. After that, our monthly visits maintain the standard and prevent buildup from getting ahead of you.",
      },
    ],
  },
  {
    slug: "moving-cleaning",
    title: "Move-In/Move-Out Cleaning",
    metaTitle:
      "Move-In/Move-Out Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional move in and move out cleaning in Placerville CA. Protect your deposit and start fresh. Licensed, insured, no contracts. Free estimates.",
    heroImage: "/images/apartment-cleaning.jpg",
    description:
      "Moving is stressful enough without worrying about cleaning. Alexa's Cleaning Services provides thorough move in and move out cleaning for homes and apartments throughout Placerville and El Dorado County. Whether you are leaving a rental and want your deposit back or moving into a new place and want it spotless before you unpack, we handle it all.\n\nOur move out cleaning covers every surface a landlord or property manager will inspect. We scrub kitchens from top to bottom, detail inside appliances, deep clean bathrooms, wipe down all cabinets and closets, clean windows and tracks, and make sure floors are immaculate. For move in cleanings, we sanitize and refresh the entire space so you start your new chapter in a home that feels truly clean.\n\nPlacerville renters and homeowners trust us because we understand what inspectors look for. We leave nothing to chance. Our team is licensed and insured, and we never require contracts. No rescheduling fees if your moving date shifts. Just a clean space that passes inspection or welcomes you home.",
    benefits: [
      "Complete top to bottom cleaning for move in or move out",
      "Inside appliance detailing including oven, fridge, and dishwasher",
      "Cabinet, closet, and drawer interior wipe downs",
      "Window, track, and baseboard cleaning throughout",
      "Designed to pass landlord and property manager inspections",
      "Licensed and insured with no contracts or rescheduling fees",
    ],
    faqs: [
      {
        question: "Will move out cleaning help me get my deposit back?",
        answer:
          "That is exactly what our move out cleaning is designed for. We clean every area that landlords and property managers inspect. While we cannot guarantee your deposit, our thorough cleaning dramatically improves your chances of a full return.",
      },
      {
        question: "When should I schedule my move out cleaning?",
        answer:
          "The best time is after all furniture and belongings have been removed but before your final walkthrough. An empty home allows us to reach every surface and deliver the best possible results. Book early so we can reserve your date.",
      },
      {
        question: "Do you clean inside kitchen appliances?",
        answer:
          "Yes. Move in and move out cleanings include detailed cleaning inside the oven, refrigerator, microwave, and dishwasher. We remove shelves and drawers where possible to clean behind and underneath them as well.",
      },
      {
        question: "Can you handle both my old place and new place?",
        answer:
          "Absolutely. Many clients book a move out cleaning at their old address and a move in cleaning at their new one. We can schedule both around your moving timeline to keep everything running smoothly.",
      },
      {
        question: "What if my moving date changes?",
        answer:
          "No problem. We never charge rescheduling fees. Just let us know your new date and we will adjust. We understand that moving timelines shift frequently and we are happy to work with you on timing.",
      },
    ],
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    metaTitle: "Window Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional window cleaning in Placerville and El Dorado County. Interior and exterior windows, screens, and tracks. Licensed and insured. No contracts.",
    heroImage: "/images/window-cleaning.jpg",
    description:
      "Clean windows make a noticeable difference in how your home or business looks and feels. Alexa's Cleaning Services provides professional window cleaning for residential and commercial properties throughout Placerville and El Dorado County. We clean interior and exterior windows, screens, sills, and tracks.\n\nOur team uses professional streak-free cleaning solutions and the right tools for every type of window. From standard single-pane windows to large picture windows and skylights, we handle it all safely and efficiently. We take care to protect your floors, furniture, and landscaping while we work.\n\nWhether you need a one-time deep clean for your windows or want to add window cleaning to your regular maintenance schedule, we offer flexible options with no contracts. Your windows will be crystal clear, letting in maximum natural light and giving your property the polished look it deserves.",
    benefits: [
      "Interior and exterior window cleaning",
      "Screen, sill, and track cleaning included",
      "Streak-free professional grade solutions",
      "Safe handling of hard-to-reach and large windows",
      "Flexible scheduling with no contracts",
      "Licensed and insured for your protection",
    ],
    faqs: [
      {
        question: "Do you clean both the inside and outside of windows?",
        answer:
          "Yes. We clean both interior and exterior surfaces of your windows. We also clean the screens, sills, and tracks as part of our standard window cleaning service.",
      },
      {
        question: "How often should I have my windows professionally cleaned?",
        answer:
          "For most homes, we recommend professional window cleaning every three to six months. Commercial properties or homes near construction areas may benefit from more frequent cleaning. We can help you determine the right schedule.",
      },
      {
        question: "Can you clean high or hard-to-reach windows?",
        answer:
          "Yes. Our team is equipped to safely clean windows at various heights. We use professional extension tools and take all necessary safety precautions to handle hard-to-reach windows effectively.",
      },
      {
        question: "Will window cleaning be done on the same visit as my regular cleaning?",
        answer:
          "Window cleaning can be added to a regular cleaning visit or scheduled as a standalone service. Just let us know your preference and we will set it up accordingly.",
      },
    ],
  },
  {
    slug: "janitorial-cleaning",
    title: "Janitorial Cleaning",
    metaTitle: "Janitorial Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional janitorial cleaning services in Placerville and El Dorado County. Offices, buildings, and commercial spaces. Licensed and insured. No contracts.",
    heroImage: "/images/janitorial-cleaning.jpg",
    description:
      "Maintaining a clean and professional workspace requires consistent, reliable janitorial service. Alexa's Cleaning Services provides daily, weekly, and custom-frequency janitorial cleaning for offices, commercial buildings, and shared workspaces throughout Placerville and El Dorado County.\n\nOur janitorial services cover everything from restroom sanitation and trash removal to floor care, surface disinfection, and common area maintenance. We work around your business hours to minimize disruption and ensure your space is ready for employees and customers every morning.\n\nWe create a customized cleaning plan based on your facility size, foot traffic, and specific needs. Our team is fully licensed and insured, and we use commercial-grade equipment and eco-friendly products. No contracts lock you in. We earn your business every visit through consistent, reliable performance.",
    benefits: [
      "Daily, weekly, or custom-frequency scheduling",
      "Restroom sanitation and restocking",
      "Floor care including mopping, vacuuming, and buffing",
      "Surface disinfection and trash removal",
      "Work around your business hours",
      "Licensed and insured with no contracts required",
    ],
    faqs: [
      {
        question: "What is included in janitorial cleaning?",
        answer:
          "Our janitorial services include restroom cleaning and restocking, trash and recycling removal, floor vacuuming and mopping, surface wiping and disinfection, breakroom and kitchen cleaning, and common area maintenance. We customize the scope based on your facility needs.",
      },
      {
        question: "Can you clean outside of business hours?",
        answer:
          "Absolutely. Most of our janitorial clients prefer evening or early morning cleaning so the space is fresh when employees and customers arrive. We work around your schedule.",
      },
      {
        question: "How is janitorial cleaning different from regular office cleaning?",
        answer:
          "Janitorial cleaning is a more comprehensive and routine service that covers the full maintenance of a commercial facility. It typically includes tasks like floor care, restroom restocking, and building-wide sanitation that go beyond standard surface cleaning.",
      },
      {
        question: "Do you provide supplies and equipment?",
        answer:
          "Yes. We bring all cleaning supplies, equipment, and consumables. If you prefer specific products or have brand requirements for restroom supplies, we can accommodate those as well.",
      },
    ],
  },
  {
    slug: "one-time-cleaning",
    title: "One-Time Cleaning",
    metaTitle: "One-Time Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional one-time cleaning services in Placerville and El Dorado County. No commitment, no contracts. Perfect for special occasions or a fresh start.",
    heroImage: "/images/one-time-cleaning.jpg",
    description:
      "Sometimes you just need a single, thorough cleaning without committing to a regular schedule. Alexa's Cleaning Services offers one-time cleaning for homes and businesses in Placerville and El Dorado County. No contracts, no obligations. Just a spotless space when you need it.\n\nOur one-time cleaning is perfect for preparing for guests, recovering after a party or event, getting your home ready to sell, or simply giving yourself a fresh start. We bring the same attention to detail and professional standards to every one-time job as we do to our recurring clients.\n\nTell us your priorities and we will focus on the areas that matter most to you. Whether you need a full home deep clean, specific rooms, or just the high-traffic areas refreshed, we customize the service to fit your needs and budget.",
    benefits: [
      "No contracts or ongoing commitment required",
      "Perfect for events, guests, or special occasions",
      "Same professional quality as recurring service",
      "Customize the scope to fit your priorities",
      "All supplies and equipment included",
      "Flexible scheduling including weekends",
    ],
    faqs: [
      {
        question: "What is the difference between one-time cleaning and deep cleaning?",
        answer:
          "A one-time cleaning covers all standard cleaning tasks for your home or office. A deep cleaning is more intensive and includes areas that are not part of regular maintenance, like inside appliances, behind furniture, and detailed scrubbing. You can request either option for your one-time visit.",
      },
      {
        question: "Can I book a one-time cleaning for this week?",
        answer:
          "In most cases, yes. We try to accommodate same-week bookings whenever our schedule allows. Give us a call and we will do our best to fit you in at a time that works.",
      },
      {
        question: "Will the same team come if I decide to book again later?",
        answer:
          "We do our best to send the same team members when possible. Consistency matters to us, and familiar faces make the experience better for everyone.",
      },
      {
        question: "Is there a minimum for a one-time cleaning?",
        answer:
          "We provide a free estimate based on the size and scope of your space. There is no hidden minimum. You will know the cost upfront before we start.",
      },
    ],
  },
  {
    slug: "bi-weekly-cleaning",
    title: "Bi-Weekly Cleaning",
    metaTitle: "Bi-Weekly Cleaning in Placerville CA | Alexa's Cleaning Services",
    metaDescription:
      "Professional bi-weekly cleaning services in Placerville and El Dorado County. Every two weeks, your home stays fresh. No contracts, no rescheduling fees.",
    heroImage: "/images/bi-weekly-cleaning.jpg",
    description:
      "Bi-weekly cleaning is the most popular option for Placerville families who want a consistently clean home without the cost of weekly service. Alexa's Cleaning Services visits every two weeks to keep your home fresh, organized, and comfortable for your family.\n\nOur bi-weekly service follows a detailed room-by-room checklist. We dust, vacuum, mop, clean bathrooms and kitchens, wipe down surfaces, and handle all the tasks that keep your home in great shape between visits. Each cleaning builds on the last, so your home maintains a high baseline of cleanliness.\n\nFlexibility is built into everything we do. Skip a visit when you are on vacation. Reschedule when life gets busy. There are no contracts, no cancellation fees, and no pressure. Just reliable, professional cleaning every two weeks from a team you trust.",
    benefits: [
      "Most popular frequency for families and professionals",
      "Consistent room-by-room checklist every visit",
      "Maintains a high baseline of cleanliness between visits",
      "No contracts or cancellation fees",
      "Skip or reschedule anytime without penalty",
      "Same trusted team assigned to your home",
    ],
    faqs: [
      {
        question: "Is bi-weekly cleaning enough to keep my home clean?",
        answer:
          "For most households, bi-weekly cleaning is the ideal balance between keeping your home consistently fresh and managing your budget. Families with pets or young children may prefer weekly service. We can help you decide based on your situation.",
      },
      {
        question: "Will I have the same team every visit?",
        answer:
          "Yes, whenever possible. We assign the same team to your home so they learn your preferences and can deliver consistent results every visit.",
      },
      {
        question: "What if I want to switch to weekly or monthly?",
        answer:
          "No problem. You can change your frequency at any time. There are no contracts locking you into a specific schedule. Just let us know and we will adjust.",
      },
      {
        question: "Can I add extra services to a bi-weekly visit?",
        answer:
          "Absolutely. You can add window cleaning, refrigerator cleaning, oven cleaning, or any other extras to any scheduled visit. Just let us know in advance so we can plan the appropriate time.",
      },
    ],
  },
];
