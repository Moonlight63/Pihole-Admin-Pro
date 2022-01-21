import { FunctionType } from '../types/FunctionType'

const debounce = (callback: FunctionType, wait = 1) : FunctionType => {
  let timeout: number

  return (...args) => {
    // This is perfectly valid code, but eslint incorectly matches it.
    // https://github.com/standard/eslint-plugin-standard/issues/12#issuecomment-323561586
    // eslint-disable-next-line node/no-callback-literal
    const next = () => callback(...args)
    clearTimeout(timeout)
    timeout = setTimeout(next, wait)
  }
}

export {
  debounce
}
