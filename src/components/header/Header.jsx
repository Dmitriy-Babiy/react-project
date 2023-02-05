import React from 'react';

function Header() {
  return (
    <header className="mt-20 flex justify-between border-b border-gray-300 p-11">
      <div className="flex items-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div className="ml-4">
          <h3 className="text-xl font-bold uppercase">react sneakers</h3>
          <p className="text-2xl">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="flex items-center">
        <li className="flex items-center">
          <img className="inline h-5 w-5" src="/icon/cart.svg" alt="cart" />
          <span className="ml-2">1205 руб.</span>
        </li>
        <li className="ml-[2em]">
          <img className="h-5 w-5" src="/icon/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
