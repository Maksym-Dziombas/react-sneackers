import React from "react";
import Card from "../../components/Card/Card";


function Home({ sneackers, searchValue, onChangeSearchInput, isLoading, onAddCartItem, onFavorite }) {
  const renderItems = () => {
    const filteredItems = sneackers.filter(sneacker => sneacker.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (isLoading ? [...Array(9)] : filteredItems)
      .map((sneacker, index) => {
        return (
          <Card key={isLoading ? index : sneacker.image} id={isLoading ? '' : sneacker.id} title={isLoading ? '' : sneacker.title} price={isLoading ? '' : sneacker.price} image={isLoading ? '' : sneacker.image} loading={isLoading} onAddCartItem={onAddCartItem} onFavorite={onFavorite}
          />
        )
      });
  }

  return (
    <section className="goods">
      <div className="goods__container">
        <div className="goods__top">
          <h1 className="goods__title">
            {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
          </h1>
          <form className='goods__form goods-form' action="">
            <label className='goods-form__label icon-search' htmlFor="search-sneackers"></label>
            <input className='goods-form__input' id='search-sneackers' type="text" placeholder='Поиск...' value={searchValue} onChange={onChangeSearchInput} />
          </form>
        </div>
        <ul className="goods__list goods-list">
          {
            renderItems()
          }
        </ul>
      </div>
    </section >
  )
}

export default Home;