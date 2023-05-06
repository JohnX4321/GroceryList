import ACTION_TYPES from "./const";

const actions = {
    addItem: (id,title,done = false) => {
        let itemId = Math.round(Math.random()*100);
        return {type: ACTION_TYPES.ADD_ITEM,payload: {id,itemId,title,done}};
    }
}