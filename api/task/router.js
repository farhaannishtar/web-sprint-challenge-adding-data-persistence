// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
  Task.findTasks()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(next)
})

// router.post('/', (req, res, next) => {
//   console.log("Inside router");
//   Resource.addResource(req.body)
//     .then(newResource => {
//       console.log("Inside THEN");
//       console.log(newResource);
//       res.status(201).json(newResource)
//     })
//     .catch(next)
// })


module.exports = router
