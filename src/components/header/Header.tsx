import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Header() {
  const t = useTranslations("header");
  //"header": {
  //     "home": "Home",
  //     "about": "The Dijker",
  //     "technique": "Technique",
  //     "creator": "Creator",
  //     "contact": "Contact"
  //   },
  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/technique", label: t("technique") },
    { href: "/creator", label: t("creator") },
    { href: "/contact", label: t("contact") },
  ];
  return (
    <header className={"bg-primary flex justify-between items-center px-12"}>
      <Image src={"/logo.webp"} alt={"Logo"} width={214} height={80} />

      <nav className={"flex"}>
        {navItems.map((item) => (
          <Link
            className={"text-white p-4 hover:opacity-80 font-semibold"}
            key={item.href}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
