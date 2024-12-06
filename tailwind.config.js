/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "button-gradient": "linear-gradient(180deg, #2B87F6 0%, #28AEF2 100%)",
        backgroundBg: "url('/images/background.svg')",
        authBackground:
          "radial-gradient(at bottom center, #042052 0%, #020F20 100%)",
        authCardBg: "url('/images/authCardBg.png')",
        // modalBg: "#010A17",
        buttonBg:
          "linear-gradient(180deg, rgba(43,135,246,1) 50%, rgba(40,174,242,1) 100%)",
        appLayoutBg: "url('/images/layoutBg.webp')",
        inputBg:
          "linear-gradient(80deg, rgba(255,255,255,0.19) 0%, rgba(12,27,54,1) 60%)",
        sidebarBg:
          "linear-gradient(188deg, rgba(1,10,23,1) 60%, rgba(3,24,66,1) 100%)",
        sidebarFooterBg: "url('/images/sidebarFooterBg.png')",
        headerGradient:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)), linear-gradient(90deg, rgba(44, 131, 246, 0.2) 0%, rgba(37, 177, 242, 0.2) 51.44%, rgba(11, 23, 38, 0.2) 100%)",
        blueGradient: "linear-gradient(180deg, #2B87F6 0%, #28AEF2 100%)",
      },
      fontFamily: {
        parsi: ["Parsi", "sans-serif"],
        noto: ["Noto", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        xxs: "375px",
        smx: "400px",

        xsm: "450px",

        smxx: "550px",
        smmx: "600px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        smd: "700px",

        md: "768px",
        mdl: "815px",

        // => @media (min-width: 768px) { ... }
        mlg: "940px",
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xlg: "1130px", // Large devices (lg)
        xxlg: "1170px",
        xmlg: "1239px",
        xl: "1280px",
        xxl: "1364px",
        xxlg: "1408px",
        lxl: "1480px",
        mxl: "1614px",

        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "white-1": "rgba(255, 255, 255, 0.14)",
        fade: "#FFFFFF99",
        blue: "#25B1F2",
        standard: "#FFFFFF",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".gradient-border": {
          border: "1px solid",
          borderRadius: "8px",
          "border-image-source":
            "linear-gradient(101.03deg, #494949 2.75%, #02212F 84.27%, #313943 101.9%)",
          "border-image-slice": 1,
        },
        ".border-gradient": {
          border: "1px solid",
          borderImageSource:
            "linear-gradient(321.85deg, rgba(255, 255, 255, 0.36) -16.19%, rgba(255, 255, 255, 0.09) 13.11%, rgba(255, 255, 255, 0.012) 42.74%, rgba(255, 255, 255, 0.12) 75.78%, rgba(255, 255, 255, 0.36) 100%)",
        },
      });
    },
    require("tailwindcss-animate"),
  ],
};
