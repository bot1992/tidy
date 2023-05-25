"use client"

import { FC } from "react"

import { Page as PageType } from "@/src/payload-types"
import Padding from "@components/padding"
import CallToAction from "../../call-to-action"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "call-to-action" }
>

const CallToActionBlock: FC<Props> = function ({
  callToAction,
  callToActionPadding,
}) {
  return (
    <Padding padding={callToActionPadding} className="w-fit mx-auto">
      <CallToAction callToAction={callToAction} />
    </Padding>
  )
}

export default CallToActionBlock
