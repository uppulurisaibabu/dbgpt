import type { Metadata } from "next"
import { DM_Sans as Sans, PT_Serif as Serif } from 'next/font/google'
import "./globals.css"

const sans = Sans({ subsets: ["latin"], variable: "--font-sans" })
const serif = Serif({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Ratio Fellowship - Scale Your SaaS Through Profitable Ads",
  description: "We create a predictable, profitable, and scalable customer acquisition system for your SaaS startup using paid ads.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}


