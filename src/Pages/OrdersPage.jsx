import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../itemCard/Item'
import Info from '../ItemCardIndrawer/Info'
import { GetOrders } from '../Redux/OrdersSlice'
import s from "./Pages.module.scss"


const OrdersPage = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(GetOrders())
  },[dispatch])
 
    const Orders=useSelector(state=>state.Orders.OrderCards)
   const order=Orders?.map(obj=><Item i={obj} key={obj.id}/>)
  
  return (
    <main className={s.content}>
        <div className={s.content_header}>
        <h2 className={s.content_header__Orders}>Ваши Заказы</h2>
        </div>
        <div className={s.content_items}>
          {/*!itemsLoading?order:itemskeleton*/}
          {order?order:<div className={s.Nofavorite}>
          <Info width={"70px"} height={"70px"} InfoText={"Оформите хотя бы один заказ."}
           cartStatus={"У вас нет заказов"} imgSrc={"Imgs/sadSmile.png"} />
        </div>}
        </div>
      </main>
  )
}

export default memo(OrdersPage)
