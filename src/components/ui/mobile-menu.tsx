"use client"

import { useState, useRef, useEffect, FC } from "react"
import { Transition } from "@headlessui/react"
import NextLink from "next/link"
import classNames from "classnames"

import { Header as HeaderType } from "@/src/payload-types"
import Link from "../link"

type Props = Pick<HeaderType, "links">

const MobileMenu: FC<Props> = function ({ links }) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-slate-900 dark:text-slate-100"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className={classNames({
                  "py-2 my-2 border-t border-b border-gray-200":
                    link.type === "multiple",
                })}
              >
                <Link
                  {...link}
                  dropdownLinksClassName="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2"
                  className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                  multipleDisplayStyle="list"
                  handleClick={() => setMobileNavOpen(false)}
                />
              </li>
            ))}

            <li>
              <NextLink
                href="/signin"
                className="flex font-medium w-full text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Sign in
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/request-demo"
                className="flex font-medium text-blue-600 py-2 group"
                onClick={() => setMobileNavOpen(false)}
              >
                Request Demo{" "}
                <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </NextLink>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}

export default MobileMenu
