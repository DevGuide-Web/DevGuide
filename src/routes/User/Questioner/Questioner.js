import React, { useState } from 'react';
import Axios from 'axios';
import NavBar from '../../NavBar/NavBar';
import './questioner.css';

function Questioner() {
  const [questionOne, setQuestionOne] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  const [questionThree, setQuestionThree] = useState('');
  const [questionFour, setQuestionFour] = useState('');
  const [questionFive, setQuestionFive] = useState('');

  const feedSubmit = () => {
    alert('Feedback Submitted!');
  };

  return (
    <div>
      <NavBar />
      <div className='feedback-content'>
        <div className='feedback-control'>
          <div className='feedback-detail'>
            <div className='feedback-title'>
              <h1>Feedback Pengguna</h1>
            </div>
            <div className='feed-one'>
              <h4>
                Dari skala 1-5, Berapa tingkat kepuasan Anda dalam menggunakan
                website kami?
              </h4>
              <div className='feedback-inputScale'>
                <div>
                  <input
                    type='radio'
                    name='scaleInput1'
                    onChange={event => {
                      setQuestionOne('1');
                    }}
                  />
                  <label for='1'>1</label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='scaleInput1'
                    onChange={event => {
                      setQuestionOne('2');
                    }}
                  />
                  <label for='2'>2</label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='scaleInput1'
                    onChange={event => {
                      setQuestionOne('3');
                    }}
                  />
                  <label for='3'>3</label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='scaleInput1'
                    onChange={event => {
                      setQuestionOne('4');
                    }}
                  />
                  <label for='4'>4</label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='scaleInput1'
                    onChange={event => {
                      setQuestionOne('5');
                    }}
                  />
                  <label for='5'>5</label>
                </div>
              </div>
            </div>
            <br></br>
            <div className='feed-two'>
              <h4>
                Dari skala 1-5, Berapa tingkat kenyamanan Anda dalam menggunakan
                website kami?
              </h4>
              <div className='feedback-inputScale'>
                <div>
                  <input
                    type='radio'
                    name='scaleInput2'
                    onChange={event => {
                      setQuestionTwo('1');
                    }}
                  />
                  <label for='1'>1</label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='scaleInput2'
                    onChange={event => {
                      setQuestionTwo('2');
                    }}
                  />
                  <label for='2'>2</label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='scaleInput2'
                    onChange={event => {
                      setQuestionTwo('3');
                    }}
                  />
                  <label for='3'>3</label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='scaleInput2'
                    onChange={event => {
                      setQuestionTwo('4');
                    }}
                  />
                  <label for='4'>4</label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='scaleInput2'
                    onChange={event => {
                      setQuestionTwo('5');
                    }}
                  />
                  <label for='5'>5</label>
                </div>
              </div>
            </div>
            <br></br>
            <div className='feed-three'>
              <h4>
                Apakah semua fitur dan desain yang tersedia mudah dipahami?
              </h4>
              <div className='feedback-inputOption1'>
                <div className='inputOption-controller'>
                  <div>
                    <input
                      type='radio'
                      name='optionInput1'
                      onChange={event => {
                        setQuestionThree('Sangat Mudah Dipahami');
                      }}
                    />
                    <label for='1'>Sangat Mudah Dipahami</label>
                  </div>
                  <br></br>
                  <div>
                    <input
                      type='radio'
                      name='optionInput1'
                      onChange={event => {
                        setQuestionThree('Mudah Dipahami');
                      }}
                    />
                    <label for='2'>Mudah Dipahami</label>
                  </div>
                  <br></br>
                  <div>
                    <input
                      type='radio'
                      name='optionInput1'
                      onChange={event => {
                        setQuestionThree('Cukup Mudah Dipahami');
                      }}
                    />
                    <label for='3'>Cukup Mudah Dipahami</label>
                  </div>
                  <br></br>
                  <div>
                    <input
                      type='radio'
                      name='optionInput1'
                      onChange={event => {
                        setQuestionThree('Sulit Dipahami');
                      }}
                    />
                    <label for='4'>Sulit Dipahami</label>
                  </div>
                  <br></br>
                  <div>
                    <input
                      type='radio'
                      name='optionInput1'
                      onChange={event => {
                        setQuestionThree('Sangat Sulit Dipahami');
                      }}
                    />
                    <label for='5'>Sangat Sulit Dipahami</label>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className='feed-four'>
              <h4>Apakah website kami sudah memenuhi kebutuhan Anda?</h4>
              <div className='feedback-inputOption2'>
                <div>
                  <input
                    type='radio'
                    name='optionInput2'
                    onChange={event => {
                      setQuestionFour('Tidak Memenuhi');
                    }}
                  />
                  <label for='1'>Tidak Memenuhi</label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='optionInput2'
                    onChange={event => {
                      setQuestionFour('Cukup Memenuhi');
                    }}
                  />
                  <label for='2'>Cukup Memenuhi</label>
                </div>
                <div>
                  <input
                    type='radio'
                    name='optionInput2'
                    onChange={event => {
                      setQuestionFour('Sangat Memenuhi');
                    }}
                  />
                  <label for='3'>Sangat Memenuhi</label>
                </div>
              </div>
            </div>
            <br></br>
            <div className='feed-five'>
              <h4>
                Jika Anda mempunyai kritik dan saran mengenai website kami,
                silahkan isi dibawah ini.
              </h4>
              <div className='feedback-inputText'>
                <textarea
                  type='text'
                  placeholder='Type Here!'
                  className='feedInput'
                  onChange={event => {
                    setQuestionFive(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className='feedback-button'>
            <button className='feedButton' onClick={feedSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questioner;
