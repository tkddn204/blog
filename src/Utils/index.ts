export const htmlToText = (html: string): string => {
  const element = document.createElement('div')
  element.innerHTML = html
  return element.textContent || ''
}

export const isEmptyObject = (
  obj: Record<string, unknown>
): obj is Record<string, unknown> =>
  Object.keys(obj).length === 0 && obj.constructor === Object

export const isExistObjectKey = (obj: Record<string, unknown>): boolean => {
  return obj && Object.keys(obj).length !== 0
}

export const debounce: (fn: () => void, time: number) => () => void = (
  fn,
  time
) => {
  let timeout: NodeJS.Timeout

  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(fn, time)
  }
}
