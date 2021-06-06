import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './card.css';

const Card = () => {
  const [cardDetail, setCardDetail] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCardDetail({ ...cardDetail, [name]: value });
  };

  const handleFocus = (e) => {
    setCardDetail({ ...cardDetail, focus: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(cardDetail));
  };
  return (
    <div style={{ paddingTop: '50px' }}>
      <Cards
        number={cardDetail.number}
        name={cardDetail.name}
        expiry={cardDetail.expiry}
        cvc={cardDetail.cvc}
        focused={cardDetail.focus}
      />
      <div className='form-container'>
        <form>
          <div style={{ width: '350px' }}>
            <div className='form-div'>
              <div className='form-label'>
                <label>Card Number</label>
              </div>
              <input
                type='text'
                name='number'
                placeholder='Card Number'
                value={cardDetail.number}
                onChange={handleInput}
                onFocus={handleFocus}
                maxLength='16'
                className='form-input'
              />
            </div>
          </div>
          <div className='form-div'>
            <div className='form-label'>
              <label>Card Holder</label>
            </div>
            <input
              type='text'
              name='name'
              placeholder='Your Name Here'
              value={cardDetail.name}
              onChange={handleInput}
              onFocus={handleFocus}
              className='form-input'
            />
          </div>
          <div className='form-div'>
            <div className='form-label'>
              <label>Expiration Date</label>
            </div>
            <input
              type='text'
              name='expiry'
              placeholder='MM/YY - Valid Thru'
              value={cardDetail.expiry}
              onChange={handleInput}
              onFocus={handleFocus}
              maxLength='4'
              className='form-input'
            />
          </div>
          <div className='form-div'>
            <div className='form-label'>
              <label>CVV</label>
            </div>
            <input
              type='text'
              name='cvc'
              placeholder='CVV'
              value={cardDetail.cvc}
              onChange={handleInput}
              onFocus={handleFocus}
              maxLength='4'
              className='form-input'
            />
          </div>
          <button type='submit' className='form-button' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card;
