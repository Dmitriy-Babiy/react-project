import React from 'react';

function Card() {
  return (
    <div className="w-52 rounded-[2em] border border-solid border-gray-100 p-7 transition-all hover:-translate-y-2 hover:shadow-lg">
      <div>
        <div className="absolute cursor-pointer">
          <img src="/icon/liked.svg" alt="" />
        </div>
        <img className="m-auto w-36" src="/img/sneakers/1.jpg" alt="sneakers" />
        <p className="mt-3 text-sm font-medium">
          Мужские Кроссовки Nike Blazer Mid Suede
        </p>
        <div className="mt-3 flex items-center">
          <div className="flex flex-col">
            <span className="text-xs uppercase opacity-50">Цена: </span>
            <b className="text-sm">12 999 руб.</b>
          </div>
          <button className="ml-9 h-8 w-8 rounded-lg border border-solid border-gray-200 bg-white">
            <img
              className="m-auto"
              width={11}
              height={11}
              src="/icon/plus.svg"
              alt="plus"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
