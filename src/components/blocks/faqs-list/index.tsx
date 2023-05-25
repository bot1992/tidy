"use client"

import { FC } from "react"

import { Page as PageType } from "@/src/payload-types"
import Padding from "@components/padding"
import Accordion from "../../utils/accordion"
import RichText from "../../rich-text"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "faqs-list" }
>

const FaqsList: FC<Props> = function ({ faqs, faqsListPadding }) {
  return (
    <Padding padding={faqsListPadding} className="content-grid">
      <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
        {faqs.map((faq, index) => {
          if (typeof faq === "string") return null

          const { id, question, answer } = faq

          return (
            <Accordion key={id} title={question} active={index === 0}>
              <RichText content={answer} />
            </Accordion>
          )
        })}
      </ul>
    </Padding>
  )
}

export default FaqsList
