import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) =>{
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
        },
        setUserLogOutState: (state, action) =>{
            state.userName= null
            state.userEmail = null
        }
    }
});

export const { setActiveUser,setUserLogOutState  } = userSlice.actions

export const selectUserName = state => state.userName

export const selectUserEmail = state => state.userEmail

export default userSlice.reducer