import { FC } from "react"
import Link from "next/link"

import PostDate from "@/src/components/post-date"
import Media from "@/src/components/media"
import { BlogPost as BlogPostType } from "@/src/payload-types"

type Props = {
  article: BlogPostType
}

const SinglePostHero: FC<Props> = function ({ article }) {
  const { image, title, readTime, publishedAt } = article

  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="w-full h-full" data-aos="fade">
          {/* <Image
            className="opacity-10 w-full h-full object-cover"
            src={PageHero}
            width={1440}
            height={497}
            alt="Hero"
          /> */}
          <Media
            type="image"
            media={image}
            mediaProps={{
              width: 1440,
              height: 497,
              className: "opacity-10 w-full h-full object-cover",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-28 md:pt-40 md:pb-36">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-center">
              <Link
                className="inline-flex font-semibold text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out group mb-2"
                href="/support"
                data-aos="fade-down"
              >
                <span className="tracking-normal text-blue-600 group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">
                  &lt;-
                </span>{" "}
                Back to Support
              </Link>
              <h1 className="h2 font-playfair-display text-slate-100 mb-4">
                {title}
              </h1>
            </div>
            <div className="text-slate-400" data-aos="fade-up">
              {readTime} read <span className="text-slate-600">·</span>{" "}
              <PostDate dateString={publishedAt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SinglePostHero
