import { FC } from "react"
import classNames from "classnames"
import { Control, Controller, FieldValues } from "react-hook-form"

import { Unpacked } from "@/src/types"
import { Form as FormType } from "@/src/payload-types"
import reduceFraction from "@/src/utils/reduce-fraction"

type FieldType = Unpacked<FormType["fields"]>

type Props = {
  fields: FormType["fields"]
  control: Control<FieldValues, any>
}

type RenderFieldProps = {
  field: FieldType
  control: Control<FieldValues, any>
  isLastField: boolean
}

const Field: FC<RenderFieldProps> = function ({ field, control, isLastField }) {
  const name = (field as any).name
  const type = field?.blockType ?? "text"
  const required = (field as any)?.required ?? false
  const options: Array<{ id: string; label: string; value: string }> =
    (field as any)?.options ?? []

  let width = reduceFraction(`${(field as any)?.width}/100`)
  width === "1" ? "full" : width.toString()

  let label: string = (field as any)?.label ?? "Field"

  let fieldToRender:
    | {
        field: "input"
        type: "text" | "number" | "email" | "checkbox"
      }
    | {
        field: "textarea"
        type: "text"
      }
    | {
        field: "select"
        type: "text"
      } = { field: "input", type: "text" }

  switch (type) {
    case "text":
    case "country":
    case "state": {
      fieldToRender = { field: "input", type: "text" }
      break
    }
    case "message":
    case "textarea": {
      fieldToRender = { field: "textarea", type: "text" }
      break
    }
    case "checkbox": {
      fieldToRender = { field: "input", type: "checkbox" }
      break
    }
    case "email": {
      fieldToRender = { field: "input", type: "email" }
      break
    }
    case "number": {
      fieldToRender = { field: "input", type: "number" }
      break
    }
    case "select": {
      fieldToRender = { field: "select", type: "text" }
      break
    }
    default: {
      fieldToRender = { field: "input", type: "text" }
      break
    }
  }

  return (
    <Controller
      render={({ field: { name, onChange, value }, fieldState: { error } }) => {
        const showError = error?.message && fieldToRender.type !== "checkbox"
        const isCheckbox = fieldToRender.type === "checkbox"

        return (
          <div
            className={classNames(`w-full md:w-${width} px-3`, {
              "flex items-center justify-end flex-row-reverse":
                fieldToRender.type === "checkbox",
              "mb-4 md:mb-0": width !== "full" && !isLastField,
            })}
          >
            {label && (
              <label
                className={classNames("block text-sm font-medium", {
                  "font-medium text-sm mb-1": fieldToRender.type !== "checkbox",
                  "ml-2 mb-0": fieldToRender.type === "checkbox",
                })}
                htmlFor={name}
              >
                {label}{" "}
                {required && !isCheckbox && (
                  <span className="text-red-600">*</span>
                )}
              </label>
            )}

            {fieldToRender.field === "input" ? (
              <input
                name={name}
                type={name === "password" ? "password" : fieldToRender.type}
                value={value ?? ""}
                checked={value ?? false}
                required={required}
                className={classNames({
                  "w-full": fieldToRender.type !== "checkbox",
                  "form-checkbox": fieldToRender.type === "checkbox",
                  "form-input py-2 w-full": fieldToRender.type !== "checkbox",
                  "!border-red-500 focus:!border-red-500": showError,
                })}
                onChange={(e) =>
                  onChange(isCheckbox ? e.target.checked : e.target.value)
                }
              />
            ) : fieldToRender.field === "textarea" ? (
              <textarea
                name={name}
                value={value ?? ""}
                required={required}
                rows={4}
                spellCheck={false}
                className={classNames("form-textarea w-full text-gray-300", {
                  "!border-red-500 focus:!border-red-500": error?.message,
                })}
                onChange={(e) => onChange(e.target.value)}
              />
            ) : (
              <select
                className="form-select w-full text-gray-300"
                onChange={(e) => onChange(e.target.value)}
              >
                {options.map(({ id, label, value }) => (
                  <option key={id} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            )}

            {showError && (
              <p className="text-sm text-red-500 mt-2">{error.message}</p>
            )}
          </div>
        )
      }}
      name={name}
      control={control}
    />
  )
}

const Fields: FC<Props> = function ({ fields, control }) {
  if (!fields) return null

  const fieldGroups: Array<{ items: Array<FieldType>; width: number }> = []

  fields.forEach((field) => {
    const lastGroup = fieldGroups?.[fieldGroups.length - 1]

    if (!lastGroup || lastGroup?.width >= 100) {
      const newGroup = { items: [field], width: (field as any)?.width ?? 100 }
      return fieldGroups.push(newGroup)
    }

    lastGroup.items.push(field)
    lastGroup.width += (field as any)?.width ?? 100
  })

  return (
    <>
      {fieldGroups.map((group, index) => {
        const fields = group.items

        return (
          <div key={index} className="flex flex-wrap -mx-3 mb-4">
            {fields.map((field, index) => {
              return !!field ? (
                <Field
                  key={field.id}
                  field={field}
                  control={control}
                  isLastField={index === group.items.length - 1}
                />
              ) : null
            })}
          </div>
        )
      })}
    </>
  )
}

export default Fields
