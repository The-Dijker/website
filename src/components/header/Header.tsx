"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";

export function Header() {
  const t = useTranslations("header");
  const [opened, { toggle, close }] = useDisclosure(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/technique", label: t("technique") },
    { href: "/creator", label: t("creator") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="relative z-10 flex items-center justify-between bg-primary px-4 md:px-12">
      <Image src="/logo.webp" alt="Logo" width={214} height={80} />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
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

      {/* Mobile Navigation */}
      <Burger
        opened={opened}
        onClick={toggle}
        color="white"
        className="md:hidden"
      />

      <div
        className={clsx(
          "absolute left-0 top-0 h-screen w-screen bg-primary",
          "-z-10 transition-all duration-100 ease-in-out",
          opened
            ? "translate-y-20 opacity-100"
            : "pointer-events-none translate-y-16 opacity-0",
        )}
      >
        <div className="flex min-h-screen flex-col bg-primary">
          {navItems.map((item) => (
            <Link
              className="p-6 text-center text-2xl font-semibold text-white hover:opacity-80"
              key={item.href}
              href={item.href}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
