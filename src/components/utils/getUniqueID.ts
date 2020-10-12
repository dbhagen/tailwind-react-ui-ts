import uniqueId from 'lodash.uniqueid'

export default (prefix: string) => uniqueId(`${prefix}-`)
