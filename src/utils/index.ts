export const isObject = (value: any) =>
  Object.prototype.toString.call(value) === '[object Object]'
