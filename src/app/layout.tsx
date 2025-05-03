import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ThemeProvider } from "./_components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easymode Climb",
  description:
    "Easymode Climb is a League of Legends companion tool that recommends champions that are easy to play and strong in the current meta.",
  keywords: ["Easy champions", "League of legends", "Meta"],
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicons/icon0.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/favicons/icon1.png", sizes: "any", type: "image/png" },
    ],
    apple: "/favicons/apple-icon.png",
    other: [
      {
        rel: "icon",
        sizes: "192x192",
        url: "/favicons/web-app-manifest-192x192.png",
        type: "image/png",
      },
      {
        rel: "icon",
        sizes: "512x512",
        url: "/favicons/web-app-manifest-512x512.png",
        type: "image/png",
      },
    ],
  },

  metadataBase: new URL("https://easymode-climb.vercel.app/"),
  openGraph: {
    title: "Easymode Climb",
    description: "Easymode Climb find meta easy champions",
    url: "https://easymode-climb.vercel.app/",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Easymode Climb website",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#59168b" },
    { media: "(prefers-color-scheme: light)", color: "#59168b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Easymode Climb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-900 flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
