module.exports = {
    
    // customToJSON: function() {
        // const start = sails.moment(this.startTime)
        // const end = sails.moment(this.endTime)


        


        // const duration = end.diff(start, 'minutes')

        // const hours = (duration / 60)
        // const rhours = Math.floor(hours)
        // const minutes = (hours - rhours) * 60
        // const rminutes = Math.round(minutes)

        // this.duration = rhours + " hours and " + rminutes + " minutes"
        

        // return this
    // },
    
    attributes: {
        user: {
            model: 'user'
        },

        entries: {
            collection: 'entry'
            
        },

        carrier: {
            model: 'carrier',
            required: true
        },

        vehicles: {
            collection: 'vehicle'
        },
        
        coDriver: {
            type: 'string',
            allowNull: true
        },
        

        shipmentNumber: {
            type: 'string',
            required: true
        },

        isComplete: {
            type: 'boolean',
            defaultsTo: false
        }
    }
}