module.exports = async function(req, res) {
    sails.log.warn("Sending entries")
    
    //const currentUser = await User.findOne({id: req.session.userId})
    const user = req.session.userId
    
    const entries = await Entry.find({user: user})
        .sort('timestamp DESC')
        .populate('location')

    

    if (req.wantsJSON) {
        
        
        return res.send(entries)
    }

}