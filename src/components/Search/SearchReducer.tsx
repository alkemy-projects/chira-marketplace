import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
	search: string
	
}

const initialState: SearchState = {
    search: ""
  }

export const SearchReducer = createSlice({
    name: "search",
    initialState,
    reducers: {
            searchProduct: state=>{
                state.search= "iphone"
            },
            incrementByAmount: (state, action: PayloadAction<string>) => {
                state.search += action.payload
              }
    }
})

export const {searchProduct,incrementByAmount} = SearchReducer.actions


export default SearchReducer.reducer