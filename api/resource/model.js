// build your `Resource` model here
const db = require('../../data/dbConfig');

async function findResources() {
  const rows = await db('resources')
  if (rows.length === 0) {
    return null;
  }
  return rows;
}

function findResourceById(id) {
  return db('resources')
    .where({ resource_id: id })
    .first();
}

function addResource(resource) {
  console.log("Inside addResource");
  return db('resources')
    .insert(resource)
    .then(([id]) => { 
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