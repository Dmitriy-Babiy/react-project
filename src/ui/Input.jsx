import React from 'react';

function Input() {
  return (
    <div className="flex w-72 rounded-lg border border-gray-300 p-2">
      <img src="icon/search.svg" alt="" />
      <input className="pl-3 text-base" placeholder="Поиск..." type="text" />
    </div>
  );
}

export default Input;