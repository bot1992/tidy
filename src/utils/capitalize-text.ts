const capitalizeText = function (text: string) {
  return `${(text?.[0] ?? "").toUpperCase()}${text.slice(1).toLowerCase()}`
}

export default capitalizeText
