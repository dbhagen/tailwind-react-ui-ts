const getArray = (value: [] | any) => (Array.isArray(value) ? value : [value])

type variantType = {
  utility: string
  variant?: string
}

const splitProp = (prop: string): variantType => {
  const utility: string = prop.substring(prop.indexOf(':') + 1)

  return prop.indexOf(':') !== -1
    ? { utility: utility, variant: prop.substring(0, prop.indexOf(':')) }
    : { utility: utility }
}

type createClassNameType = (
  classProps: {
    utility: string
    value?: string
    variant?: string
    prefix: string
  }
 ) => string

const createClassName: createClassNameType = ({ utility, value, variant, prefix = '' }) =>
  `${variant ? `${variant}:` : ''}${prefix}${utility}${
    value !== undefined ? `-${value}` : ''
  }`

export default (prop: string, values: any, prefix:string = '') => {
  const propType = typeof values

  if (!propType) return ''

  const { utility, variant } = splitProp(prop)

  if (propType === 'boolean') {
    return createClassName({ utility, variant, prefix })
  }

  if (propType === 'object' && !Array.isArray(values)) {
    return Object.keys(values).map(key =>
      createClassName({
        prefix,
        utility: `${utility}${key}`,
        variant,
        value: values[key],
      }),
    )
  }

  return getArray(values)
    .map(value => {
      if (value === false || typeof value === 'undefined') {
        return ''
      }

      if (typeof value === 'boolean') {
        return createClassName({ utility, variant, prefix })
      }

      return createClassName({
        prefix,
        utility,
        variant,
        value: utility !== value ? value : undefined,
      })
    })
    .filter(value => !!value)
    .join(' ')
}
