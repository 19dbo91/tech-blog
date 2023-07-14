const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        body:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        blogpost_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'BlogPost',
                key: 'id',
            },
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',
    }
)


module.exports = Comment;