import { DetailedHTMLProps, FC, VideoHTMLAttributes } from "react"
import Image, { ImageProps } from "next/image"

import { Media as MediaType } from "../payload-types"

type Props = { media: MediaType | string } & (
  | {
      type: "video"
      mediaProps?: Omit<
        DetailedHTMLProps<
          VideoHTMLAttributes<HTMLVideoElement>,
          HTMLVideoElement
        >,
        "src"
      >
    }
  | {
      type: "image"
      mediaProps?: Partial<Pick<ImageProps, "alt">> &
        Omit<ImageProps, "src" | "alt">
    }
)

const Media: FC<Props> = ({ type, media, mediaProps: { ...props } }) => {
  if (typeof media === "string") return null

  const { mimeType, alt, url } = media

  if ((mimeType ?? "").includes("image") && type === "image") {
    const { alt: imageAlt } = media

    return (
      <Image
        src={`${process.env.NEXT_PUBLIC_CMS_URL}${url ?? ""}`}
        {...(props as Omit<ImageProps, "src">)}
        alt={imageAlt ?? alt}
      />
    )
  }

  if ((mimeType ?? "").includes("video") && type === "video") {
    return (
      <video
        {...(props as DetailedHTMLProps<
          VideoHTMLAttributes<HTMLVideoElement>,
          HTMLVideoElement
        >)}
      >
        <source
          src={`${process.env.NEXT_PUBLIC_CMS_URL}${url ?? ""}`}
          type="video/mp4"
        />
        {alt ?? "Your browser does not support the video tag."}
      </video>
    )
  }

  return null
}

export default Media
