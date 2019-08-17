// routes/foo/bar.js
const { send, json } = require('micro')

// respond to specific methods by exposing their verbs
module.exports.GET = async function(req, res) {
  // fs-router decorates your req object with param and query hashes
  send(res, 200, { params: req.params, query: req.query })
}

module.exports.POST = async function(req, res) {
  const data = await json(req);
	console.log(data);
  return send(res, 200, data)
}
