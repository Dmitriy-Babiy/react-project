import React from 'react';
import CartCard from '../cart-card/CartCard';

function Drawer() {
  return (
    <div
      style={{ display: 'none' }}
      className="absolute left-0 top-0 z-10 h-full w-full bg-slate-900/10 backdrop-blur-[2px]"
    >
      <div className="absolute right-0 flex h-full w-[400px] flex-col bg-white p-8 shadow-[-10px_4px_25px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between">
          <b>Корзина</b>
          <img
            className="ml-3  cursor-pointer opacity-50 transition-opacity duration-100 hover:opacity-100"
            src="/icon/btn-remove.svg"
            alt="btn-remove"
          />
        </div>

        <div className="mb-20 mt-10 flex-1 overflow-auto">
          <CartCard />
        </div>

        <ul className="mb-6">
          <li className="flex justify-between">
            <span>Итого:</span>
            <div className="h-5 flex-1 border-b border-dashed"></div>
            <b>21 498 руб.</b>
          </li>
          <li className="flex justify-between">
            <span>Налог 5%:</span>
            <div className="h-5 flex-1 border-b border-dashed"></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="w-fill cursor-pointer rounded-2xl bg-lime-500 p-4 text-white transition-opacity duration-100 hover:opacity-80">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Drawer;
