import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import TailwindScrollbar from "tailwind-scrollbar";

export default {
  mode: "jit",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    TailwindScrollbar({ nocompatible: true }),
  ],
} satisfies Config;
