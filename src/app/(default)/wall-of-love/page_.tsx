export const metadata = {
  title: "Wall of Love - Corporate",
  description: "Page description",
}

import Hero from "@components/hero-wol"
import Clients from "@components/clients"
import Customers from "@components/customers"
import Testimonials from "@components/testimonials"
import CtaDark from "@components/cta-dark"

export default function WallOfLove() {
  return (
    <>
      <Hero />
      <Clients />
      <Customers />
      <Testimonials />
      <CtaDark />
    </>
  )
}
