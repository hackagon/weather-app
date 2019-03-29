/* 3rd party package */
const request = require('request');
const yargs = require('yargs');

/* call services package */
const callLocation = require('./callServices/geolocation');
const callDarkSky = require('./callServices/callDarkSky');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Enter your target address',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

    const encodedAddress = encodeURIComponent(argv.a);

callLocation(encodedAddress, (err, res) => {
    if(err){
        console.log(err)
    } else {
        console.log(res)
        
        callDarkSky(res.latitude, res.longitude, (errDarsky, resDarsky) => {
            if(errDarsky){
                console.log(errDarsky)
            } else {
                console.log(resDarsky)
            }
        })
        
    }
})