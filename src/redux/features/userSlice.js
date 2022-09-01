import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        loginStart: (state) => {
            state.loading = true;
        },

        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
        },

        loginFail: (state) => {
            state.loading = false;
            state.error = true;
        },

        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        }
    }
});

export const  {loginStart, loginSuccess, loginFail, logout} = userSlice.actions;
export default userSlice.reducer;