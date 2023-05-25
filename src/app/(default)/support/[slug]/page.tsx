import SinglePostHero from "./hero"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import Content from "./content"
import { fetchSupportArticle, fetchSupportArticleSlugs } from "@/src/graphql"

export async function generateStaticParams() {
  const articles = (await fetchSupportArticleSlugs()) ?? []

  const params = articles.map((article) => ({
    slug: article.slug,
  }))

  return params
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const article = await fetchSupportArticle(params.slug)

  if (!article) return notFound()

  const { meta } = article

  return {
    title: meta?.title ?? "Support Article",
    description: meta?.description ?? "Support Article",
  }
}

export default async function SingleArticle({
  params,
}: {
  params: { slug: string }
}) {
  const article = await fetchSupportArticle(params.slug)

  if (!article) return notFound()

  return (
    <>
      <SinglePostHero article={article} />
      <Content blocks={article.layout} />
    </>
  )
}
