"use client"

import { FC } from "react"

import { Page as PageType } from "@/src/payload-types"
import Padding from "@components/padding"
import SimplifiedImageTabs from "./simplified"
import DetailedImageTabs from "./detailed"

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
