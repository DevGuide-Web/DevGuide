import React, { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import "./questioner.css";
import { fetchQuestioner } from "../../../redux";
import { connect } from "react-redux";

function Questioner({ data, userData, fetchQuestioner }) {
  const [questionOne, setQuestionOne] = useState("");
  const [questionTwo, setQuestionTwo] = useState("");
  const [questionThree, setQuestionThree] = useState("");
  const [questionFour, setQuestionFour] = useState("");
  const [questionFive, setQuestionFive] = useState("");
  const [note, setNote] = useState(false);


  const submitFeed = () =>
    {
      if (!questionOne || !questionTwo ||!questionThree ||!questionFour ||!questionFive) {
        return setNote(true);
      }
      fetchQuestioner(
      userData.Authorization,
      questionOne,
      questionTwo,
      questionThree,
      questionFour,
      questionFive
    );}

  return (
    <div>
      <NavBar />
      <div className="feedback-content">
        <div className="feedback-control">
          <div className="feedback-detail">
            <div className="feedback-title">
              <h1>Feedback User</h1>
            </div>
            <div className="feed-one">
              <h4>
                Bagaimana tingkat kepuasan Anda dalam menggunakan website kami?
              </h4>
              <br></br>
              <div className="feedback-inputScale">
                <div>
                  <input
                    type="radio"
                    name="scaleInput1"
                    onChange={(event) => {
                      setQuestionOne("Tidak Puas");
                    }}
                  />
                  <label htmlFor="1">Tidak Puas</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="scaleInput1"
                    onChange={(event) => {
                      setQuestionOne("Kurang Puas");
                    }}
                  />
                  <label htmlFor="2">Kurang Puas</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="scaleInput1"
                    onChange={(event) => {
                      setQuestionOne("Biasa Saja");
                    }}
                  />
                  <label htmlFor="3">Biasa Saja</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="scaleInput1"
                    onChange={(event) => {
                      setQuestionOne("Puas");
                    }}
                  />
                  <label htmlFor="4">Puas</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="scaleInput1"
                    onChange={(event) => {
                      setQuestionOne("Sangat Puas");
                    }}
                  />
                  <label htmlFor="5">Sangat Puas</label>
                </div>
              </div>
            </div>
            <br></br>
            <div className="feed-two">
              <h4>
                Bagaimana tingkat kenyamanan Anda dalam menggunakan website
                kami?
              </h4>
              <br></br>
              <div className="feedback-inputScale">
                <div>
                  <input
                    type="radio"
                    name="scaleInput2"
                    onChange={(event) => {
                      setQuestionTwo("Tidak Nyaman");
                    }}
                  />
                  <label htmlFor="1">Tidak Nyaman</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="scaleInput2"
                    onChange={(event) => {
                      setQuestionTwo("Kurang Nyaman");
                    }}
                  />
                  <label htmlFor="2">Kurang Nyaman</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="scaleInput2"
                    onChange={(event) => {
                      setQuestionTwo("Biasa Saja");
                    }}
                  />
                  <label htmlFor="3">Biasa Saja</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="scaleInput2"
                    onChange={(event) => {
                      setQuestionTwo("Nyaman");
                    }}
                  />
                  <label htmlFor="4">Nyaman</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="scaleInput2"
                    onChange={(event) => {
                      setQuestionTwo("Sangat Nyaman");
                    }}
                  />
                  <label htmlFor="5">Sangat Nyaman</label>
                </div>
              </div>
            </div>
            <br></br>
            <div className="feed-three">
              <h4>
                Apakah semua fitur dan desain yang tersedia mudah dipahami?
              </h4>
              <div className="feedback-inputOption1">
                <div className="inputOption-controller">
                  <div>
                    <input
                      type="radio"
                      name="optionInput1"
                      onChange={(event) => {
                        setQuestionThree("Sangat Mudah Dipahami");
                      }}
                    />
                    <label htmlFor="1">Sangat Mudah Dipahami</label>
                  </div>
                  <br></br>
                  <div>
                    <input
                      type="radio"
                      name="optionInput1"
                      onChange={(event) => {
                        setQuestionThree("Mudah Dipahami");
                      }}
                    />
                    <label htmlFor="2">Mudah Dipahami</label>
                  </div>
                  <br></br>
                  <div>
                    <input
                      type="radio"
                      name="optionInput1"
                      onChange={(event) => {
                        setQuestionThree("Cukup Mudah Dipahami");
                      }}
                    />
                    <label htmlFor="3">Cukup Mudah Dipahami</label>
                  </div>
                  <br></br>
                  <div>
                    <input
                      type="radio"
                      name="optionInput1"
                      onChange={(event) => {
                        setQuestionThree("Sulit Dipahami");
                      }}
                    />
                    <label htmlFor="4">Sulit Dipahami</label>
                  </div>
                  <br></br>
                  <div>
                    <input
                      type="radio"
                      name="optionInput1"
                      onChange={(event) => {
                        setQuestionThree("Sangat Sulit Dipahami");
                      }}
                    />
                    <label htmlFor="5">Sangat Sulit Dipahami</label>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="feed-four">
              <h4>Apakah website kami sudah memenuhi kebutuhan Anda?</h4>
              <br></br>
              <div className="feedback-inputOption2">
                <div>
                  <input
                    type="radio"
                    name="optionInput2"
                    onChange={(event) => {
                      setQuestionFour("Tidak Memenuhi");
                    }}
                  />
                  <label htmlFor="1">Tidak Memenuhi</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="optionInput2"
                    onChange={(event) => {
                      setQuestionFour("Cukup Memenuhi");
                    }}
                  />
                  <label htmlFor="2">Cukup Memenuhi</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="optionInput2"
                    onChange={(event) => {
                      setQuestionFour("Sangat Memenuhi");
                    }}
                  />
                  <label htmlFor="3">Sangat Memenuhi</label>
                </div>
              </div>
            </div>
            <br></br>
            <div className="feed-five">
              <h4>
                Berikan kritik dan saran anda mengenai website kami melalui kolom dibawah ini.
              </h4>
              <br></br>
              <div className="feedback-inputText">
                <textarea
                  type="text"
                  placeholder="Type Here!"
                  className="feedInput"
                  onChange={(event) => {
                    setQuestionFive(event.target.value);
                  }}
                />
              </div>
              {/* {note && <h4>Please fill all the field above!</h4>} */}
              {note && alert("Please fill all the field above!")}
              {note && setNote(false)}
              {data.data.status && alert("Feedback has been sent, Thank you for your feedback")}
            </div>
            
            <div className="feedback-button">
              <button className="feedButton" onClick={submitFeed}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.questioner,
    userData: state.login.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestioner: (
      headers,
      questionOne,
      questionTwo,
      questionThree,
      questionFour,
      questionFive
    ) =>
      dispatch(
        fetchQuestioner(
          headers,
          questionOne,
          questionTwo,
          questionThree,
          questionFour,
          questionFive
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questioner);
