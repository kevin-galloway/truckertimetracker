module.exports = async function(req, res) {
    const text = req.body.text
    console.log("Create post object with text: " + text)

    const file = req.file('imagefile')

    try {
        const fileUrl = await sails.helpers.uploadfile(file)

        const userId = req.session.userId
    
        await Post.create({text: postBody, 
            user: userId,
            imageUrl: fileUrl
        }).fetch()

        

        
        res.end()
    } catch (err) {
        res.serverError(err.toString())
    }
    
}