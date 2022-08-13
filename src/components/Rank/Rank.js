import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <span className='white f1 fw6'>
      {`Hello ${name} 👋`}
      </span>
      <div className='white f3'>
        {`your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;