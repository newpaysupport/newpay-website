export const locales = ['en', 'zi'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];
