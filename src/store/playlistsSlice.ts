import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Playlist {
  id: string;
  name: string;
}

interface PlaylistsState {
  playlists: Playlist[];
}

const initialState: PlaylistsState = {
  playlists: [],
};

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    addPlaylist: (state, action: PayloadAction<Playlist>) => {
      state.playlists.push(action.payload);
    },
  },
});

export const { addPlaylist } = playlistsSlice.actions;

export default playlistsSlice.reducer;
