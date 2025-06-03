// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,njk,js}",
    "./src/_includes/**/*.{html,njk,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#323D67",
          50:  "#F4F5F9",
          100: "#E1E3ED",
          200: "#B2B6DE",
          300: "#8289CD",
          400: "#5E63BF",
          500: "#323D67",
          600: "#2B3154",
          700: "#1F2345",
          800: "#121436",
          900: "#090925"
        },
        gradientStart: "#7A3976",
        gradientEnd:   "#584F76",
        bgLight:       "#F4F4F4",
        bgOffWhite:    "#F2EEF1",
        cardGreen: {
          DEFAULT: "#DCFCE7",
          100:     "#E6FFF0",
          200:     "#CFFFE1"
        },
        cardRed: {
          DEFAULT: "#FFECEC",
          100:     "#FFF4F4",
          200:     "#FFE0E0"
        },
        cardPurple: {
          DEFAULT: "#F5F3FF",
          100:     "#EDEBFE"
        },
        cardYellow: {
          DEFAULT: "#FEF9E0",
          100:     "#FFFCEB"
        },
        accent: {
          DEFAULT: "#FF6B6B",
          light:   "#FF9E9E",
          dark:    "#C75050"
        },
        badgeGreen:      "#DCFCE7",
        progressBarBlue: "#373A80",
        statusGreen: {
          50:  "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B"
        },
        statusRed: {
          50:  "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D"
        },
        statusYellow: {
          50:  "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F"
        },
        tabBlue: {
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A"
        },
        textDark:   "#1F2937",
        textMedium: "#374151",
        textLight:  "#6B7280",
        textGray:   "#9CA3AF",
        borderLight:"#E5E7EB",
        divider:    "#D1D5DB"
      },
      spacing: {
        "7.5": "1.875rem",
        "18":  "4.5rem"
      },
      borderRadius: {
        xl:  "1rem",
        "2xl": "1.5rem"
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        inter: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
