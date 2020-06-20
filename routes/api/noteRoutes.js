const router = require("express").Router();
const db = require("../../models");

router.post("/note", ({body}, res)=>{
    db.Note.create(body)
    .then(data => res.json(data))
})

router.get("/note", (req, res)=>{
    db.Note.find()
        .then(data=> res.json(data))
})

router.delete("/note/:id", (req, res)=>{
    db.Note.findByIdAndDelete(req.params.id)
    .then(data=> res.json(data))
    .catch(err =>{
        res.json(err)
    })
})

module.exports = router;