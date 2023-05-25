"use client"

import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import classNames from "classnames"

import spacingValues from "../utils/spacing-values"
import useWindowDimensions from "../hooks/use-window-dimensions"
import { Page as PageType } from "@/src/payload-types"

type Props = {
  padding: Partial<Required<PageType["heroPadding"]>>
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Padding: FC<Props> = ({
  padding,
  className,
  style,
  children,
  ...props
}) => {
  const { width } = useWindowDimensions()

  const { top, bottom, left, right } = {
    top: padding?.top ?? "none",
    bottom: padding?.bottom ?? "none",
    left: padding?.left ?? "none",
    right: padding?.right ?? "none",
  }

  const defaultValue = {
    sm: 0,
    def: 0,
  }
  const topPaddingValue = spacingValues?.[top] ?? defaultValue
  const bottomPaddingValue = spacingValues?.[bottom] ?? defaultValue
  const leftPaddingValue = spacingValues?.[left] ?? defaultValue
  const rightPaddingValue = spacingValues?.[right] ?? defaultValue

  return (
    <div
      className={classNames(className)}
      style={
        width >= 720
          ? {
              paddingTop: `${topPaddingValue.def / 4}rem`,
              paddingBottom: `${bottomPaddingValue.def / 4}rem`,
              paddingLeft: `${leftPaddingValue.def / 4}rem`,
              paddingRight: `${rightPaddingValue.def / 4}rem`,
              ...style,
            }
          : {
              paddingTop: `${topPaddingValue.sm / 4}rem`,
              paddingBottom: `${bottomPaddingValue.sm / 4}rem`,
              paddingLeft: `${leftPaddingValue.sm / 4}rem`,
              paddingRight: `${rightPaddingValue.sm / 4}rem`,
              ...style,
            }
      }
      {...props}
    >
      {children}
    </div>
  )
}

export default Padding
