export const BLOG_POST_CATEGORIES = (limit: number) => `
query BlogPostCategories {
	BlogCategories(limit: ${limit}) {
    docs {
      id
      name
    }
  }
}
`

export const ALL_BLOG_POST_CATEGORIES = `
query BlogPostCategories {
	BlogCategories {
    docs {
      id
      name
    }
  }
}
`
