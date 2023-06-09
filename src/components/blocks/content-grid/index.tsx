"use client"

import { FC } from "react"
import classNames from "classnames"

import Media from "@components/media"
import Padding from "@components/padding"
import RichText from "@components/rich-text"
import { Page as PageType } from "@/src/payload-types"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "content-grid" }
>

const ContentGrid: FC<Props> = function ({
  contents,
  contentAlignment,
  contentGridTextSize,
  lineDecoration,
  contentGridPadding,
}) {
  const textAlignment = {
    "text-left": contentAlignment === "left",
    "text-center": contentAlignment === "center",
  }

  return (
    <Padding padding={contentGridPadding} className="content-grid">
      <div
        className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none"
        data-aos-id-blocks
      >
        {lineDecoration && (
          <div
            className="absolute inset-0 -my-8 md:-my-12 pointer-events-none hidden md:flex"
            aria-hidden="true"
          >
            {new Array(4).fill(null).map((_, index) => (
              <div
                key={index}
                className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"
              />
            ))}
          </div>
        )}

        {contents.map(({ id, image, content, heading }, index) => {
          return (
            <div
              key={id}
              className={classNames("flex flex-col relative", {
                "items-center": contentAlignment === "center",
                "items-start": contentAlignment === "left",
              })}
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
              data-aos-delay={index * 100}
            >
              {image && (
                <Media
                  media={image}
                  type="image"
                  mediaProps={{
                    width: 64,
                    height: 64,
                    className: "w-16 h-16 mb-4",
                  }}
                />
              )}

              <h4
                className={classNames(
                  "h4 font-playfair-display mb-2",
                  textAlignment
                )}
              >
                {heading}
              </h4>
              {/* <p className="text-lg text-slate-500">
                {content}
              </p> */}
              <RichText
                content={content}
                attributes={{
                  shared: {
                    className: classNames(textAlignment),
                  },
                  p: {
                    className: classNames(
                      "flex flex-col gap-2 text-slate-500",
                      {
                        "text-base": contentGridTextSize === "small",
                        "text-lg": contentGridTextSize === "medium",
                        "text-xl": contentGridTextSize === "large",
                      }
                    ),
                  },
                }}
              />
            </div>
          )
        })}
      </div>
    </Padding>
  )
}

export default ContentGrid
