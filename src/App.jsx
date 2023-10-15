import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home.jsx';
import Favorites from './pages/Favorites/Favorites.jsx'
import Orders from './pages/Orders/Orders.jsx'
// Pages

// Components
import Header from './components/Header/Header.jsx';
import Drawer from './components/Drawer/Drawer.jsx';
// Components

// Styles
import './scss/main.scss';
// Styles

export const AppContext = React.createContext();

function App() {
  const [sneackers, setSneackers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartSneackers, setCartSneackers] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const sneackersData = await axios.get('https://65127be6b8c6ce52b395aedb.mockapi.io/items')
      const cartData = await axios.get('https://65127be6b8c6ce52b395aedb.mockapi.io/cart')
      const favoritesData = await axios.get('https://651ed2e044a3a8aa476910f9.mockapi.io/favorites')
      setIsLoading(false);

      setCartSneackers(cartData.data);
      setSneackers(sneackersData.data);
      setFavorites(favoritesData.data);
    }

    fetchData();
  }, [])

  const [isCartItemAdded, setIsCartItemAdded] = useState('');

  const onAddCartItem = (obj) => {
    if (cartSneackers.find(item => item.title.toLowerCase() === obj.title.toLowerCase())) {
      setIsCartItemAdded(
        <div className="warning-wrapper">
          <p className='warning__is-cart-item active'>Вы уже добавили товар в корзину</p>
        </div>
      );
      setTimeout(() => {
        setIsCartItemAdded('');
      }, 2000)
    } else {
      setCartSneackers(prev => [obj, ...prev])
      axios.post('https://65127be6b8c6ce52b395aedb.mockapi.io/cart', obj);
    }
  }

  const onRemoveCartItem = (id) => {
    axios.delete(`https://65127be6b8c6ce52b395aedb.mockapi.io/cart/${id}`);
    setCartSneackers(prev => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onFavorite = (obj) => {
    if (favorites.find(item => item.title.toLowerCase() === obj.title.toLowerCase())) {
      axios.delete(`https://651ed2e044a3a8aa476910f9.mockapi.io/favorites/${obj.id}`);
      setFavorites(prev => prev.filter(item => item.id !== obj.id));
    } else {
      axios.post('https://651ed2e044a3a8aa476910f9.mockapi.io/favorites', obj)
      setFavorites(prev => [...prev, obj]);
    }
  }

  const added = (id) => {
    return cartSneackers.some(obj => obj.title.toLowerCase() === sneackers[id - 1].title.toLowerCase());
  }

  const addedFavorite = (id) => {
    return favorites.some(obj => obj.title.toString() === sneackers[id - 1].title.toString());
  }

  const totalPrice = cartSneackers.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <AppContext.Provider value={{ sneackers, favorites, cartSneackers, setCartOpened, setCartSneackers, added, addedFavorite, onFavorite, onAddCartItem, setFavorites, totalPrice }}>
      <div className="app">
        <Drawer onRemove={onRemoveCartItem} onClose={() => setCartOpened(false)} cartData={cartSneackers} opened={cartOpened} />
        <Header isCartOpened={cartOpened} onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path="/" element={
            <Home
              sneackers={sneackers}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddCartItem={onAddCartItem}
              onFavorite={onFavorite}
              cartSneackers={cartSneackers}
              favorites={favorites}
              isLoading={isLoading}
            />
          } />
          <Route path="/favorites" element={<Favorites onFavorite={onFavorite} onAddCartItem={onAddCartItem} />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        {isCartItemAdded}
      </div>
    </AppContext.Provider>
  )
}

export default App;