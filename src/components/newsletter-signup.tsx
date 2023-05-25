"use client"

import { FC, FormEvent, useRef, useState } from "react"
import classNames from "classnames"

import {
  Form as FormType,
  Newsletter as NewsletterType,
} from "../payload-types"

const NewsletterSignup: FC<NewsletterType> = function ({ form }) {
  const [success, setSuccess] = useState(false)
  const [sending, setSending] = useState(false)
  const [email, setEmail] = useState("")
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

  const formId = (form as FormType)?.id

  const disabled = sending || success

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!email) {
      return (
        document.querySelector(".newsletter-signup input") as HTMLInputElement
      )?.focus()
    }

    setSending(true)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/form-submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            form: formId,
            submissionData: [{ field: "email", value: email }],
          }),
        }
      )

      const result = await res.json()

      console.log("result: ", result)

      if (res.ok) {
        setSuccess(true)

        timeoutIdRef.current && clearTimeout(timeoutIdRef.current)
        timeoutIdRef.current = setTimeout(() => {
          setSending(false)
          setSuccess(false)
        }, 3500)
      } else {
        // handle error
      }
    } catch (err: any) {
      console.log("an error occurred: ", err.message)
      setSending(false)
    }
  }

  return (
    <form className="newsletter-signup w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md">
        <input
          type="email"
          className="form-input w-full appearance-none bg-slate-800 border border-slate-700 focus:border-slate-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-slate-500"
          placeholder="Your email"
          aria-label="Your email…"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={classNames("btn text-white bg-blue-600", {
            "hover:bg-blue-700": !disabled,
            "cursor-not-allowed bg-opacity-60": disabled,
          })}
          disabled={disabled}
        >
          Subscribe
        </button>
      </div>
      {/* Success message */}
      {/* <p class="text-xs text-slate-500 mt-3 italic">Thanks for subscribing!</p> */}
      {success && (
        <p className="text-xs text-slate-500 mt-3 italic">
          Thanks for subscribing!
        </p>
      )}
      <p className="text-xs text-slate-500 mt-3 italic">
        No spam. You can unsubscribe at any time.
      </p>
    </form>
  )
}

export default NewsletterSignup
