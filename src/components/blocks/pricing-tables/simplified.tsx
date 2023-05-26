"use client"

import { FC, useState } from "react"

import RichText from "@components/rich-text"
import CallToAction from "@components/call-to-action"
import { Page as PageType } from "@/src/payload-types"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "pricing-tables" }
>

const SimplifiedPricingTables: FC<Props> = function ({
  pricingPlans,
  priceDifference,
}) {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div>
      {/* Pricing toggle */}
      <div className="flex justify-center items-center space-x-4 sm:space-x-7 mb-16">
        <div className="text-sm !text-slate-500 font-medium text-right min-w-[8rem]">
          Pay Monthly
        </div>
        <div className="form-switch shrink-0">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={isAnnual}
            onChange={() => setIsAnnual(!isAnnual)}
          />
          <label className="bg-slate-700" htmlFor="toggle">
            <span
              className="bg-slate-300 border-8 border-slate-500"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Pay annually</span>
          </label>
        </div>
        {priceDifference && (
          <div className="text-sm !text-slate-500 font-medium min-w-[8rem]">
            Pay Yearly{" "}
            <span className="!text-emerald-500">({priceDifference}%)</span>
          </div>
        )}
      </div>

      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">
        {/* Pricing tables */}
        {pricingPlans.map((pricingPlan) => {
          if (typeof pricingPlan === "string") return null

          const {
            id,
            name,
            description,
            price,
            callToAction,
            mostPopular,
            featuresListText,
            coreFeatures,
          } = pricingPlan

          return (
            <div
              key={id}
              className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg"
              data-aos="fade-up"
            >
              {mostPopular && (
                <div className="absolute top-0 right-0 mr-6 -mt-4">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-4 pb-4 border-b border-slate-200">
                <div className="text-lg font-semibold text-slate-800 mb-1">
                  {name}
                </div>
                <div className="inline-flex items-baseline mb-3">
                  <span className="h3 font-medium !text-slate-500">$</span>
                  <span className="h2 leading-7 font-playfair-display !text-slate-800">
                    {isAnnual ? price.yearly : price.monthly}
                  </span>
                  <span className="font-medium text-slate-400">/mo</span>
                </div>
                <RichText
                  content={description}
                  attributes={{
                    p: {
                      className: "!text-slate-500",
                    },
                  }}
                />
              </div>

              <div className="text-slate-800 font-medium mb-3">
                {featuresListText}
              </div>
              <ul className="!text-slate-500 space-y-3 grow mb-6">
                {coreFeatures.map(({ id, feature }) => (
                  <li key={id} className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current !text-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {callToAction && (
                <div className="p-3 rounded bg-slate-50">
                  {/* <a
                    className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group"
                    href="#0"
                  >
                    Start free trial{" "}
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a> */}
                  <CallToAction callToAction={callToAction} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SimplifiedPricingTables
