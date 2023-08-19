const names = require(`./names`)
const sayhi = require(`./utils`)
const data = require(`./alt`)
require(`./sum`)

console.log(names)
console.log(data)

sayhi('susan')
sayhi(names.peter)
sayhi(names.john)