import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

import Header from "@/features/header/header"
import { Providers } from "./providers/providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Infinity Blog",
  description: "My Infinity Blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} antialiased p-8 max-w-xl mx-auto`}
      >
        <Header />
        <main className="font-sans">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
