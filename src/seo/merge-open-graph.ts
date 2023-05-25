import type { Metadata } from "next"

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  siteName: "Corporate",
  title: "Corporate",
  description: "Corporate",
}

export const mergeOpenGraph = (
  og?: Metadata["openGraph"]
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
