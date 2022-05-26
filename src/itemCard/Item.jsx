import React, { memo, useContext } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { AddItemToFavorite, deleteFavorite, ToggleIconActive } from '../Redux/FavotiteSlice'
import { deleteIteminCart, SetItemtoCart, ToggleWrapperActive } from '../Redux/ItemSlice'
import {AppContext} from "../Context"
import s from "./Item.module.scss"

const Item =({favorited,i}) => {
  const {IsItemInDrawer}=useContext(AppContext)
  const {IsItemInFavorites}=useContext(AppContext)
  const itemsIncart=useSelector(state=>state.Items.itemsIncart)

  const FindObj=(itemsIncart)=>{
   const findobj=itemsIncart.find(obj=>obj.ParentID===i.ParentID)
   return findobj
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
    //const FindId=itemsIncart.find(obj=>obj.ParentID===i.ParentID)
    const obj=FindObj(itemsIncart)
   //console.log(FindId)
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
   //const FindId=favorite.find(obj=>obj.ParentID===i.ParentID)
   const obj=FindObj(favorite)
   console.log(obj)
   dispatch(deleteFavorite(obj.id))
 }
 
  return (<>
      <div className={s.content__card}>
          <img /*width={"133px"} height={"112px"}*/ src={i.Imgsrc} alt="icon"/>
          
         {IsItemInFavorites(i.ParentID)?<span onClick={DeleteFavorite} className={s.like_wrapper}>
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
          {IsItemInDrawer(i.ParentID)?<button className={s.btnChecked} onClick={deleteitemIncart}><img src="Imgs/itemsIMG/check.svg" alt="icon" /></button>:
            <button className={s.btnUNChecked} onClick={setitemIncart}><img src="Imgs/itemsIMG/plus.png" alt="icon" /></button>}
          
          </div>
         </div>
         
         </>
  )
}

export default memo(Item)
