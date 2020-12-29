import React from "react";
import NavBar from "../../../NavBar/NavBar";

function Comment() {
  return (
    <>
      <NavBar />
      <div className="commentDetail">
        <div className="parentComment">
          <div className="parentCommentDetail"></div>
        </div>
        <div className="childComment">
          <div className="childCommentDetail"></div>
        </div>
      </div>
    </>
  );
}

export default Comment;
