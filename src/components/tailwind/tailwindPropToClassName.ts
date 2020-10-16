const getArray = (value: any) => (Array.isArray(value) ? value : [value])

const splitProp = (prop: string) => {
  const utility = prop.substring(prop.indexOf(':') + 1)

  return prop.indexOf(':') !== -1
    ? { utility, variant: prop.substring(0, prop.indexOf(':')) }
    : { utility }
}

const createClassName = ({ utility, value, variant, prefix = '' }: { utility?: string, value?: string, variant?: string, prefix?: string }) =>
  `${variant ? `${variant}:` : ''}${prefix}${utility}${
    value !== undefined ? `-${value}` : ''
  }`

export default (prop: string | undefined, values: Object, prefix?: string) => {
  const propType = typeof values

  if (!propType) return ''

  const { utility, variant } = prop !== undefined ? splitProp(prop) : { utility: undefined, variant: undefined }

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
      if (typeof value === 'undefined') {
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
