import { LINK_FIELDS } from "../fields/link"

export const FOOTER = `
  query {
    Footer {
      text
      items {
        id
        title
        links ${LINK_FIELDS}
      }
    }
}
`
