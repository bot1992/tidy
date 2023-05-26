"use client"

import { FC } from "react"

import DetailedTestimonialsList from "./detailed"
import SimplifiedTestimonialsList from "./simplified"
import Padding from "@components/padding"
import { Page as PageType } from "@/src/payload-types"

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
