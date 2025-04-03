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
    <div className="rounded-lg bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-gray-400">{date}</span>
        </div>

        <AiOutlinePushpin className="" onClick={onPinNote} />
      </div>

      <p className=""> {content?.slice(0,60)} </p>
      <div className="text-xs font-light">
        {tags}
      </div>

      <div className="flex items-center gap-3">
        <IoMdCreate className=" hover:text-white" onClick={onEdit} />
        <MdDelete className=" hover:text-white" onClick={onDelete} />
      </div>

    </div>
  );
};

export default Notecard;
