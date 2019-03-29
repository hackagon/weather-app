const request = require('request');

callDarkSky = (latitude, longitude, callback) => { // callback(err, res)
    request({
        url: `https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/${latitude},${longitude}`,
        json: true
    }, (err, res, body) => {
        if(err){
            callback('Cannot connect to DarkSky server', undefined)
        } else if(body.code === 400){
            callback('Location not found', undefined)
        } else {
            callback(undefined, {
                summary: body.currently.summary,
                temperature: body.currently.temperature
            })
        }
    })
}

module.exports = callDarkSky;