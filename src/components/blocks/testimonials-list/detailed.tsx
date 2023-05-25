"use client"

import { FC, useState } from "react"
import classNames from "classnames"

import Media from "@components/media"
import RichText from "../../rich-text"
import { Page as PageType } from "@/src/payload-types"
import Modal from "../../utils/modal"
import Link from "next/link"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "testimonials-list" }
>

const DetailedTestimonialsList: FC<Props> = function ({ testimonials }) {
  const [activeVideo, setActiveVideo] = useState<any | null>(null)

  return (
    <>
      <div className="max-w-xl mx-auto md:max-w-none space-y-20">
        {testimonials.map((testimonial, index) => {
          if (typeof testimonial === "string") return null

          if (testimonial?.mediaType === "none") return null

          const {
            id,
            clientName,
            clientImage,
            clientRole,
            companyName,
            companyWebsite,
            testimonySummary,
            testimony,
            mediaType,
            media,
            videoThumbnail,
          } = testimonial
          const mediaIsImage = mediaType === "image"

          return (
            <div
              key={id}
              className={classNames(
                "flex flex-col-reverse",
                {
                  "md:flex-row-reverse md:space-x-reverse lg:space-x-reverse xl:space-x-reverse":
                    index % 2 === 0,
                  "md:flex-row": index % 2 !== 0,
                },
                "md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0"
              )}
            >
              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2
                  className={classNames(
                    "h3 md:text-4xl font-playfair-display",
                    {
                      "mb-4": !!testimonySummary,
                      "mb-8": !testimonySummary,
                    }
                  )}
                >
                  <Link
                    className="text-slate-800 hover:underline hover:decoration-blue-100"
                    href={companyWebsite ? `${companyWebsite}` : "/"}
                  >
                    {companyName}
                  </Link>
                </h2>
                {testimonySummary && (
                  <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                    {testimonySummary}
                  </p>
                )}
                <div className="space-y-3">
                  <svg
                    className="fill-blue-600"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                  >
                    <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                  </svg>
                  {/* <blockquote className="font-playfair-display text-slate-500 italic">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur e xcepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia.
                </blockquote> */}
                  <RichText
                    content={testimony}
                    attributes={{
                      blockquote: {
                        className:
                          "font-playfair-display text-slate-500 italic",
                      },
                    }}
                  />
                </div>
                <div className="flex items-center mt-4">
                  {/* <Link href="#0"> */}
                  {/* <Image
                    className="rounded-full shrink-0 mr-3"
                    src={CustomerAvatar01}
                    width="32"
                    height="32"
                    alt="Customer Avatar 01"
                  /> */}
                  <Media
                    type="image"
                    media={clientImage}
                    mediaProps={{
                      height: 32,
                      width: 32,
                      className: "rounded-full shrink-0 mr-3",
                    }}
                  />
                  {/* </Link> */}
                  <div className="font-medium">
                    <a
                      className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      {clientName}
                    </a>
                    <span className="text-slate-300"> · </span>
                    <span className="text-slate-500">
                      {clientRole}, {companyName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                className="flex justify-center items-center"
                data-aos="fade-right"
              >
                <div className="relative">
                  <div
                    className={classNames(
                      "absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-y-4 -z-10",
                      {
                        "-translate-x-4": index % 2 === 0,
                        "translate-x-4": index % 2 !== 0,
                      }
                    )}
                    aria-hidden="true"
                  ></div>
                  {/* <Image
                  className="mx-auto md:max-w-none"
                  src={Customers01}
                  width={540}
                  height={405}
                  alt="Customer 01"
                /> */}
                  <Media
                    type="image"
                    media={mediaIsImage ? media : videoThumbnail}
                    mediaProps={{
                      className: "mx-auto md:max-w-none",
                      height: 540,
                      width: 540,
                    }}
                  />
                </div>
                {!mediaIsImage && (
                  <button
                    className="absolute group"
                    onClick={() => setActiveVideo(media)}
                  >
                    <svg
                      className="w-16 h-16 fill-current sm:w-20 sm:h-20 group"
                      viewBox="0 0 88 88"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out"
                        cx="44"
                        cy="44"
                        r="44"
                      />
                      <path
                        className="text-blue-600"
                        d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {activeVideo && (
        <Modal
          id="modal"
          ariaLabel="modal-headline"
          show={!!activeVideo}
          handleClose={() => setActiveVideo(null)}
        >
          <div className="relative pb-9/16">
            <Media
              media={activeVideo}
              type="video"
              mediaProps={{
                className: "w-full aspect-video",
                width: "1920",
                height: "1080",
                loop: true,
                controls: true,
              }}
            />
          </div>
        </Modal>
      )}
    </>
  )
}

export default DetailedTestimonialsList
