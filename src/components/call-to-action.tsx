import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import classNames from "classnames"

import Link from "@components/link"
import { Page as PageType } from "../payload-types"

type CallToActionType = PageType["heroCallToAction"]

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  callToAction: CallToActionType
  className?: string
}

const CallToAction: FC<Props> = function ({ callToAction, ...props }) {
  const firstAction = callToAction?.[0]
  const isFirstSmall = firstAction?.size === "small"

  const secondAction = callToAction?.[1]
  const isSecondSmall = secondAction?.size === "small"

  return (callToAction?.length ?? 0) >= 1 ? (
    <>
      {firstAction && (
        <div {...props}>
          <Link
            {...firstAction.link}
            className={classNames(
              {
                "btn-sm": isFirstSmall,
                btn: !isFirstSmall,
              },
              "btn text-white bg-blue-600 hover:bg-blue-700 w-full group"
            )}
          >
            <span className={isFirstSmall ? "text-sm" : ""}>
              {firstAction?.link?.label}

              {firstAction.appendArrow && (
                <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              )}
            </span>
          </Link>
        </div>
      )}

      {secondAction && (
        <div {...props}>
          <Link
            {...secondAction.link}
            className={classNames(
              {
                "btn-sm": secondAction.size === "small",
                btn: secondAction.size !== "small",
              },
              "btn text-white bg-slate-700 hover:bg-slate-800 w-full"
            )}
          >
            <span className={isSecondSmall ? "text-sm" : ""}>
              {secondAction?.link?.label}

              {secondAction.appendArrow && (
                <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              )}
            </span>
          </Link>
        </div>
      )}
    </>
  ) : (
    <></>
  )
}

export default CallToAction
