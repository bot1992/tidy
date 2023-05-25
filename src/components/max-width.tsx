"use client"

import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import classNames from "classnames"

import maxWidthValues from "../utils/max-width-values"
import { Page as PageType } from "@/src/payload-types"

type Props = {
  maxWidth: PageType["heroMaxWidth"]
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const MaxWidth: FC<Props> = ({
  maxWidth,
  className,
  style,
  children,
  ...props
}) => {
  const maxWidtHValue = maxWidthValues?.[maxWidth] ?? "max-w-3xl"

  return (
    <div className={classNames(className, maxWidtHValue, "mx-auto")} {...props}>
      {children}
    </div>
  )
}

export default MaxWidth
