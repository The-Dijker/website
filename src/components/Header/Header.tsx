import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LocaleSwitcher } from "@/components/i18n/LanguageSwitcher";
import { MobileNavigation } from "@/components/Header/MobileNavigation";

export function Header() {
  const t = useTranslations("header");

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/technique", label: t("technique") },
    { href: "/creator", label: t("creator") },
    { href: "/investors", label: t("invest") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="relative z-10 flex items-center justify-between bg-primary px-4 md:px-12">
      <Image src="/logo.webp" alt="Logo" width={214} height={80} />

      <div className="hidden items-center lg:flex">
        {/* Desktop Navigation */}
        <nav className="">
          {navItems.map((item) => (
            <Link
              className="p-4 font-semibold text-white hover:opacity-80"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LocaleSwitcher />
      </div>

      <MobileNavigation
        navItems={navItems}
        localeSwitcher={<LocaleSwitcher textClassName={"text-2xl"} />}
      />
    </header>
  );
}
