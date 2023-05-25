import { Inter, Playfair_Display } from "next/font/google"
import classNames from "classnames"

import "./css/style.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.variable,
          playfair.variable,
          "font-inter bg-white antialiased text-slate-800 tracking-tight"
        )}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
