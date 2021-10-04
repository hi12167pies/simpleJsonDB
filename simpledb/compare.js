const fs = require('fs')

module.exports = (name,value,callback,dir) => {
  if (typeof name != "string") throw new Error("Name is not a string (COMPARE)")
  if (typeof value != "string") throw new Error("Value is not a string (COMPARE)")
  
  const bcrypt = require('bcrypt')
  if (!bcrypt) throw new Error('bcrypt not installed')
  
  fs.readFile(dir, (err,data) => {
    if (!data) data = {}  
    data = JSON.parse(data)
    if (!data[name]) return callback(false)

    bcrypt.compare(value,data[name], (err,valid) => {
      if (err) throw err

      return callback(valid)
    })
  })
}