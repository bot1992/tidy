import { HEADER } from "./globals/header"
import type {
  Page as PageType,
  Header as HeaderType,
  Footer as FooterType,
  SocialMedia as SocialMediaType,
  Newsletter as NewsletterType,
  BlogPost as BlogPostType,
  BlogCategory as BlogCategoryType,
  SupportCategory as SupportCategoryType,
  SupportArticle as SupportArticleType,
} from "../payload-types"
import { FOOTER } from "./globals/footer"
import { SOCIAL_MEDIA } from "./globals/social-media"
import { PAGE, PAGES } from "./collections/page"
import { NEWSLETTER } from "./globals/newsletter"
import {
  ALL_BLOG_POSTS,
  BLOG_POST,
  BLOG_POSTS,
  BLOG_POSTS_BY_CATEGORY_ID,
  BLOG_POST_SLUGS,
} from "./collections/blog-posts"
import {
  ALL_BLOG_POST_CATEGORIES,
  BLOG_POST_CATEGORIES,
} from "./collections/blog-categories"
import { ALL_SUPPORT_CATEGORIES } from "./collections/support-categories"
import {
  SUPPORT_ARTICLE,
  SUPPORT_ARTICLES_BY_CATEGORY_ID,
  SUPPORT_ARTICLE_SLUGS,
} from "./collections/support-articles"

const extra = {
  next: {
    revalidate: process.env.NODE_ENV === "production" ? 300 : 0,
  },
}

// globals
export const fetchHeader = async (): Promise<HeaderType> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: HEADER,
      }),
      ...extra,
    }
  ).then((res) => {
    return res.json()
  })

  if (errors) {
    console.error(JSON.stringify(errors))
  }

  return data?.Header ?? { id: "", links: [] }
}

export const fetchFooter = async (): Promise<FooterType> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: FOOTER,
      }),
      ...extra,
    }
  ).then((res) => {
    return res.json()
  })

  if (errors) {
    console.error(JSON.stringify(errors))
  }

  return data?.Footer ?? { id: "", items: [], text: "" }
}

export const fetchSocialMedia = async (): Promise<SocialMediaType> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: SOCIAL_MEDIA,
      }),
      ...extra,
    }
  ).then((res) => {
    return res.json()
  })

  if (errors) {
    console.error(JSON.stringify(errors))
  }

  return data?.SocialMedia ?? { id: "", items: [] }
}

export const fetchNewsletter = async (): Promise<NewsletterType> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: NEWSLETTER,
      }),
      ...extra,
    }
  ).then((res) => {
    return res.json()
  })

  if (errors) {
    console.error(JSON.stringify(errors))
  }

  return data?.Newsletter ?? { text: "", form: null }
}

// collections
export const fetchPagesSlugs = async (): Promise<Array<{ slug: string }>> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: PAGES,
      }),
      ...extra,
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
  }

  return data?.Pages?.docs ?? []
}

export const fetchPage = async (slug: string): Promise<PageType | null> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: PAGE,
        variables: {
          slug,
        },
      }),
      next: {
        ...extra.next,
        tags: [slug],
      },
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    return null
  }

  const page = data.Pages?.docs?.[0]

  return !!page ? page : null
}

export const fetchBlogPostCategories = async (
  limit: number | null = null
): Promise<Array<BlogCategoryType>> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: limit ? BLOG_POST_CATEGORIES(limit) : ALL_BLOG_POST_CATEGORIES,
      }),
      next: { ...extra.next },
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    return []
  }

  return data.BlogCategories?.docs ?? []
}

export const fetchBlogPosts = async (
  limit: number | null = null
): Promise<Array<BlogPostType>> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: limit ? BLOG_POSTS(limit) : ALL_BLOG_POSTS,
      }),
      next: { ...extra.next, tags: ["blog-posts"] },
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    return []
  }

  return data.BlogPosts?.docs ?? []
}

export const fetchBlogPostsByCategoryId = async (
  id: string,
  limit: number | null = null
): Promise<Array<BlogPostType>> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: limit ? BLOG_POSTS_BY_CATEGORY_ID(limit) : ALL_BLOG_POSTS,
        variables: {
          id,
        },
      }),
      next: { ...extra.next, tags: ["blog-posts"] },
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    return []
  }

  return data.BlogPosts?.docs ?? []
}

export const fetchBlogPostSlugs = async (): Promise<
  Array<Pick<BlogPostType, "slug">>
> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: BLOG_POST_SLUGS,
      }),
      ...extra,
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    return []
  }

  return data.BlogPosts?.docs ?? []
}

export const fetchBlogPost = async (
  slug: string
): Promise<BlogPostType | null> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: BLOG_POST,
        variables: {
          slug,
        },
      }),
      next: { ...extra.next, tags: [slug] },
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    return null
  }

  const post = data.BlogPosts?.docs?.[0]

  return !!post ? post : null
}

export const fetchSupportCategories = async (): Promise<
  Array<SupportCategoryType>
> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ALL_SUPPORT_CATEGORIES,
      }),
      next: { ...extra.next },
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    return []
  }

  return data.SupportCategories?.docs ?? []
}

export const fetchSupportArticlesByCategoryId = async (
  id: string
): Promise<Array<SupportArticleType>> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: SUPPORT_ARTICLES_BY_CATEGORY_ID,
        variables: {
          id,
        },
      }),
      next: { ...extra.next, tags: ["support-articles"] },
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    return []
  }

  return data.SupportArticles?.docs ?? []
}

export const fetchSupportArticleSlugs = async (): Promise<
  Array<Pick<SupportArticleType, "slug">>
> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: SUPPORT_ARTICLE_SLUGS,
      }),
      ...extra,
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    return []
  }

  return data.SupportArticles?.docs ?? []
}

export const fetchSupportArticle = async (
  slug: string
): Promise<BlogPostType | null> => {
  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: SUPPORT_ARTICLE,
        variables: {
          slug,
        },
      }),
      next: { ...extra.next, tags: [slug] },
    }
  ).then((res) => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    return null
  }

  const article = data.SupportArticles?.docs?.[0]

  return !!article ? article : null
}
