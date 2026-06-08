import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaurya Manjkhola — Portfolio",
  description:
    "BITS Goa 2024–28 · Mathematics & Computing · ML enthusiast · Software developer · Competitive programmer",
  openGraph: {
    title: "Shaurya Manjkhola",
    description: "ML enthusiast · Software developer · Competitive programmer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
