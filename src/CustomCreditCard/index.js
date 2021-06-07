import React, { useState, useRef, useEffect } from 'react';
import CreditCard from './creditCard';
import { CARD_TYPES, getCardType } from '../helper';

const CustomCreditCard = () => {
  const [cardDetail, setCardDetail] = useState({
    number: '',
    name: '',
    month: '',
    year: '',
    cvc: '',
    focus: '',
  });
  const [cardInfo, setCardInfo] = useState({});
  const yearSelectRef = useRef(null);
  const monthSelectRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const [cardFace, setCardFace] = useState(false);
  const MONTHS_NAMES_FULL = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCardDetail({ ...cardDetail, [name]: value });
  };

  useEffect(() => {
    for (var key in CARD_TYPES) {
      if (CARD_TYPES.hasOwnProperty(key)) {
        if (
          key === getCardType(cardDetail.number).toLowerCase() &&
          getCardType(cardDetail.number)
        ) {
          setCardInfo(CARD_TYPES[key]);
          return CARD_TYPES[key];
        } else {
          setCardInfo({});
        }
      }
    }
  }, [cardDetail.number]);

  const handleFocus = (e) => {
    if (e.target.name === 'cvc') {
      setCardFace(true);
    } else {
      setCardFace(false);
    }
    setCardDetail({ ...cardDetail, focus: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(cardDetail));
  };

  return (
    <div>
      <CreditCard
        cardInfo={cardInfo}
        cardDetail={cardDetail}
        cardFace={cardFace}
        focus={cardDetail.focus}
      />
      <div className='form-container' style={{ marginTop: '80px' }}>
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
          <div className='exp-div'>
            <div>
              <div className='form-label'>
                <label>Expiration Date</label>
              </div>
              <select
                onChange={handleInput}
                name='month'
                defaultValue={date.getMonth()}
                ref={monthSelectRef}
                onFocus={handleFocus}
                className='form-month'
              >
                {MONTHS_NAMES_FULL.map((month, index) => (
                  <option key={month} value={('0' + index).slice(-2)}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                defaultValue={date.getFullYear()}
                ref={yearSelectRef}
                onChange={handleInput}
                name='year'
                onFocus={handleFocus}
                className='form-year'
              >
                <option value={22}>2022</option>
                <option value={21}>2021</option>
                <option value={20}>2020</option>
                <option value={19}>2019</option>
                <option value={18}>2018</option>
                <option value={17}>2017</option>
                <option value={16}>2016</option>
                <option value={15}>2015</option>
              </select>
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
              />
            </div>
          </div>
          <button type='submit' className='form-button' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomCreditCard;
