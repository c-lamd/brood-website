import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const erotique = localFont({
  src: "../../public/fonts/Erotique-Regular.otf",
  variable: "--font-erotique",
  weight: "100 900",
});

const erotiqueBold = localFont({
  src: "../../public/fonts/Erotique-Bold.otf",
  variable: "--font-erotique-bold",
  weight: "100 900",
});

const erotiqueMedium = localFont({
  src: "../../public/fonts/Erotique-Medium.otf",
  variable: "--font-erotique-medium",
  weight: "100 900",
});

const erotiqueSans = localFont({
  src: "../../public/fonts/Erotique-Sans-Regular.otf",
  variable: "--font-erotique-sans",
  weight: "100 900",
});

const erotiqueSansBold = localFont({
  src: "../../public/fonts/Erotique-Sans-Bold.otf",
  variable: "--font-erotique-sans-bold",
  weight: "100 900",
});

const erotiqueSansMedium = localFont({
  src: "../../public/fonts/Erotique-Sans-Medium.otf",
  variable: "--font-erotique-sans-medium",
  weight: "100 900",
});

const erotiqueSansAlt = localFont({
  src: "../../public/fonts/Erotique-Sans-Alternate-Regular.otf",
  variable: "--font-erotique-sans-alt",
  weight: "100 900",
});

const erotiqueSansAltBold = localFont({
  src: "../../public/fonts/Erotique-Sans-Alternate-Bold.otf",
  variable: "--font-erotique-sans-alt-bold",
  weight: "100 900",
});

const erotiqueSansAltMedium = localFont({
  src: "../../public/fonts/Erotique-Sans-Alternate-Medium.otf",
  variable: "--font-erotique-sans-alt-medium",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brood Coffee",
  description: "Specialty coffee, expertly crafted with unique honeys. Plus, a listening bar inspired by Japan's best - all about quality, craft, and good vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${erotique.variable} ${erotiqueBold.variable} ${erotiqueMedium.variable} ${erotiqueSans.variable} ${erotiqueSansMedium.variable} ${erotiqueSansBold.variable} ${erotiqueSansAlt.variable} ${erotiqueSansAltBold.variable} ${erotiqueSansAltMedium.variable} antialiased px-4 md:px-[50px]`}
      >
        {children}
      </body>
    </html>
  );
}
