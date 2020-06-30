module.exports = async function(req, res) {
    sails.log.warn("Sending carriers")
    
    //const currentUser = await User.findOne({id: req.session.userId})
    const user = req.session.userId

    const carriers = await Carrier.find({user: user})
        .sort('createdAt DESC')


    // await Carrier.destroy({user: user})
    // await Contact.destroy({user: user})
    

    if (req.wantsJSON) {
        
        
        return res.send(carriers)
    }

}