// build your `Project` model here
const db = require('../../data/dbConfig');

async function findProject() {
  const rows = await db('projects')

  if (rows.length === 0) {
    return null;
  }

  console.log("rows", rows);
  console.log("type of rows", typeof rows);

  rows.forEach(row => {
    console.log("Inside map");
    if (row.project_completed === 1) {
      console.log("Inside first IF");
      row.project_completed = Boolean(row.project_completed);
    } else {
      console.log("Inside ELSE");
      row.project_completed = Boolean(row.project_completed);
    }
  })
  return rows;
}

async function findProjectById(id) {
  const rows = await db('projects')
    .leftJoin('tasks', 'tasks.project_id', 'projects.project_id')
    .select('project_name', 'project_description', 'project_completed')
    .where('projects.project_id', id);


  const result = {
    project_completed: Boolean(rows[0].project_completed),
    project_description: rows[0].project_description,
    project_name: rows[0].project_name
  };

  return result;
}

function addProject(project) {
  console.log("Inside addProject");
  return db('projects')
    .insert(project)
    .then(([id]) => { // eslint-disable-line
      console.log("WE ARE HERE");
      return findProjectById(id)
    })
}

// function add(user) {
//   return db('users')
//     .insert(user)
//     .then(([id]) => { // eslint-disable-line
//       return findById(id)
//     })
// }

module.exports = {
  findProject,
  findProjectById,
  addProject,
}