import { FC, Fragment } from "react"
import classNames from "classnames"

import PageHero from "./hero"
// import Padding from "../padding"
import { Page as PageType } from "@/src/payload-types"
import ContentGrid from "../blocks/content-grid"
import Background from "../background"
import Padding from "../padding"
import TextContent from "../blocks/text-content"
import ImageTabs from "../blocks/image-tabs"
import Divide from "../blocks/divide"
import FeaturesList from "../blocks/features-list"
import StatsList from "../blocks/stats-list"
import PricingTables from "../blocks/pricing-tables"
import CallToAction from "../blocks/call-to-action"
import Media from "../blocks/media"
import ImageGrid from "../blocks/image-grid"
import EmployeesList from "../blocks/employees-list"
import CustomersList from "../blocks/customers-list"
import Banner from "../blocks/banner"
import FaqsList from "../blocks/faqs-list"
import TestimonialsList from "../blocks/testimonials-list"

type RenderBlocksProps = { contents: PageType["layout"] }

const blockComponents: { [key: string]: FC<any> } = {
  "content-grid": ContentGrid,
  "text-content": TextContent,
  "image-tabs": ImageTabs,
  divide: Divide,
  "features-list": FeaturesList,
  "stats-list": StatsList,
  "pricing-tables": PricingTables,
  "call-to-action": CallToAction,
  "media-block": Media,
  "image-grid": ImageGrid,
  "employees-list": EmployeesList,
  "customers-list": CustomersList,
  banner: Banner,
  "faqs-list": FaqsList,
  "testimonials-list": TestimonialsList,
}

const RenderBlocks: FC<RenderBlocksProps> = function ({ contents }) {
  return (
    <>
      {contents.map(
        ({
          id,
          layoutBlocks,
          basePadding,
          layout,
          retract,
          contentBackground,
          contentPadding,
        }) => {
          const hasBlocks =
            !!layoutBlocks &&
            Array.isArray(layoutBlocks) &&
            layoutBlocks.length >= 1

          if (hasBlocks) {
            return (
              <section
                key={id}
                className={classNames("relative", {
                  "-translate-y-1/2": retract,
                })}
              >
                <Background background={contentBackground} />

                <div
                  className={classNames("max-w-6xl mx-auto", {
                    "px-4 sm:px-6": basePadding,
                    "px-0": !basePadding,
                  })}
                >
                  <Padding
                    padding={contentPadding}
                    className={classNames({
                      "justify-between lg:justify-center flex-col lg:flex-row":
                        layout === "row",
                    })}
                  >
                    {layoutBlocks.map((block) => {
                      console.log(`${block.blockType}:  `, block)
                      const Block = blockComponents?.[block.blockType]

                      return !!Block ? (
                        <Block key={block.id} {...block} />
                      ) : (
                        <Fragment key={block.id}></Fragment>
                      )
                    })}
                  </Padding>
                </div>
              </section>
            )
          }

          return null
        }
      )}
    </>
  )
}

type RenderPageProps = {
  page: PageType
}

const RenderPage: FC<RenderPageProps> = async function ({
  page,
}: RenderPageProps) {
  return (
    <>
      <PageHero {...page} />
      {<RenderBlocks contents={page.layout} />}
    </>
  )
} as unknown as (props: RenderPageProps) => JSX.Element

export default RenderPage
