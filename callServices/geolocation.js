const request = require('request');

callGeoLocation = (address, callback) => { // callback(err, res)
    request(
        {
            url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCpffFx5sZstG6aclYoEnodK4Nj5DF14F4&address=${address}`,
            json: true
        },
        function(err, res, body){
            if(err){
                callback('Cannot connect to DB', undefined);
            } else if(body.status === 'ZERO_RESULTS') {
                callback('Address not found', undefined)
            } else {
                callback(undefined, {
                    formatted_address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        }
    )
}

module.exports = callGeoLocation
