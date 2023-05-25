import { LINK_FIELDS } from "../fields/link"
import { META_FIELDS } from "../fields/meta"
import { PADDING_FIELDS } from "../fields/padding"
import { MEDIA_FIELDS } from "./media"
import { CALL_TO_ACTION_FIELDS } from "../fields/call-to-action"
import { CONTENT_BLOCK } from "../blocks"
import { BACKGROUND_FIELDS } from "../fields/background"

export const PAGES = `
  query Pages {
    Pages {
      docs {
        slug
      }
    }
  }
`

export const PAGE = `
query Page($slug: String) {
  Pages(where: { slug: { equals: $slug} }) {
    docs {
      slug
      title
      heroType
      heroContent
      heroHeadingStyle
      heroMediaType
      heroMedia ${MEDIA_FIELDS}
      heroVideoThumbnail ${MEDIA_FIELDS}
      heroBackground ${BACKGROUND_FIELDS}
      heroCallToAction ${CALL_TO_ACTION_FIELDS}
      heroPadding ${PADDING_FIELDS}
      heroMaxWidth
      layout {
        ${CONTENT_BLOCK}
      }
      includeFooter
      meta ${META_FIELDS}
    }
  }
}`
