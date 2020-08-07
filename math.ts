const fs = require('fs')

const typeParameterNames = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const exclude = <A>(arr: A[], el: A) => arr.filter((val) => val !== el)
const putFirst = <A>(arr: A[], el: A) => arr.map((val) => [el].concat(val))

const permute = <A>(x: A[]): any =>
  x.length === 1
    ? [x]
    : x.length === 2
    ? [
        [x[0], x[1]],
        [x[1], x[0]],
      ]
    : x.reduce((acc: A[][], val: A) => {
        const execludedArr = exclude(x, val)
        return acc.concat(putFirst(permute(execludedArr), val))
      }, [])

const getAllSubsets = <A>(theArray: A[]) =>
  theArray.reduce(
    (subsets: A[][], value) =>
      subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  )

const serializeArr = <A>(arr: A[]): string => `[${arr.join(', ')}]`

const createDoubleBarTypes = (num: number) => {
  const tpNames = typeParameterNames.slice(2, num)
  const typesVariants = tpNames.reduce(
    (acc, item) => {
      return acc.concat([acc[acc.length - 1].concat(item)])
    },
    [['A', 'B']]
  )

  console.log(typesVariants)

  const types = typesVariants.map((item, idx) => {
    return getAllSubsets(item)
      .filter((val) =>
        val.includes(typesVariants[idx][typesVariants[idx].length - 1])
      )
      .map(permute)
      .flat()
  })

  const ts = [[['A']].concat(types[0])].concat(types.slice(1))

  return ts
    .map(
      (_, idx) =>
        `type DoubleBar${idx + 2}<${typesVariants[idx].join(', ')}> = \n
        ${
          idx !== 0
            ? `DoubleBar${idx + 1}<${typesVariants[idx - 1].join(', ')}>`
            : ''
        } ${ts[idx].reduce(
          (acc, val) =>
            acc + ' | ' + (val.length === 1 ? val[0] : serializeArr(val)),
          ``
        )}`
    )
    .join('\n')
}

fs.writeFile('helloworld.ts', createDoubleBarTypes(5), function (err: any) {
  if (err) return console.log(err)
  console.log('Hello World > helloworld.txt')
})
