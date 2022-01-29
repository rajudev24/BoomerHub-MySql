
const db = require('../models')
var Sequelize = require('sequelize'); 

// Image Upload
const multer = require('multer')
const path = require('path')


//Create main model

const Property = db.properties

//Add Property

const addProperty = async(req, res)=>{
    let info ={
        images: req.file.path,
        name: req.body.name,
        address: req.body.address,
        state: req.body.state,
        type: req.body.type,
        city: req.body.city,
        capacity: req.body.capacity,
        zip_Code: req.body.zip_Code,
        long: req.body.long,
        lat: req.body.lat,
        phone: req.body.phone,
        county: req.body.county
    }

    const property = await Property.create(info)
    res.status(200).send(property)
}

// Get all properties

const getALlProperty = async (req, res)=>{
    //query params
    const where = {}
    const {name, city, state} = req.query;
    if(name) where.name = {[Sequelize.Op.like]: `%${name}%`} 
    if(city) where.city = {[Sequelize.Op.like]: `%${city}%`} 
    if(state) where.state = {[Sequelize.Op.like]: `%${state}%`}

    let properties = await Property.findAll({
        where
    })
    res.status(200).send(properties)
}



//Get single property
const getOneProperty = async(req, res)=>{
    let id = req.params.id;
    let property = await Property.findOne({ where: { id: id }})
    res.status(200).send(property)
}

// Upload Image 

const storage = multer.diskStorage({
    destination:(req, res, cb)=>{
        cb(null, 'Images')
    },
    filename: (req, file, cb)=>{
        cb(null,  Date.now() + path.extname(file.originalname))
    },

})

const upload = multer({
    storage: storage,
    limits:{ fileSize: '2000000'},
    fileFilter:(req, file, cb)=>{
        const fileTypes = /jpeg|jpg|png|gif /
        const mimType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimType && extname){
            return cb(null, true)
        }
        cb('Only .jpg, .png, .gif or .jpeg format allowed')
    }
}).single('images')



module.exports ={
    addProperty,
    getALlProperty,
    getOneProperty,
    upload
}