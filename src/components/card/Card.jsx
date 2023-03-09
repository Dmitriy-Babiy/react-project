import React, { useState } from 'react';

function Card({ urlImage, title, price, onClickPlus }) {
  const [isChecked, setIsChecked] = useState(false);

  const HandlClickCard = () => {
    onClickPlus({urlImage, title, price})
    setIsChecked(!isChecked);
  };

  return (
    <div className='w-52 rounded-[2em] border border-solid border-gray-100 p-7 transition-all hover:-translate-y-2 hover:shadow-lg'>
      <div>
        <div className='absolute cursor-pointer'>
          <img src='/icon/no-liked.svg' alt='' />
        </div>
        <img className='m-auto w-36' src={urlImage} alt='sneakers' />
        <p className='mt-3 text-sm font-medium'>{title}</p>
        <div className='mt-3 flex items-center'>
          <div className='flex flex-col'>
            <span className='text-xs uppercase opacity-50'>Цена: </span>
            <b className='text-sm'>{price} руб.</b>
          </div>
          <button
            onClick={HandlClickCard}
            className='ml-9 h-8 w-8 rounded-lg border border-solid border-gray-200 bg-white'
          >
            <img
              className='m-auto w-full'
              src={isChecked ? '/icon/btn-checked.svg' : '/icon/btn-add.svg'}
              alt='btn-add'
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
