"use client"

import "aos/dist/aos.css"

import { DetailedHTMLProps, FC, useEffect } from "react"
import AOS from "aos"
import classNames from "classnames"

import Header from "../ui/header"
import { Header as HeaderType } from "@/src/payload-types"

type Props = {
  header: HeaderType
} & DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

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
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header {...header} />

      <main className={classNames("grow")}>{children}</main>
    </div>
  )
}

export default PageContainer
