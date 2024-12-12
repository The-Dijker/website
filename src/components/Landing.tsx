import { useTranslations } from "next-intl";
import Image from "next/image";

export function Landing() {
  const t = useTranslations("landing");

  return (
    <section className={"space-y-20"}>
      <div className={"flex flex-wrap gap-20"}>
        <div className={"space-y-5"}>
          <h1 className={"text-5xl font-semibold"}>{t("title")}</h1>
          <p className={"max-w-md font-semibold"}>{t("section1")}</p>
          <p className={"max-w-md font-semibold text-text-secondary"}>
            {t("section2")}
          </p>
        </div>

        <div className={"aspect-video max-w-xl grow md:min-h-72"}>
          <div className={"aspect-video"}>
            <iframe
              className={"h-full w-full border-0"}
              src="https://www.youtube.com/embed/m3ZI0HB3BCs?si=_86lS5defprJyBGd"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <Image
        src={"/design.webp"}
        alt="design"
        className={"h-full w-full max-w-xl"}
        width={600}
        height={800}
      />
    </section>
  );
}
