module.exports = {
    

    
    attributes: {
        user: {
            model: 'user'
        },
        start: {
            type: 'number',
        },
        end: {
            type: 'number',
            allowNull: true
        },
        distance: {
            type: 'number',
            allowNull: true
        },
        event: {
            type: 'number',
            allowNull: true
        },
    }
}