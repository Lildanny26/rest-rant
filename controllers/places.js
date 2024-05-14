// The controller area
const router = require("express").Router()

// The places route
// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://images.pexels.com/photos/12561886/pexels-photo-12561886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://images.pexels.com/photos/8092221/pexels-photo-8092221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }]      
    res.render('places/index', {places})
})

module.exports = router
