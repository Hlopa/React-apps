import React, {useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {

  const [term, setTerm] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    setTerm('');
  };

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={formHandler}>
        <div className='field'>
          <label>Video Search</label>
          <input
            type='text'
            onChange={(e) => setTerm(e.target.value)}
            value={term} />
        </div>
      </form>
    </div>
  )
};

export default SearchBar;