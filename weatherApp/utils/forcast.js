const request = require('request')

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/7d9a412c275e63efecd1d0f33e4934ac/${lat},${long}`
  request({url, json: true}, (err, {body}) => {
    if(err){
      callback('Unable to connect', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature +' degrees out.')
    }
  })
}

module.exports = forecast
