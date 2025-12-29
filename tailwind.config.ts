// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        // semibold 600, medium 500, bold 700
        title1: {
          bold: [
            "72px",
            {
              lineHeight: "90px",
              fontWeight: "700",
              letterSpacing: "-0.25%",
            },
          ],
          medium: [
            "72px",
            {
              lineHeight: "90px",
              fontWeight: "500",
              letterSpacing: "-0.25%",
            },
          ],
        },

        title2: {
          bold: [
            "48px",
            {
              lineHeight: "60px",
              fontWeight: "700",
            },
          ],
          medium: [
            "48px",
            {
              lineHeight: "60px",
              fontWeight: "500",
            },
          ],
        },

        title3: {
          bold: [
            "30px",
            {
              lineHeight: "36px",
              fontWeight: "700",
            },
          ],
        },

        title4: {
          semibold: [
            "22px",
            {
              lineHeight: "36px",
              fontWeight: "600",
            },
          ],
        },

        title5: {
          bold: [
            "20px",
            {
              lineHeight: "24px",
              fontWeight: "700",
            },
          ],
        },

        body1: {
          bold: [
            "18px",
            {
              lineHeight: "24px",
              fontWeight: "700",
            },
          ],
          medium: [
            "18px",
            {
              lineHeight: "24px",
              fontWeight: "500",
            },
          ],
        },

        body2: {
          semibold: [
            "15px",
            {
              lineHeight: "20px",
              fontWeight: "600",
            },
          ],
          medium: [
            "15px",
            {
              lineHeight: "20px",
              fontWeight: "500",
            },
          ],
        },

        caption: {
          regular: [
            "12px",
            {
              lineHeight: "18px",
            },
          ],
          medium: [
            "12px",
            {
              lineHeight: "18px",
              fontWeight: "500",
            },
          ],
          semibold: [
            "12px",
            {
              lineHeight: "18px",
              fontWeight: "600",
            },
          ],
          bold: [
            "12px",
            {
              lineHeight: "18px",
              fontWeight: "700",
            },
          ],
        },
      },

      colors: {},
    },
  },
  plugins: [],
};

export default config;
