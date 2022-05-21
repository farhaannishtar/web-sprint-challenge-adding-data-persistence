// build your `Resource` model here
const db = require('../../data/dbConfig');

async function findResources() {
  const rows = await db('resources')
  if (rows.length === 0) {
    return null;
  }
  return rows;
}

// async function findResourceById(id) {
//   const rows = await db('projects')
//     .leftJoin('tasks', 'tasks.project_id', 'projects.project_id')
//     .select('project_name', 'project_description', 'project_completed')
//     .where('projects.project_id', id);


//   const result = {
//     project_completed: Boolean(rows[0].project_completed),
//     project_description: rows[0].project_description,
//     project_name: rows[0].project_name
//   };

//   return result;
// }

function findResourceById(id) {
  return db('resources')
    .where({ resource_id: id })
    .first();
}

function addResource(resource) {
  console.log("Inside addResource");
  return db('resources')
    .insert(resource)
    .then(([id]) => { // eslint-disable-line
      console.log("WE ARE HERE");
      console.log(id);
      const foundResource = findResourceById(id)
      return foundResource;
    })
}

module.exports = {
  findResources,
  findResourceById,
  addResource,
}