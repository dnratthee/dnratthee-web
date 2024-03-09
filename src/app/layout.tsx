import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";

const inter = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "DNRatthee",
  description: "DNRatthee's personal website",
  applicationName: "DNRatthee",
  authors: {
    name: "Ratthee Jarathbenjawong",
    url: "https://github.com/dnratthee/",
  },
  keywords: [
    "DNRatthee",
    "Ratthee Jarathbenjawong",
    "Personal website",
    "Web developer",
    "Full stack developer",
  ],
  icons: ["favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ` h-full`}>{children}</body>
    </html>
  );
}
