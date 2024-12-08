"use client";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "@/i18n/routing";
import clsx from "clsx";

type NavItem = {
  href: string;
  label: string;
};

type MobileNavProps = {
  navItems: NavItem[];
};

export function MobileNavigation({ navItems }: Readonly<MobileNavProps>) {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        color="white"
        className="lg:hidden"
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
    </>
  );
}
