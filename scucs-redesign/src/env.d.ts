/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
  readonly PUBLIC_FORMSPREE_LANDLORD_FUND_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
