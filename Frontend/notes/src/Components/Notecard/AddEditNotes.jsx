import React from "react";
import { MdClose } from "react-icons/md";

const AddEditNotes = () => {
  return (
    <div className="ff fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-cream rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="bg-cream rounded-xl shadow-lg p-6 w-full max-w-md relative">
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center absolute top-3 right-3 hover:bg-slate-50 z-10"
            onClick={onclose}
          >
            <MdClose className="text-xl text-brightorange" />
          </button>

          <div className="flex flex-col gap-3">
            <label className="text-darkteal font-semibold text-sm">TITLE</label>
            <input
              type="text"
              className="text-sm border border-skyblue p-2 rounded-lg outline-none"
              placeholder="Ex: Wake at 4pm"
            />

            <label className="text-darkteal font-semibold text-sm mt-4">
              CONTENT
            </label>
            <textarea
              className="text-sm text-darkteal placeholder-gray-400 p-3 rounded-lg border border-skyblue outline-none resize-none"
              placeholder="Add your content....."
              rows={8}
            />

            <label className="text-darkteal font-semibold text-sm mt-4">
              TAGS
            </label>
            <input
              className="text-sm border border-skyblue p-2 rounded-lg outline-none"
              placeholder="Optional tags"
            />

            <button className="mt-6 w-full bg-brightorange text-white font-semibold py-3 rounded-xl hover:opacity-90 transition">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditNotes;
