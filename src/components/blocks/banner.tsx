"use client"

import { FC } from "react"
import classNames from "classnames"

import { Page as PageType } from "@/src/payload-types"
import Media from "@components/media"
import Padding from "@components/padding"
import RichText from "../rich-text"
import CallToAction from "../call-to-action"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "banner" }
>

const Banner: FC<Props> = function ({
  layout,
  shadowType,
  textContent,
  bannerCallToAction,
  tag,
  tagText,
  tagPosition,
  bannerPadding,
}) {
  const contentAlgnment =
    layout === "row"
      ? "justify-center lg:justify-between items-center"
      : "items-center justify-center"

  const textAlignment = {
    "text-center lg:text-left": layout === "row",
    "text-center": layout === "column",
  }

  return (
    <Padding padding={bannerPadding} className={classNames("banner", layout)}>
      <div
        className={classNames(
          "relative flex gap-4",
          contentAlgnment,
          {
            "flex-col": layout === "column",
            "flex-col lg:flex-row": layout === "row",
          },
          "bg-white p-6",
          {
            "shadow-lg": shadowType === "large",
            "shadow-md": shadowType === "medium",
            "shadow-sm": shadowType === "small",
          }
        )}
      >
        {tag && (
          <div
            className={classNames("absolute top-0 -mt-4", {
              "left-0": tagPosition === "left",
              "rigth-0": tagPosition === "right",
            })}
          >
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">
              {tagText}
            </div>
          </div>
        )}

        {/* <div className="h4 font-playfair-display text-center lg:text-left mb-4 lg:mb-0">
          Launched a business making less than $100K in revenue?
        </div> */}
        <RichText
          content={textContent}
          attributes={{
            shared: {
              className: classNames(textAlignment),
            },
            p: {
              className: classNames(
                "text-lg text-slate-400",
                (textContent?.length ?? 0) >= 1 ? "mt-4" : ""
              ),
            },
          }}
        />

        <div className="rounded bg-slate-50 p-3">
          {/* <a
            className="btn-sm text-white bg-blue-600 hover:bg-blue-700 group"
            href="#0"
          >
            Contact Us{" "}
            <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </a> */}
          <CallToAction callToAction={bannerCallToAction} />
        </div>
      </div>
    </Padding>
  )
}

export default Banner
