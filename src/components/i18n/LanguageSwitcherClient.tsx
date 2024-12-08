"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Globe } from "lucide-react";

interface Props {
  otherLocale: Locale;
  otherLocaleName: string;
}

export function LocaleSwitcherClient({
  otherLocale,
  otherLocaleName,
}: Readonly<Props>) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function activateLocale(nextLocale: Locale) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale },
    );
  }

  return (
    <button
      className="mt-1 flex items-center gap-2 rounded-md p-2 text-white transition-colors hover:opacity-80"
      onClick={() => activateLocale(otherLocale)}
    >
      <Globe className="h-5 w-5" />
      <span className="-mt-[1px] text-sm font-semibold">{otherLocaleName}</span>
    </button>
  );
}
