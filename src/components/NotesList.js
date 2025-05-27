import React from "react";

const NotesList = ({ notes }) => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
    {notes.map((note, idx) => (
      <div key={idx} className="bg-yellow-100 rounded shadow p-4">
        <h2 className="font-bold text-lg mb-2">{note.title}</h2>
        <p className="text-gray-700">{note.content}</p>
      </div>
    ))}
  </div>
);

export default NotesList;