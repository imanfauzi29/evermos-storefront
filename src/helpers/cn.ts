const cn = (...args: unknown[]): string => {
  let newArgs = args

  args.map((classList) => {
    const isArray = Array.isArray(classList)

    if (isArray) {
      newArgs = [...newArgs, ...classList]
    }

    if (!isArray && typeof classList === "object") {
      newArgs = [
        ...newArgs,
        ...formatObjectToArray(classList as Record<string, boolean>),
      ]
    }
  })

  return newArgs.filter((v) => v).join(" ")
}

const formatObjectToArray = (args: Record<string, boolean>): string[] => {
  let arr = [] as string[]

  Object.keys(args).forEach((key) => {
    if (args[key]) {
      arr = [...arr, key]
    }
  })

  return arr
}

export default cn
