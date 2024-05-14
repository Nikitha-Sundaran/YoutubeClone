import appSlice from "./appSlice";

import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
   reducer:{
    app:appSlice,
    search:searchSlice,
    chat:chatSlice,
    category:categorySlice
   }
})
export default store;