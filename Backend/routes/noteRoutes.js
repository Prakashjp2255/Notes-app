const express = require ("express");
const router = express.Router();
const notes = require ("../controller/noteController");
const authenticateUser = require("../authenticate/authentication");

router.post('/create-note', authenticateUser, notes.createNote , async(req , res) => {
    try {
        const { title, content, tags, isPinned } = req.body;

        const newNote = new Note({
            title,
            content,
            tags,
            isPinned,
            userId: req.user.id   // Automatically take from token
        });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);

    } catch (err) {
        res.status(500).json({ message: 'Error creating note', error: err });
    }

});

router.get('/all-note' , authenticateUser , notes.getAllNotes );
router.put('/update-note/:id' , authenticateUser , notes.updateNotes );
router.delete('/delete-note/:id' , authenticateUser , notes.deleteNote );
module.exports = router ;
