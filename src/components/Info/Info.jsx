import React from "react";
import { AppContext } from "../../App";

function Info({title, description, image}) {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="drawer__empty-box empty-box">
      <img className="empty-box__image" src={image} alt="Empty Box" width={120} height={120} />
      <h3 className="empty-box__title">{title}</h3>
      <p className="empty-box__text">{description}</p>
      <button className="empty-box__button" onClick={() => setCartOpened(false)}>
        <span className="empty-box__button-ico icon-arrow"></span>
        <span className="empty-box__button-text">Вернуться назад</span>
      </button>
    </div>
  )
}

export default Info;