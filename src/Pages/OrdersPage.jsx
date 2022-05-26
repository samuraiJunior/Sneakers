import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../itemCard/Item'
import Info from '../ItemCardIndrawer/Info'
import { GetOrders } from '../Redux/OrdersSlice'
import "./../App.scss"

const OrdersPage = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(GetOrders())
  },[dispatch])
 
    const Orders=useSelector(state=>state.Orders.OrderCards)
    //console.log(Orders)
   const order=Orders?.map(obj=><Item i={obj} key={obj.id}/>)
  
       
  return (
    <main className="content">
        <div className='content_header'>
        <h2 className='content_header__Orders'>Ваши Заказы</h2>
        </div>
        <div className="content_items">
          {/*!itemsLoading?order:itemskeleton*/}
          {order?order:<div className="Nofavorite">
          <Info width={"70px"} height={"70px"} InfoText={"Оформите хотя бы один заказ."}
           cartStatus={"У вас нет заказов"} imgSrc={"Imgs/sadSmile.png"} />
        </div>}
        </div>
      </main>
  )
}

export default memo(OrdersPage)
