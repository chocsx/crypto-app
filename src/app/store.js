import { configureStore } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/dist/query";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
  reducer: {
    [createApi.reducerPath]: cryptoApi.reducer,
  },
})