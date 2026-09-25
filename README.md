# PT MED — Coaching Institute Website

A Next.js 14 (App Router) + Tailwind CSS website for **PT MED**, the NEET-UG / MHT-CET
(PCB) coaching wing of Pratik Tutorials — built to match the supplied Home, About,
Results, Courses and Gallery designs, plus a Contact page with an enquiry form,
Google Map and all four branch locations.

## 1. Install & run

This project was generated in an offline container, so dependencies are **not**
installed yet. On your own machine, with Node.js 18+ installed:

```bash
cd ptmed-website
npm install
npm run dev
```

Open http://localhost:3000 in your browser. For a production build:

```bash
npm run build
npm start
```

## 2. What's inside

```
src/
  app/
    layout.js          Root layout — fonts, <Navbar>, <Footer>, floating WhatsApp/Call buttons
    page.js             Home
    about/page.js        About Us ("Why PT-MED?")
    results/page.js      Results (student result cards)
    courses/page.js      Courses (NEET UG + MHT-CET paper patterns)
    gallery/page.js       Gallery (filterable: Workshops / Felicitation / Events)
    contact/page.js      Contact (enquiry form + branches + Google Map)
    api/enquiry/route.js  API route the enquiry form posts to
  components/            Navbar, Footer, FloatingButtons, EnquiryForm, Icons, Bits
  data/                  Editable content: students.js, courses.js, gallery.js
  lib/siteConfig.js      Single place to edit phone numbers, branches, nav links, etc.
public/images/           Placeholder images (see below)
```

## 3. Things to customize before going live

- **`src/lib/siteConfig.js`** — the one file to edit for: WhatsApp number, phone
  number, email, the 4 branch addresses/phones (currently populated from
  https://pratiktutorials.org/branch — double-check these are current), social
  links, and nav labels.
- **`public/images/*.jpg`** — every photo in this project (hero portrait, founder
  photo, student photos, gallery photos) is a **generated placeholder** (a
  teal/navy gradient with a text label) because this environment has no internet
  access to fetch real photography. Replace each file with a real photo of the
  same name (same aspect ratio ideally) and everything will just work — no code
  changes needed. The filenames are self-explanatory (e.g. `hero-doctor.jpg`,
  `founder.jpg`, `student-1.jpg` … `student-10.jpg`, `gallery-1.jpg`, `event-1.jpg`,
  `felicitation-1.jpg`, `video-1.jpg`).
- **`src/data/students.js`** — replace with your real NEET/MHT-CET toppers, scores,
  colleges and quotes.
- **`src/data/courses.js`** — edit the paper pattern, highlights and textbook cards
  if your syllabus/marking scheme changes.
- **Enquiry form backend** — `src/app/api/enquiry/route.js` currently just
  validates the submission and logs it on the server. Wire it up to an email
  service (Resend/SendGrid/Nodemailer), a Google Sheet, or a CRM webhook so you
  actually receive enquiries — the `TODO` comment marks exactly where.
- **NCERT/HSC textbook downloads** on the Courses page are shown as labelled
  cards (no file is bundled). Add real PDF links or files under `public/` and
  turn those into `<a href="...">` download links if you want live downloads.
- **Google Map** — the embed on the Contact page is built with no API key
  (`https://www.google.com/maps?q=<address>&output=embed`), so it works out of
  the box. For a nicer pinned embed, go to Google Maps → Share → Embed a map for
  your exact branch and swap in that URL via `getMapEmbedUrl` in
  `src/lib/siteConfig.js`.

## 4. WhatsApp & Call icons

Every page shows a floating WhatsApp + Call button (bottom-right), via
`src/components/FloatingButtons.js`. The Contact page additionally shows a
click-to-call and WhatsApp button per branch. All numbers come from
`siteConfig.js` — update them there.

## 5. Design notes

Color system: deep teal (`#0d5c56`) as the primary brand color, navy (`#0a2540`)
for headings/dark sections, and a soft teal tint (`#e6f4f2`) for section
backgrounds — matching the reference designs. Headings use Poppins, body text
uses Inter (both loaded via `next/font/google`, so no extra setup is needed once
you run `npm install`).
