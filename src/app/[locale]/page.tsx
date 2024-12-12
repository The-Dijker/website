import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Features } from "@/components/Features/Features";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className={"mx-auto w-full max-w-screen-2xl space-y-20 p-20"}>
      <div>
        <h1>{t("title")}</h1>
        <Link href="/about">{t("about")}</Link>
      </div>
      <Features />
    </main>
  );
}
