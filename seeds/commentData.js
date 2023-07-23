const Comment = require('../models/Comment');

const commentData = [
    {
        body: 'Booooo',
        user_id: 2
    },
    {
        body: '*Emoji sad face here* You can do it! You got this!',
        user_id: 3
    },
    {

        body: 'The rooster takes his post! CAH-CAWWW!',
        user_id: 3
    }
];

const seedComments = () => { Comment.bulkCreate(commentData) };
module.exports = seedComments;