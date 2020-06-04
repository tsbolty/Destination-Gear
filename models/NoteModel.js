const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  body: String,
  userEmail: String,
  location: String,
  id: Number
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;