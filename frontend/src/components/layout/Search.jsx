import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchIcon } from 'components/icons';

const Search = () => {
  const [text, setText] = useState('');
  const history = useHistory();

  return (
    <div className='navbar__search'>
      <input
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            if (text !== '') {
              history.push(`/browse/${text}`);
            } else {
              history.push('/browse');
            }
          }
        }}
        type='text'
        className='navbar__search-input'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SearchIcon
        className='navbar__search-icon'
        onClick={() => {
          if (text !== '') {
            history.push(`/browse/${text}`);
          } else {
            history.push('/browse');
          }
        }}
      />
    </div>
  );
};

export default Search;
