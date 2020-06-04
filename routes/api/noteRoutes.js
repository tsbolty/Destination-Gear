const router = require("express").Router();
const db = require("../../models");

router.post("/note", ({body}, res)=>{
    db.Note.create(body).then(data => res.json(data))
})

router.get("/note", (req, res)=>{
    db.Note.find()
        .then(data=> res.json(data))
})

// router.delete("/delete/:id", (req, res)=>{
//     db.Note.findById(req.params.id, (err, data)=>{
//         if(err) console.log("ya didn't do it right")
//         res.json(data)
//     })
// })

module.exports = router;