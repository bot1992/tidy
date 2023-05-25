"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import HeroImage from "@/public/images/hero-image-01.jpg"
import Modal from "@components/utils/modal"

export default function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false)

  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Content */}
            <div
              className="text-center md:text-left md:min-w-[30rem]"
              data-aos="fade-right"
            >
              <h1 className="h1 font-playfair-display text-slate-100 mb-4">
                Create stunning web experiences
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group"
                    href="/request-demo"
                  >
                    Request Demo{" "}
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-slate-700 hover:bg-slate-800 w-full"
                    href="#0"
                  >
                    Explore Product
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div data-aos="fade-left">
              {/* Image */}
              <div className="flex justify-center items-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none border-2 border-slate-700 mt-3 ml-3 translate-x-4 translate-y-4 -z-10"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="mx-auto md:max-w-none"
                    src={HeroImage}
                    width={540}
                    height={405}
                    priority
                    alt="Hero"
                  />
                </div>
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
              </div>

              {/* Modal */}
              <Modal
                id="modal"
                ariaLabel="modal-headline"
                show={videoModalOpen}
                handleClose={() => setVideoModalOpen(false)}
              >
                <div className="relative pb-9/16">
                  <video
                    className="w-full aspect-video"
                    width="1920"
                    height="1080"
                    loop
                    controls
                  >
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
