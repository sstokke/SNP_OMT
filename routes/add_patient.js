const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const Modules = require('../db/modules');

router.get('/', function(req, res, next) {
  if (req.user.admin === true) {
    res.render('add_patient', { user: req.user } );
  } else {
    res.render('landing', { error: "You need to have admin clearance for this" });
    }
});

router.post('/', (req, res, next)=> {
  Modules.patients().insert({
    last: req.body.last,
    first: req.body.first,
    gender: req.body.gender,
    age: req.body.age,
    pcp: req.body.pcp,
    enrollment: req.body.enroll,
    diabetes: req.body.diabetes,
    osteoporosis: req.body.osteoporosis,
    cancer: req.body.cancer,
    copd: req.body.copd,
    esrd: req.body.esrd,
    heart: req.body.heart,
    fracture: req.body.fracture
  }, '*').then((person)=> {
    Modules.measures().insert({
      patient_id: JSON.stringify(person[0].id)
    }).then(()=> {
      res.redirect('landing', { company: "Fortified Health" });
    })
  });
});



module.exports = router;
