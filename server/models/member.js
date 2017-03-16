var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
 name: String,
 email: String,
 country: String,
 gender: String,
 age: Number
})
mongoose.model('Member', MemberSchema); // We are setting this Schema in our Models as 'Member'
