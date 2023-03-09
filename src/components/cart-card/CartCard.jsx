import React from 'react';

function CartCard({urlImage, title, price, id, onRemove}) {
  return (
    <div className='mb-8 flex items-center rounded-[2em] border border-solid border-gray-100 p-5'>
      <img className='h-16' src={urlImage} alt='' />
      <div className='ml-5 '>
        <p className='text-sm font-medium'>
          {title}
        </p>
        <b className='text-sm'>{price} руб.</b>
      </div>
      <img
        onClick={() => onRemove(id)}
        className='ml-3  cursor-pointer opacity-50 transition-opacity duration-100 hover:opacity-100'
        src='/icon/btn-remove.svg'
        alt='btn-remove'
      />
    </div>
  );
}

export default CartCard;
