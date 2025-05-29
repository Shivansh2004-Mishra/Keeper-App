import React, { useState } from "react";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList"; // ✅ Import NotesList
import Alert from "./components/Alert";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [alert, setAlert] = useState("");

  // ✅ Function to add notes
  const addNote = (note) => {
    if (!note.title.trim() || !note.content.trim()) {
      setAlert("Title and Content cannot be empty!");
      return;
    }
    setNotes([...notes, note]);
    setAlert("");
  };

  // ✅ Function to delete notes
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <Header />
      <div className="w-full max-w-2xl mt-6">
        {alert && <Alert message={alert} />}
        <NoteInput onAdd={addNote} />
        <NotesList notes={notes} onDelete={deleteNote} /> {/* ✅ Added here */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
