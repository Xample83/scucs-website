# SCUCS Website Redesign — What’s New

**Preview link:** https://xample83.github.io/scucs-website/  
**Original site:** https://scucs.org/  
**Built with:** Astro + Tailwind CSS (replacing WordPress / Divi)

This summary describes what changed in the redesign compared with the legacy WordPress site.

---

## Why we rebuilt

The previous site relied on WordPress and the Divi page builder. The redesign focuses on:

- Faster page loads
- Clearer paths to help, services, and donations
- Stronger accessibility (keyboard, screen readers, contrast, readable type)
- Easier long-term maintenance without a heavy CMS theme stack

---

## What’s improved for visitors

### Clearer first impression
- Replaced the old image-slider homepage with a **service-first** layout: mission, primary actions, and services up front
- Stronger branding: larger logo, brand blues throughout, high-contrast colors
- Inclusive language that reflects who we serve — older adults, adults with disabilities, and people facing homelessness — not “seniors only”

### Easier navigation
- Persistent header with phone number plus clear **Donate** and **Find Help** buttons
- Mobile-friendly menu
- Custom **404** page with helpful next steps if a link is broken

### Services, clearly organized
Each major program now has its own page:

1. Community Services  
2. In-Home Services  
3. Support Coordination  
4. Housing Supports Program *(added as a dedicated statewide offering)*  
5. Transportation (including the required **2026 Combined Public Hearing Notice**)  
6. Travel & Tours  

There is also a Services overview page that links to all of the above.

### Find Help (resource directory)
- Moved from a list of PDF downloads toward an **on-site, searchable / filterable** directory
- Crisis contacts highlighted at the top
- Some larger lists (e.g. food pantries, sober living, rooming houses) still offered as PDF downloads for now

### Donate
- Clear instructions for giving **by mail** (checks to SCUCS, Inc.)
- Memorial / honor gift guidance
- 501(c)(3) tax-deductibility note
- Online payment not claimed where it isn’t confirmed

### Contact & Volunteer
- Contact page with phone, email, address, hours, and an embedded map
- Volunteer page updated; **Home Delivered Meals** removed (program no longer offered)

### Transparency & trust
- New **Transparency & Accountability** page with EIN, 501(c)(3) status, and a link to official Form 990 filings
- Board member names can be added when leadership provides a current list

### Stories from the community
- Testimonials section is in place (placeholder quotes for now; real quotes can be swapped in when approved)

### News
- News listing and article pages ready for ongoing updates
- RSS feed available for subscribers / aggregators

---

## Technical & SEO improvements

| Area | Change |
|------|--------|
| Platform | Static Astro site (fast, secure, simpler hosting) |
| SEO | Sitemap, robots.txt, canonical URLs |
| Sharing | Open Graph / Twitter cards + branded share image |
| Search engines | JSON-LD organization data (name, address, phone, hours) |
| Analytics | Google Analytics (GA4) ready — add Measurement ID when approved |
| Mobile | Web app manifest / home-screen icons |
| Accessibility | Skip link, semantic structure, focus styles, large readable type |

---

## What is *not* changed yet (or deferred)

- WordPress remains the live production site until leadership approves a cutover
- Find Help “Phase 2” (full on-site Food Pantries / Sober Living / Rooming Houses lists)
- Named Board of Directors roster (structure ready; names pending)
- Real testimonial quotes (template ready; content pending)
- Online donation processing (not added without a confirmed payment method)
- Full analytics go-live (code is wired; ID not required until you’re ready)

---

## How to review

1. Open **https://xample83.github.io/scucs-website/**  
2. Check Home, Services, Find Help, Donate, Contact, Volunteer, About, Transparency, and News  
3. Try it on a phone as well as a desktop  

Questions or requested edits can be collected and applied before any final go-live decision.
