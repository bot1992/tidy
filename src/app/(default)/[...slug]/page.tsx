import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import RenderPage from "@components/layout/page"
import PageLayout from "@components/layout/layout"
import { mergeOpenGraph } from "@/src/seo/merge-open-graph"
import { fetchPage, fetchPagesSlugs } from "@/src/graphql"

const Page = async ({ params: { slug } }: { params: any }) => {
  const page = await fetchPage(slug?.[0])

  if (!page) return notFound()

  return (
    <PageLayout renderFooter={page.includeFooter}>
      <RenderPage page={page} />
    </PageLayout>
  )
}

export async function generateStaticParams() {
  const pages = (await fetchPagesSlugs()) ?? []

  const params = pages.map((page) => {
    return { slug: [page.slug] }
  })

  return params
}

export async function generateMetadata({
  params: { slug },
}: {
  params: any
}): Promise<Metadata> {
  const pageSlug = slug?.[0] ?? "home"
  const page = await fetchPage(pageSlug)

  const ogImage =
    typeof page?.meta?.image === "object" &&
    page?.meta?.image !== null &&
    "url" in page?.meta?.image &&
    `${process.env.NEXT_PUBLIC_CMS_URL}${page.meta.image.url}`

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? ""),
    title: page?.meta?.title || "Corporate",
    description: page?.meta?.description,
    openGraph: mergeOpenGraph({
      title: page?.meta?.title || "Corporate",
      description: page?.meta?.description,
      url: `/${pageSlug}`,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
    }),
  }
}

export default Page
