import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deletefavorites, getfavorites, postfavorites } from "../DAL/API";

export const  AddItemToFavorite=createAsyncThunk(
    "favorite/AddItemToFavorite",
    async(obj)=>{
        try {
            const response=await postfavorites(obj)
            return response
        } catch (error) {
            alert(error.message)
        }
        
    }
)
export const  getFavorite=createAsyncThunk(
    "favorite/getFavorite",
    async()=>{
        try {
            const response=await getfavorites()
        return response
        } catch (error) {
            //alert("Что-то пошло не так :(")
        }
        
    }
)
export const  deleteFavorite=createAsyncThunk(
    "favorite/deleteFavorite",
    async(id)=>{
        try {
            const response=await deletefavorites(id)
            return response
        } catch (error) {
           
        }
       
    }
)


const FavoriteSlice=createSlice({
    name:"favorite",
    initialState:{
        favorite:[],
        favoriteIconActive:false,

    },
    reducers:{
        ToggleIconActive(state,action){
            state.favoriteIconActive=!state.favoriteIconActive
            console.log(!state.favoriteIconActive)
        }
                },
    extraReducers:{
        [AddItemToFavorite.fulfilled]:(state,action)=>{
            state.favorite.push(action.payload)
        },
        [getFavorite.fulfilled]:(state,action)=>{   
           state.favorite=action.payload?action.payload:[]               
        },
        [deleteFavorite.fulfilled]:(state,action)=>{
            state.favorite=state.favorite.filter(f=>f.id !==action.payload)
        }
    }
})
export default FavoriteSlice.reducer
export const {ToggleIconActive}=FavoriteSlice.actions