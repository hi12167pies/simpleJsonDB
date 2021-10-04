# Add / Get / Delete
```
const database = require('./simpledb/')
const db = database('Name')

db.add('Hello', 'World', {}, () => {

  db.get('Hello', value => {
    console.log(value)
    
    db.delete('Hello')
  })
  
})
```
# With encrypt
```
const database = require('./simpledb/')
const db = database('Name')

db.add('Hello', 'World', { encrypt: true }, () => {

  db.get('Hello', value => {
    console.log(value)
    
    db.delete('Hello')
  })
  
})
```
