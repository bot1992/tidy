"use client"

import { FC, useEffect, useRef, useState } from "react"
import { Transition } from "@headlessui/react"
import classNames from "classnames"

import Media from "@components/media"
import Padding from "@components/padding"
import RichText from "@components/rich-text"
import { Page as PageType } from "@/src/payload-types"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "image-tabs" }
>

const DetailedImageTabs: FC<Props> = function ({ tabs, leadText }) {
  const [activeTab, setActiveTab] = useState<number>(0)

  const activeTabRef = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (activeTabRef.current && activeTabRef.current.parentElement)
      activeTabRef.current.parentElement.style.height = `${activeTabRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()

    window.addEventListener("resize", heightFix)

    return () => window.removeEventListener("resize", heightFix)
  }, [])

  return (
    <div className="detailed max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-start md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
      {/* Tabs items (images) */}
      <div className="md:rtl md:w-5/12 lg:w-1/2 order-1 md:order-none">
        <div className="transition-all">
          <div
            className="relative flex flex-col"
            data-aos="fade-down"
            ref={activeTabRef}
          >
            {/* Items */}
            {tabs.map(({ id, tabImage }, index) => (
              <Transition
                key={id}
                show={activeTab === index}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 -translate-y-16"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-16"
                beforeEnter={() => heightFix()}
                unmount={false}
              >
                <div className="relative inline-flex flex-col">
                  {/* <Image
                    className="md:max-w-none mx-auto rounded"
                    src={FeaturesImage}
                    width={540}
                    height={620}
                    alt="Features home 2 01"
                    /> */}
                  <Media
                    type="image"
                    media={tabImage}
                    mediaProps={{
                      className: "md:max-w-none mx-auto rounded",
                      width: 540,
                      height: 620,
                    }}
                  />
                </div>
              </Transition>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="md:w-7/12 lg:w-1/2" data-aos="fade-up">
        <div className="mb-8 text-center md:text-left">
          {/* <h3 className="h3 text-slate-800 font-playfair-display mb-3">
            Built exclusively for you
          </h3>
          <p className="text-xl text-slate-500">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum — semper quis lectus
            nulla at volutpat diam ut venenatis.
          </p> */}
          <RichText
            content={leadText}
            attributes={{
              p: {
                className: classNames("text-xl text-slate-500", {
                  "mt-3": (leadText?.length ?? 0) >= 1,
                }),
              },
            }}
          />
        </div>

        {/* Tabs buttons */}
        <div className="mb-8 md:mb-0">
          {tabs.map(({ id, controlText, controlIcon }, index) => (
            <button
              key={id}
              className={`flex items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${
                activeTab !== index
                  ? "border-transparent opacity-50 hover:opacity-75"
                  : "border-2 border-blue-500 opacity-100"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setActiveTab(index)
              }}
            >
              {controlIcon && (
                <Media
                  type="image"
                  media={controlIcon}
                  mediaProps={{
                    height: 16,
                    width: 16,
                    className:
                      "w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4",
                  }}
                />
              )}

              {/* <div>
                <div className="text-slate-800 font-medium mb-1">
                  Internal Feedback
                </div>
                <div className="text-slate-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur velit.
                </div>
              </div> */}
              <RichText
                content={controlText}
                attributes={{
                  p: {
                    className: "flex flex-col items-start gap-1 text-slate-500",
                  },
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailedImageTabs
