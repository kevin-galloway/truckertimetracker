module.exports = {
    attributes: {
        user: {
            model: 'user'
        },

        latitude: {
            type: 'number',
            required: true
        },

        longitude: {
            type: 'number',
            required: true
        },

        name: {
            type: 'string'
        },
        street: {
            type: 'string',
            required: true
        },
        cityState: {
            type: 'string',
            required: true
        }
    }
}