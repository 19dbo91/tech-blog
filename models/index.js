//#region Importing dependencies...
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');
//#endregion

//User hasMany BlogPost
User.hasMany(BlogPost,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//BlogPost belongsTo a User
BlogPost.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });


//BlogPost hasMany Comment
BlogPost.hasMany(Comment,{
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

//Comment belongsTo a BlogPost
Comment.belongsTo(BlogPost,{
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

//User hasMany Comment
User.hasMany(Comment,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
//Comment belongsTo a User
Comment.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { BlogPost, Comment, User };