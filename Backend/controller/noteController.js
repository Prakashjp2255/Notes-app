const noteModel = require("../models/noteModel.js");

// create notes
exports.createNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    // validation
    if (!title) {
      return res.status(400).json({ message: "Title is mandatory" });
    }
    if (!content) {
      return res.status(400).json({ message: "Content is mandatory" });
    }
    if (!tags) {
      return res.status(400).json({ message: "Tags are mandatory" });
    }

    // get userId from logged-in user (assuming middleware sets req.user)
    const userId = req.user.id; // <- You must have a middleware that sets req.user after login

    // create the note
    const note = new noteModel({
      title,
      content,
      tags,
      userId: userId,
    });

    await note.save();

    return res.status(201).json({
      note,
      message: "Note added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

// get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const allNotes = await noteModel.find();
    res.status(200).json(allNotes);
    console.log(allNotes);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

// update
exports.updateNotes = async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, content, tags, isPinned } = req.body;

    // Find the note by ID and update
    const updatedNote = await noteModel.findByIdAndUpdate(
      noteId,
      { title, content, tags, isPinned },
      { new: true } // return the updated document
    );
    if (!updatedNote) {
      return res.status(404).json({ error: true, message: "Note not found" });
    }

    return res.status(200).json({
      error: false,
      note: updatedNote,
      message: "Note updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "INTERNAL SERVER ERROR" });
  }
};
// delete
exports.deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const NoteDelete = await noteModel.findByIdAndDelete(noteId);
    if (!NoteDelete) {
      console.log("why error: ", NoteDelete);
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note Deleted Successfully " });
  } catch (error) {
    console.error("Error deleting Note:", error);
    res.status(500).json({ error: error.message || "INTERNAL SERVER ERROR" });
  }
};
