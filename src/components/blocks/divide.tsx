import { FC } from "react"

import { Page as PageType } from "@/src/payload-types"
import classNames from "classnames"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "divide" }
>

const Divide: FC<Props> = ({ divideStyle, showOnlyOnLargeScreens }) => {
  return (
    <div
      className={classNames("mx-auto", {
        "w-full h-0 border-t border-slate-200": divideStyle === "horizontal",
        "w-0.5 h-12 bg-slate-200": divideStyle === "vertical",
        "hidden md:block": showOnlyOnLargeScreens,
      })}
      aria-hidden="true"
    />
  )
}

export default Divide
