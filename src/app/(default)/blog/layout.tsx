import PageLayout from "@components/layout/layout"

export const dynamic = "force-static"

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout>{children}</PageLayout>
}
