import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        //Bat dau app
      fetchStart: (state) => {
        state.loading = true
      },
      //Nếu success thì thêm action
      fetchSuccess: (state,action) => {
        state.loading = false
        state.currentVideo = action.payload
      },
      fetchFailure: (state) => {
        state.loading = false
        state.error = true
      },
      like: (state, action) => {
        if(!state.currentVideo.likes.includes(action.payload)){
          state.currentVideo.likes.push(action.payload)
          //like xong remove dislike
          state.currentVideo.dislikes.splice(state.currentVideo.dislikes.findIndex((userId) => userId === action.payload),1)
        }
      }, 
      dislike: (state, action) => {
        if(!state.currentVideo.dislikes.includes(action.payload)){
          state.currentVideo.dislikes.push(action.payload)
          state.currentVideo.likes.splice(state.currentVideo.likes.findIndex((userId) => userId === action.payload),1)
        }
      }, 
    },
  })

  export const { fetchStart, fetchSuccess, fetchFailure,like, dislike } =
  videoSlice.actions;

export default videoSlice.reducer;