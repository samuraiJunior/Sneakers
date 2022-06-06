import React, { useContext, useState } from 'react'
import s from "./Drawer.module.scss"
import CartItem from './CartItem'
import Greenbtn from '../Forms/Greenbtn'
import { useDispatch, useSelector } from 'react-redux'
import Info from './Info'
import { CleariteIncart } from '../Redux/ItemSlice'
import { AddOrders } from '../Redux/OrdersSlice'

const Drawer = (props) => {
  const TotalPrice=useSelector(state=>state.Items.totalPrice)


  const contribution=TotalPrice*0.05

  const itemsIncart=useSelector(state=>state.Items.itemsIncart)
  const OrderId=useSelector(state=>state.Orders.OrderId)
  const Cartitem=itemsIncart.map(ci=><CartItem item={ci} key={ci.id}/>)
    
  const [IsOrderComplete,setIsOrderComplete]=useState(false)
  const dispatch=useDispatch()
  const OrderSucces=()=>{
    dispatch(CleariteIncart(itemsIncart))
    dispatch(AddOrders({items:itemsIncart}))
    setIsOrderComplete(true)
  }

  
  
 
  return (
    <div className={s.overlay}> 
    <div className={s.drawer}>
      <h2>Корзина<div onClick={props.ToggleshowWrapper} className={s.cartItem__closebtn}><img src="Imgs/itemsIMG/cross.svg" alt="icon"/></div></h2>
      
      {/*<CartItem />*/}
      {!itemsIncart.length>0?<Info width={"120px"} height={"120px"} imgSrc={!IsOrderComplete?"Imgs/pure Box.png":"Imgs/OrderSucces.png"}
       InfoText={!IsOrderComplete?"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.":`Ваш заказ #${OrderId} скоро будет передан курьерской доставке`}
       cartStatus={!IsOrderComplete?"Корзина пустая":"Заказ оформлен!"} OrderSucces={!IsOrderComplete?null:s.OrderSucces}/>:<><div className={s.cartItem}>
          {Cartitem}
          </div>
         
        <div className={s.tottalBlock}>
        <ul>
            <li>
                <span>Итого</span>
                <div></div>
                <b>{TotalPrice} руб. </b>
            </li>
            <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>{contribution.toFixed(2)} руб. </b>
            </li>
        </ul>
        <Greenbtn OrderSucces={OrderSucces}/>
        </div>{/*tottalBlock*/}</>}
        </div>{/*drawer*/}
    </div>
  )
}

export default Drawer
