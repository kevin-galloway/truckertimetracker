module.exports = async function(req, res) {

    const currentUser = await User.findOne({id: req.session.userId})
        .populate('carriers').populate('followers')

    const entries = await Entry.find({user: req.session.userId})
        .sort('time DESC')

    currentUser.entries = entries
    
    if (req.wantsJSON) {
        return res.send(currentUser)
    }

}