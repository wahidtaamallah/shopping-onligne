import React from 'react';

import ShopeItem from './ShopeItem';

const ShopeList = ({ products }) => {
  return (
    <div className='browseList'>
      {products?.map((product, index) => (
        <ShopeItem product={product} key={index} />
      ))}
    </div>
  );
};

export default ShopeList;
