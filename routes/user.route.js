const express = require('express');
const app = express();
const userRoute = express.Router();
let UserModel = require('../model/user');
userRoute.route('/').get((req, res) => {
    UserModel.find((error, user) => {
        if (error) {
            return next(error);
        } else {
            res.json(user);
            console.log('Users logged!');
        }
    })
});
userRoute.route('/register').post((req, res, next) => {
    UserModel.create(req.body, (err, user) => {
        if (err) {
            return next(err)
        } else {
            res.json(user)
            console.log('User created!')
        }
    })
});