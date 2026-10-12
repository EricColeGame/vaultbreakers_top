export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    reddit?: string;
    website?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Vaultbreakers Wiki",
  shortName: "Vaultbreakers",
  logoText: "V",
  tagline: "Builds, Artifacts, Classes & Guides",
  description: "Complete Vaultbreakers Wiki covering builds, artifacts, classes, gameplay guides, PvE and PvPvE strategies, updates, and everything players need.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vaultbreakers.top",
  supportEmail: "support@vaultbreakers.top",
  gameUrl: "https://store.steampowered.com/app/306910/Vaultbreakers/",
  heroVideoId: "ZzP79NRjw1I", // Vaultbreakers Official Gameplay Trailer
  social: {
    discord: "https://discord.com/servers/vaultbreakers-710659351576182915",
    youtube: "https://www.youtube.com/@BetaDwarf",
    reddit: "https://www.reddit.com/r/Vaultbreakers/",
    website: "https://vaultbreakers.com/en",
  },
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
};
