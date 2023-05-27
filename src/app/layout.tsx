import "./css/style.css"
import "./css/additional-styles/spacing.scss"

import { Inter, Playfair_Display } from "next/font/google"
import classNames from "classnames"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "auto",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "auto",
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
