//notes enpoint

var express = require('express');
var router = express.Router();

let data = [
    {
        key: 0,
        note: 'At the dawn of the Galactic Empire, the first generation of stormtroopers consisted of cloned soldiers who served the Galactic Republic during the Clone Wars'
    },    
    {
        key: 1,
        note: "Darth Vader's armor, serial number: E-3778Q-1, was designed to maintain and protect the young Sith apprentice's charred body while exuding an air of intimidation and control. His suit followed an ancient Sith tradition, in which the warriors of the dark side of the Force would adorn themselves in heavy armor."
    },
    {
        key: 2,
        note: 'Stormtroopers (ST)—known as TK stormtroopers and as TK troopers during the early Imperial Era, Remnant Stormtroopers after the Battle of Endor, and colloquially referred to as "bucketheads"—were the infantry soldiers of the Galactic Empire.'
    },
    {
        key: 3,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        key: 4,
        note: "The James Webb Space Telescope is a space telescope designed primarily to conduct infrared astronomy. As the largest optical telescope in space, its greatly improved infrared resolution and sensitivity allow it to view objects too early, distant, or faint for the Hubble Space Telescope."
    }

]


router.get('/', function(req, res, next) {
  res.send(data);
});

router.post('/', function(req, res, next){
    try{
        data = req.body
        res.status(201).json(data)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;

