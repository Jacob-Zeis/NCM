export const SITE = {
  name: "North County Gold",
  legalName: "North County Gold LLC",
  domain: "northcountygold.com",
  phoneDisplay: "(619) 555-0123",
  phoneE164: "+16195550123",
  smsE164: "+16195550123",
  email: "info@northcountygold.com",
  city: "North County San Diego, CA",
  serviceArea:
    "North County San Diego, including San Marcos, Carlsbad, Encinitas, Vista, Oceanside, Escondido, Del Mar, Rancho Santa Fe, and surrounding areas.",
  hours: "By appointment • 7 days/week",
  valueProps: [
    "Transparent XRF testing and weighing in front of you",
    "Immediate payout via Zelle, ACH, wire, or check",
    "Discreet local appointments",
    "Gold, silver, platinum, bullion, coins, gem-set jewelry, and estate lots",
  ],
} as const;

export const LINKS = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/what-we-buy", label: "What We Buy" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const PROCESS = [
  {
    title: "Request a quote",
    text: "Text photos or call to tell us what you have.",
  },
  {
    title: "Get it tested",
    text: "We verify purity and weight in front of you.",
  },
  {
    title: "Get paid same day",
    text: "Accept the offer and choose Zelle, ACH, wire, or check.",
  },
] as const;

export const BUY_ITEMS = [
  {
    title: "Gold",
    text: "Jewelry, scrap, chains, rings, bracelets, earrings, and select dental gold.",
  },
  {
    title: "Diamond and gemstone jewelry",
    text: "Gold jewelry with diamonds or gemstones, including rings, pendants, bracelets, earrings, and estate pieces.",
  },
  {
    title: "Silver",
    text: "Sterling, silver jewelry, coins, bars, rounds, and mixed silver lots.",
  },
  {
    title: "Platinum",
    text: "Platinum jewelry and select platinum precious metals items.",
  },
  {
    title: "Coins",
    text: "Gold and silver coins, melt-value coin lots, and select collectible pieces.",
  },
  {
    title: "Bullion",
    text: "Bars, rounds, and clean bullion lots with transparent local pricing.",
  },
  {
    title: "Estate lots",
    text: "Inherited jewelry, gem-set pieces, mixed collections, and larger local appointments.",
  },
] as const;

export const LOCAL_AREAS = [
  "Carlsbad",
  "Encinitas",
  "Oceanside",
  "Vista",
  "San Marcos",
  "Escondido",
  "Del Mar",
  "Rancho Santa Fe",
] as const;

export const TRUST_POINTS = [
  {
    icon: "test",
    title: "Transparent testing",
    text: "XRF testing verifies metal content without guessing.",
  },
  {
    icon: "offer",
    title: "Competitive offers",
    text: "A serious local quote before you settle for a pawn shop number.",
  },
  {
    icon: "payment",
    title: "Fast payment",
    text: "When you accept, payment is handled the same day.",
  },
] as const;

export const PRICING_FACTORS = [
  {
    title: "Purity",
    text: "XRF testing verifies precious metal content before an offer is made.",
  },
  {
    title: "Weight",
    text: "Items are weighed in front of you with clear math.",
  },
  {
    title: "Item type",
    text: "Coins, bullion, jewelry, and estate lots can price differently by market.",
  },
] as const;

export const FAQS = [
  {
    title: "Do you test items in front of me?",
    text: "Yes. Purity and weight are checked in front of you.",
  },
  {
    title: "How do you pay?",
    text: "Typically by Zelle, ACH, wire, or check depending on the situation.",
  },
  {
    title: "Do I need ID?",
    text: "Yes. ID and receipt documentation are part of the process.",
  },
  {
    title: "Do you buy coins and bullion?",
    text: "Yes. We buy coins, bars, rounds, and clean bullion lots.",
  },
  {
    title: "Do you handle estate lots?",
    text: "Yes. Estate and larger local collections are welcome by appointment.",
  },
] as const;
