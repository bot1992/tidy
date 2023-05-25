"use client"

import "aos/dist/aos.css"

import { DetailedHTMLProps, FC, useEffect } from "react"
import { Inter, Playfair_Display } from "next/font/google"
import AOS from "aos"
import classNames from "classnames"

import Header from "../ui/header"
import { Header as HeaderType } from "@/src/payload-types"

type Props = {
  header: HeaderType
} & DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

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

const PageContainer: FC<Props> = function ({ header, children }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    })
  })

  return (
    <div
      className={classNames(
        "flex flex-col min-h-screen overflow-hidden",
        inter.variable,
        playfair.variable
      )}
    >
      <Header {...header} />

      <main className={classNames("grow")}>{children}</main>
    </div>
  )
}

export default PageContainer
