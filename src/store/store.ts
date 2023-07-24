import { configureStore } from "@reduxjs/toolkit";
import playlistsReducer from "./playlistsSlice";

const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
  },
});

export default store;
