"use client"

import { FC } from "react"

import Media from "@components/media"
import Padding from "@components/padding"
import MaxWidth from "@components/max-width"
import { Page as PageType } from "@/src/payload-types"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "media-block" }
>

const MediaBlock: FC<Props> = function ({
  media,
  mediaMaxWidth,
  mediaPadding,
}) {
  return (
    <Padding padding={mediaPadding}>
      <MaxWidth maxWidth={mediaMaxWidth}>
        {typeof media !== "string" ? (
          <Media
            type={media.mimeType?.includes("image") ? "image" : "video"}
            media={media}
            mediaProps={{
              width: media.width,
              height: media.height,
            }}
          />
        ) : null}
      </MaxWidth>
    </Padding>
  )
}

export default MediaBlock
