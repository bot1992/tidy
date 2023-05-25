import { DetailedHTMLProps, HTMLAttributes } from "react"

import PageContainer from "./container"
import Footer from "@components/ui/footer"
import { fetchFooter, fetchSocialMedia } from "@/src/graphql"

type Props = {
  renderFooter?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const PageLayout = async function ({ renderFooter = true, children }: Props) {
  const [footer, socialMedia] = await Promise.all([
    fetchFooter(),
    fetchSocialMedia(),
  ])

  return (
    <>
      <PageContainer>{children}</PageContainer>

      {renderFooter && <Footer {...footer} socialMedia={socialMedia} />}
    </>
  )
} as unknown as (props: Props) => JSX.Element

export default PageLayout
