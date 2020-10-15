import { tailwindPropToClassName } from '../tailwind'

export default (prefix: string, values: Object, userClassNames = '') => {
  if (userClassNames.includes(prefix)) {
    return false
  }

  return tailwindPropToClassName(undefined, values, prefix)
}
