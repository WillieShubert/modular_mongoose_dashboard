// Import mongoose
var mongoose = require('mongoose');
 // We are retrieving this Schema from our Models, named 'Member'
var Member = mongoose.model('Member');
mongoose.Promise = global.Promise;

module.exports = {
show_all : function(req, res) {
  Member.find({}, function(err, members) {
        if (!err) {
          console.log("Got members", members)
          res.render("index", {member: members});
        }
        else {
          console.log( "Members cannot be retrieved");
          res.render("index");
        }
      })
    },
  show_one: function(req, res) {
    console.log(req.params);
    Member.find({_id: req.params.id}, function(err, member) {
          if (!err) {
            console.log("Got member", member)
            res.render("edit", {member: member});
          }
          else {
            console.log( "Members cannot be retrieved. Try creating.");
            res.render("members");
          }
      })
    },
  add_new: function(req, res) {
      console.log("POST DATA", req.body);
      // create a new Member with the name and age corresponding to those from req.body
      var member = new Member({name: req.body.name, email: req.body.email, country: req.body.country, gender: req.body.gender, age: req.body.age});
      // Try to save that new Member to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
      member.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
          console.log('something went wrong');
        }
        else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a new journalist to the network!');
          res.redirect('/');
        }
      })
    },
  update_one: function(req, res) {
    console.log(req.params);
    // update a  Member
    Member.update({_id: req.params.id}, req.body, function(err, member){
      if(err){
        console.log(err);
      }
      else{
        console.log('successfully updated profile!', member);
         res.redirect('/');
       }
     });
    },
    delete: function(req, res){
      Member.remove({ _id: req.params.id }, function(err, result){
        if (err) { console.log(err); }
        res.redirect('/');
      });
    }
  }
