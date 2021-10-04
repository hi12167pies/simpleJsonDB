const path = require('path')

const funcAdd = require('./add.js')
const funcComp = require('./compare.js')
const funcDel = require('./delete.js')
const funcGet = require('./get.js')

module.exports = (databaseName) => {
  if (typeof databaseName != "string") throw new Error('Database name is not a string')
  if (databaseName.length < 2) throw new Error('Database name is too short')
  if (databaseName.length > 16) throw new Error('Database name is too long')

  const dir = path.join(`${__dirname}/db/${databaseName}.json`)

  return {
    "add": (name,value,options={encrypt: false}, callback) => funcAdd(name,value,options,callback,dir),
    "compare": (name,value, callback) => funcComp(name,value,callback,dir),
    "delete": (name) => funcDel(name,dir),
    "get": (name, callback) => funcGet(name,callback,dir)
  }
}