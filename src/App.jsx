import Card from './components/card/Card';
import CartCard from './components/cart-card/CartCard';
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';
import Input from './ui/Input';

function App() {
  return (
    <div className="m-auto max-w-[1080px] rounded-2xl bg-white shadow-lg">
      <Drawer />
      <Header />
      <div className="p-11">
        <div className="mb-10 flex justify-between">
          <h1 className="text-3xl font-bold">Все кроссовки</h1>
          <Input />
        </div>
        <div className='flex justify-between'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
