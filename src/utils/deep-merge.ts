const isObject = (item: Object) => {
  return item && typeof item === "object" && !Array.isArray(item)
}
const mergeDeep = ({
  target,
  sources,
}: {
  target: { [key: string]: any }
  sources: Array<{ [key: string]: any }>
}): { [key: string]: any } => {
  if (!sources.length) return target

  const source = sources.shift()
  if (source && isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, {
            [key]: {},
          })
        mergeDeep({ target: target[key], sources: [source[key]] })
      } else {
        Object.assign(target, {
          [key]: source[key],
        })
      }
    }
  }

  return mergeDeep({ target, sources })
}

export default mergeDeep
