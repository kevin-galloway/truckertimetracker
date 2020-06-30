module.exports = async function(req, res) {
    sails.log.warn("Show the post creation form now")

    const userId = req.session.userId
    const allNotes = await Note.find({user: userId}).populate('user')

    if (req.wantsJSON) {
        return res.send(allNotes)
    }

    res.view('pages/note/home', {
        allNotes
    })
}