import React from 'react';
import '../App.css';

const home = ({ history }) => {
  return (
    <div className='App' style={{ paddingTop: '20%' }}>
      <div>React Credit Card</div>
      <div style={{ margin: '20px 0 20px 0' }}>
        <button onClick={() => history.push('/lib-card')}>
          React Credit Card
        </button>
      </div>
      <div style={{ margin: '10px 0 20px 0' }}>
        <button onClick={() => history.push('/no-lib-card')}>
          Custom Credit Card
        </button>
      </div>
    </div>
  );
};

export default home;
