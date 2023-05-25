"use client"

import classNames from "classnames"
import { FC } from "react"

type Props = {
  categories: Array<string>
}

const BlogTags: FC<Props> = function ({ categories }) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full flex items-center justify-between space-x-10 overflow-x-scroll no-scrollbar py-5 border-b border-slate-100">
          <div className="w-full flex items-center justify-between space-x-10">
            <ul className="flex md:flex-wrap -mx-5 -my-2">
              {categories.map((category) => (
                <li className="mx-5 my-2">
                  <button
                    className={classNames(
                      "font-medium whitespace-nowrap text-slate-500 transition duration-150 ease-in-out",
                      "hover:text-slate-600"
                    )}
                    onClick={() => {
                      const className = category
                        .toLowerCase()
                        .replace(/\s/, "-")

                      document
                        .querySelector(`.${className}-posts`)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            <button className="p-1" aria-label="Search">
              <svg className="w-4 h-4 fill-slate-400" viewBox="0 0 16 16">
                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5ZM15.707 14.293 13.314 11.9a8.019 8.019 0 0 1-1.414 1.414l2.393 2.393a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogTags
