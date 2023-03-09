import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSneackers } from './redax/slices/sneackers-slice';
import { fetchCart } from './redax/slices/cart-slice';

import Card from './components/card/Card';
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';
import Search from './ui/Search';
import axios from './axios/axios';

import API_URLS from './consts/api-urls';

function App() {
  const dispatch = useDispatch();

  const sneackersData = useSelector((state) => state.sneackers.data);
  const isVisableCart = useSelector((state) => state.cart.isVisableCart);

  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  // const cartItems1 = useSelector((state) => state.cart.data)
  // console.log(cartItems1)

  useEffect(() => {
    dispatch(fetchSneackers());
    dispatch(fetchCart());
    axios.get(API_URLS.CART).then((res) => setCartItems(res.data));
  }, [dispatch]);

  const onAddToCart = async (obj) => {
    console.log('Отправил');
    await axios.post(API_URLS.CART, obj);

    console.log('Получил ответ');
    axios.get(API_URLS.CART).then((res) => setCartItems(res.data));
  };

  const onRemoveItemCart = (id) => {
    axios.delete(`${API_URLS.CART + id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickClearSearchInput = () => {
    setSearchValue('');
  };

  return (
    <div className='m-auto mt-20 max-w-[1016px] rounded-2xl bg-white shadow-lg'>
      {isVisableCart && (
        <Drawer cartItems={cartItems} onRemoveItemCart={onRemoveItemCart} />
      )}

      <Header />

      <div className='p-11'>
        <div className='mb-10 flex justify-between'>
          <h1 className='text-3xl font-bold'>
            {searchValue ? 'Найденные кроссовки:' : 'Все кроссовки'}
          </h1>
          <Search
            onChangeSearchInput={onChangeSearchInput}
            onClickClearSearchInput={onClickClearSearchInput}
            searchValue={searchValue}
            placeholder={'Поиск...'}
          />
        </div>

        <div className='flex flex-wrap gap-x-8 gap-y-7'>
          {sneackersData
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                onClickPlus={onAddToCart}
                title={item.title}
                urlImage={item.urlImage}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
