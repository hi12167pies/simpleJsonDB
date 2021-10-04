# Simple JSON DB

This will store data in files.
All the methods:
```
db.add('NAME', 'VALUE', OPTIONS, CALLBACK)
db.delete('NAME', CALLBACK)
db.get('NAME', CALLBACK)
db.compare('NAME', 'VALUE', CALLBACK)
```
# Import Simple JSON DB

Install `Simple JSON DB` then put it in a folder

```
const database = require('./simpledb/') // Import database
const db = database('NAME') // Create database with name
```

# Add method

In the add method you can use `bcrypt` to encrypt data.

To add something to the database:

```
db.add('NAME', 'VALUE')
```
To add something encrypted:

```
db.add('NAME', 'VALUE', { encrypt: true })
```

To use a callback:
```

// With encrypt
db.add('NAME', 'VALUE', { encrypt: true }, () => {
})

// Without encrypt
db.add('NAME', 'VALUE', {}, () => {
})
```
# Get method

Get is very simple

```
db.get('NAME', value => {
  console.log(value)
})
```
# Delete method

Delete method is also simple

```
// With callback
db.delete('NAME', () => {
})

// Without callback
db.delete('NAME')
```
# Compare method

This is only used if you are using `bcrypt`

`NAME`: Name of item in the database.
`VALUE`: What you want to compare.

```
db.compare('NAME', 'VALUE', vaild => {
  console.log(valid)
})
```

# Goto example.md for examples
