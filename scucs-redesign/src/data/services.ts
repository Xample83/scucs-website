import type { ImageMetadata } from "astro";
import communityServicesPhoto from "../assets/community-services-photo.jpg";
import transportationPhoto from "../assets/transportation-photo.jpg";
import supportCoordinationPhoto from "../assets/support-coordination-photo.jpg";
import heroPhoto from "../assets/hero-care-photo.jpg";

export interface ProgramGroup {
  label: string;
  items: string[];
}

export interface SubProgram {
  title: string;
  description: string;
  phone?: string;
}

export interface DocumentLink {
  label: string;
  href: string;
}

export interface DocumentGroup {
  label: string;
  description?: string;
  highlight?: boolean;
  links: DocumentLink[];
}

export interface PickupDirection {
  from: string;
  text: string;
}

export interface PickupLocation {
  address: string;
  addressNote: string;
  directions: PickupDirection[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceData {
  id: string;
  title: string;
  summary: string;
  icon: string;
  photo: ImageMetadata | null;
  photoAlt?: string;
  intro: string;
  subPrograms?: SubProgram[];
  programGroups?: ProgramGroup[];
  notes?: string[];
  documentGroups?: DocumentGroup[];
  pickupLocation?: PickupLocation;
  faqs?: Faq[];
  contactNote: string;
}

export const services: ServiceData[] = [
  {
    id: "community-services",
    title: "Community Services",
    summary:
      "Programs that connect older adults and people with disabilities to the resources they need close to home.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    photo: communityServicesPhoto,
    photoAlt: "A group of older adults and an adult with a disability laughing together during an activity at a SCUCS community center",
    intro:
      "SCUCS Community Services aims to be a steadfast pillar of support, offering tailored interventions and holistic resources to address unique challenges \u2014 empowering people to achieve greater self-sufficiency, participate fully in community life, and live with the respect and care they deserve.",
    programGroups: [
      {
        label: "Counseling Programs",
        items: ["Benefits Counseling", "Housing Counseling", "Housing Navigation", "Shared Housing", "State Health Insurance Program (SHIP)"],
      },
      {
        label: "Food Programs",
        items: ["Food Pantry", "Shut-In Shopping"],
      },
      {
        label: "Prevention Programs",
        items: ["Heating & Cooling Assistance", "Lending Closet", "Rental Assistance", "Tenant-Based Rental Assistance", "Utility Assistance"],
      },
    ],
    contactNote: "Call our main office at (856) 456-1121 to learn which programs you may qualify for.",
  },
  {
    id: "in-home-services",
    title: "In-Home Services",
    summary:
      "Home health aide and homemaker support that helps older adults and adults with disabilities live safely and independently at home.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    photo: heroPhoto,
    photoAlt: "A home health aide sharing a warm conversation with an older adult client at her kitchen table",
    intro:
      "SCUCS understands the responsibilities of caregiving and the stress that can come with it day to day. Our In-Home Services support caregivers and help older adults and adults with disabilities remain safely in their own homes.",
    subPrograms: [
      {
        title: "Respite Care",
        description:
          "Respite Care gives caregivers relief from day-to-day responsibilities \u2014 for a few hours, a weekend, or longer \u2014 through options like adult day care, in-home health aides, and temporary out-of-home placements. Available to caregivers of elderly or disabled individuals (18+) in Camden and Gloucester counties.",
      },
      {
        title: "Personal Care Program",
        description:
          "Short-term assistance for older adults recovering from an illness or injury who don't need full-time medical care but need help with daily activities like bathing, laundry, and housekeeping.",
        phone: "856-858-3220",
      },
    ],
    contactNote: "Call (856) 456-1121 for Respite Care, or (856) 858-3220 for the Personal Care Program.",
  },
  {
    id: "support-coordination",
    title: "Support Coordination",
    summary: "Individualized planning that helps adults with developmental disabilities access services in their community.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    photo: supportCoordinationPhoto,
    photoAlt: "A support coordinator reviewing a support plan with an adult with a disability at a home office table",
    intro:
      "SCUCS provides Division of Developmental Disabilities (DDD)-funded Support Coordination, a case management service for adults with intellectual and/or developmental disabilities living in Atlantic, Burlington, Camden, Cumberland, Gloucester, Mercer, and Salem counties.",
    programGroups: [
      {
        label: "Program Highlights",
        items: [
          "Monthly contact and quarterly visits with a dependable, experienced Support Coordinator",
          "Development of an Individual Service Plan",
          "Linkage to services and supports",
          "Management of an individualized budget based on NJCAT assessed level of need",
        ],
      },
      {
        label: "To Be Eligible You Must",
        items: [
          "Be a resident of New Jersey",
          "Be 21 years of age or older",
          "Be enrolled in the Supports Program or the Community Care Program (Medicaid Waiver)",
        ],
      },
    ],
    contactNote: "Call (856) 456-1121 to request a referral form or ask about eligibility.",
  },
  {
    id: "housing-supports",
    title: "Housing Supports Program",
    summary: "Medicaid-funded help finding, moving into, and keeping safe, stable housing \u2014 available statewide.",
    icon: "M3 12l9-9 9 9M4 10v10a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a1 1 0 001-1V10",
    photo: null,
    intro:
      "SCUCS is proud to be an approved provider for the NJ FamilyCare Housing Supports Program, a Medicaid-funded benefit that helps eligible individuals find, move into, and maintain safe, stable housing. Because housing is a critical foundation for health and independence, our team works alongside NJ FamilyCare (Medicaid) members to connect them with the support they need to secure and keep their homes \u2014 statewide, just like our Support Coordination program.",
    programGroups: [
      {
        label: "Pre-Tenancy Support",
        items: [
          "Help searching for and applying to available, appropriate housing",
          "Assistance gathering documents and completing housing applications",
          "Support preparing for a successful move-in",
        ],
      },
      {
        label: "Tenancy Sustaining Services",
        items: [
          "Ongoing support to help you keep your housing once you're settled in",
          "Help understanding lease responsibilities and communicating with landlords",
          "Early intervention to help prevent eviction or loss of housing",
        ],
      },
      {
        label: "Move-In Supports",
        items: [
          "Assistance with one-time move-in costs",
          "Home modifications or repairs needed to ensure health and safety",
          "Coordination with other agencies and services as needed",
        ],
      },
    ],
    notes: [
      "The Housing Supports Program is made possible through New Jersey's Section 1115 Medicaid demonstration waiver and is administered by the NJ Division of Medical Assistance and Health Services (DMAHS).",
      "This program is available statewide to eligible New Jersey Medicaid members.",
    ],
    faqs: [
      {
        q: "Who is eligible for the Housing Supports Program?",
        a: "You must be enrolled in NJ FamilyCare (Medicaid) and experiencing housing instability or be at risk of losing your housing. Additional eligibility criteria are set by the state's Division of Medical Assistance and Health Services (DMAHS).",
      },
      {
        q: "Is this program only for Camden, Burlington, and Gloucester counties?",
        a: "No \u2014 the Housing Supports Program is a statewide NJ Medicaid benefit, so SCUCS can work with eligible members anywhere in New Jersey, similar to our Support Coordination program.",
      },
      {
        q: "How do I get started?",
        a: "Call our office and we'll help you understand whether you qualify and walk you through next steps for enrolling in services.",
      },
    ],
    contactNote: "Call (856) 456-1121 to learn more about eligibility and get connected with a Housing Supports Program coordinator.",
  },
  {
    id: "transportation",
    title: "Transportation \u2014 SEN-HAN Transit",
    summary: "Sen-Han Transit provides reliable rides to medical appointments, shopping, and community programs.",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m6 0a2 2 0 104 0",
    photo: transportationPhoto,
    photoAlt: "A SCUCS transportation driver helping a senior with a walker board an accessible shuttle",
    intro:
      "SEN-HAN Transit provides coordinated paratransit services for older adults (60+) and individuals with certified disabilities in Camden and Burlington counties, including rides to medical appointments, shopping, and the VA Hospital in Philadelphia.",
    programGroups: [
      {
        label: "Camden County",
        items: ["General transit: (856) 456-3344", "Weekly shopping trips: (856) 456-1148"],
      },
      {
        label: "Burlington County",
        items: ["Medical, personal & veteran rides: (877) 603-5111", "Shopping trips: (856) 255-5348"],
      },
      {
        label: "Rider Policies",
        items: [
          "Oxygen tanks: Portable oxygen tanks are permitted on SEN-HAN vehicles and are the responsibility of the client or escort.",
          "Service animals: Only service animals are permitted and must be registered at the time of your ride reservation.",
          "Vehicle lift: If a vehicle lift becomes inoperable, another vehicle will be dispatched to complete the service.",
        ],
      },
    ],
    notes: [
      "Reservations are required and can be made two days to two weeks in advance.",
      "Veteran transportation to the VA Hospital in Philadelphia runs Tuesday through Friday.",
      "A suggested donation or small cost share applies to some rides; inability to pay will not affect service.",
    ],
    documentGroups: [
      {
        label: "2026 Combined Public Hearing Notice",
        description:
          "Hearing held October 6, 2025 for the Senior Citizens and Disabled Residents Transportation Assistance Program and the FTA Non-Urbanized Area Formula Program (Section 5311).",
        highlight: true,
        links: [
          { label: "View Public Hearing Notice (PDF)", href: "https://scucs.org/wp-content/uploads/2025/09/2026-Combined-Public-Hearing-Notice.pdf" },
        ],
      },
      {
        label: "2026 Transportation Assistance Program Applications",
        links: [
          { label: "Camden County Application (PDF)", href: "https://scucs.org/wp-content/uploads/2026/01/CC_Paratransit_Application.pdf" },
          { label: "Burlington County Application (PDF)", href: "https://scucs.org/wp-content/uploads/2026/01/BC_Paratransit_Application.pdf" },
        ],
      },
      {
        label: "SCUCS Non-Discrimination Policy",
        links: [
          { label: "English (PDF)", href: "https://scucs.org/wp-content/uploads/2023/04/NonDiscrimination-Policy-English.pdf" },
          { label: "Espa\u00f1ol (PDF)", href: "https://scucs.org/wp-content/uploads/2023/04/NonDiscriminationPolicy0911SP.pdf" },
        ],
      },
      {
        label: "Title VI Non-Discrimination Policy",
        links: [
          { label: "English (PDF)", href: "https://scucs.org/wp-content/uploads/2023/04/Title-VI-policyWS0116-1.pdf" },
        ],
      },
      {
        label: "Title VI Complaint Form",
        links: [
          { label: "English (PDF)", href: "https://scucs.org/wp-content/uploads/2023/04/Title-VI-Complaint-Form.pdf" },
          { label: "Espa\u00f1ol (PDF)", href: "https://scucs.org/wp-content/uploads/2023/04/TitleVIComplaintFormSP0116.pdf" },
        ],
      },
      {
        label: "ADA Reasonable Modification Policy & Request Process",
        links: [
          { label: "English (PDF)", href: "https://scucs.org/wp-content/uploads/2023/04/SCUCS-ADA-Reasonable-Modification.pdf" },
          { label: "Espa\u00f1ol (PDF)", href: "https://scucs.org/wp-content/uploads/2025/03/2025-01-Reasonable-Modification_Spanisih.pdf" },
        ],
      },
      {
        label: "ADA Policy and Complaint Form",
        links: [
          { label: "English (PDF)", href: "https://scucs.org/wp-content/uploads/2023/04/SCUCS-ADA-Complaint-Form.pdf" },
          { label: "Espa\u00f1ol (PDF)", href: "https://scucs.org/wp-content/uploads/2025/03/2025-ADA-Complaint-Form.docxSpanish.pdf" },
        ],
      },
    ],
    contactNote: "Reservation lines are open 9:00 AM \u2013 4:00 PM, Monday through Friday.",
  },
  {
    id: "travel-and-tours",
    title: "Travel & Tours",
    summary: "Affordable group trips and outings designed for social connection, recreation, and fun.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-13l6 3m0 0l5.447-2.724A1 1 0 0121 5.618v10.764a1 1 0 01-.553.894L15 20M9 7v13m6-13v13",
    photo: null,
    intro:
      "SCUCS offers a year-round trip program with day trips, overnight trips, and cruises at minimal cost for anyone who wants to travel with us \u2014 there's no age or residency requirement. Trip packages include transportation, entertainment, and a trained escort, and most day trips include a meal.",
    programGroups: [
      {
        label: "Trip Books & Booking",
        items: [
          "Our Trip Book is published three times a year and mailed automatically to anyone who has traveled with us in the past year.",
          "Haven't traveled with us or lost your book? Send a $3 check to SCUCS for postage, or pick one up free at our office or community sites.",
          "Trips can be booked by calling or visiting the office, or through a reservation request on our website \u2014 not by voicemail or email.",
        ],
      },
      {
        label: "Payment & Cancellation",
        items: [
          "A deposit is due within a week of booking; the balance is due one month before the trip (two months for multi-day and New York/Broadway trips).",
          "Pay by check or credit card \u2014 SCUCS does not accept cash.",
          "Trips must be cancelled by speaking with a SCUCS representative directly.",
          "Trip insurance is highly recommended.",
        ],
      },
    ],
    notes: [
      "Proceeds from Travel & Tours help fund other agency services, including SEN-HAN Transit, in-home services, nutrition programs, and emergency services.",
      "Our trip offerings are updated regularly, so check back often for new destinations.",
    ],
    pickupLocation: {
      address: "537 Nicholson Road, Audubon, NJ 08106",
      addressNote: "Unless otherwise noted, all trips leave from the SCUCS office, opposite the Audubon Towers Senior Housing Complex.",
      directions: [
        {
          from: "From Route 295",
          text: "Proceed west on Route 168 (Black Horse Pike) to Nicholson Road. Turn right and continue to the SCUCS parking lot on the left, opposite Audubon Towers Senior Housing.",
        },
        {
          from: "From Berlin",
          text: "Proceed west on Route 30 (White Horse Pike) to Nicholson Road. Turn left and continue to the SCUCS parking lot on the right, just after the PSE&G complex and opposite Audubon Towers Senior Housing.",
        },
        {
          from: "From Cherry Hill",
          text: "Proceed south on Route 130. After crossing Collings Road, take the left exit onto Route 168 (Black Horse Pike). Continue to Nicholson Road (third light) and exit left; the SCUCS lot is on the left across from Audubon Towers Senior Housing.",
        },
        {
          from: "From Deptford",
          text: "Proceed north on Evesham Road. Turn left at the Black Horse Pike (Route 168) and continue to Nicholson Road. Turn right and continue to the SCUCS parking lot on the left, opposite Audubon Towers Senior Housing.",
        },
      ],
    },
    faqs: [
      {
        q: "Who can travel with SCUCS?",
        a: "Our trips are open to everyone \u2014 there's no age or residency requirement. Many trips are appropriate for the whole family.",
      },
      {
        q: "How do I book a trip?",
        a: "Trips can be booked by visiting or calling the office, or through a reservation request on our website. Trips cannot be booked by leaving a voicemail or sending an email.",
      },
      {
        q: "When is payment due, and how can I pay?",
        a: "A deposit is due within a week of booking. The balance is due one month before the trip (two months for multi-day and New York/Broadway trips). We accept check or credit card \u2014 not cash.",
      },
      {
        q: "How do I cancel a trip?",
        a: "Trips must be cancelled by speaking with a SCUCS representative directly \u2014 they cannot be cancelled by mail, email, or voicemail.",
      },
      {
        q: "Where do trips leave from?",
        a: "All trips leave from the SCUCS office at 537 Nicholson Road, Audubon, NJ 08106, unless otherwise noted.",
      },
      {
        q: "How often is the Trip Book published, and how do I get one?",
        a: "Trip books are published three times a year. If you've traveled with us in the past year, you'll automatically receive one. Otherwise, send a $3 check to cover postage, or pick one up free at our office or a community site.",
      },
      {
        q: "Should I get trip insurance?",
        a: "Trip insurance is highly recommended.",
      },
    ],
    contactNote: "Call (856) 456-1121, extension 1124, for current trip offerings and pricing.",
  },
];
