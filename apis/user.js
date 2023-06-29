const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/all', async (req, res) => {
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

router.get('/user/:id', async (req, res) => {

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