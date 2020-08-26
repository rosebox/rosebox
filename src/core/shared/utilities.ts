export const serializeDoubleBar = (
  x: string[],
  serializer?: Function
): string =>
  x
    .reduce(
      (acc: string, item) => acc + ' ' + (serializer ? serializer(item) : item),
      ''
    )
    .trim()
