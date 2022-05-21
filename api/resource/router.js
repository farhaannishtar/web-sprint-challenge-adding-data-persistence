// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()


router.get('/', (req, res, next) => {
  Resource.findResources()
    .then(resources => {
      res.json(resources)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  console.log("Inside router");
  Resource.addResource(req.body)
    .then(newResource => {
      console.log("Inside THEN");
      console.log(newResource);
      res.status(201).json(newResource)
    })
    .catch(next)
})

module.exports = router
