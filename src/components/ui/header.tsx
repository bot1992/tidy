import { FC, Fragment } from "react"
import NextLink from "next/link"

import Logo from "./logo"
import MobileMenu from "./mobile-menu"
import Link from "../link"
import { Header as HeaderType } from "@/src/payload-types"

type Props = { mode?: string } & Pick<HeaderType, "links">

const Header: FC<Props> = function ({ mode = "dark", links }) {
  return (
    <header className={`absolute w-full z-30 ${mode !== "light" && "dark"}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              {links.map(({ id, link }) => (
                <Fragment key={id}>
                  <Link
                    {...link}
                    dropdownLinksClassName="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                    className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  />
                </Fragment>
              ))}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <NextLink
                  href="/signin"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="/request-demo"
                  className="font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group"
                >
                  Request Demo{" "}
                  <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </NextLink>
              </li>
            </ul>
          </nav>

          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  )
}

export default Header
