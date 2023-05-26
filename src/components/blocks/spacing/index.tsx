"use client"

import { FC } from "react"
import classNames from "classnames"

import spacingValues from "@/src/utils/spacing-values"
import { SpacingType } from "@/src/types"

type Props = {
  spacing: SpacingType
}

const Spacing: FC<Props> = function ({ spacing }) {
  const { top, left } = {
    top: spacing?.vertical ?? "",
    left: spacing?.horizontal ?? "",
  }

  const largeTopSpacing =
    top.large !== "none" ? `lg:mt-${spacingValues?.[top.large]}` : ""
  const largeLeftSpacing =
    left.large !== "none" ? `lg:ml-${spacingValues?.[left.large]}` : ""
  const smallTopSpacing =
    top.small !== "none" ? `mt-${spacingValues?.[top.small]}` : ""
  const smallLeftSpacing =
    left.small !== "none" ? `ml-${spacingValues?.[left.small]}` : ""

  return (
    <div
      className={classNames(
        largeTopSpacing,
        largeLeftSpacing,
        smallTopSpacing,
        smallLeftSpacing
      )}
    />
  )
}

export default Spacing
