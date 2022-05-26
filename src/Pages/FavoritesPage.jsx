import React from 'react'
import { useSelector } from 'react-redux'
import "../App.scss"
import Item from '../itemCard/Item'
import Info from '../ItemCardIndrawer/Info'

const FavoritesPage = () => {
    const favorites=useSelector(state=>state.Favorite.favorite)
    const favorite=favorites?.map(f=><Item i={f} key={f.id}/>)
  return (<> 
    <main className="content">
        <div className='content_header'>
        <h1>Мои закладки</h1>
        </div>
        {favorites.length>0?
        <div className="content_items">
        {favorite}
        </div>:
        <div className="Nofavorite">
          <Info width={"70px"} height={"70px"} imgSrc={"Imgs/smile.png"} InfoText={"Вы ничего не добавляли в закладки"} cartStatus={"Закладок нет"} />
        </div>}
      </main>
      
    
      </>
  )
}

export default FavoritesPage
