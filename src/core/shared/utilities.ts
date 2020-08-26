export const serializeDoubleBar = <A>(
  x: A[],
  serializer?: (x: A) => string
): string =>
  x
    .reduce(
      (acc: string, item) => acc + ' ' + (serializer ? serializer(item) : item),
      ''
    )
    .trim()
