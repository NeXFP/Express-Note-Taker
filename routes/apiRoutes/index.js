const router = require("express").Router();
const createNotes = require("../../lib/notes");
const {notesArr} = require("../../data/db");


router.get("/notes", function(req, res) {
      
    res.json(notesArr);

});



router.post("/notes", function(req, res) {
    req.body.id = notesArr.length.toString();
    const noteReturn = createNotes(req.body, notesArr)
    res.json(noteReturn);
});


module.exports = router; 