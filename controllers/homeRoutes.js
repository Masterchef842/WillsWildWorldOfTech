const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, blogPost, Comment } = require('../models')

router.get('/', async (req, res) => {     //homepage
  try {

    const allBlogs = await blogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })

    // Serialize data so the template can read it
    const blogPosts = allBlogs.map((blog) => blog.get({ plain: true })).reverse();

    // Pass serialized data and session flag into template
    res.render('homepage', {
      blogPosts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


//dashboard 
router.get('/dashboard', withAuth,async (req, res)=>{
  try{
    
    const allBlogs = await blogPost.findAll({where:{
      user_id : req.session.user_id
    }})
    const blogPosts = allBlogs.map((blog) => blog.get({ plain: true })).reverse();


    const allComments = await Comment.findAll({where:{
      user_id : req.session.user_id
    }})
    const commentList = allComments.map((com) => com.get({ plain: true }) ).reverse()

    res.render('dashboard',{
      blogPosts,
      commentList,
      username: req.session.username,
      logged_in: req.session.logged_in,
    })

  }catch(err){
    res.status(500).json(err);
  }
})


//individual post
router.get('/blogs/:id',withAuth, async (req, res) => {
  try {
    const reqBlog = await blogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },

      ],
    })
    const comData = await Comment.findAll({
      where: { post_id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['username'],
        },

      ],
    })
  
    const comList = comData.map((com) => com.get({ plain: true }) ).reverse()
  
    const blog = reqBlog.get({ plain: true });
    res.render('blogPage', {
      ...blog,
      comList,
      logged_in: req.session.logged_in,
  
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

//login page
router.get('/login', (req, res) => {
  console.log(req.session.logged_in)
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', { logged_in: req.session.logged_in });
});


module.exports = router;