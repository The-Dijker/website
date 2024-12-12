import Image from "next/image";
import { useTranslations } from "next-intl";

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

        <div className={"aspect-video min-h-72 max-w-xl grow"}>
          <div className={"aspect-video"}>
            <iframe
              className={"h-full w-full border-0"}
              src="https://www.youtube.com/embed/m3ZI0HB3BCs?si=_86lS5defprJyBGd"
              title="YouTube video player"
              frameBorder="0"
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
        className={"max-w-xl"}
        width={600}
        height={800}
      />
    </section>
  );
}
