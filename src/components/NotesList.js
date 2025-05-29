import React from "react";

const NotesList = ({ notes, onDelete }) => {
  // ✅ Check if onDelete is being passed correctly
  console.log("onDelete function:", onDelete);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {notes.map((note, idx) => (
        <div key={idx} className="bg-yellow-100 rounded shadow p-4 relative">
          <h2 className="font-bold text-lg mb-2">{note.title}</h2>
          <p className="text-gray-700">{note.content}</p>
          <button
            onClick={() => onDelete(idx)}
            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
