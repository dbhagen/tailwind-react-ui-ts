export default (value: any) => {
  if (!value) return []

  return Array.isArray(value) ? value : [value]
}
