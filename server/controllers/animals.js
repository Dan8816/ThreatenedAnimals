const mongoose = require("mongoose");
const Animal = mongoose.model("Animal");

module.exports = {
    index: (req, res)=>{
        Animal.find({})//find all instances of the mongoose model
        .then(animals => res.json(animals))
        .catch(err => res.send(err))
    },
    create: (req, res)=>{
        Animal.create(req.body)//create an instance of the mongoose model from body data
        .then(animal => res.json(animal))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{//retrieve an instance of the mongoose model based on an attribute mathing get url data
        Animal.findById(req.params.id)
        .then(animal => res.json(animal))
        .catch(err => res.send(err))
    }
}