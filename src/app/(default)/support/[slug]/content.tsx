import { FC } from "react"

import Post from "@/src/components/post"
import { BlogPost as BlogPostType } from "@/src/payload-types"

type LayoutType = BlogPostType["layout"]

type Props = {
  blocks: LayoutType
}

const Content: FC<Props> = function ({ blocks }) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-20 md:pb-16">
          <div className="max-w-3xl mx-auto">
            <Post blocks={blocks} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content
