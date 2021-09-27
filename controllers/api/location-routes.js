const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Location} = require("../../models");
const withAuth = require("../../utils/auth");

// Get all stored location /api/location
router.get('/', (req, res) => {
    console.log('======================');
    Location.findAll({
    attributes: [
        'id',
        'latitude',
        'longitude',
        'user_id'
    ],
    include: [
        {
            model: User,
            attributes: ['username']
        }
    ]
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch((err) => {
    console.log(err);
    res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    console.log('======================');
    Location.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'latitude',
            'longitude',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
    
router.post('/', (req, res) => {
    console.log('======================');
    Location.create({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        user_id: req.session.user_id,            
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/:id', (req, res) => {
    console.log('======================');
    Location.update({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        user_id: req.session.user_id,            
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;