import {createSlice} from "@reduxjs/toolkit";

const grocerySlice = createSlice({
    name: "grocerylist",
    initialState: {
        currId: 0,
        items: [],
        darkMode: true
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push({
                id: state.currId++,
                title: action.payload.trim(),
                done: false
            });
        },
        completeItem: (state,action) => {
            const i = state.items.findIndex((it)=>it.id===action.payload);
            state.items[i].done=!state.items[i].done
            state.items.push(state.items.splice(i,1)[0]);
        },
        deleteItem: (state,action) => {
            const i = state.items.findIndex((it)=>it.id===action.payload);
            if(i>-1) state.items.splice(i,1);
        },
        switchTheme: (state,action) => {
            state.darkMode=!state.darkMode;
        }
    }
});

export default grocerySlice.reducer;
export const {addItem,completeItem,deleteItem,switchTheme} = grocerySlice.actions;