import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit } from 'next/font/google'
import { ConfigProvider, App as AntApp } from "antd";
import { theme } from "@/theme/themeConfig";
import "react-phone-input-2/lib/style.css";

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: "simple crypto checkout",
  description: "simple crypto checkout experience that can be embedded on any website (similar to Stripe Checkout but crypto-payment checkout).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConfigProvider theme={theme}>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={outfit.variable}
      >
        <AntApp>
        {children}
        </AntApp>
      </body>
      </ConfigProvider>
    </html>
  );
}
