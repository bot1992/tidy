"use client"

import { FC } from "react"

import { Page as PageType } from "@/src/payload-types"
import Tooltip from "@components/utils/tooltip"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "pricing-tables" }
>

const DetailedPricingTables: FC<Props> = function ({
  pricingPlans,
  detailedFeatures,
}) {
  return (
    <div className="w-full max-w-6-xl mx-auto">
      {/* Table */}
      <div className="overflow-x-auto" data-aos="fade-up">
        {!pricingPlans.some((plan) => typeof plan === "string") && (
          <table className="table-auto w-full border-b border-slate-200">
            {/* Table header */}
            <thead>
              <tr className="text-base sm:text-lg text-slate-800">
                <th className="text-xl md:text-2xl whitespace-nowrap font-bold font-playfair-display text-left pr-2 py-4 min-w-[10rem] md:min-w-[24rem]">
                  Tidy Essential
                </th>

                {/* <th className="text-bold text-center px-2 py-4">Essential</th>
                <th className="text-bold text-center px-2 py-4">Premium</th>
                <th className="text-bold text-center px-2 py-4">Advanced</th> */}
                {pricingPlans.map((plan) => {
                  return typeof plan === "string" ? null : (
                    <th
                      key={plan.id}
                      className="text-bold text-center px-2 py-4"
                    >
                      {plan.name}
                    </th>
                  )
                })}
              </tr>
            </thead>

            <tbody>
              {/* Row */}
              <tr className="border-t first:border-t-2 border-slate-200">
                <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                  <div className="flex items-center justify-between max-w-xs">
                    <div>Monthly fees</div>
                    {/* Tooltip */}
                    <Tooltip>
                      <div className="text-xs text-slate-100">
                        Keep team shipping simple and take control of your
                        company.
                      </div>
                    </Tooltip>
                  </div>
                </td>

                {/* <td className="text-sm px-2 py-4 text-center italic text-slate-800"></td>
                <td className="text-sm px-2 py-4 text-center italic text-slate-800">
                  $79/mo
                </td>
                <td className="text-sm px-2 py-4 text-center italic text-slate-800">
                  $129/mo
                </td> */}
                {pricingPlans.map((plan) => {
                  return typeof plan === "string" ? null : (
                    <td
                      key={plan.id}
                      className="text-sm px-2 py-4 text-center italic text-slate-800"
                    >
                      ${plan.price.monthly}/mo
                    </td>
                  )
                })}
              </tr>

              {detailedFeatures.map((feature, index) => {
                const { featureName, tag, planSpecs } = feature

                return (
                  <tr
                    key={index}
                    className="border-t first:border-t-2 border-slate-200"
                  >
                    <td className="text-sm sm:text-base font-medium text-slate-800 pr-2 py-4">
                      <div className="flex items-center justify-between max-w-xs">
                        <div className="flex items-center space-x-2">
                          <div>{featureName}</div>
                          {!!tag && (
                            <div className="inline-flex text-xs font-semibold py-px px-2 text-emerald-700 bg-emerald-200 rounded-full">
                              {tag}
                            </div>
                          )}
                        </div>

                        {/* Tooltip */}
                        <Tooltip>
                          <div className="text-xs text-slate-100">
                            Keep team shipping simple and take control of your
                            company.
                          </div>
                        </Tooltip>
                      </div>
                    </td>

                    {/* <td className="text-sm px-2 py-4 text-center italic text-slate-800"></td>
                      <td className="text-sm px-2 py-4 text-center italic text-slate-800">
                        $79/mo
                      </td>
                      <td className="text-sm px-2 py-4 text-center italic text-slate-800">
                        $129/mo
                      </td> */}

                    {pricingPlans.map((plan) => {
                      const spec =
                        planSpecs.find(
                          (spec) =>
                            (spec.pricingPlan as any)?.id === (plan as any)?.id
                        ) ?? null
                      const specDetails = spec?.featureSpecs?.specDetails
                      const planIncludesFeature =
                        spec?.featureSpecs?.includesFeature

                      return (
                        <td
                          key={spec?.id}
                          className="text-sm px-2 py-4 text-center italic text-slate-800"
                        >
                          {!!specDetails ? (
                            specDetails
                          ) : planIncludesFeature ? (
                            <svg
                              className="w-3 h-3 fill-current text-emerald-500 inline-flex"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                          ) : (
                            <></>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default DetailedPricingTables
