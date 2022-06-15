import React from 'react'
import { useSelector } from 'react-redux'
import s from "./Pages.module.scss"
import Item from '../itemCard/Item'
import Info from '../ItemCardIndrawer/Info'

const FavoritesPage = () => {
    const favorites=useSelector(state=>state.Favorite.favorite)
    const favorite=favorites?.map(f=><Item i={f} key={f.id}/>)
  return (<> 
    <main className={s.content}>
        <div className={s.content_header}>
        <h1>Мои закладки</h1>
        </div>
        {favorites.length>0?
        <div className={s.content_items}>
        {favorite}
        </div>:
        <div className={s.Nofavorite}>
          <Info width={"70px"} height={"70px"} imgSrc={"Imgs/smile.png"} InfoText={"Вы ничего не добавляли в закладки"} cartStatus={"Закладок нет"} />
        </div>}
      </main>
      
    
      </>
  )
}

export default FavoritesPage
