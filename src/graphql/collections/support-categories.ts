export const SUPPORT_CATEGORIES = (limit: number) => `
query SupportCategories {
	SupportCategories(limit: ${limit}) {
    docs {
      id
      name
    }
  }
}
`

export const ALL_SUPPORT_CATEGORIES = `
query SupportCategories {
	SupportCategories {
    docs {
      id
      name
    }
  }
}
`
