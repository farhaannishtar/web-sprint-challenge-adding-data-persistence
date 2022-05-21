// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
  Project.findProject()
    .then(projects => {
      res.json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  console.log("Inside router");
  Project.addProject(req.body)
    .then(newProject => {
      console.log("DEER LORD");
      console.log(newProject);
      res.status(201).json(newProject)
    })
    .catch(next)
})

module.exports = router
