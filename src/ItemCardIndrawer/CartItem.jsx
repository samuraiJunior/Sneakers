import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteIteminCart} from '../Redux/ItemSlice'
import s from "./Drawer.module.scss"
/*import item1 from "./../Imgs/itemsIMG/item 1.jpg"
import cross from "./../Imgs/itemsIMG/cross.svg"*/
const CartItem = ({item}) => {
  const dispatch=useDispatch()
  const deleteItemsIncart=()=>{
    dispatch(deleteIteminCart(item.id))
  }
  
  return (
    
    <div className={s.cartItem__items}>
        <div className={s.cartItem__preview}>
        <img src={item.Imgsrc} alt="img"/>

        <div className={s.cartItem__info}>
        <h4>{item.category}</h4>
        <h4>{item.itemName}</h4>
        <div>{item.price}</div> 
        </div>
        </div>{/*cartItem__preview*/}

        <div onClick={deleteItemsIncart} className={s.cartItem__closebtn}><img src="Imgs/itemsIMG/cross.svg" alt="icon"/></div>
      </div> /*cartItem*/
    
  )
}

export default CartItem
