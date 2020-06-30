module.exports = {
    
    customToJSON: function() {
        const fromNow = sails.moment(this.timestamp).fromNow()
        this.fromNow = fromNow
        return this
    },
    
    attributes: {
        user: {
            model: 'user'
        },
        status: {
            type: 'string',
            isIn: ['Off Duty', 'Driving', 'On Duty', 'Sleeper Berth'],
            required: true
            
        },
        location: {
            model: 'location',
            required: true
        },
        timestamp: {
            type: 'number',
            required: true
        },
        mileage: {
            model: 'mileage'
        },
        duration: {
            type: 'number',
            allowNull: true
        },
        updated: {
            type: 'boolean',
            defaultsTo: false
        },

    }
}