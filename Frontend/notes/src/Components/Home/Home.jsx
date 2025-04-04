import React from "react";
import Header from "../Header/Header";
import Notecard from "../Notecard/Notecard";
import { IoMdAdd } from "react-icons/io";
import AddEditNotes from "../Notecard/AddEditNotes";
const Home = () => {
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

        

          <button className="fixed bottom-4 right-4 w-16 h-16 items-center flex justify-center rounded-full bg-brightorange  hover:text-orange-600 shadow-lg">
            <IoMdAdd className="text-[32px] text-white" />
          </button>

          <AddEditNotes/>

        </div>
      </div>
    </div>
  );
};

export default Home;
