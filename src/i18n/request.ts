import { Locale, locales, routing } from "@/i18n/routing";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const localeMessages = await import(`../../messages/${locale}.json`);
  const fallbackMessages = await import(
    `../../messages/${routing.defaultLocale}.json`
  );

  // Only merge fallback messages in production. In development, we want to see the missing messages.
  const messages =
    process.env.NODE_ENV !== "development"
      ? { ...fallbackMessages.default, ...localeMessages.default }
      : localeMessages.default;

  return {
    locale,
    messages,
  };
});
