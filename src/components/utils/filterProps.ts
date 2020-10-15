import includes from 'lodash.includes'

export default (componentProps: object, filterList: string | string[]) =>
  Object.keys(componentProps).reduce((newProps, prop) => {
    if (includes(filterList, prop)) {
      return newProps
    }
    return {
      ...newProps,
      [prop]: componentProps[prop],
    }
  }, {})
