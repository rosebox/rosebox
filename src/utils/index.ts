export const isObject = (value: any) =>
  Object.prototype.toString.call(value) === '[object Object]'


export const toNum = (x: any): number => x.toNum(x)