"use client"

import { FC, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import * as yup from "yup"
import classNames from "classnames"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import RenderFields from "./fields"
import getFieldSchema from "./get-field-schema"
import { Form as FormType, Page as PageType } from "@/src/payload-types"

type Props = Extract<
  Extract<PageType["layout"][0], { blockType: "content" }>["layoutBlocks"][0],
  { blockType: "form-block" }
>

const Form: FC<Props> = ({ form }) => {
  form = form as FormType
  const submitButtonLabel = (
    <>
      {form?.submitButtonLabel ?? "Submit"}{" "}
      <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
        -&gt;
      </span>
    </>
  )

  const router = useRouter()
  const [label, setLabel] = useState<string | JSX.Element>(submitButtonLabel)
  const [submitting, setSubmitting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const confirmationMessage = "Success!"
  const redirect = form?.redirect
  const formId = form?.id
  const fields = form?.fields ?? []

  const schema: { [key: string]: any } = {}
  fields.forEach((field: any) => {
    schema[field.name] = getFieldSchema(field)
  })

  const { handleSubmit, control, trigger, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(yup.object().shape(schema)),
  })

  const handleFormSubmit = async function (data: any) {
    const dataToSend = Object.entries(data).map(([name, value]) => ({
      field: name,
      value,
    }))

    try {
      setSubmitting(true)

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/form-submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            form: formId,
            submissionData: dataToSend,
          }),
        }
      )

      const result = await res.json()
      console.log("result: ", result)

      if (confirmationMessage) {
        setLabel(res.ok ? confirmationMessage : "An error occurred")

        res.ok && reset()

        timeoutRef.current && clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          setSubmitting(false)
          setLabel(submitButtonLabel)
        }, 3500)
      } else {
        res.ok && router.push("/")
      }
    } catch (err: any) {
      console.log("an error occurred: ", err.message)
      setSubmitting(false)
    }
  }

  const handleFormError = function (errors: any) {
    console.log("fix those errors before submit: ", errors)
    trigger()
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(handleFormSubmit, handleFormError)}>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <RenderFields fields={fields} control={control} />

            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <button
                  type="submit"
                  className={classNames(
                    "btn-sm group text-sm text-white w-full",
                    {
                      "bg-blue-600 hover:bg-blue-700 cursor-pointer":
                        !submitting,
                      "bg-blue-700 bg-opacity-70 cursor-not-allowed":
                        submitting,
                    }
                  )}
                  disabled={submitting}
                >
                  {label}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
