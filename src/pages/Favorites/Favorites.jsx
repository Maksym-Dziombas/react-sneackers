import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card/Card';
import { AppContext } from '../../App';

import './Favorites.scss';

import emoji1 from '../../images/emoji-1.png';

function Favorites({ onAddCartItem, onFavorite }) {
  const { favorites } = React.useContext(AppContext);

  return (
    <section className="favorites">
      <div className="favorites__container">
        {favorites.length > 0 ?
          <>
            <div className="favorites__top">
              <Link to="/">
                <button className="favorites__back">
                  <span className="favorites__back-ico icon-slider-arrow"></span>
                </button>
              </Link>
              <h2 className="favorites__title">Мои закладки</h2>
            </div>
            <ul className="favorites__cards">
              {favorites.map(item => {
                return (
                  <Card key={item.id} price={item.price} title={item.title} image={item.image} id={item.id} favorited={true} onAddCartItem={onAddCartItem} onFavorite={onFavorite} />
                )
              })}
            </ul>
          </> :
          <div className="favorites__empty favorites-empty">
            <img className="favorites-empty__image" src={emoji1} width={70} height={70} alt="emoji" />
            <h3 className="favorites-empty__title">Закладок нет :(</h3>
            <p className="favorites-empty__text">Вы ничего не добавляли в закладки</p>
            <Link className="favorites-empty__back" to="/">
              <span className="favorites-empty__back-ico icon-arrow"></span>
              <span className="favorites-empty__back-text">Вернуться назад</span>
            </Link>
          </div>
        }
      </div>
    </section>
  )
}

export default Favorites;