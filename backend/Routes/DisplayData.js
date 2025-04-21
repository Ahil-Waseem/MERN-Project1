const express = require('express')
const router = express.Router()

router.post('/foodData', (req,res)=>{     // here foodData is a end point/URL for check the data in Thunderclient 
    try {
        // console.log(global.food_items)
        res.send([global.foodData, global.foodCategory])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }

})
module.exports = router;