import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from '../../components/Card/Card.jsx';

import './Orders.scss';

import emoji2 from '../../images/emoji-2.png';

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get('https://651ed2e044a3a8aa476910f9.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => {
          return ([...prev, ...obj.items]);
        }, []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    }

    fetchData();
  }, [])

  const fakeArray = [...Array(9)];

  return (
    <section className="orders">
      <div className="orders__container">
        {orders.length || fakeArray.length > 0 ?
          <>
            <div className="orders__top">
              <Link to="/">
                <button className="orders__back">
                  <span className="orders__back-ico icon-slider-arrow"></span>
                </button>
              </Link>
              <h2 className="orders__title">Мои заказы</h2>
            </div>
            <ul className="orders__cards">
              {(isLoading ? fakeArray : orders).map((item, index) => {
                return (
                  <Card key={index} title={isLoading ? '' : item.title} image={isLoading ? '' : item.image} price={isLoading ? '' : item.price} loading={isLoading} />
                )
              })}
            </ul>
          </> :
          <div className="orders__empty orders-empty">
            <img className="orders-empty__image" src={emoji2} width={70} height={70} alt="emoji" />
            <h3 className="orders-empty__title">Заказов нет :(</h3>
            <p className="orders-empty__text">Вы ничего не заказывали</p>
            <Link className="orders-empty__back" to="/">
              <span className="orders-empty__back-ico icon-arrow"></span>
              <span className="orders-empty__back-text">Вернуться назад</span>
            </Link>
          </div>
        }
      </div>
    </section>)
}

export default Orders;