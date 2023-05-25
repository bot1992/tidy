"use client"

import { FC } from "react"

import { Page as PageType } from "@/src/payload-types"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "stats-list" }
>

const SimplifiedStatsList: FC<Props> = function ({ stats }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-blue-600 py-3 sm:py-6 shadow-xl">
          <ul className="flex">
            {stats.map(({ id, name, value }) => (
              <li
                key={id}
                className="relative w-1/3 px-1 text-center after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-px after:w-0.5 after:h-16 after:bg-blue-500 after:hidden sm:after:block last:after:hidden"
              >
                <div className="text-4xl md:text-5xl font-playfair-display font-bold text-white mb-2">
                  {value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-blue-200 font-medium">
                  {name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SimplifiedStatsList
