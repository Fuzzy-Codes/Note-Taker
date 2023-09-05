const router = require('express').Router();
const { v4: uuidv4 } = require("uuid");
const {
    readFromFile,
    readAndAppend,
    readAndDelete,
} = require("../utils/helpers");

router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/notes", (req, res) => {
    const createNote = req.body;
    createNote.id = uuidv4();

    readAndAppend(createNote, "./db/db.json");
    res.json(createNote);
});


module.exports = router;

