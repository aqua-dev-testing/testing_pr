const { exec } = require("child_process");

function getUser(req) {
  const userId = req.query.id;
  const query = "SELECT * FROM users WHERE id=" + userId;
  console.log(query);
}

function runCommand(cmd) {
  exec(cmd); 
}


module.exports = { getUser, runCommand };
