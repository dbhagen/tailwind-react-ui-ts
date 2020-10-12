import { tailwindPropToClassName } from '../tailwind'

export default (prefix: string, value: string, userClassNames = '') => {
  if (userClassNames.includes(prefix)) {
    return false
  }

  return tailwindPropToClassName(prefix, value)
}
