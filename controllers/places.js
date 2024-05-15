// The controller area
const router = require("express").Router()

// The places route
// GET /places
router.get('/new', (req, res) => {
    res.render('places/new')
  
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/burger.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/tacos.jpg'
    }]      
    res.render('places/index', {places})
})

module.exports = router
