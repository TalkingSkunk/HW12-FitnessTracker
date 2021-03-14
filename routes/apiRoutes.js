let db = require('../models');

module.exports = function(app){
    app.get('/api/workouts', function(req, res){
        db.Regimen.find({})
        .then(function(results){
            res.json(results);
        })
        .catch(function(err){
            res.json(err);
        })
    });
    app.put('/api/workouts/:id', function(req, res){
        db.Regimen.updateOne({id: req.params.id}, { $push: {exercises: req.body}})
        .then(function(results){
            res.json(results);
        })
        .catch(function(err){
            res.json(err);
        })
    });
    app.post('/api/workouts', function(req, res){
        db.Regimen.create(req.body)
        .then(function(req, res){
            res.json(results);
        })
        .catch(function (err){
            res.json(err);
        })
    });
    app.get('/api/workouts/range', function(req, res){
        db.Regimen.find({})
        .then(function(req, res){
            res.json(results);
        })
        .catch (function(err){
            res.json(err)
        })
    });
}