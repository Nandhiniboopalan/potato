import React from 'react'
import {AiFillHeart} from "react-icons/ai";
import {FaComment} from "react-icons/fa";
import "./PostCard.css";
 const PostCard = () => {
  return (
    <div className='p-2'>
        <div className='post w-60 h-60'>
            <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2023/09/30/14/17/ocean-8285752_640.jpg" alt=""/>
            <div className='overlay'>
                <div className='overlay-text flex justify-between'> 
                    <div>
                        <AiFillHeart></AiFillHeart> <span>10</span>
                    </div>
                    <div><FaComment /> <span>12</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default PostCard;