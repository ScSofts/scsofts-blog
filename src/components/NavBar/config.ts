import { config } from "@/config";

export const navigator_links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "TimeLine",
    href: "/time-line",
  },
  {
    name: 'Category',
    href: '/category'
  },
  {
    name: "Github",
    href: config.github,
    target: "_blank",
  },
  {
    name: "About",
    href: "/about",
  },
];
