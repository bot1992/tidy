"use client"

import { FC } from "react"

import SimplifiedImageTabs from "./simplified"
import DetailedImageTabs from "./detailed"
import Padding from "@components/padding"
import { Page as PageType } from "@/src/payload-types"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "image-tabs" }
>

const ImageTabs: FC<Props> = function (props) {
  return (
    <Padding padding={props.imageTabsPadding} className="image-tabs">
      {props.displayStyle === "simplified" ? (
        <SimplifiedImageTabs {...props} />
      ) : (
        <DetailedImageTabs {...props} />
      )}
    </Padding>
  )
}

export default ImageTabs
