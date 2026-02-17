export const SITE = {
  name: "Aurelius Metals",
  legalName: "Aurelius Metals LLC",
  domain: "aureliusmetals.com", // change if needed
  phoneDisplay: "(619) 555-0123",
  phoneE164: "+16195550123",
  smsE164: "+16195550123",
  email: "info@aureliusmetals.com",
  city: "San Diego, CA",
  serviceArea:
    "San Diego County (La Jolla, Del Mar, Rancho Santa Fe, Coronado, Carmel Valley, North County, Downtown).",
  hours: "By appointment • 7 days/week",
  valueProps: [
    "Transparent testing in front of you (XRF + scale)",
    "Immediate payment (Zelle/ACH/wire/check)",
    "Mobile, private, and discreet",
    "Appraiser-forward expertise for estates & high-value lots",
  ],
} as const;

export const LINKS = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/what-we-buy", label: "What We Buy" },
  { href: "/appraisals", label: "Appraisals" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;
