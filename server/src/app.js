const express = require('express')
const path = require('path')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

app.get('/weather', (req,res) => {
  if (!req.query.address){
    return res.send({
      error: "No address provided"
    })
  }
  res.send({
    address: req.query.address

  })
})


app.listen(3000, () => {
  console.log('Server is up on 3000')
})
