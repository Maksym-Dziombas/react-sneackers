import React from 'react';
import axios from 'axios';
import { AppContext } from '../../App.jsx';

import Info from '../Info/Info.jsx';

import styles from './styles.module.scss';

import emptyBox from '../../images/empty-box.png';
import completedOrder from '../../images/complete-order.png';

function Drawer({ onClose, cartData = [], onRemove, opened }) {
  const { setCartSneackers, cartSneackers } = React.useContext(AppContext);
  const [isCartOrder, setIsCartOrder] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoadingButton, setIsLoadingButton] = React.useState(false);

  const {totalPrice} = React.useContext(AppContext);

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const onClickOrder = async () => {
    try {
      setIsLoadingButton(true);
      let itemId = 0;
      const { data } = await axios.post('https://651ed2e044a3a8aa476910f9.mockapi.io/orders', {
        items: cartSneackers,
      });
      for (let i = 0; i < cartSneackers.length; i++) {
        const item = cartSneackers[i];
        itemId = item.id - item.id;
        await axios.delete('https://65127be6b8c6ce52b395aedb.mockapi.io/cart/' + Number(itemId + i + 1));
        await delay(1000);
      }
      setCartSneackers([]);
      setIsCartOrder(true);
      setOrderId(data.id);
    } catch (error) {
      alert('Не удалось создать заказ :(');
    }
    setIsLoadingButton(false)
  }

  return (
    <div className={`${styles.drawerOverlay} ${opened ? styles.visible : null}`}>
      <div className={`${styles.drawer} ${opened ? styles.visible : null}`}>
        <div className={styles.drawer__top}>
          <div className={styles.drawer__titleWrapper}>
            <h2 className={styles.drawer__title}>
              Корзина
            </h2>
            <button className={styles.drawer__titleClose} onClick={onClose}>
              <span className={styles.drawer__titleCloseIco + ' icon-cross'}></span>
            </button>
          </div>
          {
            cartData.length > 0 ? null :
              <Info title={isCartOrder ? "Заказ оформлен" : "Корзина пустая"} description={isCartOrder ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} image={isCartOrder ? completedOrder : emptyBox} />
          }
          <ul className={styles.drawer__cards}>
            {cartData.map((item) => {
              return (
                <li key={item.id} className={`${styles.drawer__cardsItem} ${styles.drawerCard}`}>
                  <img className={styles.drawerCard__img} src={item.image} alt={item.title} width={70} height={70} />
                  <div className={styles.drawerCard__information}>
                    <h3 className={styles.drawerCard__name}>{item.title}</h3>
                    <span className={styles.drawerCard__price}>{item.price} руб.</span>
                  </div>
                  <button className={styles.drawerCard__delete} onClick={() => onRemove(item.id)}>
                    <span className={`${styles.drawerCard__deleteIco} icon-cross`} icon-cross></span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.drawer__bottom}>
          <div className={styles.drawer__bottomCountingWrapper}>
            <div className={`${styles.drawer__bottomCounting} ${styles.drawerCounting}`}>
              <span className={styles.drawerCounting__text}>Итого:</span>
              <div className={styles.drawerCounting__decor}></div>
              <span className={styles.drawerCounting__sum}>{totalPrice} руб. </span>
            </div>
            <div className={`${styles.drawer__bottomCounting} ${styles.drawerCounting}`}>
              <span className={styles.drawerCounting__text}>Налог 5%:</span>
              <div className={styles.drawerCounting__decor}></div>
              <span className={styles.drawerCounting__sum}>{Math.round(totalPrice / 100 * 5)} руб.</span>
            </div>
          </div>
          <button className={styles.drawer__bottomBtn} disabled={isLoadingButton} onClick={onClickOrder}>
            Оформить заказ
            <span className={`${styles.drawer__bottomBtnIco} icon-arrow`}></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer;