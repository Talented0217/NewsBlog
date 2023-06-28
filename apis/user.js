const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/allUsers', async (req, res) => {
    try {

        const user = await User.find({});
        if (user) {
            return res.json(user);
        }
        return res.status(500).json({ msg: 'user not defined' });
    }
    catch {
        return res.status(500).json({ msg: 'server error' });
    }
})

module.exports = router;