const request=require('postman-request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibW9oYW41NzczNSIsImEiOiJja2Jyd2Y5YzkzMGRkMnlsOWZncWp0ZDlyIn0.2LwhQRF2x7L3ZYuddJDgPg&limit=1'
    request({url:url,json:true},(error,response)=>{
        if (error){
            callback('Unable to connect services',undefined)
        }
        else if(response.body.features.length===0){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,{

                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}
module.exports=geocode