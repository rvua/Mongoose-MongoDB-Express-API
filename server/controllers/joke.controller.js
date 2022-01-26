const Joke = require("../models/joke.model");

module.exports.testResponse = (req, res) => {
    res.json({message:"Hello World"});
}

module.exports.findAllJokes = (req, res) => {
    Joke.find({})
        .then(results=>res.json({results:results}))
        .catch(err=>res.status(400).json({message:"that didn't quite work", err}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke=>res.json({results:newJoke}))
        .catch(err=>res.status(400).json({message:"that didn't quite work", err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params._id})
        .then(results=>res.json({results:results}))
        .catch(err=>res.status(400).json({message:"that didn't quite work", err}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(results=>res.json({results:results}))
        .catch(err=>res.status(400).json({message:"that didn't quite work", err}))
}

module.exports.updateOneJoke = (req, res) => {
    Joke.updateOne({_id:req.params._id}, req.body)
        .then(results=>res.json({results:results}))
        .catch(err=>res.status(400).json({message:"that didn't quite work", err}))
}

module.exports.addAJoke = (req, res) => {
    Joke.updateOne({_id:req.params._id}, {$push: {specials: req.body.special}})
        .then(results=>res.json({results:results}))
        .catch(err=>res.status(400).json({message:"that didn't quite work", err}))
}