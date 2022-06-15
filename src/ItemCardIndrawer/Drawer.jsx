import React, {  useState } from 'react'
import s from "./Drawer.module.scss"
import CartItem from './CartItem'
import Greenbtn from '../Components/Greenbtn'
import { useDispatch, useSelector } from 'react-redux'
import Info from './Info'
import { CleariteIncart } from '../Redux/ItemSlice'
import { AddOrders } from '../Redux/OrdersSlice'
import CharacteristicComponet from '../Components/CharacteristicComponet'

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
          <CharacteristicComponet value={TotalPrice} rub={true} title={"Итого"} />
          <CharacteristicComponet value={contribution.toFixed(2)} rub={true} title={"Налог 5%:"} />
        </ul>
        <Greenbtn handleClick={OrderSucces} Smallsize={false} title={"Оформить заказ"}/>
        </div>{/*tottalBlock*/}</>}
        </div>{/*drawer*/}
    </div>
  )
}

export default Drawer
