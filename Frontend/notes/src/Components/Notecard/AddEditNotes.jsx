import axios from "axios";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ onclose ,  allnotes, setAllNotes  }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [createNotes, setCreateNotes] = useState(null);
  const [error, setError] = useState(null);

  const addNote = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const res = await axios.post(
        'http://localhost:5000/admin/create-note',
        {
          title,
          content,
          tags: tags.split(',').map(tag => tag.trim()),
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      );
  
      console.log("Response after adding note:", res.data);
  
      // Use according to your API response
      if (res.data.newNote) {
        setAllNotes([...allnotes, res.data.newNote]);
      } else {
        setAllNotes([...allnotes, res.data]);
      }
  
      setAllNotes([...allnotes, res.data.newNote]);
      setError(null);
      onclose(); 
    } catch (error) {
      setError(error.response?.data?.error || "Something went wrong");
    }
  };
  

  return (
    <div className="ff fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-cream rounded-xl shadow-lg p-6 w-full max-w-md relative">

        {/* Close Button */}
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center absolute top-3 right-3 hover:bg-slate-50 z-10"
          onClick={onclose}
        >
          <MdClose className="text-xl text-brightorange" />
        </button>

        {/* Form Content */}
        <div className="flex flex-col gap-3">
          <label className="text-darkteal font-semibold text-sm">TITLE</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-sm border border-skyblue p-2 rounded-lg outline-none"
            placeholder="Ex: Wake at 4pm"
          />

          <label className="text-darkteal font-semibold text-sm mt-4">CONTENT</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="text-sm text-darkteal placeholder-gray-400 p-3 rounded-lg border border-skyblue outline-none resize-none"
            placeholder="Add your content....."
            rows={8}
          />

          <label className="text-darkteal font-semibold text-sm mt-4">TAGS</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="text-sm border border-skyblue p-2 rounded-lg outline-none"
            placeholder="Optional tags (comma separated)"
          />

          <button
            onClick={addNote}
            className="mt-6 w-full bg-brightorange text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
          >
            ADD
          </button>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* show error if exists */}
        </div>
      </div>
    </div>
  );
};

export default AddEditNotes;
