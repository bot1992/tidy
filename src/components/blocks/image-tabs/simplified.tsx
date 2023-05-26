"use client"

import { FC, useEffect, useRef, useState } from "react"
import { Transition } from "@headlessui/react"
import classNames from "classnames"

import Media from "@components/media"
import RichText from "@components/rich-text"
import { Page as PageType } from "@/src/payload-types"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "image-tabs" }
>

const SimplifiedImageTabs: FC<Props> = function ({ tabs }) {
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
    <div className="simplified max-w-3xl mx-auto">
      {/* Tabs buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12">
        {tabs.map(({ id, controlText, controlIcon }, index) => (
          <button
            key={id}
            className={classNames("text-center transition-opacity", {
              "opacity-50 hover:opacity-75": activeTab !== index,
            })}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab(index)
            }}
          >
            <div>
              {controlIcon && (
                <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                  <Media
                    type="image"
                    media={controlIcon}
                    mediaProps={{
                      height: 56,
                      width: 56,
                    }}
                  />
                </div>
              )}
              {/* <div className="md:text-lg leading-tight font-semibold text-slate-800">
                {controlText}
              </div> */}
              <RichText
                content={controlText}
                attributes={{
                  shared: {
                    className:
                      "md:text-lg leading-tight font-semibold text-slate-800",
                  },
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Tabs items */}
      <div className="transition-all">
        <div
          className="relative flex flex-col"
          data-aos="fade-up"
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
            >
              {/* <Image
                  className="mx-auto shadow-2xl"
                  src={FeaturesImage}
                  width={768}
                  height={474}
                  alt="Features home 01"
                /> */}
              <Media
                type="image"
                media={tabImage}
                mediaProps={{
                  width: 768,
                  height: 474,
                  className: "mx-auto shadow-2xl",
                }}
              />
            </Transition>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimplifiedImageTabs
