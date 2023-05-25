import { Inter, Playfair_Display } from "next/font/google"
import classNames from "classnames"

import Header from "../components/ui/header"
import { fetchHeader } from "../graphql"

import "./css/style.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = await fetchHeader()

  return (
    <html lang="en">
      <body
        className={classNames(
          inter.variable,
          playfair.variable,
          "bg-white font-inter antialiased text-slate-800 tracking-tight"
        )}
        suppressHydrationWarning={true}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header {...header} />

          {children}
        </div>
      </body>
    </html>
  )
}
