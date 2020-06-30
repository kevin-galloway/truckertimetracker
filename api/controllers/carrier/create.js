module.exports = async function(req, res) {
    
    
    const name = req.body.name
    const contactName = req.body.contactName
    const location = req.body.location
    const contactEmail = req.body.contactEmail


    try {
        const userId = req.session.userId

        
        
        
        

        const carrier = await Carrier.create({user: userId, name: name, contactName: contactName, location: location, contactEmail: contactEmail}).fetch()


        




        res.send(carrier)
    } catch (err) {
        res.serverError(err.toString())
        console.log("Error")
    }



}