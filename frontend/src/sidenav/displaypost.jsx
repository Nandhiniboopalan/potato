import React, { useState, useEffect } from "react";
import axios from "axios";
import "./displaypost.css";
const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  // const authToken =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NjU2OTkzMCwiZXhwIjoxNjk2NTcxMzcwfQ.4CWSW05xMgUaNmtvwu3P_5gWGOIyzMZEV4haDJpNGvc";
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8080/getposts", {
          // headers: {
          //   'Authorization':
          //     "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NjU3NTI2OSwiZXhwIjoxNjk2NTc2NzA5fQ.9aUZ4YmNAcwDNDfhHeP8-SjMABW9Qa_oLm-5JSmKxxo",
          //   "Content-Type": "application/json",
          // },
        });
        setPosts(response.data);
        console.log(response);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="displaying_img">
      <ul>
        {posts.map((
          post) => (
          <li key={post.id}>
            <img className="post_image" src={post.img} alt={post.caption} />
            <p className="post_caption">{post.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayPosts;
