"use client"

import { FC } from "react"

import { Page as PageType } from "@/src/payload-types"
import Padding from "../../padding"
import DetailedTestimonialsList from "./detailed"
import SimplifiedTestimonialsList from "./simplified"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "testimonials-list" }
>

const TestimonialsList: FC<Props> = function (props) {
  return (
    <Padding padding={props.testimonialsListPadding}>
      {props.testimonialsListDisplayStyle === "detailed" ? (
        <DetailedTestimonialsList {...props} />
      ) : (
        <SimplifiedTestimonialsList {...props} />
      )}
    </Padding>
  )
}

export default TestimonialsList
