let db = require('../models');

module.exports = function(app){
    app.get('/api/workouts', function(req, res){
        db.Regimen.aggregate([{
            $addFields:{
                totalDuration:{
                    $sum:"$exercises.duration"
                }
            }
        }])
        .then(function(results){
            res.json(results);
        })
        .catch(function(err){
            res.json(err);
        })
    });
    app.put('/api/workouts/:id', function(req, res){
        db.Regimen.findByIdAndUpdate( req.params.id, { $push: {exercises: req.body}})
        .then(function(results){
            res.json(results);
        })
        .catch(function(err){
            res.json(err);
        })
    });
    app.post('/api/workouts', function(req, res){
        db.Regimen.create({})
        .then(results=>{
            res.json(results);
        })
        .catch(function (err){
            res.json(err);
        })
    });
    app.get('/api/workouts/range', function(req, res){
        db.Regimen.aggregate([{
            $addFields:{
                totalDuration:{
                    $sum:"$exercises.duration"
                }
            }
        }]).sort({_id:-1}).limit(7)
        .then(function(results){
            res.json(results);
        })
        .catch(function(err){
            res.json(err);
        })
    })
         
}