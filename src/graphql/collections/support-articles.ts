import { META_FIELDS } from "../fields/meta"
import { MEDIA_FIELDS } from "./media"

export const SUPPORT_ARTICLE_SLUGS = `
  query SupportArticles {
    SupportArticles {
      docs {
        slug
      }
    }
  }
`

export const ALL_SUPPORT_ARTICLES = `
  query SupportArticles {
    SupportArticles {
      docs {
        id
        meta ${META_FIELDS} 
        slug
        title
        author {
          name
          image ${MEDIA_FIELDS}
        }
      }
    }
  }
`

export const SUPPORT_ARTICLES = (limit: number) => `
  query SupportArticles {
    SupportArticles(limit: ${limit}) {
      docs {
        id
        meta ${META_FIELDS} 
        slug
        title
        readTime
        summary
        image ${MEDIA_FIELDS}
        status
        publishedAt
        author {
          name
          image ${MEDIA_FIELDS}
        }
        categories {
          id
          name
          archived
        }
      }
    }
  }
`

export const SUPPORT_ARTICLES_BY_CATEGORY_ID = `
query SupportArticles($id: String) {
	SupportArticles(where: { categories: { equals: $id} }) {
    docs {
      id
      meta ${META_FIELDS} 
      slug
      author {
        name
        image ${MEDIA_FIELDS}
      }
      title
      readTime
      summary
      image ${MEDIA_FIELDS}
      layout {
          ...on PostMedia {
            id
            blockType
            postMedia ${MEDIA_FIELDS}
          }
          ...on PostContent {
            id
            postContent
            blockType
          }
          ...on Separator {
            id
            blockType
          }
      }
      status
      publishedAt
      categories {
        id
        name
      }
    }
  }
}
`

export const SUPPORT_ARTICLE = `
query SupportArticle($slug: String) {
    SupportArticles(where: { slug: { equals: $slug} }) {
    docs {
      id
      meta ${META_FIELDS} 
      slug
      author {
        name
        image ${MEDIA_FIELDS}
      }
      title
      readTime
      summary
      image ${MEDIA_FIELDS}
      layout {
        ...on PostMedia {
        id
        blockType
        postMedia ${MEDIA_FIELDS}
        }
        ...on PostContent {
        id
        postContent
        blockType
        }
        ...on Separator {
        id
        blockType
        }
      }
      status
      publishedAt
      categories {
        id
        name
      }
    }
  }
}
`
