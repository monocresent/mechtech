import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import MegaNav from "@/components/MegaNav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mechtechnology.co.za"),
  title: {
    default: "MechTechnology | Engineering Components & Solutions",
    template: "%s | MechTechnology",
  },
  description:
    "MechTechnology — precision engineering components, development boards, and industrial hardware for the South African market. mechtechnology.co.za",
  openGraph: {
    title: "MechTechnology",
    description:
      "Precision engineering components and technical solutions for South African engineers and makers.",
    url: "https://mechtechnology.co.za",
    siteName: "MechTechnology",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "MechTechnology",
    description:
      "Precision engineering components and technical solutions. mechtechnology.co.za",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased bg-background text-foreground">
        <CartProvider>
          <UtilityBar />
          <Header />
          <MegaNav />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
