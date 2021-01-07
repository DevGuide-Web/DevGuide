import React, { useEffect, useState } from "react";
import NavBar from "../../../NavBar/NavBar";
import "./comment.css";
import {
  fetchPostSubComment,
  fetchSpecific,
  fetchSubComment,
} from "../../../../redux";
import { connect } from "react-redux";

function Comment({
  fetchSpecific,
  fetchSubComment,
  fetchPostSubComment,
  datapostSubComment,
  dataSpecific,
  dataSubComment,
  userData,
  match,
}) {
  useEffect(() => {
    fetchSpecific(match.params.id, userData.data.Authorization);
    fetchSubComment(match.params.id, userData.data.Authorization);
  }, []);

  const [detail, setDetail] = useState("");
  const [note, setNote] = useState(false);

  const postSubComment = () => {
    if (!detail) {
      return setNote(true);
    }
    window.location.reload()
    return fetchPostSubComment(
      match.params.id,
      userData.data.Authorization,
      detail
    );
  };

  return (
    <>
      <NavBar />
      <div className="parentCommentDiv">
        <div className="parentCommentDetail">
          <div className="parentCommentComponent">
            <div className="parentCommentHeader">
              <h2>by {dataSpecific.data.username}</h2>
              <h4>{dataSpecific.data.DateTime}</h4>
            </div>
            <div className="parentCommentContent">
              <h3>{dataSpecific.data.Title}</h3>
              <p className="parentCommentDesc">{dataSpecific.data.detail}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="childCommentDiv">
        <div className="childCommentDetail">
          <div className="replyDiv">
            <div className="replyControl">
              <div className="replyUser">Reply as {userData.data.username}</div>
              <div className="replyForm">
                {note && <h4>Please fill the field below!</h4>}
                <textarea
                  type="text"
                  placeholder="Type Here!"
                  className="inputReply"
                  onChange={(event) => {
                    setDetail(event.target.value);
                  }}
                />
                <div className="replyButtonControl">
                  <button className="replyButton" onClick={postSubComment}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h1>All Replies</h1>
          {dataSubComment.data &&
            dataSubComment.data.map((subComment, index) => (
              <div key={index} className="childCommentComponent">
                <div className="childCommentHeader">
                  <h2>by {subComment.username}</h2>
                  <h4>Date: {subComment.DateTime}</h4>
                </div>
                <div className="childCommentContent">
                  <p className="childCommentDesc">{subComment.detail}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    dataSubComment: state.subcomment,
    dataSpecific: state.specific,
    userData: state.login,
    datapostSubComment: state.post_subcomment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubComment: (id, headers) => dispatch(fetchSubComment(id, headers)),
    fetchSpecific: (id, headers) => dispatch(fetchSpecific(id, headers)),
    fetchPostSubComment: (id, headers, detail) =>
      dispatch(fetchPostSubComment(id, headers, detail)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
