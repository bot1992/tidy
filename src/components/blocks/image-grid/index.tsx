"use client"

import { FC } from "react"
import classNames from "classnames"

import { Page as PageType } from "@/src/payload-types"
import Media from "@components/media"
import Padding from "@components/padding"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "image-grid" }
>

const ImageGrid: FC<Props> = function ({ images, imageGridPadding }) {
  return (
    <Padding padding={imageGridPadding} className="-ml-28 -mr-28">
      <div className="max-w-[1652px] mx-auto flex items-center space-x-2 md:space-x-4">
        {images.map(({ id, image }, index) => (
          <div
            key={id}
            className={classNames("relative", {
              "w-1/2": images.length === 2,
              "w-1/3": images.length === 3,
              "w-1/4": images.length === 4,
            })}
            data-aos={
              index === 0
                ? "fade-right"
                : index === images.length - 1
                ? "fade-left"
                : "fade"
            }
          >
            {/* <Image
            className="aspect-[3/2] object-cover"
            src={TeamImage01}
            width={540}
            height={360}
            alt="Team 01"
          /> */}
            <Media
              key={id}
              type="image"
              media={image}
              mediaProps={{
                width: 540,
                height: 360,
                className: "aspect-[3/2] object-cover",
                style: {
                  aspectRatio: "3/2",
                  objectFit: "cover",
                },
              }}
            />
            {(index === 0 || index === images.length - 1) && (
              <div
                className={classNames("absolute inset-0 from-slate-100", {
                  "bg-gradient-to-r": index === 0,
                  "bg-gradient-to-l": index === images.length - 1,
                })}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </Padding>
  )
}

export default ImageGrid
