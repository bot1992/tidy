export type LinkType = {
  type?: "page" | "external" | "multiple"
  label: string
  page: string
  url: string
  sublinks: {
    type?: "page" | "external"
    label?: string
    url: string
    page: string
    id?: string
  }[]
}

export type SocialMediaLabelType =
  | "twitter"
  | "github"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "telegram"

export type Unpacked<T> = T extends (infer U)[] ? U : T
