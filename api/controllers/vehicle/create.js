module.exports = async function(req, res) {
    
    
    const name = req.body.name
    const number = req.body.number
    

    try {
        const userId = req.session.userId

        
        
        
        

        const vehicle = await Vehicle.create({user: userId, name: name, number: number}).fetch()


        



        



        res.send(vehicle)
    } catch (err) {
        res.serverError(err.toString())
        console.log("Error")
    }



}