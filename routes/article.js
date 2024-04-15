const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('in aticles')
})



module.exports = router