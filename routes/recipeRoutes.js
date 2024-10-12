const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.send("Get method is working!")
})

// ROUTER .POST - .DELETE - .UPDATE

module.exports = router;