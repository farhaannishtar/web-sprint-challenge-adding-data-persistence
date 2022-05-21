// start your server here
const server = require('./api/server.js');

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`We are confident that we will pass this sprint challenge and are listening on PORT ${PORT}`);
})