function App() {
  return (
    <div className="m-auto mt-20 max-w-[1080px] rounded-2xl bg-white shadow-lg">
      <header className="flex justify-between border-b border-gray-300 p-11">
        <div className="flex items-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="ml-4">
            <h3 className="text-xl font-bold uppercase">react sneakers</h3>
            <p>Магазин лучших кроссовок</p>
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
      <div className="p-11">
        <h1 className="text-3xl font-bold ">Все кроссовки</h1>
        <div className="w-52 rounded-[3em] border border-solid border-gray-200 p-5">
          <div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            />
            <p className="mt-3 text-sm font-medium">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="mt-3 flex items-center">
              <div className="flex flex-col">
                <span className="text-xs uppercase opacity-50">Цена: </span>
                <b className="text-sm">12 999 руб.</b>
              </div>
              <button className=" ml-7 h-8 w-8 rounded-lg border border-solid border-gray-200 bg-white">
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
      </div>
    </div>
  );
}

export default App;
