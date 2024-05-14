import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./helper";

const chatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
          state.messages.splice(LIVE_CHAT_COUNT,1);
          state.messages.unshift(action.payload)
        }
    }
})
export  const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;