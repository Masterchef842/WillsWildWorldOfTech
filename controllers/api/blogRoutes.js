const blogPost =require("../../models/blogPost");
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await blogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.redirect('/dashboard');
  } catch (err) {
    res.status(400).json(err);
  }
});
router.put('/edit', withAuth, async (req, res) => {
  try {
    const updateBlogPost = await blogPost.findByPk(req.body.id);
    updateBlogPost.update({
      title:req.body.title,
      content: req.body.content
    })
    res.status(200).json(updateBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogPostData = await blogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogPostData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
