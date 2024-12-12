"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Globe } from "lucide-react";
import clsx from "clsx";

interface Props {
  textClassName?: string;
  otherLocale: Locale;
  otherLocaleName: string;
}

export function LocaleSwitcherClient({
  otherLocale,
  otherLocaleName,
  textClassName,
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
      className={clsx(
        textClassName,
        "flex items-center gap-2 rounded-md p-2 font-semibold text-white transition-colors hover:opacity-80",
      )}
      onClick={() => activateLocale(otherLocale)}
    >
      <Globe className="mt-px h-5 w-5" />
      <span className="-mt-[1px] text-sm font-semibold">{otherLocaleName}</span>
    </button>
  );
}
