import React, { useEffect,  useState } from 'react';
import './App.scss';
import Drawer from './ItemCardIndrawer/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { getIteminCart, GetItems } from './Redux/ItemSlice';
import Header from './Header/Header';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import FavoritesPage from './Pages/FavoritesPage';
import { getFavorite } from './Redux/FavotiteSlice';
import { AppContext } from './Context';
import Orders from './Pages/OrdersPage';
import { GetTshirts } from './Redux/TShirtSlice';
import TshirtPage from './Pages/TshirtPage';



const App=(props)=>{
  const dispatch=useDispatch()
  const isfetching=useSelector(state=>state.Items.isfetching)
  const itemsIncart=useSelector(state=>state.Items.itemsIncart)
  const error=useSelector(state=>state.Items.error)

  useEffect(()=>{
   let promise= dispatch(getIteminCart())
   let Promisee= dispatch(getFavorite())
   Promise.all([promise,Promisee]).then(()=>{
    dispatch(GetItems())
    dispatch(GetTshirts())
   })
  },[dispatch])
  const location=useLocation()

  const [showWrapper,setshowWrapper]=useState(false)
  const ToggleshowWrapper=()=>{
    setshowWrapper(!showWrapper)
  }
  const tottalPrice=itemsIncart.reduce((acc,item)=> acc+=parseInt(String(item.price).replace(/ /g, "")),0)/*вот здесь в последствии может выскочить ошибка*/ 

  
  const IsItemInDrawer=(id)=>{
    return itemsIncart.some((obj)=>obj.ParentID===id)
  }
  const favorites=useSelector(state=>state.Favorite.favorite)

  const IsItemInFavorites=(ParentID)=>{
    return favorites?.some((obj)=>obj.ParentID===ParentID)
  }

  
  return (<>
  <AppContext.Provider value={{IsItemInDrawer,IsItemInFavorites,tottalPrice}}>
    {error&&<div className='error'><span>{error}</span></div>}
    {isfetching&&<h1 className='Loading'>...Loading</h1>}
    <div className="wrapper">
      {showWrapper?<Drawer ToggleshowWrapper={ToggleshowWrapper}/>:null}
      <Header itemsIncart={itemsIncart} ToggleshowWrapper={ToggleshowWrapper} tottalPrice={tottalPrice} />

      <div className='Pages_Title_Wrapper'>
      <Link to="/">
        <h3 className={location.pathname==="/"?"active":null} >Кроссовки</h3>
        </Link>
        <Link to={"/thirts"}>
        <h3 className={location.pathname==="/thirts"?"active":null} >Футболки</h3>
        </Link>
      </div>

      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/orders' element={<Orders />}/>
     {<Route path='/thirts' element={<TshirtPage />} />}
      </Routes>
    </div>
    </AppContext.Provider>
    </>
  );
}

export default App;
