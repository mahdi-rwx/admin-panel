import { createSlice } from "@reduxjs/toolkit"
import { State } from "../types"

const initialState:State = {
    isOpen:false
}
export const SidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
        
    }
})