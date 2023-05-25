import Media from "@/src/components/media"
import {
  fetchSupportArticlesByCategoryId,
  fetchSupportCategories,
} from "@/src/graphql"
import Link from "next/link"

const SupportContent = async function () {
  const categories = await fetchSupportCategories()

  const articlesByCategory = await Promise.all(
    categories.map((category) => fetchSupportArticlesByCategoryId(category.id))
  )

  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Articles */}
          <div className="max-w-3xl mx-auto space-y-4" data-aos-id-support>
            {/* Article*/}
            {categories.map((category, index) => {
              const articles = articlesByCategory?.[index]
              const authors: any = articles.reduce((prev: any, curr: any) => {
                const name =
                  typeof curr.author === "string"
                    ? curr.author
                    : curr.author?.name ?? ""

                return prev.find((author: any) => author.name === name)
                  ? prev
                  : [...prev, curr.author]
              }, [])

              return (
                <article
                  className="bg-white p-6 md:px-8 shadow-lg"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-support]"
                >
                  <div className="flex">
                    {/* Icon */}
                    <div className="flex items-center shrink-0 pr-6 sm:pr-8 sm:mr-6 sm:border-r border-slate-200">
                      <svg
                        className="w-8 h-8 fill-blue-600"
                        viewBox="0 0 32 32"
                      >
                        <path d="M17 18h12v6h-4v8H7v-8H3v-6h12v-7a6 6 0 0 1-6-6V2h2c1.537 0 2.938.578 4 1.528V0h2v8.528A5.978 5.978 0 0 1 21 7h2v3a6 6 0 0 1-6 6v2Zm10 2H5v2h22v-2Zm-4 4H9v6h14v-6Zm-6-10a4 4 0 0 0 4-4V9a4 4 0 0 0-4 4v1Zm-2-5V8a4 4 0 0 0-4-4v1a4 4 0 0 0 4 4Z" />
                      </svg>
                    </div>
                    {/* Content */}
                    <div className="grow">
                      <header>
                        <h2 className="h4 font-playfair-display mb-2">
                          <Link
                            className="text-slate-800 hover:underline hover:decoration-blue-100"
                            href={`/support/${articles?.[0]?.slug ?? ""}`}
                          >
                            {category.name}
                          </Link>
                        </h2>
                      </header>
                      <p className="text-slate-500 mb-4">
                        {category.description}
                      </p>
                      <footer className="flex items-center">
                        <div className="flex shrink-0 -space-x-3 -ml-0.5 mr-3">
                          {authors.map((author: any) => {
                            return typeof author === "string" ? null : (
                              <Media
                                type="image"
                                media={author.image}
                                mediaProps={{
                                  width: 32,
                                  height: 32,
                                  className:
                                    "rounded-full border-2 border-white box-content",
                                }}
                              />
                            )
                          })}
                        </div>

                        <div className="grow text-sm font-medium text-slate-600">
                          {authors?.length >= 1 ? (
                            <>
                              <a
                                className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                {articles.length} Articles
                              </a>{" "}
                              written by{" "}
                              <a
                                className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                {authors[0]?.name}
                              </a>
                              {authors.length > 1
                                ? `, and ${authors.length - 1} other(s)`
                                : ""}
                            </>
                          ) : (
                            "No articles written"
                          )}
                        </div>
                      </footer>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} as unknown as () => JSX.Element

export default SupportContent
