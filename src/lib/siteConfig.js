// ---------------------------------------------------------------------------
// EDIT THIS FILE to update contact details, nav links and social links
// across the entire website in one place.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "PT MED",
  tagline: "NEET-UG | Shaping Medical Minds",
  subTagline: "A Medical Wing of Pratik Tutorials",
  description:
    "PT MED is a specialised NEET-UG & MHT-CET (PCB) coaching institute helping students master NEET with focused guidance, strong fundamentals and continuous support.",

  // Default number used by the floating WhatsApp/Call buttons on every page.
  // Set to the Thane West (flagship) branch below — change if you want a different default.
  whatsappNumber: "919769448145",
  whatsappMessage: "Hi PT MED, I would like to know more about your NEET-UG coaching.",

  phoneDisplay: "+91 97694 48145",
  phoneNumber: "+919769448145",

  email: "info@ptmed.in",

  address: {
    line1: "Pratik Tutorials, Shop No. 1, Shreeji Villa",
    line2: "Lohar Ali Road, Jambli Naka, Thane West, Thane, Maharashtra",
    full: "Pratik Tutorials, Shop No. 1, Shreeji Villa, Lohar Ali Road, Near Jagdish Book Depot, Jambli Naka, Thane West, Thane, Maharashtra, India",
  },

  // Branch / center list — sourced from https://pratiktutorials.org/branch
  // Edit freely: add, remove or update branches, phone numbers and map links here.
  branches: [
    {
      name: "Thane Station",
      phoneDisplay: "+91 97694 48145",
      phoneNumber: "+919769448145",
      whatsappNumber: "919769448145",
      address:
        "Shop No. 1, Shreeji Villa, Lohar Ali Road, Near Jagdish Book Depot, Jambli Naka, Thane Station, Thane, Maharashtra, India",
      hours: "Monday - Sunday: 11 am - 8 pm",
      mapsSearchUrl:
        "https://www.google.com/maps/search/?api=1&query=Pratik+Tutorials+Jambli+Naka+Thane+West",
    },
    {
      name: "Manpada",
      phoneDisplay: "+91 83691 74278",
      phoneNumber: "+918369174278",
      whatsappNumber: "918369174278",
      address:
        "Ground Floor, Soham Plaza C1, Ghodbunder Road, Behind PNB Bank, Near Manpada Flyover, Manpada, Thane West, Thane, Maharashtra, India",
      hours: "Monday - Sunday: 11 am - 8 pm",
      mapsSearchUrl:
        "https://www.google.com/maps/search/?api=1&query=Soham+Plaza+C1+Ghodbunder+Road+Manpada+Thane+West",
    },
    {
      name: "Kolshet",
      phoneDisplay: "+91 80977 77810",
      phoneNumber: "+918097777810",
      whatsappNumber: "918097777810",
      address:
        "540, 5th Floor, Lodha Signet A, Kolshet Road, Kolshet Industrial Area, Thane West, Thane, Maharashtra, India",
      hours: "Monday - Sunday: 11 am - 8 pm",
      mapsSearchUrl:
        "https://www.google.com/maps/search/?api=1&query=Lodha+Signet+A+Kolshet+Road+Thane+West",
    },
    {
      name: "Anand Nagar",
      phoneDisplay: "+91 90292 05586",
      phoneNumber: "+919029205586",
      whatsappNumber: "919029205586",
      address:
        "S-14, 2nd Floor, Kris Corner, Opp. Saraswati Vidyalaya, Anand Nagar, Thane West, Thane, Maharashtra, India",
      hours: "Monday - Sunday: 11 am - 8 pm",
      mapsSearchUrl:
        "https://www.google.com/maps/search/?api=1&query=Kris+Corner+Anand+Nagar+Thane+West",
    },
  ],

  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Results", href: "/results" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
};

// Builds a Google Maps embed URL (output=embed) from a plain address string.
// This needs no API key, so the map works immediately after cloning the project.
// For a nicer/pinned embed, you can replace the result with a URL from
// Google Maps → Share → Embed a map for any specific branch.
export function getMapEmbedUrl(address) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}
