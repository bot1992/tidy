"use client"

import { FC } from "react"

import Padding from "@components/padding"
import { Page as PageType } from "@/src/payload-types"
import DetailedStatsList from "./detailed"
import SimplifiedStatsList from "./simplified"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "stats-list" }
>

const StatsList: FC<Props> = function (props) {
  return (
    <Padding padding={props.statsListPadding}>
      {props.statsListDisplayStyle === "detailed" ? (
        <DetailedStatsList {...props} />
      ) : (
        <SimplifiedStatsList {...props} />
      )}
    </Padding>
  )
}

export default StatsList
