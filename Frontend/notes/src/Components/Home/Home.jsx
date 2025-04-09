import React, { useState } from "react";
import Header from "../Header/Header";
import Notecard from "../Notecard/Notecard";
import { IoMdAdd } from "react-icons/io";
import AddEditNotes from "../Notecard/AddEditNotes";
import Modal from "react-modal";

const Home = () => {
  const [openEditModal, setOpenEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <div>
      <Header />
      


      <div className="container mx-auto mt-6">
        <div className="grid grid-cols-3 gap-3 mt-8">
          <Notecard
            title="meet on 7pm"
            date="4th apr 2025"
            content="loremipsum"
            tags="#meet"
            ispinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <Notecard
            title="meet on 7pm"
            date="4th apr 2025"
            content="loremipsum"
            tags="#meet"
            ispinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <Notecard
            title="meet on 7pm"
            date="4th apr 2025"
            content="loremipsum"
            tags="#meet"
            ispinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <button
            className="fixed bottom-4 right-4 w-16 h-16 items-center flex justify-center rounded-full bg-brightorange  hover:text-orange-600 shadow-lg"
            onClick={() => {
              setOpenEditModal({ isShown: true, type: "add", data: null });
            }}
          >
            <IoMdAdd className="text-[32px] text-white" />
          </button>

          <Modal
            isOpen={openEditModal.isShown}
            onRequestClose={() => {}}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0,0.2)",
              },
            }}
            contentLabel=""
            className="w-[40%] max-h-3/4 rounded-lg mx-auto mt-14 p-5 "
          >
             <AddEditNotes onclose={() => setOpenEditModal({ isShown: false, type: "add", data: null })} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
