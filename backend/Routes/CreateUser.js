const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const jwtSecret = "Hellohowareyou";

router.post("/createuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                password: secPassword,   /* for using salt change req.body.password into secPassword to save data into database  */
                email: req.body.email,
                location: req.body.location
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })
router.post("/loginuser", body('email').isEmail(),

    body('password', 'Incorrect Password').isLength({ min: 5 }), async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }   

        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try logging with correct Credentials" })
            }
            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
            if(!pwdCompare){
                return res.status(400).json({ errors: "Try logging with correct credentials"})
            }
            const data = {
                user:{
                    id:userData.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret)                // jwt secret key assigned   
            
            return res.json({success: true, authToken:authToken})     //request generated  means request goto the Database

            // if (req.body.password !== userData.password) {
            //     return res.status(400).json({ errors: "Try logging with correct Credentials" })  // this code is before using JWT
            // }

         // res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    });

module.exports = router;

// To check request and insert user in database using (Thunder Client) extension,
// POST method URL = http://localhost:5000/api/createuser

// to check requrest and insert user in database using (inthunder client) extension and this will create/ add the user in your database using CreateUser.js router
//   in post method     localhost:5000/api/createuser

// for checking Validation in (thunder Client )
// post url = localhost:5000/api/createuser