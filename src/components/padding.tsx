"use client"

import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import classNames from "classnames"

import spacingValues from "../utils/spacing-values"
import { Page as PageType } from "@/src/payload-types"

type Props = {
  padding: Partial<Required<PageType["heroPadding"]>>
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Padding: FC<Props> = ({ padding, className, children, ...props }) => {
  const { top, bottom, left, right } = {
    top: padding?.top ?? "",
    bottom: padding?.bottom ?? "",
    left: padding?.left ?? "",
    right: padding?.right ?? "",
  }

  const topPadding = top !== "none" ? `pt-${spacingValues?.[top]}` : ""
  const bottomPadding = bottom !== "none" ? `pb-${spacingValues?.[bottom]}` : ""
  const leftPadding = left !== "none" ? `pl-${spacingValues?.[left]}` : ""
  const rightPadding = right !== "none" ? `pr-${spacingValues?.[right]}` : ""

  return (
    <div
      className={classNames(
        className,
        topPadding,
        bottomPadding,
        leftPadding,
        rightPadding
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Padding
