import React  from 'react';
import { useDispatch } from 'react-redux';
import { ChangeisVisable } from '../../redax/slices/cart-slice';

function Header() {
  const dispatch = useDispatch();

  return (
    <header className='flex justify-between border-b border-gray-300 p-11'>
      <div className='flex items-center'>
        <img width={40} height={40} src='/img/logo.png' alt='logo' />
        <div className='ml-4'>
          <h3 className='text-xl font-bold uppercase'>react sneakers</h3>
          <p className='text-2xl'>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className='flex items-center'>
        <li className='flex cursor-pointer items-center' onClick={() => dispatch(ChangeisVisable())}>
          <img className='inline h-5 w-5' src='/icon/cart.svg' alt='cart' />
          <span className='ml-2'>1205 руб.</span>
        </li>
        <li className='ml-[2em]'>
          <img className='h-5 w-5' src='/icon/user.svg' alt='user' />
        </li>
      </ul>
    </header>
  );
}

export default React.memo(Header);
