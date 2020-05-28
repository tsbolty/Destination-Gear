const router = require("express").Router();
const db = require("../../models");

router.post("/note", (req, res)=>{
    db.Note.create({
        title: req.body.title,
        body: req.body.body
    }).then(data => res.json(data))
})

module.exports = router;