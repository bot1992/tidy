import { FC } from "react"

import Media from "./media"
import RichText from "./rich-text"
import Separator from "./separator"
import { BlogPost as BlogPostType } from "@/src/payload-types"

type LayoutType = BlogPostType["layout"]

type Props = {
  blocks: LayoutType
}

const Post: FC<Props> = function ({ blocks }) {
  return (
    <article className="prose text-lg text-slate-500 max-w-none prose-lg prose-p:leading-normal prose-headings:font-playfair-display prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-slate-900 prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
      {blocks.map((block) => {
        if (block.blockType === "post-media") {
          const media = block.postMedia
          const caption = block?.caption

          return typeof media === "string" ? null : (
            <figure>
              <Media
                type="image"
                media={block.postMedia}
                mediaProps={{
                  width: media.width,
                  height: media.height,
                  className: "w-full",
                }}
              />

              {caption && (
                <figcaption className="text-sm text-center text-gray-500 mt-3">
                  {caption}
                </figcaption>
              )}
            </figure>
          )
        }

        if (block.blockType === "post-content") {
          return (
            <RichText content={block.postContent} addBaseClassNames={false} />
          )
        }

        if (block.blockType === "separator") return <Separator />

        return <></>
      })}
    </article>
  )
}

export default Post
