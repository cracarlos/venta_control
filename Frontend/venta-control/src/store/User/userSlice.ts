import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { UserByID, UserRegister } from '@/types/user'

interface userState {
    user: UserRegister | {}
}

const initialState: userState = {
    user: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<UserByID>) => {
            console.log(payload)
            state.user = payload
        },
        cleanUser: (state) => {
            state.user = {}
        }
    },
})

export const { setUser, cleanUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer