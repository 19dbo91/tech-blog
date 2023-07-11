const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');

//User hasMany BlogPost

//BlogPost belongsTo a User

//BlogPost hasMany Comment

//User hasMany Comment

//Comment belongsTo a User


module.exports = { BlogPost, Comment, User };