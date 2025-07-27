import type React from "react"
import "./globals.css"
import { Manrope, EB_Garamond } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ['400', '500', '700'],
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: "Aysnc",
  description: "Simplicity is a super power.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${ebGaramond.variable} font-sans`}>{children}</body>
    </html>
  )
}
