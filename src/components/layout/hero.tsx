"use client"

import { FC, useState } from "react"
import classNames from "classnames"

import Media from "..//media"
import RichText from "../rich-text"
import CallToAction from "../call-to-action"
import Padding from "../padding"
import MaxWidth from "../max-width"
import Background from "../background"
import Modal from "../utils/modal"
import { Page as PageType } from "@/src/payload-types"

const PageHero: FC<PageType> = ({
  heroType,
  heroMaxWidth,
  heroBackground,
  heroMediaType,
  heroMedia,
  heroVideoThumbnail,
  heroContent,
  heroHeadingStyle,
  heroCallToAction,
  heroImageDecoration,
  heroPadding,
}) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const isVideoMedia = heroMediaType === "video"
  const layout: "row" | "column" =
    heroType === "minimal" || heroType === "contentAboveMedia"
      ? "column"
      : "row"
  const alignment = layout === "column" ? "justify-center" : "justify-between"
  const headingClassName =
    heroHeadingStyle === "serif" ? "font-playfair-display" : "font-inter"

  return (
    <section className="hero relative">
      {/* Dark background */}
      <Background background={heroBackground} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <MaxWidth maxWidth={heroMaxWidth} className="relative mx-auto">
          <Padding padding={heroPadding} className="w-full">
            {heroType === "minimal" ? (
              <div
                className={classNames(
                  "flex",
                  layout,
                  alignment,
                  "max-w-3xl mx-auto text-center"
                )}
              >
                <RichText
                  content={heroContent}
                  attributes={{
                    h1: {
                      className: classNames(
                        "font-playfair-display text-slate-100",
                        headingClassName
                      ),
                    },
                    p: {
                      className: classNames(
                        "text-xl text-slate-400",
                        (heroContent?.length ?? 0) >= 1 ? "mt-4" : ""
                      ),
                    },
                  }}
                />
              </div>
            ) : (
              <>
                {/* Hero content */}
                <div
                  className={classNames(
                    "flex",
                    layout,
                    alignment,
                    "w-full mx-auto"
                  )}
                >
                  {/* Content */}
                  <div
                    className="max-w-3xl text-center md:text-left md:min-w-[30rem] mx-auto"
                    data-aos="fade-right"
                  >
                    <RichText
                      content={heroContent}
                      attributes={{
                        h1: {
                          className: classNames(
                            "font-playfair-display text-slate-100",
                            headingClassName
                          ),
                        },
                        p: {
                          className: classNames(
                            "text-xl text-slate-400",
                            (heroContent?.length ?? 0) >= 1 ? "mt-4" : ""
                          ),
                        },
                      }}
                    />

                    {(heroCallToAction?.length ?? 0) >= 1 && (
                      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                        <CallToAction callToAction={heroCallToAction} />
                      </div>
                    )}
                  </div>

                  {/* Hero image */}
                  {heroMediaType === "image" ? (
                    <div
                      className="flex justify-center items-center"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <Media
                        media={heroMedia}
                        type="image"
                        mediaProps={{
                          width: 1024,
                          height: 576,
                          className: "mx-auto",
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full"
                      data-aos={
                        heroType === "contentAboveMedia"
                          ? "fade-up"
                          : "fade-left"
                      }
                    >
                      {/* Image */}
                      <div className="w-full flex justify-center items-center">
                        <div className="relative w-full">
                          {heroImageDecoration && (
                            <div
                              className="absolute inset-0 pointer-events-none border-2 border-slate-700 mt-3 ml-3 translate-x-4 translate-y-4 -z-10"
                              aria-hidden="true"
                            />
                          )}
                          <Media
                            media={
                              isVideoMedia && heroVideoThumbnail
                                ? heroVideoThumbnail
                                : heroMedia
                            }
                            type="image"
                            mediaProps={{
                              width: 540,
                              height: 405,
                              className: classNames(
                                {
                                  "w-full": layout === "column",
                                },
                                "mx-auto md:max-w-none"
                              ),
                            }}
                          />
                        </div>
                        {isVideoMedia && (
                          <button
                            className="absolute group"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              setVideoModalOpen(true)
                            }}
                            aria-controls="modal"
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
                      {/* Modal */}
                      {isVideoMedia && (
                        <Modal
                          id="modal"
                          ariaLabel="modal-headline"
                          show={videoModalOpen}
                          handleClose={() => setVideoModalOpen(false)}
                        >
                          <div className="relative pb-9/16">
                            <Media
                              media={heroMedia}
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
                    </div>
                  )}
                </div>
              </>
            )}
          </Padding>
        </MaxWidth>
      </div>
    </section>
  )
}

export default PageHero
