const fs = require('fs')

module.exports = (name,callback,dir) => {
  if (typeof name != "string") throw new Error("Name is not a string (GET)")
  
  fs.readFile(dir, (err,data) => {
    if (!data) data = {}  
    if (data) data = JSON.parse(data)

    return callback(data[name])
  })
}