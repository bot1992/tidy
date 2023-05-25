"use client"

import { DetailedHTMLProps, FC, useEffect } from "react"
import AOS from "aos"
import classNames from "classnames"

import { Header as HeaderType } from "@/src/payload-types"

import "aos/dist/aos.css"

import Header from "../ui/header"

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
    <main className={classNames("grow")}>
      <Header {...header} />

      {children}
    </main>
  )
}

export default PageContainer
