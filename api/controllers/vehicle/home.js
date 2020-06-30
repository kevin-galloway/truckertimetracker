module.exports = async function(req, res) {
    sails.log.warn("Sending vehicles")

    const user = req.session.userId


    const vehicles = await Vehicle.find({user: user})


    if (req.wantsJSON) {
        
        return res.send(vehicles)
    }

    //const santiziedtrips = JSON.parse(JSON.stringify(currentUser))

    //res.view('pages/note/home', {
    //    allTrips
    //})
}