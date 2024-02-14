import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

 const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2400);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const clickHandler = () => {
    setShowModal(false);
  };

  return showModal ? ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modla-container'>
        <div className='upper-section'>
          <h1>Hugs! Announcement!</h1>
          <button onClick={clickHandler} className='close'>&times;</button>
        </div>
        <div className='middle-section'>
          <h3>React mega tutorial is live!</h3>
          <p>Do you want to learn React?</p>
          <p>I've published a completely free React tutorial, check it out today!</p>
          <div>
            I bring to you this mega course where each month I will help you to learn about this library.
          </div>
        </div>
        <div className='lower-section'>
          {/* Additional content or buttons can be added here */}
          <button onClick={clickHandler} className='modal-btn btn-red'>Close</button>
          <a className='modal-btn btn-green' href='http://theleanprogrammer.com/aam/' target='_blank' rel='noreferrer'>
            Start tutorial
          </a>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  ) : null;
};
