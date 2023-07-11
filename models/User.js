const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id:{},
        name:{},
        blogpost_id:{},
        comment_id:{},
        password:{}
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
)


module.exports = User;