const router = require('express').Router();
const withAuth = require('../utils/auth');
const {User, blogPost, Comment } = require('../models')

router.get('/', async (req, res) => {     //homepage
  try {
    
    const allBlogs = await blogPost.findAll({
      include : [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
    
    // Serialize data so the template can read it
    const blogPosts = allBlogs.map((blog) => blog.get({ plain: true }));
  
    // Pass serialized data and session flag into template
    res.render('homepage', {
      blogPosts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/blogs/:id',async(req,res)=>{
  try{
    const reqBlog=await blogPost.findByPk(req.params.id,{
      include : [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })

    
    const blog = reqBlog.get({plain: true});
    res.render('blogPage',{
      ...blog,
      logged_in: req.session.logged_in
    })
  } catch(err){
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  console.log(req.session.logged_in)
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('login', { logged_in: req.session.logged_in });
});


module.exports = router;