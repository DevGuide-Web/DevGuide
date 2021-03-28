import { QUESTIONER_SEND, QUESTIONER_FAILED } from "./questionerTypes";
import axios from "axios";

export const fetchQuestioner = (
  headers,
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive
) => {
  return (dispatch) => {
    axios
      .post(
        "https://127.0.0.1/utils/kuesioner/",
        {
          pertanyaan_1: questionOne,
          pertanyaan_2: questionTwo,
          pertanyaan_3: questionThree,
          pertanyaan_4: questionFour,
          pertanyaan_5: questionFive,
        },
        {
          headers: {
            Authorization: headers,
          },
        }
      )
      .then((response) => {
        // response.data is the users
        const questioners = response.data;
        dispatch(questionerSend(questioners));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(questionerFailure(error.message));
      });
  };
};

export const questionerSend = (data) => {
  return {
    type: QUESTIONER_SEND,
    payload: data,
  };
};

export const questionerFailure = (error) => {
  return {
    type: QUESTIONER_FAILED,
    payload: error,
  };
};
