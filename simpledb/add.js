const fs = require('fs')

module.exports = (name,value,options,callback,dir) => {
  if (typeof options != "object") throw new Error("Input for options is not a object (ADD)")
  if (typeof name != "string") throw new Error("Name is not a string (ADD)")

  if (options.encrypt == true) {
    const bcrypt = require('bcrypt')

    if (!bcrypt) throw new Error('bcrypt not installed')
    if (typeof value != 'string') throw new Error("Encrypted values must be strings")

    console.log(bcrypt.genSalt(10, (err,salt) => {
      if (err) throw err
      bcrypt.hash(value, salt, (err, hash) => {
        if (err) throw err

        value = hash
        
        execute()
      })
    }))
  } else {
    execute()
  }
  
  function execute() {
    fs.readFile(dir, (err,data) => {
      if (!data) data = {}
      if (data) data = JSON.parse(data)

      data[name] = value

      fs.writeFile(dir, JSON.stringify(data,null,' '), (err) => {
        if (typeof callback == 'function') callback()
      })
    })
  }
}