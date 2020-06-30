module.exports = async function(req, res) {
    const status = req.body.status
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    const locationName = req.body.locationName
    const street = req.body.street
    const cityState = req.body.cityState
    const timestamp = req.body.timestamp
    const duration = req.body.duration
    const lastEntry = req.body.lastEntry
    console.log("startTime: " + status + latitude + longitude + locationName + street + cityState + timestamp + duration + lastEntry)
    
    

    //await Entry.updateOne({id: lastEntry}).set({duration: duration})
    
    try {
        const userId = req.session.userId

        
        const location = await Location.create({user: userId, latitude: latitude, longitude: longitude, name: locationName, street: street, cityState: cityState}).fetch()

        await Entry.updateOne({id: lastEntry})
            .set({
                duration: duration,
                isCompleted: True,
            })



        


        await Entry.create({user: userId, status: status, location: location.id, timestamp: timestamp, duration: duration}).fetch()

        res.ok()
    } catch (err) {
        res.serverError(err.toString())
        console.log("Error")
    }
    



    
}
