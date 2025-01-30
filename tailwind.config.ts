import type { Config } from "tailwindcss";
import noscrollbar from "tailwind-scrollbar-hide";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#110F1A",
        foreground: "var(--foreground)",
        formWraperColor: "#1A1A2D",
        formInputColor: "#303054",
        customBorderColor: "#52528E",
      },
    },
  },
  plugins: [noscrollbar],
} satisfies Config;
