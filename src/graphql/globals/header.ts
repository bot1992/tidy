import { LINK_FIELDS } from "../fields/link"

export const HEADER = `
  query {
    Header {
      links ${LINK_FIELDS}
    }
}
`
