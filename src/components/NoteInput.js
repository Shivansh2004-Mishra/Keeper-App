import React, { useState } from "react";

const NoteInput = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    onAdd({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-white rounded shadow p-4 mb-6">
      <input
        className="w-full mb-2 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full mb-2 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default NoteInput;