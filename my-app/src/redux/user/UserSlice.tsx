import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export type User = {
    username: string,
}
const initialState: User = {
    username: '',
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUserSignIn: (state, action: PayloadAction<User>) => {
            return action.payload
        }
    },
})
export const { setUserSignIn } = UserSlice.actions

export default UserSlice.reducer
