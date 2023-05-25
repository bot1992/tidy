import { FC } from "react"
import NextLink from "next/link"

import Dropdown from "@components/utils/dropdown"
import { LinkType } from "@/src/types"

const Link: FC<
  Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> &
    LinkType & {
      className?: string
      dropdownLinksClassName?: string
      multipleDisplayStyle?: "dropdown" | "list"
      handleClick?: () => void
    }
> = function ({
  className = "",
  dropdownLinksClassName = "",
  multipleDisplayStyle = "dropdown",
  handleClick,
  type,
  url,
  sublinks,
  label,
  page,
  children,
}) {
  return type === "multiple" ? (
    multipleDisplayStyle === "dropdown" ? (
      <Dropdown title={label}>
        {sublinks.map(({ id, type, page, url, label }) => (
          <span key={id}>
            <NextLink
              href={type === "page" ? page : url}
              className={dropdownLinksClassName}
              onClick={handleClick}
            >
              {children ? children : label}
            </NextLink>
          </span>
        ))}
      </Dropdown>
    ) : (
      <>
        <span className={className}>{label}</span>
        <div className="pl-4">
          {sublinks.map(({ id, type, page, url, label }) => (
            <span key={id}>
              <NextLink
                href={type === "page" ? page : url}
                className={dropdownLinksClassName}
                onClick={handleClick}
              >
                {children ? children : label}
              </NextLink>
            </span>
          ))}
        </div>
      </>
    )
  ) : (
    <NextLink
      href={type === "page" ? page : url}
      className={className}
      onClick={handleClick}
    >
      {children ? children : label}
    </NextLink>
  )
}

export default Link
