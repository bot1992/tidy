"use client"

import { FC } from "react"

import useWindowDimensions from "@/src/hooks/use-window-dimensions"
import spacingValues from "@/src/utils/spacing-values"
import { SpacingType } from "@/src/types"

type Props = {
  spacing: SpacingType
}

const Spacing: FC<Props> = function ({ spacing }) {
  const { width } = useWindowDimensions()

  const smallHorizontalSpacingValue = spacingValues?.[
    spacing?.horizontal?.small
  ] ?? { def: "0", sm: "0" }
  const largeHorizontalSpacingValue = spacingValues?.[
    spacing?.horizontal?.large
  ] ?? { def: "0", sm: "0" }
  const smallVerticalSpacingValue = spacingValues?.[
    spacing?.vertical?.small
  ] ?? { def: "0", sm: "0" }
  const largeVerticalSpacingValue = spacingValues?.[
    spacing?.vertical?.large
  ] ?? { def: "0", sm: "0" }

  return (
    <div
      style={
        width >= 1024
          ? {
              marginTop: `${largeVerticalSpacingValue.def / 4}rem`,
              marginLeft: `${largeHorizontalSpacingValue.def / 4}rem`,
            }
          : width >= 720
          ? {
              marginTop: `${smallVerticalSpacingValue.def / 4}rem`,
              marginLeft: `${smallHorizontalSpacingValue.def / 4}rem`,
            }
          : {
              marginTop: `${smallVerticalSpacingValue.sm / 4}rem`,
              marginLeft: `${smallHorizontalSpacingValue.sm / 4}rem`,
            }
      }
    />
  )
}

export default Spacing
