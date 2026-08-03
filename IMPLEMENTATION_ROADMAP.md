# SCUCS Website Rebuild — Master Implementation Roadmap

**Site:** www.scucs.org  
**Stack:** WordPress + Spectra (theme/builder) + Gutenberg  
**Brand accent:** `#0056b3`  
**Content source:** `updated_content/`  
**Assets:** `images/hero-community-services.jpg`, `icons/*.svg`

---

## Project status

| Phase | Status |
| --- | --- |
| 1. Homepage Finalization | **IN PROGRESS** — beginner walkthrough active |
| 2. Core Services Migration | Locked until Phase 1 confirmed |
| 3. Donation Portal Setup | Locked |
| 4. Navigation/Footer Assembly | Locked |
| 5. Final Quality Assurance | Locked |

**Rule:** Complete one phase, confirm with your project lead (this chat), then unlock the next.

---

## Phase overview

### Phase 1 — Homepage Finalization
Ship a clean, mobile-ready homepage: hero, trust/intro, three service pillars, secondary CTAs.

### Phase 2 — Core Services Migration
Build service pages from `updated_content/` (Community Services, Transportation/SEN-HAN, Housing, Travel, DDD, etc.) using consistent Spectra patterns.

### Phase 3 — Donation Portal Setup
Add donate entry points, thank-you/confirmation paths, and payment/plugin integration without cluttering service pages.

### Phase 4 — Navigation/Footer Assembly
Primary menu, footer columns, contact block, accessibility links, and mobile menu QA.

### Phase 5 — Final Quality Assurance
Cross-browser/mobile checks, SEO meta, broken links, forms, performance, and launch checklist.

---

## Phase 1 checklist — Spectra / Gutenberg blocks

- [ ] **Container** (outer page wrapper + section wrappers)
- [ ] **Cover** *or* Spectra **Container** with background image (hero)
- [ ] **Advanced Heading** (H1 + supporting line)
- [ ] **Buttons** (primary + secondary CTA)
- [ ] **Spacer** / spacing controls on Container
- [ ] **Advanced Heading** (section titles)
- [ ] **Info Box** × 3 *or* **Icon List** + **Buttons** (service pillars)
- [ ] **Image** (SVG icons upload) *or* Spectra **Icon** if using built-ins
- [ ] **Call to Action** (mid-page help strip)
- [ ] **Columns** *or* nested **Containers** (equal cards; stack on mobile)
- [ ] **Separator** (optional, light visual break)

---

## Phase 2 checklist — Spectra / Gutenberg blocks (preview)

- [ ] Container (page shell)
- [ ] Advanced Heading (H1 + H2/H3 hierarchy from Markdown)
- [ ] Paragraph / Advanced Text
- [ ] Icon List or List (eligibility / how-to steps)
- [ ] Buttons / Call to Action (phone CTAs)
- [ ] Table (SEN-HAN contact/nutrition tables where needed)
- [ ] Image (brochures as download buttons via Buttons + Media)

---

## Phase 3 checklist — Spectra / Gutenberg blocks (preview)

- [ ] Container + Advanced Heading (Donate page)
- [ ] Call to Action / Buttons (Donate Now)
- [ ] Form block *or* Giving plugin shortcode in Shortcode / Custom HTML
- [ ] Info Box (where gifts go / impact)
- [ ] Confirmation page (Cover or simple Container)

---

## Phase 4 checklist — Spectra / Gutenberg blocks (preview)

- [ ] Site Header / Navigation (Appearance → Menus + theme header)
- [ ] Footer Builder containers (Astra/Spectra footer)
- [ ] Icon List (address, phone, email)
- [ ] Social Share / Social Icons (if used)
- [ ] Buttons (Donate in header)

---

## Phase 5 checklist — QA (preview)

- [ ] Mobile preview (Spectra responsive controls)
- [ ] Link audit
- [ ] Meta descriptions from `updated_content`
- [ ] Form/donation test
- [ ] Accessibility pass (contrast, heading order, alt text)

---

## Assets to use in Phase 1

| Asset | Path |
| --- | --- |
| Hero photo | `images/hero-community-services.jpg` |
| Community icon | `icons/community-services.svg` |
| Transportation icon | `icons/transportation.svg` |
| Housing icon | `icons/housing-assistance.svg` |

---

*Detailed build instructions for Phase 1 are provided in the active project session. Phases 2–5 unlock after confirmation.*
