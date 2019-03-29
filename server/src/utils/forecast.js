const request = require('request')

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/7d9a412c275e63efecd1d0f33e4934ac/${lat},${long}`
  request({url: url, json: true}, (err, res) => {
    if(err){
      callback('Unable to connect', undefined)
    } else if (res.body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, res.body.currently)
    }
  })
}

module.exports = forecast
