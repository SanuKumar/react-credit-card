import React, { useState, useEffect } from 'react';
import './CustomCreditCard.css';
import { cc_format } from '../helper';
import Visa from '../assets/images/visa.png';

const CreditCard = ({ cardInfo, cardDetail, cardFace, focus }) => {
  const [imageData, setImageData] = useState({});

  //get all the images from asserts
  useEffect(() => {
    const context = require.context('../assets/images', true, /.png$/);
    let obj = {};
    context.keys().forEach((key) => {
      const clientCode = key
        .split('./')
        .pop() // remove the first 2 characters
        .substring(0, key.length - 6); // remove the file extension
      obj[clientCode] = context(key);
    });
    setImageData(obj);
  }, []);

  return (
    <div className='card-container'>
      {!cardFace ? (
        <div>
          <div className='card-number'>{cc_format(cardDetail.number)}</div>
          <div className='card-name-label'>Card Holder</div>
          <div className='card-name'>{cardDetail.name}</div>
          <div>
            <img
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = Visa;
              }}
              src={imageData[`${cardInfo?.name?.toLowerCase()}`]?.default}
              alt=''
              style={{
                height: '20px',
                float: 'right',
                paddingRight: '6px',
                marginTop: '20px',
              }}
            />
          </div>
          <div className='card-expiry-label'>Expiries</div>
          <div className='card-expiry'>
            {cardDetail.month + '/' + cardDetail.year}
          </div>
        </div>
      ) : (
        <div>
          <p className='card-cvv-label'>CVV</p>
          <div className='card-cvv'>{cardDetail.cvc}</div>
          <div>
            <img
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = Visa;
              }}
              src={imageData[`${cardInfo?.name?.toLowerCase()}`]?.default}
              alt=''
              style={{
                height: '20px',
                float: 'right',
                padding: '4rem 1rem 0 0',
                marginTop: '20px',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCard;
