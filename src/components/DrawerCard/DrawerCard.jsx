function DrawerCard({title, price, image}) {
  return (
    <li className="drawer__cards-item drawer-card">
      <img className="drawer-card__img" src={image} alt="Кроссовки 1" width={70} height={70} />
      <div className="drawer-card__information">
        <h3 className="drawer-card__name">{title}</h3>
        <span className="drawer-card__price">{price} руб.</span>
      </div>
      <button className="drawer-card__delete">
        <span className='drawer-card__delete-ico icon-cross'></span>
      </button>
    </li>
  )
}

export default DrawerCard;