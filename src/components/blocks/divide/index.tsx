import { FC } from "react"
import classNames from "classnames"

import { Page as PageType } from "@/src/payload-types"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "divide" }
>

const Divide: FC<Props> = ({ divideStyle, showOnlyOnLargeScreens }) => {
  return (
    <div
      className={classNames(
        "divide",
        {
          "w-full h-0 border-t border-slate-200": divideStyle === "horizontal",
          "w-0.5 h-12 bg-slate-200": divideStyle === "vertical",
          "hidden md:block": showOnlyOnLargeScreens,
        },
        "mx-auto"
      )}
      aria-hidden="true"
    />
  )
}

export default Divide
