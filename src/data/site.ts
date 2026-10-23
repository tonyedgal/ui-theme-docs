export interface SiteLink {
  label: string
  href: string
}

export type BrandPresetKey = 'primary' | 'secondary'

export interface BrandPalette {
  background: string
  card?: string
  foreground: string
  muted: string
  mutedForeground?: string
  border: string
  accent: string
  accentForeground: string
  accent2?: string
  accent2Foreground?: string
  input?: string
  sidebar?: string
  ring: string
  sidebarActiveBg: string
  sidebarActiveText: string
}

export interface BrandConfig {
  light: BrandPalette
  dark: BrandPalette
}

export interface OgImageConfig {
  /** Background gradient start color (hex). Defaults to dark background from brand. */
  backgroundStart?: string
  /** Background gradient end color (hex). Defaults to dark muted from brand. */
  backgroundEnd?: string
  /** Accent color for top bar and decorative orbs (hex). Defaults to dark accent from brand. */
  accent?: string
  /** Title text color (hex). Defaults to dark foreground from brand. */
  titleColor?: string
  /** Description text color (hex). */
  descriptionColor?: string
  /** Group label text color (hex). Defaults to accent. */
  groupColor?: string
  /** Domain text shown in the bottom bar (e.g. "docs.example.com"). Defaults to THALLY_SITE_URL hostname. */
  domain?: string
  /** Logo text displayed in the bottom bar. Defaults to site name. */
  logoText?: string
  /** Google Font family for the title. Defaults to "Inter". */
  fontFamily?: string
  /** Google Font weight for the title. Defaults to "700". */
  fontWeight?: string
}

export interface AnalyticsConfig {
  /** Google Analytics measurement ID (e.g. "G-XXXXXXXXXX"). */
  googleAnalyticsId?: string
  /** Plausible domain (e.g. "docs.example.com"). */
  plausibleDomain?: string
  /** Plausible script URL. Defaults to "https://plausible.io/js/script.js". */
  plausibleScriptUrl?: string
  /** PostHog project API key. */
  posthogKey?: string
  /** PostHog API host. Defaults to "https://us.i.posthog.com". */
  posthogHost?: string
}

export interface DocVersion {
  /** Version label displayed in the switcher (e.g. "v2.0", "Latest"). */
  label: string
  /** URL for this version. Use "/" for the current site, or a full URL for older versions hosted elsewhere. */
  href: string
  /** Whether this is the currently active version. Exactly one should be true. */
  current?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  repoUrl: string
  links: Array<SiteLink>
  brand: BrandConfig
  brandPreset: BrandPresetKey
  brandPresets: Record<BrandPresetKey, BrandConfig>
  /** Configuration for dynamic OG image generation. All fields are optional and fall back to brand colors. */
  ogImage?: OgImageConfig
  /** Analytics provider configuration. Leave undefined to disable analytics. */
  analytics?: AnalyticsConfig
  /** Doc versions for the version switcher. Leave undefined or empty to hide the switcher. */
  versions?: Array<DocVersion>
}

const brandPresets: Record<BrandPresetKey, BrandConfig> = {
  // UI-Theme website palette (apps/ui-theme-web/app/global.css), converted from
  // OKLCH to sRGB hex. Accent uses the website's --primary-ink so links stay
  // readable on the near-white canvas; the mint --primary is kept for the ring.
  primary: {
    light: {
      background: '#FCFCFC',
      card: '#FCFCFC',
      foreground: '#171717',
      muted: '#EDEDED',
      mutedForeground: '#525252',
      border: '#DFDFDF',
      accent: '#007F46',
      accentForeground: '#FFFFFF',
      accent2: '#3B82F6',
      accent2Foreground: '#0B1220',
      input: '#DFDFDF',
      sidebar: '#FCFCFC',
      ring: '#72E3AD',
      sidebarActiveBg: '#EDEDED',
      sidebarActiveText: '#202020',
    },
    dark: {
      background: '#121212',
      card: '#171717',
      foreground: '#E2E8F0',
      muted: '#1F1F1F',
      mutedForeground: '#A2A2A2',
      border: '#292929',
      accent: '#50D492',
      accentForeground: '#1E2723',
      accent2: '#60A5FA',
      accent2Foreground: '#0B1220',
      input: '#242424',
      sidebar: '#121212',
      ring: '#4ADE80',
      sidebarActiveBg: '#313131',
      sidebarActiveText: '#FAFAFA',
    },
  },
  // Alternate preset — violet. Still a first-class, ready-to-use accent.
  secondary: {
    light: {
      background: '#FFFFFF',
      foreground: '#0F172A',
      muted: '#F5F3FF',
      border: '#E4E4F7',
      accent: '#8B5CF6',
      accentForeground: '#F5F3FF',
      ring: '#A855F7',
      sidebarActiveBg: '262 83% 90% / 0.5',
      sidebarActiveText: '#312E81',
    },
    dark: {
      background: '#070B14',
      foreground: '#EDE9FE',
      muted: '#141129',
      border: '#1C1A2C',
      accent: '#C084FC',
      accentForeground: '#0B1220',
      ring: '#C084FC',
      sidebarActiveBg: '262 45% 32% / 0.3',
      sidebarActiveText: '#EDE9FE',
    },
  },
}

const brandPreset: BrandPresetKey = 'primary'

const templateSiteConfig: SiteConfig = {
  name: 'Documentation',
  description:
    'Clear, task-focused guidance for building with the product.',
  repoUrl: '',
  links: [
    { label: 'Get started', href: '/installation' },
    { label: 'Changelog', href: '/changelog' },
  ],
  brand: brandPresets[brandPreset],
  brandPreset,
  brandPresets,
}

// Managed by Thally Cloud onboarding.
export const siteConfig: SiteConfig = {
  ...templateSiteConfig,
  name: "UI-Theme Docs",
  description: "Setup guides for UI-Theme on React, Vue, Nuxt, and React Native.",
  repoUrl: "https://github.com/tonyedgal/ui-theme-docs",
  links: [
    { label: "Get started", href: "/installation" },
    { label: "Support", href: "https://github.com/tonyedgal/ui-theme-docs/issues/new" },
    { label: "GitHub", href: "https://github.com/tonyedgal/ui-theme-docs" },
    { label: "Changelog", href: "/changelog" },
  ],
};
