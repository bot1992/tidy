"use client"

import { DetailedHTMLProps, FC, useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

type Props = {} & DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

const PageContainer: FC<Props> = function ({ children }) {
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
      <main className="grow">{children}</main>
    </div>
  )
}

export default PageContainer
