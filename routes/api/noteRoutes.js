const router = require("express").Router();
const db = require("../../models");

router.post("/note", ({body}, res)=>{
    db.Note.create(body).then(data => res.json(data))
})

router.get("/note", (req, res)=>{
    db.Note.find()
        .then(data=> res.json(data))
})

module.exports = router;