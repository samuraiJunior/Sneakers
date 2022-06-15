import { configureStore } from "@reduxjs/toolkit";
import FavotiteSlice from "./FavotiteSlice";
import ItemSlice from "./ItemSlice";
import OrdersSlice from "./OrdersSlice";
import createSagaMiddleware from "redux-saga"

const saga=createSagaMiddleware()
const store=configureStore({
  
    reducer:{
      Items:ItemSlice,
      Favorite:FavotiteSlice,
      Orders:OrdersSlice,
    },
    middleware:[saga]
})

window.store=store

export default store