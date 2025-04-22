import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Notecard from "../Notecard/Notecard";
import { IoMdAdd } from "react-icons/io";
import AddEditNotes from "../Notecard/AddEditNotes";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import ScrollingImages from "../Left/ScrollingImages";

const Home = () => {
  const [openEditModal, setOpenEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  //get user info
  const [allnotes, setAllNotes] = useState([]);
  const [userinfo, setUserinfo] = useState(null);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const res = await axios.get(
        `http://localhost:5000/admin/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUserinfo(res.data);
      // const res = await axios.get(`http://localhost:5000/admin/user/${id}`);
      // setUserinfo (res.data);
      // console.log("User Response :" , res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
      if (error.res.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  // get all notes
  const getAllNotes = async (req, res) => {
    try {
      const res = await axios.get("http://localhost:5000/admin/all-note", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("fetchnotes:", res);
      setAllNotes(res.data);
    } catch (error) {
      console.log("An unexpected error occur");
    }
  };

  useEffect(() => {
    getUserInfo();
    getAllNotes();
  }, []);

  return (
    <div>
      <Header userinfo={userinfo} />
      {/* <div className="mt-6">
      <ScrollingImages />
      </div> */}

      <div className="container mx-auto mt-6">
        <div className="grid grid-cols-3 gap-3 mt-8">
          {allnotes?.map((item, index) => (
            item && item.title && (
              <Notecard
              key={item._id}
              title={item.title}
              date={moment(item.createdOn).format("DD MMM YYYY")}
              content={item.content}
              tags={item.tags}
              ispinned={item.isPinned}
              onEdit={() => {}}
              onDelete={() => {}}
              onPinNote={() => {}}
            />
            )
          ))}

          {/* <Notecard
            title="meet on 7pm"
            date="4th apr 2025"
            content="loremipsum"
            tags="#meet"
            ispinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          /> */}

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
            <AddEditNotes
              onclose={() =>
                setOpenEditModal({ isShown: false, type: "add", data: null })
              }
              allnotes={allnotes} // send allnotes
              setAllNotes={setAllNotes} // send setAllNotes
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
