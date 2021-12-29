import React, { useState, useEffect } from "react";
import "../App.css";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase_config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");

  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="ceratePostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGP">
          <label> Title</label>
          <input
            placeholder="Title.."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGP">
          <label> Post :</label>
          <textarea
            placeholder="Post.."
            className="inputGp textarea"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          ></textarea>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
