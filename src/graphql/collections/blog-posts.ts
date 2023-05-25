import { META_FIELDS } from "../fields/meta"
import { MEDIA_FIELDS } from "./media"

export const BLOG_POST_SLUGS = `
  query BlogPosts {
    BlogPosts {
      docs {
        slug
      }
    }
  }
`

export const ALL_BLOG_POSTS = `
  query BlogPosts {
    BlogPosts {
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

export const BLOG_POSTS = (limit: number) => `
  query BlogPosts {
    BlogPosts(limit: ${limit}) {
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

export const BLOG_POSTS_BY_CATEGORY_ID = (limit: number) => `
query BlogPosts($id: String) {
	BlogPosts(limit: ${limit}, where: { categories: { equals: $id} }) {
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

export const BLOG_POST = `
query BlogPost($slug: String) {
  BlogPosts(where: { slug: { equals: $slug} }) {
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
