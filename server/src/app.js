const express = require('express')
const path = require('path')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()
const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

app.get('/weather', (req,res) => {
  if (!req.query.address){
    return res.send({
      error: "No address provided"
    })
  }

  geocode(req.query.address, (err, {lat, long, location} = {}) => {
    if(err) {
      return console.log('Error', err)
   }
   forecast(lat, long, (err, forecastData) => {
     if(err){
       return res.send({ error })
      }
      res.send({
        location,
        data: forecastData
      })
    })
  })
})


app.listen(port, () => {
  console.log('Server is up on ' + port)
})
