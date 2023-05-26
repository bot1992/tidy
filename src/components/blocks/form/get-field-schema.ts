import * as yup from "yup"

import capitalizeText from "@/src/utils/capitalize-text"
import { Unpacked } from "@/src/types"
import { Form } from "@/src/payload-types"

const getFieldSchema = function (field: Unpacked<Form["fields"]>) {
  const type = field?.blockType
  const required = (field as any)?.required ?? false
  const defaultValue = (field as any)?.defaultValue ?? ""
  const name = (field as any)?.name

  let label: string = (field as any)?.label ?? "Field"
  let match = label.match(/\s*{{(.*?)}}/)
  let placeholder = (match ?? [])?.[1]
  label = capitalizeText(
    !!placeholder
      ? label?.slice(0, label?.indexOf(match?.[0] as string))
      : label
  )

  const requiredMessage = `${label} is required`

  switch (type) {
    case "email":
      return (required ? yup.string().required(requiredMessage) : yup.string())
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Email is invalid"
        )
        .default(defaultValue)
    case "text":
    case "textarea":
    case "message":
    case "country":
    case "state":
    case "select":
      return (
        required ? yup.string().required(requiredMessage) : yup.string()
      ).default(defaultValue)
    case "checkbox":
      return name === "privacypolicy"
        ? yup
            .boolean()
            .default(false)
            .oneOf(
              [true],
              "You must agree to the privacy policy before proceeding"
            )
        : yup.boolean().default(false)
    case "number":
      return required ? yup.number().required() : yup.number()
    default:
      return required
        ? yup.string().required(requiredMessage)
        : yup.string().default(defaultValue)
  }
}

export default getFieldSchema
