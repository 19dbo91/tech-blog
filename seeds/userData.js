const User = require('../models/User');

const userData = [
    {
        name: 'TheOne',
        password: 'andOnly',
    },
    {
        name: 'TheCopyCat',
        password: 'andCourageTheCowardlyDog',
    },
    {
        name: 'TheThirdWheeler',
        password: 'myNameIsJoey',
    }
];

const seedUsers = () => { User.bulkCreate(userData) };
module.exports = seedUsers;