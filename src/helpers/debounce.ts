// create debounce input
export const debounce = (func: Function, delay: number) => {
  let debounceTimer: NodeJS.Timeout | undefined = undefined

  return function (this: any) {
    const args = Array.from(arguments)

    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    debounceTimer = setTimeout(() => func.apply(this, args), delay)
  }
}
