"use client"

import { FC } from "react"

import { Page as PageType } from "@/src/payload-types"
import Padding from "@components/padding"
import RichText from "../rich-text"
import MaxWidth from "../max-width"
import classNames from "classnames"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "text-content" }
>

const TextContent: FC<Props> = function ({
  textContentPadding,
  textContentMaxWidth,
  content,
  decoration,
  width,
  contentPlacement,
  textAlignment,
  textSize,
}) {
  return (
    <Padding
      padding={textContentPadding}
      className={classNames("text-content")}
    >
      <MaxWidth
        maxWidth={textContentMaxWidth}
        className={classNames("relative", {
          "ml-auto mr-0": contentPlacement === "right",
          "mr-auto ml-0": contentPlacement === "left",
        })}
      >
        {decoration && (
          <div className="absolute right-0 -mt-4 -mr-1 fill-slate-300 hidden lg:block">
            <svg className="fill-slate-300" width="56" height="43">
              <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688"></path>
            </svg>
          </div>
        )}

        {/* <h2 className="h2 font-playfair-display text-slate-800 mb-4">
          Heading
        </h2>
        <p className="text-xl text-slate-768">
          Excepteur s474 occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </p> */}
        <RichText
          content={content}
          attributes={{
            p: {
              className: classNames("text-slate-500", {
                "text-lg": textSize === "small",
                "text-xl": textSize === "medium",
                "text-2xl": textSize === "large",
              }),
            },
            shared: {
              className: classNames({
                "text-left": textAlignment === "left",
                "text-center": textAlignment === "center",
                "text-right": textAlignment === "right",
              }),
            },
          }}
        />
      </MaxWidth>
    </Padding>
  )
}

export default TextContent
