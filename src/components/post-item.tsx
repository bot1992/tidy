import Link from "next/link"
import Image from "next/image"
import PostDate from "@components/post-date"

import { BlogPost as BlogPostType } from "@/src/payload-types"
import { FC } from "react"
import Media from "./media"

const PostItem: FC<BlogPostType> = function ({
  id,
  slug,
  image,
  title,
  author,
  summary,
  publishedAt,
}) {
  return (
    <article className="h-full flex flex-col space-y-5" data-aos="fade-up">
      {image && (
        <Link className="block group overflow-hidden" href={`/blog/${slug}`}>
          {/* <img
            className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
            src={props.image}
            width={540}
            height={340}
            alt={props.title}
          /> */}
          <Media
            type="image"
            media={image}
            mediaProps={{
              alt: title,
              width: 540,
              height: 340,
              className:
                "w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out",
            }}
          />
        </Link>
      )}
      <div className="grow flex flex-col">
        <header>
          <h3 className="h4 font-playfair-display mb-3">
            <Link
              className="text-slate-800 hover:underline hover:decoration-blue-100"
              href={`/blog/${slug}`}
            >
              {title}
            </Link>
          </h3>
        </header>
        <p className="text-lg text-slate-500 grow">{summary}</p>
        <footer className="flex items-center mt-4">
          <a href="#0">
            {/* <Image
              className="rounded-full shrink-0 mr-3"
              src={props.authorImg}
              width={32}
              height={32}
              alt={props.author}
            /> */}
            {typeof author !== "string" && (
              <Media
                type="image"
                media={author.image}
                mediaProps={{
                  alt: author.name,
                  width: 32,
                  height: 32,
                  className: "rounded-full shrink-0 mr-3",
                }}
              />
            )}
          </a>
          <div>
            <a
              className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out"
              href="#0"
            >
              {typeof author === "string" ? author : author.name}
            </a>
            <span className="text-slate-300"> · </span>
            <span className="text-slate-500">
              <PostDate dateString={publishedAt} />
            </span>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default PostItem
