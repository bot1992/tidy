import React from "react"

import serialize, { AttributesType } from "./serialize"

type Props = {
  content: any
  attributes?: AttributesType
  addBaseClassNames?: boolean
}

const RichText: React.FC<Props> = ({
  content,
  attributes,
  addBaseClassNames = true,
}) => {
  if (!content) {
    return null
  }

  return <>{serialize(content, attributes, addBaseClassNames)}</>
}

export default RichText
