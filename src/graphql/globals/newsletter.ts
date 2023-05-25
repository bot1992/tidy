import { FORM_FIELDS } from "../fields/form"

export const NEWSLETTER = `
  query {
    Newsletter {
        form ${FORM_FIELDS}
    }
}
`
