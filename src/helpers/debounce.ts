export const debounce = (func: Function, delay: number) => {
  let debounceTimer: NodeJS.Timeout | undefined = undefined

  return function (this: unknown) {
    const args = [...arguments]

    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    debounceTimer = setTimeout(() => func.apply(this, args), delay)
  }
}
