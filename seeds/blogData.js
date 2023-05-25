const blogPost = require("../models/blogPost")

const blogData = [
    {
        title: "25 reasons why murder isn't that bad",
        content: "Murder is a heinous crime that causes immense pain and suffering to the victim and their loved ones. It is a violation of the fundamental right to life and goes against the principles of justice and human decency. Society must condemn and punish murder to ensure the safety and well-being of its members. However...              Is it really THAT bad? I mean sure it sucks, but its kinda fun sometimes, no?",
        user_id: 1,
        likes: 50
    },
    {
        title: "10 tips for improving your programming skills",
        content: "To enhance your programming skills, consider the following tips: 1. Practice regularly by working on coding projects. 2. Read books and online resources to expand your knowledge. 3. Collaborate with other programmers through coding communities and forums. 4. Break complex problems into smaller, manageable tasks. 5. Seek feedback and learn from constructive criticism. 6. Stay updated with the latest programming languages and frameworks. 7. Debug and troubleshoot errors to enhance problem-solving skills. 8. Experiment with new coding techniques and algorithms. 9. Document your code for better readability and maintainability. 10. Stay persistent and never stop learning!",
        user_id: 3,
        likes: 28
    },
    {
        title: "The benefits of meditation for mental health",
        content: "Meditation has numerous benefits for mental health. It helps reduce stress and anxiety, improves focus and concentration, promotes emotional well-being, enhances self-awareness, and cultivates a sense of inner peace and tranquility. Regular meditation practice can also improve sleep quality, boost creativity, and foster a positive outlook on life. Incorporating meditation into your daily routine can have profound effects on your overall mental and emotional well-being.",
        user_id: 2,
        likes: 15
    },
    {
        title: "Exploring the wonders of deep-sea diving",
        content: "Deep-sea diving allows adventurers to explore the mesmerizing underwater world that is teeming with vibrant marine life, coral reefs, and captivating geological formations. It offers a unique opportunity to witness the beauty and biodiversity of the ocean firsthand. However, deep-sea diving requires proper training, equipment, and adherence to safety protocols. With the right skills and precautions, diving enthusiasts can embark on thrilling underwater journeys and create unforgettable memories.",
        user_id: 1,
        likes: 42
    },
    {
        title: "The art of effective public speaking",
        content: "Public speaking is a valuable skill that can open doors to various opportunities. To become an effective public speaker, it is important to practice and prepare thoroughly. Start by organizing your thoughts and structuring your speech. Engage the audience through storytelling, humor, or compelling anecdotes. Maintain eye contact and use body language to convey confidence and credibility. Practice speaking in front of a mirror or with a trusted friend to improve your delivery. Remember, the more you practice, the more confident and impactful you will become as a public speaker.",
        user_id: 3,
        likes: 9
    },
    {
        title: "Unveiling the mysteries of the universe",
        content: "The universe is a vast and mysterious place, filled with galaxies, stars, planets, and countless wonders waiting to be discovered. Scientists and astronomers dedicate their lives to unraveling the secrets of the cosmos. Through advanced telescopes, space probes, and mathematical models, we continue to expand our understanding of the universe's origins, evolution, and composition. The exploration of space not only fuels scientific curiosity but also inspires awe and wonder, reminding us of our place in the grand tapestry of existence.",
        user_id: 2,
        likes: 31
    },
    {
        title: "The importance of a balanced diet for optimal health",
        content: "Maintaining a balanced diet is crucial for optimal health and well-being. It provides essential nutrients, vitamins, and minerals that support bodily functions and promote overall vitality. A balanced diet includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. It helps prevent chronic diseases, supports a healthy weight, boosts energy levels, and enhances the immune system. By making conscious choices about what we eat, we can nourish our bodies and enjoy the benefits of long-term health.",
        user_id: 1,
        likes: 17
    },
    {
        title: "Embracing change: The key to personal growth",
        content: "Change is an inevitable part of life, and embracing it is essential for personal growth and development. By stepping out of our comfort zones and embracing new experiences, we open ourselves up to learning opportunities and self-discovery. Change challenges us to adapt, be resilient, and explore new possibilities. It allows us to break free from stagnation and pursue our dreams and aspirations. Embracing change can lead to personal transformation and a more fulfilling life.",
        user_id: 3,
        likes: 23
    },
    {
        title: "The impact of technology on society",
        content: "Technology has revolutionized society in numerous ways. It has transformed communication, transportation, healthcare, education, and many other aspects of our lives. While technology brings convenience and efficiency, it also raises ethical and social concerns. We must navigate the challenges of privacy, cybersecurity, and the digital divide. Harnessing technology's potential for positive change while addressing its drawbacks is crucial to shaping a future where technology benefits all of humanity.",
        user_id: 2,
        likes: 36
    },
    {
        title: "Unlocking creativity: Exploring different artistic mediums",
        content: "Creativity knows no bounds and can be expressed through various artistic mediums. Whether it's painting, sculpting, photography, writing, or music, each medium offers a unique way to convey emotions, thoughts, and ideas. Exploring different artistic mediums allows individuals to discover their creative strengths and experiment with different techniques. Engaging in artistic expression not only nurtures imagination but also promotes personal growth, self-expression, and emotional well-being.",
        user_id: 1,
        likes: 7
    }
]

const seedBlogs=()=>blogPost.bulkCreate(blogData)
module.exports= seedBlogs;