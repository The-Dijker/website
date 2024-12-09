import { getLocale, getMessages } from "next-intl/server";
import { Locale } from "@/i18n/routing";
import { LocaleSwitcherClient } from "@/components/i18n/LanguageSwitcherClient";

export async function LocaleSwitcher() {
  const locale = (await getLocale()) as Locale;
  const otherLocale = locale === "en" ? "nl" : "en";
  const otherLocaleTranslations = await getMessages({ locale: otherLocale });

  return (
    <LocaleSwitcherClient
      otherLocale={otherLocale}
      otherLocaleName={otherLocaleTranslations.language as string}
    />
  );
}
