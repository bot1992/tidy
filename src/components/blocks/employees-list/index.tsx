"use client"

import { FC } from "react"

import Media from "@components/media"
import Padding from "@components/padding"
import { Page as PageType } from "@/src/payload-types"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "employees-list" }
>

const EmployeesList: FC<Props> = function ({
  employees,
  employeesListPadding,
}) {
  return (
    <Padding padding={employeesListPadding} className="content-grid">
      <div
        className="relative max-w-sm mx-auto grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-20 items-start sm:max-w-xl lg:max-w-none"
        data-aos-id-team
      >
        {employees.map((employee, index) => {
          if (typeof employee === "string") return null

          const { id, image, name, role } = employee

          return (
            <div
              key={id}
              className="text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex mb-4">
                {/* <Image
                  className="rounded-full"
                  src={TeamMemberImage01}
                  width={120}
                  height={120}
                  alt="Member 01"
                /> */}
                <Media
                  type="image"
                  media={image}
                  mediaProps={{
                    alt: name,
                    width: 120,
                    height: 120,
                    className: "rounded-full",
                  }}
                />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">
                {name}
              </h4>
              <div className="font-medium text-blue-600">{role}</div>
            </div>
          )
        })}
      </div>
    </Padding>
  )
}

export default EmployeesList
