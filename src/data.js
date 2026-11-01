// QCPS — Quick Commercial Property Solution
// Authentic Commercial Real Estate Data & Content

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About Us', href: '/about' },
  { label: 'Who We Help', href: '/who-we-help' },
  { label: 'Cash Offer vs. Agent', href: '/cash-offer-vs-agent' },
  { label: 'Areas We Serve', href: '/areas-we-serve' },
  { label: 'Reviews', href: '/buyer-reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

// Header menu: "Company" dropdown groups these; Contact is reached via the
// "Get My Offer" button. Footer still uses the full `nav` list.
const companyLabels = ['How It Works', 'About Us', 'Who We Help', 'Areas We Serve'];
export const navCompany = nav.filter((i) => companyLabels.includes(i.label));
export const navMain = nav.filter(
  (i) => !companyLabels.includes(i.label) && i.label !== 'Contact'
);

export const hero = {
  eyebrow: 'Direct Commercial Acquisitions & Advisory',
  heading: 'Quick, reliable solutions for commercial property owners and buyers.',
  body: 'QCPS (Quick Commercial Property Solution) buys commercial assets directly for cash and helps growing companies acquire or lease verified facilities. No broker delays, no financing contingencies, and straightforward terms from day one.',
  statValue: '48h',
  statSuffix: '',
  statLabel: 'Average time to written purchase offer',
  image: '/images/Y0OHZCZJcva8jvEYtQRg85SCD9w.jpg',
};

export const search = {
  location: [
    'Any location',
    'Manhattan, NY',
    'Brooklyn, NY',
    'Austin, TX',
    'Miami, FL',
    'Portland, OR',
    'Seattle, WA',
  ],
  type: ['Any type', 'Office', 'Industrial / Warehouse', 'Retail', 'Flex / R&D', 'Medical'],
  price: ['Any price', 'Under $1.5M', '$1.5M – $3M', '$3M+', 'Lease / NNN'],
};

export const propertiesIntro = {
  eyebrow: 'Commercial Portfolio',
  heading: 'Verified commercial assets ready for occupancy or investment.',
  body: 'Every property in our portfolio has undergone zoning verification, environmental screening, structural review, and lease audit.',
  stats: [
    { value: '$48M+', label: 'Commercial transaction volume' },
    { value: '14 Days', label: 'Average direct cash closing' },
    { value: '100%', label: 'Clear title & escrow verified' },
    { value: '0%', label: 'Broker commissions on direct buy' },
  ],
};

export const properties = [
  {
    id: 'gowanus-industrial-hub',
    tag: 'For Sale',
    type: 'Industrial / Warehouse',
    featured: true,
    name: 'Gowanus Industrial & Distribution Hub',
    location: 'Brooklyn, New York',
    city: 'Brooklyn, NY',
    beds: 'Industrial / Warehouse',
    baths: '3 Loading Docks',
    area: '14,800 sq ft',
    price: '$2,450,000',
    priceValue: 2450000,
    href: '/contact?property=gowanus-industrial-hub',
    image: '/images/1oKjPc1fgQ7THhjOJqgDQlCveVI.jpg',
    description: 'High-bay industrial facility with 3 drive-in loading bays, 22-foot clear ceiling heights, 3-phase 800-amp power, and immediate BQE highway access.',
  },
  {
    id: 'parkline-executive-center',
    tag: 'For Sale',
    type: 'Office',
    featured: true,
    name: 'Parkline Commercial Executive Suite',
    location: 'Manhattan, New York',
    city: 'Manhattan, NY',
    beds: 'Class-A Office',
    baths: 'Dedicated Elevator',
    area: '6,400 sq ft',
    price: '$3,850,000',
    priceValue: 3850000,
    href: '/contact?property=parkline-executive-center',
    image: '/images/QCEnRC5sY8RV6gnGCIDGwiIuyhk.jpg',
    description: 'Turnkey commercial office floor with 4 private executive boardrooms, open collaborative workstations, redundant fiber infrastructure, and 24/7 security.',
  },
  {
    id: 'east-austin-tech-flex',
    tag: 'For Sale',
    type: 'Flex / R&D',
    featured: false,
    name: 'East Austin Tech & Flex Center',
    location: 'Austin, Texas',
    city: 'Austin, TX',
    beds: 'Flex / R&D Space',
    baths: 'Grade-Level Bay',
    area: '9,200 sq ft',
    price: '$1,780,000',
    priceValue: 1780000,
    href: '/contact?property=east-austin-tech-flex',
    image: '/images/crUZg3obGDFXZKAeFk9A6kh58Y.jpg',
    description: 'Combined office and light manufacturing facility with conditioned workshop floor, roll-up grade-level doors, and 28 dedicated parking stalls.',
  },
  {
    id: 'biscayne-medical-plaza',
    tag: 'For Rent',
    type: 'Medical',
    featured: false,
    name: 'Biscayne Medical & Professional Plaza',
    location: 'Miami, Florida',
    city: 'Miami, FL',
    beds: 'Medical / Clinical',
    baths: 'ADA Compliant',
    area: '4,600 sq ft',
    price: '$12,500/month NNN',
    priceValue: 12500,
    href: '/contact?property=biscayne-medical-plaza',
    image: '/images/0kUM1fCST5l8a30x6FnNxoYk8M.jpg',
    description: 'Fully plumbed clinical facility with 8 examination rooms, lead-lined imaging suite, patient reception lobby, and dedicated reserved medical parking.',
  },
  {
    id: 'atlantic-retail-showroom',
    tag: 'For Sale',
    type: 'Retail',
    featured: true,
    name: 'Atlantic Avenue Retail Showroom',
    location: 'Brooklyn, New York',
    city: 'Brooklyn, NY',
    beds: 'Retail / Storefront',
    baths: 'C-2 Zoning',
    area: '5,100 sq ft',
    price: '$2,150,000',
    priceValue: 2150000,
    href: '/contact?property=atlantic-retail-showroom',
    image: '/images/sIEVbo8LLQKanQZNJHuKVdAPI.jpg',
    description: 'High-visibility corner commercial building with 65 feet of glass retail frontage, heavy foot traffic, dry basement storage, and freight lift.',
  },
  {
    id: 'central-eastside-logistics',
    tag: 'For Rent',
    type: 'Industrial / Warehouse',
    featured: false,
    name: 'Central Eastside Logistics Terminal',
    location: 'Portland, Oregon',
    city: 'Portland, OR',
    beds: 'Warehouse / Logistics',
    baths: 'Fenced Yard / 2 Docks',
    area: '11,200 sq ft',
    price: '$9,800/month NNN',
    priceValue: 9800,
    href: '/contact?property=central-eastside-logistics',
    image: '/images/GtLzdwbgHQzxkeb9U3nRpi6C8UU.jpg',
    description: 'Secure distribution warehouse featuring twin dock-high loading positions, 20-foot clear height, wet sprinkler system, and paved container yard.',
  },
  {
    id: 'midtown-south-creative-floor',
    tag: 'For Sale',
    type: 'Office',
    featured: false,
    name: 'Midtown South Creative Commercial Floor',
    location: 'Manhattan, New York',
    city: 'Manhattan, NY',
    beds: 'Full-Floor Commercial',
    baths: 'Freight Access',
    area: '8,800 sq ft',
    price: '$4,600,000',
    priceValue: 4600000,
    href: '/contact?property=midtown-south-creative-floor',
    image: '/images/HuThwNMwS3gauO4nd0g6H3Q8nGU.jpg',
    description: 'Full-floor commercial condominium with exposed concrete columns, oversized industrial sash windows, high-capacity electrical service, and double passenger elevators.',
  },
  {
    id: 'doral-commerce-park',
    tag: 'For Sale',
    type: 'Flex / R&D',
    featured: true,
    name: 'Doral Commerce Park Building B',
    location: 'Miami, Florida',
    city: 'Miami, FL',
    beds: 'Flex / Light Industrial',
    baths: '42 Parking Stalls',
    area: '16,500 sq ft',
    price: '$3,400,000',
    priceValue: 3400000,
    href: '/contact?property=doral-commerce-park',
    image: '/images/xgXuTquk6RLVLTZmrXYIzrqr6j8.jpg',
    description: 'Standalone single-tenant commercial facility with 40% corporate office buildout, 60% air-conditioned warehousing, heavy 480V 3-phase power, and perimeter security fencing.',
  },
];

export const services = [
  {
    name: 'Direct Cash Acquisitions',
    body: 'We buy commercial assets directly from owners for cash. No broker commissions, no financing contingencies, and as-is closings in as few as 14 days.',
    image: '/images/xgXuTquk6RLVLTZmrXYIzrqr6j8.jpg',
  },
  {
    name: 'Commercial Dispositions',
    body: 'Position your commercial asset for a clean sale with verified comps, clear lease summaries, and access to active commercial buyers.',
    image: '/images/tDld9MsvRe9qaKZsU8JU9soM0bk.jpg',
  },
  {
    name: 'Commercial Leasing',
    body: 'Find functional warehouse, retail, or professional office space with straightforward lease terms and clear operating costs.',
    image: '/images/HuThwNMwS3gauO4nd0g6H3Q8nGU.jpg',
  },
  {
    name: 'Valuation & Advisory',
    body: 'Get practical valuation based on real closed transactions, cap rates, NOI analysis, zoning allowances, and building condition.',
    image: '/images/GtLzdwbgHQzxkeb9U3nRpi6C8UU.jpg',
  },
];

export const whyUs = [
  {
    name: 'Direct Capital & Fast Decisions',
    body: 'We underwrite within 48 hours and buy directly using verified capital—no waiting on third-party committee approvals or bank underwriting.',
  },
  {
    name: 'As-Is Purchase, Zero Repairs',
    body: 'You never need to replace roofs, overhaul HVAC units, or remediate cosmetic wear before selling to us. We purchase buildings in current condition.',
  },
  {
    name: 'No Broker Commission Fees',
    body: 'On direct sales, you avoid the typical 4% to 6% commercial broker commissions, preserving your net proceeds.',
  },
  {
    name: 'Flexible Leaseback Options',
    body: 'Need time to transition operations, machinery, or staff? We can lease the property back to you post-closing on agreed terms.',
  },
];

export const about = {
  eyebrow: 'About QCPS',
  heading: 'Practical commercial real estate solutions.',
  body: 'QCPS (Quick Commercial Property Solution) was built to eliminate the delays, high commissions, and financing fall-throughs typical of traditional commercial real estate. We work directly with property owners, business founders, and commercial investors across key commercial submarkets.',
  cta: 'Learn About Our Team',
  image: '/images/0aFNp7LzIOj6XTwUgydu66svc8.jpg',
};

export const steps = [
  {
    no: '01',
    name: 'Property Intake & Objective',
    body: 'Share your property details, square footage, current tenancy or occupancy status, and your desired timeline.',
  },
  {
    no: '02',
    name: 'Underwriting & Valuation',
    body: 'Our team analyzes recent comparable commercial sales, rent rolls, zoning, and physical specs within 48 hours.',
  },
  {
    no: '03',
    name: 'Firm Written Proposal',
    body: 'Receive a clear cash purchase offer or acquisition terms with zero hidden contingencies or financing clauses.',
  },
  {
    no: '04',
    name: 'Title & Escrow Closing',
    body: 'We close through a reputable commercial title company on the schedule that fits your operational needs.',
  },
];

export const testimonials = [
  {
    quote:
      'We operated our precision tooling business for 28 years. When it was time to retire, listing with a traditional broker meant 6 months of strangers walking our shop floor. QCPS evaluated our building, made an as-is cash offer, and closed in 19 days without disruption.',
    name: 'Arthur Vance',
    detail: 'Former Owner, Vance Precision Tooling — Brooklyn, NY',
    image: '/images/ScqYgwXGtkYn4LQsXnnRvjbKeQ.jpg',
  },
  {
    quote:
      'Our logistics business needed to expand from 6,000 to 18,000 square feet. QCPS bought our existing light industrial property and helped us secure our current distribution facility. The timing was synchronized so our trucks never missed a single run.',
    name: 'Marcus Oyelaran',
    detail: 'Operations Director, Apex Regional Freight — Austin, TX',
    image: '/images/UBtXSOm60enCUciUxosYAh2Tb3U.jpg',
  },
  {
    quote:
      'We had an aging medical office condo with high HOA assessments and deferred mechanical maintenance. QCPS bought it directly at a fair number and took over all repair obligations on closing day.',
    name: 'Dr. Kevin Gallagher',
    detail: 'Managing Partner, Biscayne Physicians Group — Miami, FL',
    image: '/images/srdofgzEhtrL8TxYBsevEIF9ldA.jpg',
  },
];

export const journal = [
  {
    category: 'Commercial Guide',
    read: '6 min read',
    title: 'How to Value an Owner-Occupied Industrial Building',
    body: 'Key factors that determine commercial valuations: clear height, loading configurations, power capacity, and site circulation.',
    href: '/how-it-works',
    image: '/images/kwZswSxIr0Hygegqw41xWTZFPs.jpg',
    featured: true,
  },
  {
    category: 'Market Insights',
    read: '5 min read',
    title: 'Direct Cash Sale vs. Commercial Broker Listing',
    body: 'A breakdown of net proceeds after factoring in 5% commissions, carrying costs, and financing contingencies.',
    href: '/cash-offer-vs-agent',
    image: '/images/oYEusJFnP42mcb6HLcyDM5M23A.jpg',
  },
  {
    category: 'Selling Solutions',
    read: '4 min read',
    title: 'Environmental Phase 1 & Zoning: What Every Commercial Seller Should Know',
    body: 'A practical checklist to prepare title, lease documentation, and zoning records for an expedited close.',
    href: '/cash-offer-vs-agent',
    image: '/images/yeSspAkogw5m6PUqj4HYJ3pZjY.jpg',
  },
];

export const faqs = [
  {
    q: 'What types of commercial properties does QCPS purchase?',
    a: 'We purchase warehouses, industrial facilities, flex spaces, retail plazas, office buildings, medical facilities, and commercial land.',
  },
  {
    q: 'Can I sell a commercial property with existing tenants?',
    a: 'Yes. We purchase both vacant buildings and fully or partially leased properties, honoring all existing tenant lease agreements through closing.',
  },
  {
    q: 'Do you charge broker fees or listing commissions on direct purchases?',
    a: 'No. When you sell directly to QCPS, there are zero broker commissions or listing fees deducted from your gross payout.',
  },
  {
    q: 'How fast can a direct commercial sale close?',
    a: 'We can close in as few as 14 to 21 days once clean title is established, or we can extend the closing date to coordinate with your business schedule.',
  },
  {
    q: 'What if my commercial building has deferred maintenance or code issues?',
    a: 'We purchase commercial properties strictly in as-is condition. You are not required to replace roofs, upgrade HVAC units, or complete repairs prior to closing.',
  },
];

export const cta = {
  eyebrow: 'Direct Commercial Consultation',
  heading: 'Your commercial property solution starts here.',
  body: 'Whether you need a direct cash offer on your building or are looking for turnkey commercial space, speak directly with our acquisition principals.',
  button: 'Speak With Our Team',
  image: '/images/brD51l3wKCLUUzazBE6Jq9gkI.jpg',
};

export const footer = {
  tagline: ['Quick Commercial', 'Property Solution.'],
  cta: 'Talk to an Advisor',
  contactHeading: 'Contact Us Here',
  email: 'info@qcps.example',
  phone: '+1 (212) 555-0148',
  address: '128 Madison Avenue, New York, NY 10016',
  copyright: '© 2026 QCPS (Quick Commercial Property Solution). All rights reserved.',
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
};

export const aboutIntro = {
  eyebrow: 'Our Company',
  heading: 'Direct, Dependable Commercial Property Solutions.',
  body: 'QCPS was founded by commercial property specialists who recognized the friction in traditional commercial transactions: lengthy broker listing agreements, deals collapsing in bank loan committees, and excessive commissions. We provide direct capital, fast decisions, and clear terms.',
  image: '/images/sIEVbo8LLQKanQZNJHuKVdAPI.jpg',
};

export const principles = [
  {
    no: '01',
    name: 'Direct capital, no broker runarounds',
    body: 'We underwrite transactions directly. When we issue an offer, it is backed by verified funds, not contingent on outside syndications.',
  },
  {
    no: '02',
    name: 'Honest valuations based on closed comps',
    body: 'We do not inflate numbers to win listings only to renegotiate months later. We explain the underwriting and stick to agreed terms.',
  },
  {
    no: '03',
    name: 'Operational continuity for your business',
    body: 'If you are an active business owner selling your facility, we can structure leasebacks or flexible move-out timelines so your revenue never stops.',
  },
];

export const team = [
  {
    name: 'Renata Soto',
    role: 'Principal & Head of Acquisitions',
    image: '/images/ScqYgwXGtkYn4LQsXnnRvjbKeQ.jpg',
  },
  {
    name: 'Marcus Oyelaran',
    role: 'Director of Commercial Underwriting',
    image: '/images/UBtXSOm60enCUciUxosYAh2Tb3U.jpg',
  },
  {
    name: 'Priya Chandrasekar',
    role: 'Commercial Asset Manager',
    image: '/images/srdofgzEhtrL8TxYBsevEIF9ldA.jpg',
  },
];

export const aboutStat = {
  statValue: '15',
  statSuffix: '+ yrs',
  statLabel: 'Active experience across industrial, office, retail, and flex assets',
  quote: 'Every commercial asset we acquire or represent is evaluated on physical fundamentals and clean title — not speculative hype.',
  image: '/images/0aFNp7LzIOj6XTwUgydu66svc8.jpg',
};

export const aboutFaqs = [
  {
    q: 'How does QCPS fund commercial property purchases?',
    a: 'We utilize dedicated private capital and commercial equity funds, allowing us to execute cash transactions without waiting on conventional bank mortgage underwriting.',
  },
  {
    q: 'What commercial submarkets do you focus on?',
    a: 'Our primary direct activity covers New York (Brooklyn & Manhattan), Austin, Miami, Portland, and Seattle, with select commercial investments across regional logistics corridors.',
  },
  {
    q: 'How does a consultation begin?',
    a: 'Reach out by phone or submit your property details online. A senior acquisitions partner reviews your asset and responds with an initial assessment within 24 to 48 hours.',
  },
];

/* ---------- /how-it-works ---------- */

export const howIntro = {
  eyebrow: 'Transaction Sequence',
  heading: 'The commercial transaction process, made completely clear.',
  body: 'Most commercial transactions stall due to slow broker marketing and endless lender committees. This is our streamlined direct acquisition process from initial intake to final wire transfer.',
  metrics: [
    { value: '5', label: 'Structured steps from intake to closing' },
    { value: '48h', label: 'Average turnaround on formal cash offer' },
    { value: '14–21', label: 'Days, typical direct closing timeline' },
  ],
};

export const howJourney = {
  eyebrow: 'The Process',
  heading: 'Five steps from first call to wire transfer.',
  body: 'Every stage is defined up front, so you always know what happens next and what we need from you.',
};

export const howStages = [
  {
    id: 'intake',
    label: 'Intake',
    title: 'Property intake & objective review.',
    body: 'You share your commercial address, building type, square footage, current rent roll (if tenanted), and ideal timeline. We review municipal zoning and parcel data.',
  },
  {
    id: 'underwriting',
    label: 'Underwriting',
    title: 'Desktop underwriting & comparable sales analysis.',
    body: 'We analyze closed commercial sales, current submarket capitalization rates, and physical replacement costs to establish a realistic valuation.',
  },
  {
    id: 'offer',
    label: 'Offer',
    title: 'Firm written purchase agreement within 48 hours.',
    body: 'We deliver a straightforward purchase contract with verified proof of funds. No financing contingencies, no broker commission deductions, and as-is purchase terms.',
  },
  {
    id: 'diligence',
    label: 'Due Diligence',
    title: 'Focused site visit and clean title examination.',
    body: 'We conduct a targeted walk-through focusing on structural elements, roofing, and mechanicals. Concurrently, title and escrow are opened with a licensed commercial title agency.',
  },
  {
    id: 'closing',
    label: 'Closing',
    title: 'Funding and wire transfer through escrow.',
    body: 'Upon title clearance, escrow completes closing. Proceeds are wired directly to your designated account, and closing documents are executed.',
  },
];

export const howLedger = {
  eyebrow: 'Transaction Overview',
  heading: 'Who handles what during the transaction.',
  body: 'We handle the underwriting, title coordination, and capital funding so you can focus on running your business.',
  rows: [
    { ours: 'Direct capital funding with proof of funds', yours: 'Providing basic building information' },
    { ours: 'Zoning, environmental, and title review', yours: 'Supplying existing leases or survey (if available)' },
    { ours: 'Covering standard closing & escrow costs', yours: 'Reviewing and approving the purchase contract' },
    { ours: 'Structuring flexible post-sale leasebacks', yours: 'Setting your preferred moving or transition date' },
    { ours: 'Direct communication with principals', yours: 'Receiving closing wire transfer on completion' },
  ],
};

export const howClose = {
  eyebrow: 'Direct Inquiry',
  heading: 'Request an evaluation on your commercial property.',
  body: 'There is zero obligation and no broker listing agreement required. Share your building details and receive an honest market evaluation.',
  button: 'Request Commercial Evaluation',
  image: '/images/ZOFHTFDotyaUTQ8cgcNJouab1c.jpg',
};

/* ---------- /contact ---------- */

export const contact = {
  eyebrow: "Let's Connect",
  heading: ['Discuss your commercial', 'property requirements.'],
  body: 'Whether you want a direct cash offer on an existing building, need commercial space to expand operations, or have questions about market values, our senior team is ready to assist.',
  formHeading: 'Send us a message',
  interests: [
    'Sell a Commercial Property',
    'Acquire Commercial Real Estate',
    'Commercial Leasing & Space',
    'General Commercial Advisory',
  ],
  consent: 'I agree that QCPS may use my information to respond to this commercial inquiry. Please see our',
  submit: 'Send Commercial Inquiry',
  detailsEyebrow: 'Direct Office Details',
  details: [
    { icon: 'mail', label: 'Email', value: footer.email, href: `mailto:${footer.email}` },
    { icon: 'phone', label: 'Phone', value: footer.phone, href: `tel:${footer.phone.replace(/[^+\d]/g, '')}` },
    { icon: 'pin', label: 'Office', value: footer.address },
    { icon: 'clock', label: 'Office Hours', value: 'Monday–Friday, 8:30 AM–6:00 PM EST' },
  ],
  detailsNote: 'Our commercial acquisitions team reviews all inquiries and responds within 24 business hours.',
  callHeading: 'Prefer a direct phone conversation?',
  callBody: `Call our direct acquisitions desk at ${footer.phone}.`,
  callButton: 'Call Commercial Desk',
};

/* ---------- /privacy-policy ---------- */

export const privacy = {
  eyebrow: 'Legal & Compliance',
  heading: 'Privacy Policy',
  intro:
    'This policy outlines how QCPS collects, uses, and safeguards information provided by property owners, buyers, tenants, and commercial partners.',
  updated: 'Last updated 30 October 2026',
  sections: [
    {
      id: 'what-we-collect',
      title: 'Information We Collect',
      body: [
        'When you submit an inquiry or property valuation request, we collect contact information (name, corporate entity, email, phone number) and relevant commercial property details (parcel address, building size, occupancy, zoning, and operating financials).',
        'We collect standard technical information automatically, including browser type, operating system, and pages visited to ensure site security and proper functionality.',
      ],
    },
    {
      id: 'why-we-hold-it',
      title: 'How We Use Your Information',
      body: [
        'Property and business information is used solely to underwrite commercial assets, communicate regarding purchase proposals, coordinate inspections, and finalize escrow documentation.',
        'We do not sell, rent, or trade your contact or property information to third-party marketing companies.',
      ],
    },
    {
      id: 'who-sees-it',
      title: 'Confidentiality & Disclosure',
      body: [
        'Your transaction details are reviewed strictly by our internal acquisitions team and licensed title and escrow partners involved in your transaction.',
        'We enter into standard non-disclosure agreements (NDAs) upon request before reviewing proprietary rent rolls or tenant financial statements.',
      ],
    },
    {
      id: 'how-long',
      title: 'Data Retention',
      body: [
        'Inquiry records are retained for internal underwriting history. Completed transaction files are archived for seven years in compliance with state real estate, tax, and accounting regulations.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies & Analytics',
      body: [
        'We use essential technical cookies to maintain session preferences and navigate the site. We do not use cross-site behavioral tracking cookies.',
      ],
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      body: [
        'You may request access to, correction of, or deletion of your contact information at any time by contacting our compliance officer at info@qcps.example.',
      ],
    },
    {
      id: 'contact',
      title: 'Contacting QCPS',
      body: [
        'For privacy or compliance inquiries, please write to info@qcps.example or contact our primary office at 128 Madison Avenue, New York, NY 10016.',
      ],
    },
  ],
};

/* ---------- FAQ explorer (grouped) ---------- */

export const faqGroups = [
  {
    id: 'selling',
    label: 'Selling to QCPS',
    blurb: 'Direct cash purchases, as-is terms, and closing timelines.',
    items: [
      {
        q: 'What types of commercial properties does QCPS buy?',
        a: 'We purchase warehouses, industrial distribution buildings, flex and R&D facilities, neighborhood retail plazas, standalone commercial buildings, and medical office facilities.',
      },
      {
        q: 'How does QCPS determine an offer on my building?',
        a: 'Our underwriting is based on recent closed sales of comparable commercial assets, current capitalization rates, replacement cost, building mechanical condition, and zoning density. We provide a transparent breakdown of our valuation.',
      },
      {
        q: 'Are there any broker fees or commissions deducted?',
        a: 'None. Because you sell directly to QCPS as the buyer, there are no commercial listing commissions (typically 4% to 6%) deducted from your gross purchase price.',
      },
      {
        q: 'What if the property has deferred maintenance or code violations?',
        a: 'We buy properties in strictly as-is condition. You do not need to replace roofs, repair HVAC systems, or remediate cosmetic issues prior to closing.',
      },
      {
        q: 'Can I sell a commercial building that currently has tenants?',
        a: 'Yes. We purchase both owner-occupied facilities and tenanted investment properties. All current tenant leases and security deposits transfer cleanly through escrow.',
      },
    ],
  },
  {
    id: 'buying',
    label: 'Buying & Leasing',
    blurb: 'Inventory, site tours, and lease structures.',
    items: [
      {
        q: 'How do I arrange a private site walkthrough of a commercial listing?',
        a: 'Contact our advisory team directly by phone or via the property listing page. We schedule accompanied private walk-throughs that work with your operational schedule.',
      },
      {
        q: 'Do you offer commercial lease opportunities as well as sales?',
        a: 'Yes. Several assets in our portfolio are available for long-term triple-net (NNN) or modified gross commercial leases suited for logistics, retail, or clinical use.',
      },
      {
        q: 'What documentation is required to lease a commercial space?',
        a: 'Standard commercial leasing documentation includes business entity formation certificates, recent financial statements or tax returns, and commercial trade references.',
      },
    ],
  },
  {
    id: 'process',
    label: 'Process & Timing',
    blurb: 'Escrow, due diligence, and wire funding.',
    items: [
      {
        q: 'How quickly can QCPS close a direct purchase?',
        a: 'We can close in as few as 14 to 21 days once clean preliminary title is delivered. If you need 60 or 90 days to wind down operations, we can set the closing date accordingly.',
      },
      {
        q: 'What happens during due diligence?',
        a: 'Our due diligence consists of a non-invasive physical walk-through, standard Phase 1 environmental review (where appropriate), and title search. There are no retail open houses or tenant disturbances.',
      },
      {
        q: 'Do you offer sale-leaseback options for owner-operators?',
        a: 'Yes. If you operate an ongoing business and want to unlock the equity tied up in your real estate while continuing operations in place, we can structure a customized sale-leaseback.',
      },
    ],
  },
];

export const faqExplorer = {
  eyebrow: 'Commercial Inquiries',
  heading: 'Direct answers to practical commercial questions.',
  body: 'Clear information on valuations, closing timelines, tenant transitions, and contract terms. If your specific scenario is not covered here, our principals will answer directly.',
  askHeading: 'Have a specific commercial asset in mind?',
  askBody: 'Send us the details and an acquisitions principal will respond within 24 hours.',
  askButton: 'Submit Property Details',
};

// ===================== who-we-help page =====================
export const whoMasthead = {
  label: 'Who We Help',
  heading: 'Commercial property solutions tailored to your operational goals.',
  body: 'From owner-operators looking to retire or relocate, to commercial landlords managing deferred maintenance, we provide certainty, direct capital, and twenty years of practical commercial real estate experience.',
  panels: [
    '/images/GtLzdwbgHQzxkeb9U3nRpi6C8UU.jpg',
    '/images/HuThwNMwS3gauO4nd0g6H3Q8nGU.jpg',
    '/images/QCEnRC5sY8RV6gnGCIDGwiIuyhk.jpg',
    '/images/yeSspAkogw5m6PUqj4HYJ3pZjY.jpg',
  ],
};

export const whoSegments = [
  {
    no: '01',
    name: 'Owner-Operators & Retiring Business Owners',
    kicker: 'Clean exit without business disruption',
    body: 'When it is time to retire, sell your company, or relocate manufacturing operations, listing with a traditional broker creates uncertainty. We make direct cash offers and can structure leasebacks so you control your exit timeline.',
    stat: { value: '14–21', label: 'Days, typical cash close' },
    image: '/images/brD51l3wKCLUUzazBE6Jq9gkI.jpg',
  },
  {
    no: '02',
    name: 'Commercial Landlords with Vacancies or Deferred Maintenance',
    kicker: 'As-is exit with zero required capital improvements',
    body: 'Managing aging commercial roofs, vacant retail storefronts, or tenant turnover requires heavy capital reserves. We acquire properties in as-is condition, taking on all structural and renovation liabilities.',
    stat: { value: '0%', label: 'Broker commissions deducted' },
    image: '/images/tDld9MsvRe9qaKZsU8JU9soM0bk.jpg',
  },
  {
    no: '03',
    name: 'Growing Companies Needing Operational Space',
    kicker: 'Move-in ready facilities with verified infrastructure',
    body: 'Finding warehouses with adequate 3-phase power, high ceiling clearances, or compliant medical plumbing is difficult. We provide fully vetted commercial spaces ready for your team.',
    stat: { value: '100%', label: 'Zoning & environmental verified' },
    image: '/images/sIEVbo8LLQKanQZNJHuKVdAPI.jpg',
  },
  {
    no: '04',
    name: 'Commercial Investors & Estate Trustees',
    kicker: 'Expedited liquidity and estate settlement',
    body: 'Settling commercial partnership liquidations or inherited real estate portfolios requires prompt, predictable execution. We provide written cash offers with proof of funds and guaranteed closing dates.',
    stat: { value: '48h', label: 'Offer delivery turnaround' },
    image: '/images/xgXuTquk6RLVLTZmrXYIzrqr6j8.jpg',
  },
];

/* ---------- /buyer-reviews ---------- */

export const reviewsIntro = {
  eyebrow: 'Client Case Studies',
  heading: 'What property owners and business leaders say about working with QCPS.',
  body: 'Every case study below represents a completed commercial transaction. We publish their candid experiences regarding valuations, communication, and closing execution.',
  stats: [
    { value: '4.9', label: 'Average rating across commercial transactions' },
    { value: '$48M+', label: 'Volume of direct closed acquisitions' },
    { value: '96%', label: 'Clients who recommend our direct process' },
  ],
};

export const reviews = [
  {
    id: 'vance',
    rating: 5,
    title: 'They bought our machine shop as-is without disrupting my staff.',
    quote:
      'We had operated Vance Precision Tooling for nearly three decades in Brooklyn. When health reasons forced me to retire, a traditional commercial broker wanted a 9-month exclusive listing and told me I needed to spend $40,000 fixing the flat roof first. QCPS inspected the facility on a Tuesday, submitted a cash offer on Thursday, and closed in 19 days. They allowed my crew four weeks post-closing to decommission our heavy CNC machinery. That level of flexibility was invaluable.',
    name: 'Arthur Vance',
    detail: 'Former Owner, Vance Precision Tooling — Brooklyn, NY',
    meta: 'Completed February 2026 · Industrial Property Sale',
    image: '/images/ScqYgwXGtkYn4LQsXnnRvjbKeQ.jpg',
  },
  {
    id: 'apex-freight',
    rating: 5,
    title: 'Synchronized our facility sale with our new distribution warehouse.',
    quote:
      'Our freight and fulfillment operation had outgrown our 6,000 square foot facility in Southeast Austin. Marcus and the QCPS team purchased our existing yard and coordinated our move into an 18,000 square foot logistics terminal. Every milestone was hit on schedule, and our delivery routes never suffered downtime.',
    name: 'Marcus Oyelaran',
    detail: 'Operations Director, Apex Regional Freight — Austin, TX',
    meta: 'Completed January 2026 · Industrial Expansion & Acquisition',
    image: '/images/UBtXSOm60enCUciUxosYAh2Tb3U.jpg',
  },
  {
    id: 'biscayne-physicians',
    rating: 5,
    title: 'Handled our medical suite buyout cleanly.',
    quote:
      'Our medical partnership was dissolving as two senior partners entered retirement. Selling a specialized medical condo with lead-lined X-ray rooms and clinical plumbing is notoriously slow. QCPS underwrote the real value of the buildout, handled the association paperwork, and wired proceeds through title on day 21.',
    name: 'Dr. Kevin Gallagher',
    detail: 'Managing Partner, Biscayne Physicians Group — Miami, FL',
    meta: 'Completed November 2025 · Medical Office Disposition',
    image: '/images/srdofgzEhtrL8TxYBsevEIF9ldA.jpg',
  },
  {
    id: 'retail-strip',
    rating: 5,
    title: 'Underwrote the rent roll accurately and stuck to their number.',
    quote:
      'I owned an older three-unit retail building on Atlantic Avenue with one vacancy. Other prospective buyers tried to re-trade the price down by 20% after inspection. QCPS did their homework up front, factored the HVAC age into their initial offer, and closed without a single last-minute concession demand.',
    name: 'Tomi Okafor',
    detail: 'Commercial Property Investor — Brooklyn, NY',
    meta: 'Completed December 2025 · Retail Plaza Sale',
    image: '/images/0We408UybsOypjUhJK5K0QAvj6E.jpg',
  },
  {
    id: 'hartley-tech',
    rating: 5,
    title: 'Direct communication with decision-makers throughout.',
    quote:
      'At other commercial firms you talk to an associate who has to check with an investment committee in another state. With QCPS, Renata and Marcus answered every call directly. When a boundary survey question came up, they resolved it with the title company within 24 hours.',
    name: 'Greg Hartley',
    detail: 'CFO, Hartley Engineered Systems — Manhattan, NY',
    meta: 'Completed March 2026 · Flex Commercial Acquisition',
    image: '/images/Cf1YT9gbBjzhomH2M7mDjfKtc0.jpg',
  },
];

export const reviewsCritique = {
  eyebrow: 'Direct Feedback',
  heading: 'How we continually refine our transaction process.',
  body: 'We solicit candid feedback after every completed closing to ensure our underwriting, diligence speed, and title coordination remain the best in the commercial market.',
  rows: [
    {
      q: 'Coordination during Phase 1 environmental reviews',
      a: 'For heavy industrial properties requiring Phase 1 environmental sign-offs, municipal records can occasionally cause brief delays. We now pre-order municipal records on day one of contract signing to prevent closing postponements.',
    },
    {
      q: 'We decline properties outside our core commercial categories',
      a: 'We focus exclusively on commercial, industrial, office, retail, and medical assets. When sellers submit residential single-family homes, we decline promptly so they can pursue appropriate residential channels.',
    },
    {
      q: 'Clear communication on title encumbrances',
      a: 'When older commercial properties have historical utility easements or municipal liens, we work directly with our commercial title underwriters to resolve exceptions before closing.',
    },
  ],
};

export const reviewsClose = {
  eyebrow: 'Direct Consultation',
  heading: 'Discuss your commercial property with our acquisitions desk.',
  body: 'Whether looking for a fast as-is cash exit or seeking verified commercial inventory for your company, start with a direct conversation.',
  button: 'Speak with an Acquisitions Partner',
  image: '/images/0aFNp7LzIOj6XTwUgydu66svc8.jpg',
};

/* ---------- /areas-we-serve ---------- */

export const areasIntro = {
  eyebrow: 'Commercial Coverage',
  heading: 'Primary commercial corridors and industrial submarkets.',
  body: 'We concentrate our direct acquisition and advisory activity in high-demand commercial markets where we have documented sales comps, zoning familiarity, and local contractor relationships.',
  stats: [
    { value: '6', label: 'Core commercial metro markets' },
    { value: '48h', label: 'Turnaround on market valuation' },
    { value: '$48M+', label: 'Commercial transaction volume' },
  ],
};

export const areas = [
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    state: 'New York',
    blurb:
      'High-demand industrial and commercial corridors including Gowanus Industrial Park, East New York logistics, and prime retail avenues in Downtown Brooklyn. We understand NYC C-2 and M-1 zoning inside out.',
    price: '$2.1M',
    priceLabel: 'Median Commercial Value',
    days: '19',
    daysLabel: 'Median Days to Direct Close',
    tags: ['Gowanus Industrial', 'Atlantic Avenue Retail', 'Bushwick Flex', 'Sunset Park Logistics'],
    image: '/images/1oKjPc1fgQ7THhjOJqgDQlCveVI.jpg',
  },
  {
    id: 'manhattan',
    name: 'Manhattan',
    state: 'New York',
    blurb:
      'Midtown South commercial condominiums, Chelsea creative office floors, and downtown corporate suites with private elevator infrastructure and redundant commercial utilities.',
    price: '$4.2M',
    priceLabel: 'Median Commercial Value',
    days: '24',
    daysLabel: 'Median Days to Direct Close',
    tags: ['Midtown South', 'Chelsea Commercial', 'Tribeca Office', 'Flatiron Suites'],
    image: '/images/QCEnRC5sY8RV6gnGCIDGwiIuyhk.jpg',
  },
  {
    id: 'austin',
    name: 'Austin',
    state: 'Texas',
    blurb:
      'Fast-growing tech flex hubs, Southeast industrial yards, and St. Elmo light manufacturing facilities benefiting from rapid regional logistics expansion.',
    price: '$1.8M',
    priceLabel: 'Median Commercial Value',
    days: '18',
    daysLabel: 'Median Days to Direct Close',
    tags: ['St. Elmo District', 'Southeast Industrial', 'East Austin Flex', 'North Tech Hub'],
    image: '/images/crUZg3obGDFXZKAeFk9A6kh58Y.jpg',
  },
  {
    id: 'miami',
    name: 'Miami',
    state: 'Florida',
    blurb:
      'Doral airport logistics warehouses, Medley heavy industrial yards, and Biscayne medical/retail corridors with high vehicle counts and international trade connections.',
    price: '$2.8M',
    priceLabel: 'Median Commercial Value',
    days: '21',
    daysLabel: 'Median Days to Direct Close',
    tags: ['Doral Logistics', 'Medley Industrial', 'Biscayne Medical', 'Wynwood Commercial'],
    image: '/images/0kUM1fCST5l8a30x6FnNxoYk8M.jpg',
  },
  {
    id: 'portland',
    name: 'Portland',
    state: 'Oregon',
    blurb:
      'Central Eastside Industrial District facilities and Columbia Corridor distribution terminals featuring heavy power, rail spurs, and dock-high loading positions.',
    price: '$1.4M',
    priceLabel: 'Median Commercial Value',
    days: '22',
    daysLabel: 'Median Days to Direct Close',
    tags: ['Central Eastside', 'Columbia Corridor', 'Guilds Lake Industrial', 'Airport Way'],
    image: '/images/GtLzdwbgHQzxkeb9U3nRpi6C8UU.jpg',
  },
];

export const areasLimits = {
  eyebrow: 'Our Direct Scope',
  heading: 'Clear boundaries on the property types we handle.',
  body: 'We believe specialization creates superior results. We focus strictly on commercial real estate where our capital and underwriting provide immediate value.',
  rows: [
    {
      q: 'Single-family residential homes',
      a: 'Not our focus. We specialize exclusively in commercial, industrial, flex, retail, and office properties. If you need residential assistance, we can refer you to top residential specialists.',
    },
    {
      q: 'Commercial properties outside our core states',
      a: 'We evaluate substantial commercial assets nationwide through our institutional capital partners, provided the property meets our minimum square footage and zoning criteria.',
    },
    {
      q: 'Environmental remediation properties (Brownfields)',
      a: 'We purchase commercial properties with deferred maintenance and historic commercial uses. For complex environmental profiles, our Phase 1 review determines our capacity to absorb remediation liabilities.',
    },
    {
      q: 'Special-purpose properties (Churches, Gas Stations)',
      a: 'Evaluated on a case-by-case basis depending on underlying land zoning, parcel size, and adaptability for commercial repositioning.',
    },
  ],
};

export const areasLocal = {
  eyebrow: 'Commercial Due Diligence',
  heading: 'Four operational factors we evaluate on every commercial site.',
  items: [
    {
      no: '01',
      name: 'Truck circulation & loading accessibility',
      body: 'Turning radiuses, curb-cut approvals, and dock height geometry that determine whether logistics vehicles can operate efficiently.',
    },
    {
      no: '02',
      name: 'Utility capacity & 3-phase electrical service',
      body: 'Transformer ratings, electrical switchgear amperage, and municipal gas/water lines required for modern commercial machinery.',
    },
    {
      no: '03',
      name: 'Zoning classification & permitted commercial uses',
      body: 'Verified municipal zoning codes, FAR limits, parking ratios, and allowable use matrices before finalizing contracts.',
    },
    {
      no: '04',
      name: 'Closed commercial sales comps',
      body: 'Actual closed title deeds and recorded transfers, not speculative asking prices on commercial listing databases.',
    },
  ],
};

export const areasClose = {
  eyebrow: 'Get Started',
  heading: 'Enter your commercial address for an immediate valuation review.',
  body: 'Our acquisitions team will pull comparable commercial transactions, verify municipal parcel data, and provide an honest assessment within 24 to 48 hours.',
  button: 'Request Property Evaluation',
  image: '/images/ZOFHTFDotyaUTQ8cgcNJouab1c.jpg',
};

export const whoFaqs = [
  {
    q: 'How does QCPS evaluate an owner-occupied commercial building?',
    a: 'We evaluate both the real estate value and your operational requirements. If you need a sale-leaseback or a deferred move-out date to relocate operations, we incorporate that directly into our proposal.',
  },
  {
    q: 'Can you purchase commercial properties with outstanding liens or tax arrears?',
    a: 'Yes. All municipal tax liens, mechanics liens, and outstanding commercial mortgages are paid and satisfied directly out of closing escrow proceeds at settlement.',
  },
  {
    q: 'How are commercial lease transfers handled?',
    a: 'If your building has commercial tenants in place, we review existing leases, estoppel certificates, and rent rolls during due diligence. All tenant relationships and security deposits transfer seamlessly at closing.',
  },
  {
    q: 'What is the fastest closing timeline QCPS can accommodate?',
    a: 'Our fastest direct closing was executed in 12 business days. Typical closings average 14 to 21 days from receipt of a clean preliminary title commitment.',
  },
];
