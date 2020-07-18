const madge = require('madge')

madge('lib/index.js').then((res) => {
  console.log(res.circular())
})
