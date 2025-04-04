import React from "react";
import { AiOutlinePushpin } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { MdDelete } from "react-icons/md";


const Notecard = ({
  title,
  date,
  content,
  tags,
  ispinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="kks rounded-lg p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs ">{date}</span>
        </div>

        <AiOutlinePushpin className={`icon-btn ${ispinned ? 'text-orange-200' : 'text-slate-300'}`} onClick={onPinNote} />
      </div>

      <p className="text-xs mt-2 "> {content?.slice(0,60)} </p>
      <div className="flex items-center justify-between mt-2"> 
      <div className="text-xs font-light">
        {tags}
      </div>

      <div className="flex items-center gap-3">
        <IoMdCreate className=" hover:text-orange-500" onClick={onEdit} />
        <MdDelete className=" hover:text-orange-500" onClick={onDelete} />
      </div>
      </div>
    </div>
  );
};

export default Notecard;
