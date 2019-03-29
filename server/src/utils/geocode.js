const request = require('request')

const geocode = (add, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(add)}.json?access_token=pk.eyJ1IjoiaHVpd2FuZzMzOSIsImEiOiJjanRvb3k2bGswOTd1NGJxNWM4aGF2MDR6In0._h6HUEr8GWEs60WxD-dkgQ`
  request({url:url, json:true}, (err, res) => {
    if(err){
      callback('Unable to connect', undefined)
    } else if (res.body.features.length === 0) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, {
        long : res.body.features[0].center[0],
        lat : res.body.features[0].center[1],
        location : res.body.features[0].place_name,
      })
    }
  })
}

module.exports = geocode
