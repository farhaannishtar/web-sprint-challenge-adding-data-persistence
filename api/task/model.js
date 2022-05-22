// build your `Task` model here
const db = require('../../data/dbConfig');

// async function findTasks() {
//   const rows = await db('tasks')
//   if (rows.length === 0) {
//     return null;
//   }
//   rows.forEach(row => {
//       row.task_completed = Boolean(row.task_completed);
//   })
//   return rows;
// }

async function findTasks() {
  const rows = await db('tasks')
    .join('projects', 'projects.project_id', 'tasks.project_id')
    .select('tasks.task_notes', 'tasks.task_completed', 'tasks.task_description', 'projects.project_description', 'projects.project_name')
  if (rows.length === 0) {
    return null;
  }
  rows.forEach(row => {
      row.task_completed = Boolean(row.task_completed);
  })
  return rows;
}

// function find() {
//   return db('users')
//     .leftJoin('posts', 'user_id', 'users.id')
//     .groupBy('users.id')
//     .select('users.id as user_id', 'username')
//     .count('posts.id as post_count')
// }

module.exports = {
  findTasks,
  // findResourceById,
  // addResource,
}