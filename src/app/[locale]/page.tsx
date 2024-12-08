import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <main className={"space-y-5"}>
      <h1 className={"text-3xl"}>{t("title")}</h1>
      <p>{t("section1")}</p>
      <p>{t("section2")}</p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/m3ZI0HB3BCs?si=daGCnNEEwgGR0P8u"
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      />

      <Image
        src={"/design.webp"}
        alt="design"
        className={"max-w-xl"}
        width={600}
        height={800}
      />
    </main>
  );
}
