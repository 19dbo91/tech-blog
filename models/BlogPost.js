const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
    {
        id:{},
        title:{},
        body:{},
        blogpost_id:{},
        comment_id:{},
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost',
    }
)


module.exports = BlogPost;