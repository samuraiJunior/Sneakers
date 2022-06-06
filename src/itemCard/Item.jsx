import React, { memo } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { AddItemToFavorite, deleteFavorite, ToggleIconActive } from '../Redux/FavotiteSlice'
import { deleteIteminCart, IsItemsIn, SetItemtoCart, ToggleWrapperActive } from '../Redux/ItemSlice'
import s from "./Item.module.scss"


const Item =({i}) => {
  const itemsIncart=useSelector(state=>state.Items.itemsIncart)

  const FindObj=(itemsIncart)=>{
   const findobj=itemsIncart.find(obj=>obj.ParentID===i.ParentID)
   return findobj
  }
  const IsItemIn=(part,id)=>{
    return part.some((obj)=>obj?.ParentID===id)
  }
  
 const dispatch=useDispatch()
  const setitemIncart=()=>{
    dispatch(SetItemtoCart(i))
    dispatch(ToggleWrapperActive())
    setTimeout(() => {
    dispatch(ToggleWrapperActive())
    }, 1500);
  }
  const deleteitemIncart=()=>{
    const obj=FindObj(itemsIncart)
    dispatch(deleteIteminCart(obj.id))
  }
 const addItemToFavorite=()=>{
   dispatch(AddItemToFavorite(i))
  dispatch(ToggleIconActive())
  setTimeout(() => {
    dispatch(ToggleIconActive())
  }, 1500);
 }
 const favorite=useSelector(state=>state.Favorite.favorite)
 const DeleteFavorite=()=>{
   const obj=FindObj(favorite)
   console.log(obj)
   dispatch(deleteFavorite(obj.id))
 }
 
  return (<>
      <div className={s.content__card}>
          <img src={i.Imgsrc} alt="icon"/>
          
         {IsItemIn(favorite,i.ParentID)?<span onClick={DeleteFavorite} className={s.like_wrapper}>
           <img  className={s.like} src="Imgs/itemsIMG/like.svg" alt="icon" />
           </span>
           :<span onClick={addItemToFavorite} className={s.unlike_wrapper}>
           <img  className={s.unlike} src="Imgs/itemsIMG/nlikely.svg" alt="icon" />
           </span>}

          <div className={s.content__card_title}>{i.category}</div>
          <div className={s.content__card_subtitle}>{i.itemName}</div>
          <div className={s.content__card_priceHolder}>
          
          <div>
          <span>Цена:</span>
            <b><br />{i.price}</b>
          </div>
          {IsItemIn(itemsIncart,i.ParentID)?<button className={s.btnChecked} onClick={deleteitemIncart}><img src="Imgs/itemsIMG/check.svg" alt="icon" /></button>:
            <button className={s.btnUNChecked} onClick={setitemIncart}><img src="Imgs/itemsIMG/plus.png" alt="icon" /></button>}
          
          </div>
         </div>
         
         </>
  )
}

export default memo(Item)
