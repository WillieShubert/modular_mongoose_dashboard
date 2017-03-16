var members = require('../controllers/members.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    members.show_all(req,res)
  })
  app.post('/members', function(req, res) {
    members.add_new(req,res)
  })
  app.get('/members/add', function(req, res) {
    res.render("members");
  })
  app.get('/members/:id', function(req, res) {
    members.show_one(req,res)
  })
  app.post('/members/:id', function(req, res) {
    members.update_one(req,res)
  })
  app.post('/destroy/:id/', function(req, res){
    members.delete(req, res)
  })
}
