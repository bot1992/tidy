"use client"

import { FC } from "react"

import { Page as PageType } from "@/src/payload-types"
import Padding from "@components/padding"
import DetailedPricingTables from "./detailed"
import SimplifiedPricingTables from "./simplified"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "pricing-tables" }
>

const PricingTables: FC<Props> = function (props) {
  return (
    <Padding padding={props.pricingTablesPadding}>
      {props.pricingTablesDisplayStyle === "detailed" ? (
        <DetailedPricingTables {...props} />
      ) : (
        <SimplifiedPricingTables {...props} />
      )}
    </Padding>
  )
}

export default PricingTables
