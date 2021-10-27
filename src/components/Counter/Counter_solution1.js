import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const pictureContainer = document.querySelector('.pictures');

  function handleAdd() {
    setCount(count + 1);
    if (count > -1) {
      let span = document.createElement('span');
      span.innerHTML =
        '<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" alt="">';
      pictureContainer.appendChild(span);
    }
    return;
  }

  function handleMinus() {
    setCount(count - 1);
    if (count > 0) {
      pictureContainer.removeChild(pictureContainer.lastElementChild);
    }
    return;
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
      <div className='pictures'></div>
    </div>
  );
}

export default Counter;
