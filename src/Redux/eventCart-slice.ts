import { createSlice } from "@reduxjs/toolkit";

export interface IssueinitialState {
    events: any[]
}

const initialState: IssueinitialState= {
    events: []
}


const eventCartSlice = createSlice({
    name: "eventCart",
    initialState: initialState,
    reducers: {
        addItem(state,action) {
            const newItem = action.payload;
            const updatedItems = [...state.events];
            const existingItemIndex = state.events.findIndex((event) => event.id === newItem.id)
            //state.totalQuantity ++;

            if(existingItemIndex > -1) {
                //stoga ako postoji spremimo ga u varijablu
                const existingItem = state.events[existingItemIndex]
                //napravimo novi objekt u koji prenosimo sve iz "existingItem", ali i update-amo quantity za +1
                const updatedShopItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                }
                updatedItems[existingItemIndex] = updatedShopItem;
                
            }else { //ukoliko nemamo isti objekt već u array-u, dodati ćemo novi objekt (gdje proširujemo novi predmet te mu dodajemo quantity: 1)
                updatedItems.push({...newItem, quantity: 1})
    
            }
           
            //vraćamo novi update-ani state array
            return {...state, items: updatedItems}
        },
        removeItem(state, action) {
            const id = action.payload;
            const updatedItems = state.events;
            const existingItem = state.events.find((event) => event.id === id);
            const existingCartItemIndex = state.events.findIndex((event) => event.id === id);

            if(existingItem.quantity === 1) {
              updatedItems.splice(existingCartItemIndex, 1);
                
            }else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            
        },
        clearCart(state) {
            return {...state, items:[]}

        }


    }
})


export const eventCartActions = eventCartSlice.actions;
export default eventCartSlice;