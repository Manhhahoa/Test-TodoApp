import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export type Token = {
    accessToken: string,
}
const initialState: Token = {
    accessToken: ''
}
export const TokenSlice = createSlice({
    name: 'Token',
    initialState,
    reducers: {
        getToken: (state, action: PayloadAction<Token>) => {
            return action.payload
        }
    },
})
export const { getToken } = TokenSlice.actions

export default TokenSlice.reducer
