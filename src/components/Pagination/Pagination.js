import React from 'react';

export const  Pagination = ({pages, page, setPage, onClick}) => {
  const items = new Array(pages);

  return (
    <div className='pagination'>
      {[...items].map((_, index) => (
        <button className='pagination__buttons' key={index} type="button" onClick={() => onClick(index + 1)}>
          {index+1}
        </button>
      ))}
    </div>
  );
};
