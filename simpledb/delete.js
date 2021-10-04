const fs = require('fs')

module.exports = (name,callback,dir) => {
  if (typeof name != "string") return new Error("Name is not a string (DELETE)")

  fs.readFile(dir, (err,data) => {
    if (!data) data = {}
    if (data) data = JSON.parse(data)

    delete data[name]

    fs.writeFile(dir, JSON.stringify(data,null,' '), (err) => {
      if (typeof callback == 'function') callback()
    })
  })
}