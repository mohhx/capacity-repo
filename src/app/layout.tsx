import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/content/site";
import { CountryProvider } from "@/components/layout/CountryProvider";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteChrome } from "@/components/layout/SiteChrome";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name}: ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
};

export const viewport: Viewport = {
  themeColor: "#040d14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CountryProvider>
          <SiteChrome
            top={
              <>
                <AnnouncementBar />
                <Header />
              </>
            }
            bottom={<Footer />}
          >
            {children}
          </SiteChrome>
        </CountryProvider>
      </body>
    </html>
  );
}