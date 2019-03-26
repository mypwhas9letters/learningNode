const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forcast.js')

const input = process.argv[2]
if (!input) {
  console.log("No Address")
} else {
  geocode(input, (err, {lat, long, location}) => {
    if(err) {
      return console.log('Error', err)
   }

   forecast(lat, long, (err, forecastData) => {
     if(err){
       console.log('Error', err)
      }
      console.log(location)
      console.log(forecastData)
    })
  })
}
