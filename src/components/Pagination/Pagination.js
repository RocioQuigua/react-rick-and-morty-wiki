import React from 'react';

export const  Pagination = ({pages, page, setPage}) => {
  const items = new Array(pages);

  return (
    <div className='pagination'>
      {[...items].map((_, index) => (
        <button className='pagination pagination__buttons' key={index} type="button">
          {index+1}
        </button>
      ))}
    </div>
  );
};
