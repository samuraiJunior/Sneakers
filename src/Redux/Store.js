import { configureStore } from "@reduxjs/toolkit";
import FavotiteSlice from "./FavotiteSlice";
import ItemSlice from "./ItemSlice";
import OrdersSlice from "./OrdersSlice";
import TShirtSlice from "./TShirtSlice";



const store=configureStore({
    reducer:{
      Items:ItemSlice,
      Favorite:FavotiteSlice,
      Orders:OrdersSlice,
      Tshirts:TShirtSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

window.store=store

export default store