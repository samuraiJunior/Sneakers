import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getshirts } from "../DAL/API";



export const GetTshirts=createAsyncThunk(
    "Tshirts/GetTshirts",
    async()=>{
        try {
            const response=await getshirts()
            return response
        } catch (error) {
            
        }
    }
)

const TShirtSlice=createSlice({
    name:"Tshirts",
    initialState:{
      shirts:[ 
        /*{"Imgsrc":"Imgs/T-shirts/t-shirt1.jpg","category":"Мужские Футболки","itemName":"Robie T-Shirt","price":"4 940 руб.", "id":"99b","ParentID":"99b"},
        {"Imgsrc":"Imgs/T-shirts/t-shirt2.jpg","category":"Мужские Футболки","itemName":"Calvin Klein Performance","price":"3 190 руб.", "id":"26i","ParentID":"26i"},
        {"Imgsrc":"Imgs/T-shirts/t-shirt3.jpg","category":"Мужские Футболки","itemName":"Plain T-shirt","price":"2 671 руб.", "id":"39z","ParentID":"39z"},
        {"Imgsrc":"Imgs/T-shirts/t-shirt4.jpg","category":"Мужские Футболки","itemName":"Ringer T-Shirt","price":"3 566 руб.", "id":"39y","ParentID":"39y"}
      */]
    },
    reducers:{

    },
    extraReducers:{
        [GetTshirts.fulfilled]:(state,action)=>{
            state.shirts=action.payload
        }
    }
})
export default TShirtSlice.reducer
//export {}=TShirtSlice.actions