import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "EnglishHub - Free English Learning Resources",
  description:
    "Discover curated websites, tools, and platforms to improve your English skills. Practice listening, grammar, vocabulary, and more for free.",
  keywords: [
    "english",
    "learning",
    "resources",
    "vocabulary",
    "grammar",
    "listening",
    "speaking",
    "writing",
    "pronunciation",
    "free"
  ],
  openGraph: {
    title: "EnglishHub - Free English Learning Resources",
    description:
      "Improve your English with curated tools and platforms. Grammar guides, listening exercises, and vocabulary builders all in one place.",
    url: "https://englishhubapp.com",
    siteName: "EnglishHub",
    images: [
      {
        url: "https://englishhubapp.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EnglishHub"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "EnglishHub - Free English Learning Resources",
    description:
      "Improve your English with curated tools and platforms. Grammar guides, listening exercises, and vocabulary builders all in one place.",
    images: ["https://englishhubapp.com/images/og-image.jpg"],
    creator: "@yourhandle"
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
