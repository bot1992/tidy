import React from "react"
import { fetchPage } from "../../graphql"

import { generateMetadata } from "./[...slug]/page"
import notFound from "../not-found"
import RenderPage from "@components/layout/page"
import PageLayout from "@components/layout/layout"

const Page = async () => {
  const slug = "home"
  const page = await fetchPage(slug)

  if (!page) return notFound()

  return (
    <PageLayout>
      <RenderPage page={page} />
    </PageLayout>
  )
}

export { generateMetadata }

export default Page
