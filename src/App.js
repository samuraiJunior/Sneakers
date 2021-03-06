import React, { useEffect,  useState } from 'react';
import './App.scss';
import Drawer from './ItemCardIndrawer/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { getIteminCart, GetItems } from './Redux/ItemSlice';
import Header from './Header/Header';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import FavoritesPage from './Pages/FavoritesPage';
import { getFavorite } from './Redux/FavotiteSlice';
import Orders from './Pages/OrdersPage';
import { GetTshirts } from './Redux/ItemSlice';
import ItemPage from './Pages/ItemPage';
import FullItemInfo from './Pages/FullItemInfo';

const App=(props)=>{
  const dispatch=useDispatch()
  const isfetching=useSelector(state=>state.Items.isfetching)
  const itemsIncart=useSelector(state=>state.Items.itemsIncart)
  const error=useSelector(state=>state.Items.error)

  const Sneakers=useSelector(state=>state.Items.Sneakers)
  const Shirts=useSelector(state=>state.Items.Tshirts)
  
  

  useEffect(()=>{
   let promise0= dispatch(getIteminCart())
   let promise1= dispatch(getFavorite())
   Promise.all([promise0,promise1]).then(()=>{
    dispatch(GetItems())
    dispatch(GetTshirts())
   })
  },[dispatch])
  
  const location=useLocation()
  const [showWrapper,setshowWrapper]=useState(false)
  const ToggleshowWrapper=()=>{
    setshowWrapper(!showWrapper)
  }
  
  return (<>
  
    {error&&<div className='error'><span>{error}</span></div>}
    {isfetching&&<h1 className='Loading'>...Loading</h1>}
    <div className="wrapper">
      {showWrapper?<Drawer ToggleshowWrapper={ToggleshowWrapper}/>:null}
      <Header itemsIncart={itemsIncart} ToggleshowWrapper={ToggleshowWrapper} /*tottalPrice={totalPrice}*/ />
      
      
      <div className='Pages_Title_Wrapper'>
      <Link to="/">
        <h3 className={location.pathname==="/"?"active":null} >Кроссовки</h3>
        </Link>
        <Link to={"/thirts"}>
        <h3 className={location.pathname==="/thirts"?"active":null} >Футболки</h3>
        </Link>
      </div>
      <Routes>
      <Route path='/:id' element={<FullItemInfo />} />
      <Route path='/thirts:id' element={<FullItemInfo />} />
      <Route path='/' element={<ItemPage Items={Sneakers} title={"Все кроcсовки"}/>} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/orders' element={<Orders />}/>
      <Route path='/thirts' element={<ItemPage Items={Shirts} title={"Все футболки"}/>} />
      </Routes>
    </div>
    </>
  );
} 

export default App;
