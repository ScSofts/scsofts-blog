import { ApplyChalkEffect } from "@/components/ChalkEffect";
import Link from "next/link";
import { navigator_links } from "@/components/NavBar/config";
import Image from "next/image";

export function NavBar() {
  return (
    <nav className="absolute left-0 right-0 top-0 w-[100vw] text-3xl">
      <ApplyChalkEffect className={"flex place-content-between pl-7 pr-7 pt-2"}>
        <Link href={"/"}>
          <Image src={"/favicon.png"} className={"w-12 h-12 border-cyan-600 border-2 hover:border-4 active:border-0"} alt={"Logo"}/>
        </Link>
        <ul
          className={
            "flex select-none space-x-5 text-pink-400 hover:[&_a]:text-pink-300 active:[&_a]:text-pink-500 [&_a]:underline underline-offset-4"
          }
        >
          {
            navigator_links.map(({ name, href, target }) => (
              <Link key={name} href={href} target={target ?? "_self"}>
                {name}
              </Link>
            ))
          }
        </ul>
      </ApplyChalkEffect>
    </nav>
  );
}
