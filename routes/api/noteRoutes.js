const router = require("express").Router();
const db = require("../../models");

router.post("/note", ({body}, res)=>{
    db.Note.create(body, {new: true}).then(data => res.json(data))
})

router.get("/note", (req, res)=>{
    db.Note.find()
        .then(data=> res.json(data))
})

router.delete("/note", (req, res)=>{
    db.Note.findByIdAndDelete(req.body.id)
    .then(()=>{
        res.json(true)
    })
    .catch(err =>{
        res.json(err)
    })
})

module.exports = router;