import { FC } from "react"
import { Page as PageType } from "../payload-types"
import classNames from "classnames"
import Media from "./media"

type Props = { background: PageType["heroBackground"] }

const Background: FC<Props> = ({ background }) => {
  const { type, fillType, color, image, height } = background
  const isColorFilled = fillType === "color"

  return (
    <div
      className={classNames("absolute inset-0 pointer-events-none -z-10", {
        "bg-none": fillType === "none",
        // height
        "h-full": height === "full",
        "h-1/2 bottom-0 top-auto": height === "half",
        "lg:h-[30rem] mb-48 lg:mb-0": height === "fillSmall",
        "h-96 md:h-auto md:mb-64": height === "fillMedium",
        "h-auto mb-64 md:mb-80": height === "fillLarge",
        "lg:h-[48rem] mb-36 lg:mb-0": height === "overflowSmall",
        "min-h-[85vh] lg:min-h-fit lg:h-[48rem] mb-36 lg:mb-0":
          height === "overflowLarge",
        // fill
        "[clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]":
          type === "clipped",
        "bg-dark bg-slate-900": color === "darkSlate" || !!image,
        "bg-slate-100": isColorFilled && color === "lightSlate",
      })}
    >
      {image && (
        <div className="w-full h-full" data-aos="fade">
          <Media
            media={image}
            type="image"
            mediaProps={{
              width: 1440,
              height: 497,
              className: "opacity-10 w-full h-full object-cover",
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Background
