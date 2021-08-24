import React, { useState } from 'react';
import people from './data';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  let [index, setIndex] = useState(0);
  const clickleft = () => {
    setIndex((index + people.length - 1) % people.length);
  };
  const clickright = () => {
    setIndex((index + 1) % people.length);
  };
  const clicksuprise = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };
  return (
    <main>
      <div className='title'>
        <h2>Reviews</h2>
        <div className='underline'></div>
      </div>
      <div className='container' key={people[index].id}>
        <div className='review'>
          <div className='img-container'>
            <img
              src={people[index].image}
              alt={people[index].name}
              className='person-img'
            />
          </div>
          <div>
            <h2 className='author'>{people[index].name}</h2>
            <h2 className='job'>{people[index].job}</h2>
            <p className='info'>{people[index].text}</p>
            <div>
              <span onClick={clickleft} className='prev-btn'>
                &#x276E;
              </span>
              <span onClick={clickright} className='prev-btn'>
                &#x276F;
              </span>
            </div>
          </div>
          <button onClick={clicksuprise} className='random-btn'>
            Suprise Me
          </button>
        </div>
      </div>
    </main>
  );
};

export default Review;
