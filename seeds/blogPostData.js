const BlogPost = require('../models/BlogPost');

const blogPostData = [
    {
        title: 'My First Blog',
        body: 'This will be my very first post to my new blog',
        user_id: 1
    },
    {
        title: 'On Second Thought...',
        body: 'I am skeptical this will work out well for me... I shall persist',
        user_id: 1
    },
    {
        title: 'But on the Third Day,',
        body: 'I arise from the ashes of the past, like phoenix reborn. I shall persist',
        user_id: 1
    }
];

const seedBlogPosts = () => { BlogPost.bulkCreate(blogPostData) };
module.exports = seedBlogPosts;