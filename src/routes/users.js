const { Router } = require('express');
const router = Router();

const UserRepo = require('../repos/user-repo');

router.get('/users', async (req, res, next) => {
    const users = await UserRepo.find();
    return res.send(users);
});

router.get('/users/:id', async (req, res, next) => {
    const { id } = req.params;
    const user = await UserRepo.findById(id);

    if(user)
        return res.send(user);
    else
        return res.sendStatus(404);
});

router.post('/users', async (req, res, next) => {
 const { username, bio } = req.body;
 console.log(req.body);
 const user = await UserRepo.insert(username, bio);
 return res.send(user);
});

router.put('/users/:id', async (req, res, next) => {

});

router.delete('/users/:id', async (req, res, next) => {

});

module.exports = router;