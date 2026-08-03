export interface Testimonial {
  /** The quote text. Keep it to 1–3 sentences. */
  quote: string;
  /** First name + last initial, or first name only for privacy. */
  name: string;
  /** Optional role/context, e.g. "Client", "Family caregiver", "Volunteer". */
  role?: string;
  /** Optional related program, e.g. "In-Home Services". */
  program?: string;
}

/**
 * Replace these placeholders with real, approved quotes when ready.
 * Tip: prefer first-name-only or first-name + last-initial for privacy.
 * Leave this array empty (`[]`) to hide the section entirely.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "SCUCS helped my mother stay safely in her own home. The aides were kind, reliable, and treated her like family.",
    name: "Placeholder Name",
    role: "Family caregiver",
    program: "In-Home Services",
  },
  {
    quote:
      "I don't know what I would have done without Sen-Han Transit. Getting to my doctor's appointments is so much easier now.",
    name: "Placeholder Name",
    role: "Client",
    program: "Transportation",
  },
  {
    quote:
      "Volunteering with SCUCS has been one of the most rewarding parts of my week. You can see the difference it makes.",
    name: "Placeholder Name",
    role: "Volunteer",
  },
];
