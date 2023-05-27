const User = require('../../models/User');
const router = require('express').Router();





//create new user by visiting /api/user

router.post('/create', async (req, res) => {
    try {
        console.log("here")
        const userData = await User.create(req.body); //creates new user in the model

        req.session.save(() => {
            req.session.user_id = userData.id;  //for use in searching by profile (see homeroutes)
            req.session.logged_in = true;           //sets as logged in

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


//api/user/login to log into an existing user account stored in the model
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } }); //query of there is there a user with matching email

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password); //checkPassword unscrambles bcrypt thats sent with the user data

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;          //logged in
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});


//we should probably put a logout button somewhere
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {     //if logged in then log out
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;