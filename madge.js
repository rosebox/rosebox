const madge = require('madge')

import { } from './lib'

madge('lib/index.js').then((res) => {
  console.log(res.circular())
})
