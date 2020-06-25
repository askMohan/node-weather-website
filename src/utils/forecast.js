const request=require('postman-request')

const forecast=(latitude,longitude,callback)=>{
     const url='http://api.weatherstack.com/current?access_key=727a514cc0fd2489405fe931908773d7&query='+latitude+','+longitude+'&unit=f'
     request({url:url,json:true},(error,response)=>{
        if (error){
            callback('Unable to connect services',undefined)
        }
        else if(response.body.error){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,{
                location:response.body.location.name,
                country:response.body.location.country,
                temperature:response.body.current.temperature

            })
        }

     })
}
module.exports=forecast