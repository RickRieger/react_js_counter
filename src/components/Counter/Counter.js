import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [jsPictureArray, setJsPictureArray] = useState([]);

  useEffect(() => {
    console.log(count);
    console.log(jsPictureArray);
    handleUpdateJsPictureArray();
  }, [count]);

  function handleAdd() {
    setCount(count + 1);

    return;
  }

  function handleMinus() {
    setCount(count - 1);
  }

  function handleUpdateJsPictureArray() {
    if (count >= 0) {
      setJsPictureArray(
        Array(count).fill(
          'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png'
        )
      );
    }
  }

  return (
    <div>
      <h1>JavaScript and React are Fun!</h1>
      <br />
      <h2>Rick Rieger</h2>
      <div className='count_container'>
        The count is: <span className='number'>{count}</span>
      </div>
      <div className='buttons'>
        <button
          className='minus'
          onClick={() => {
            handleMinus();
          }}
        >
          - 1
        </button>
        <button
          className='add'
          onClick={() => {
            handleAdd();
          }}
        >
          + 1
        </button>
      </div>
      <div className='pictures'>
        {jsPictureArray.map((picture, index) => {
          return (
            <span key={index}>
              <img src={picture}></img>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Counter;
