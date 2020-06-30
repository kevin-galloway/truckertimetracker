module.exports = async function(req, res) {
    const sleeperBerth = req.body.sleeperBerth
    const thirtyFourHourReset = req.body.thirtyFourHourReset
    
    const eightDaySchedule = req.body.eightDaySchedule


    const userId = req.session.userId
    try {
        await User.updateOne({id: userId}).set({sleeperBerth: sleeperBerth, thirtyFourHourReset: thirtyFourHourReset, eightDaySchedule: eightDaySchedule})

        res.end()
    } catch (err) {
        res.serverError(err.toString())
    }
    
    
    
}
