/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from "react"
import escapeHTML from "escape-html"
import { Text } from "slate"
import classNames from "classnames"

import mergeDeep from "@/src/utils/deep-merge"

export type AttributesType = {
  [key: string]: Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<Element>, Element>,
    "ref"
  >
} | null

const serialize = (
  children: Array<any>,
  attributes?: AttributesType,
  addBaseClassNames?: boolean
): (React.ReactElement | null)[] => {
  try {
    return (children ?? []).map((node: any, i) => {
      if (Text.isText(node)) {
        let text = (
          <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
        )

        if ((node as any)?.["green-text"]) {
          text = (
            <span
              style={{
                color: "#10b981",
              }}
            >
              {text}
            </span>
          )
        }

        if ((node as any)?.bold) {
          text = <strong key={i}>{text}</strong>
        }

        if ((node as any).code) {
          text = <code key={i}>{text}</code>
        }

        if ((node as any).italic) {
          text = <em key={i}>{text}</em>
        }

        if ((node as any).underline) {
          text = (
            <span style={{ textDecoration: "underline" }} key={i}>
              {text}
            </span>
          )
        }

        if ((node as any).strikethrough) {
          text = (
            <span style={{ textDecoration: "line-through" }} key={i}>
              {text}
            </span>
          )
        }

        return <Fragment key={i}>{text}</Fragment>
      }

      if (!node) {
        return null
      }

      const mergedClassName = classNames(
        attributes?.shared?.className ?? "",
        attributes?.[node?.type ?? "p"]?.className ?? ""
      )

      const props = mergeDeep({
        target: attributes?.shared ?? {},
        sources: [attributes?.[node?.type ?? "p"] ?? {}],
      })

      const { className, ...restProps } = props

      switch (node.type) {
        case "h1":
          return (
            <h1
              key={i}
              className={classNames(
                addBaseClassNames ? "h1" : "",
                mergedClassName
              )}
              {...restProps}
            >
              {serialize(node.children)}
            </h1>
          )
        case "h2":
          return (
            <h2
              key={i}
              className={classNames(
                addBaseClassNames ? "h2" : "",
                mergedClassName
              )}
              {...restProps}
            >
              {serialize(node.children)}
            </h2>
          )
        case "h3":
          return (
            <h3
              key={i}
              className={classNames(
                addBaseClassNames ? "h3" : "",
                mergedClassName
              )}
              {...restProps}
            >
              {serialize(node.children)}
            </h3>
          )
        case "h4":
          return (
            <h4
              key={i}
              className={classNames(
                addBaseClassNames ? "h4" : "",
                mergedClassName
              )}
              {...restProps}
            >
              {serialize(node.children)}
            </h4>
          )
        case "h5":
          return (
            <h5
              key={i}
              className={classNames(
                addBaseClassNames ? "h5" : "",
                mergedClassName
              )}
              {...restProps}
            >
              {serialize(node.children)}
            </h5>
          )
        case "h6":
          return (
            <h6
              key={i}
              className={classNames(
                addBaseClassNames ? "h6" : "",
                mergedClassName
              )}
              {...restProps}
            >
              {serialize(node.children)}
            </h6>
          )
        case "blockquote":
          return (
            <blockquote key={i} className={mergedClassName} {...restProps}>
              {serialize(node.children)}
            </blockquote>
          )
        case "ul":
          return (
            <ul key={i} className={mergedClassName} {...restProps}>
              {serialize(node.children)}
            </ul>
          )
        case "ol":
          return (
            <ol key={i} className={mergedClassName} {...restProps}>
              {serialize(node.children)}
            </ol>
          )
        case "li":
          return (
            <li key={i} className={mergedClassName} {...restProps}>
              {serialize(node.children)}
            </li>
          )
        case "link":
          return (
            <a
              href={escapeHTML(node.url)}
              key={i}
              className={mergedClassName}
              {...restProps}
            >
              {serialize(node.children)}
            </a>
          )

        case "hr":
          return <hr key={i} className={mergedClassName} {...restProps} />

        default:
          return (
            <p key={i} className={mergedClassName} {...restProps}>
              {serialize(node.children)}
            </p>
          )
      }
    })
  } catch (err: any) {
    console.log("an error occurred serializing: ", err.message)
    return [<div></div>]
  }
}

export default serialize
