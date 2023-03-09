import React from 'react';

function Search({
  placeholder,
  onChangeSearchInput,
  searchValue,
  onClickClearSearchInput,
}) {
  return (
    <div className='relative flex w-72 rounded-lg border border-gray-300 p-2'>
      <img src='icon/search.svg' alt='Search' />
      <input
        onChange={onChangeSearchInput}
        value={searchValue}
        className='pl-3 text-base'
        placeholder={placeholder}
        type='text'
      />
      {searchValue && (
        <img
          className='absolute top-[11px] right-3 h-5 w-5 cursor-pointer opacity-50 hover:opacity-100'
          onClick={onClickClearSearchInput}
          src='icon/btn-remove.svg'
          alt='Clear'
        />
      )}
    </div>
  );
}

export default Search;
