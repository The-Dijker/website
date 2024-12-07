import Image from "next/image";

export function Header() {
  return (
    <header>
      <Image src={"/logo"} alt={"logo"} width={267} height={100} />
    </header>
  );
}
