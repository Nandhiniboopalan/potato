import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import "./PCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa"; // or another appropriate import path
import { RiSendPlaneLine } from "react-icons/ri";
import { BsBookmarkFill } from "react-icons/bs"; // Ensure the correct import path
import { BsBookmark } from "react-icons/bs"; // Ensure the correct import path

const PCard = () => {
  const [ShowDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setisSaved] = useState(false);

  const handleSavePost = () => {
    setisSaved(!isSaved);
  };
  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };
  const handleClick = () => {
    setShowDropDown(!ShowDropDown);
  };
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            ></img>
            <div className="p1-2">
              <p className="font-semibold text-sm">username</p>
              <p className="font-thin text-sm">location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
              {ShowDropDown && (
                <p className="bg-black text-white py-1 px-4 rounded-md">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full"
            src="https://images.pexels.com/photos/18512393/pexels-photo-18512393/free-photo-of-person-lying-on-hay-and-holding-a-branch.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
          ></img>
        </div>
        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer "
                onClick={handlePostLike}
              />
            )}
            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity-50 sursor-pointer" />
          </div>
          <div className="sursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            ) : (
              <BsBookmark className="text-xl hover:opacity-50 cursor-pointer" />
            )}
          </div>
        </div>
        <div className="w-full py-2 px-5">
          <p>10 likes</p>
          {/* <p className="opaciity-50 py-2 cursor-pointer">
            view all 10 Comments
          </p> */}
        </div>
        {/* <div className="border border-t w-full" >
          <div className="flex w-full items-center px-5">
          <BsEmojiSmile></BsEmojiSmile>
          <input
            className="commentinput"
            type="text"
            placeholder="Add a comment."
          />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default PCard;
