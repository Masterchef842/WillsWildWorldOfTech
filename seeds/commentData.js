const Comment = require('../models/Comment')

const commentData=[
    {
        content: "Great insights! Thanks for sharing.",
        post_id: 2,
        user_id: 1,
        likes: 12
    },
    {
        content: "I completely agree with your points. Well written!",
        post_id: 4,
        user_id: 3,
        likes: 25
    },
    {
        content: "This post resonates with me. Keep up the good work!",
        post_id: 8,
        user_id: 2,
        likes: 48
    },
    {
        content: "Interesting perspective. I hadn't thought about it that way before.",
        post_id: 5,
        user_id: 1,
        likes: 6
    },
    {
        content: "I have a different opinion on this matter, but I respect your viewpoint.",
        post_id: 3,
        user_id: 3,
        likes: 10
    },
    {
        content: "Well researched and informative. Thanks for sharing your knowledge.",
        post_id: 1,
        user_id: 2,
        likes: 32
    },
    {
        content: "Awesome post! I enjoyed reading it.",
        post_id: 9,
        user_id: 1,
        likes: 19
    },
    {
        content: "This topic is so relevant. Thanks for addressing it.",
        post_id: 6,
        user_id: 3,
        likes: 41
    },
    {
        content: "I can relate to this on a personal level. Great job!",
        post_id: 7,
        user_id: 2,
        likes: 28
    },
    {
        content: "Nice work! Your writing style is engaging.",
        post_id: 10,
        user_id: 1,
        likes: 7
    },
    {
        content: "I have a question regarding your post. Can you provide more information?",
        post_id: 2,
        user_id: 3,
        likes: 14
    },
    {
        content: "I appreciate your insights. Well done!",
        post_id: 4,
        user_id: 2,
        likes: 37
    },
    {
        content: "Keep up the great work! Looking forward to more posts from you.",
        post_id: 8,
        user_id: 1,
        likes: 22
    },
    {
        content: "I disagree with your argument. Here's my perspective...",
        post_id: 5,
        user_id: 3,
        likes: 9
    },
    {
        content: "Your post has given me a lot to think about. Thank you!",
        post_id: 3,
        user_id: 2,
        likes: 45
    },
    {
        content: "I've shared this post with my friends. It's that good!",
        post_id: 1,
        user_id: 1,
        likes: 17
    },
    {
        content: "Great job on tackling such a complex topic!",
        post_id: 9,
        user_id: 3,
        likes: 36
    },
    {
        content: "I appreciate your effort in providing evidence to support your claims.",
        post_id: 6,
        user_id: 2,
        likes: 11
    },
    {
        content: "This post has inspired me to take action. Thank you!",
        post_id: 7,
        user_id: 1,
        likes: 49
    },
    {
        content: "Short and sweet! Well said.",
        post_id: 10,
        user_id: 3,
        likes: 5
    },
    {
        content: "I'm curious about the sources you used for this post. Can you share them?",
        post_id: 2,
        user_id: 1,
        likes: 30
    },
    {
        content: "I've learned something new from your post. Thank you!",
        post_id: 4,
        user_id: 3,
        likes: 21
    },
    {
        content: "I can't agree more. This post is spot on!",
        post_id: 8,
        user_id: 2,
        likes: 42
    },
    {
        content: "You've provided a fresh perspective on this topic. Well done!",
        post_id: 5,
        user_id: 1,
        likes: 8
    },
    {
        content: "I'm not convinced by your arguments. Here's why...",
        post_id: 3,
        user_id: 3,
        likes: 13
    }
]

const seedComments=()=>Comment.bulkCreate(commentData)

module.exports=seedComments;