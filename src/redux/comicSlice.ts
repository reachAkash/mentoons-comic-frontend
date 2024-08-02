import { createSlice } from "@reduxjs/toolkit";

interface CartItemsPrototype {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface WishlistItemsPrototype {
  image: string;
  name: string;
}

export interface InitialStatePrototype {
  cart: CartItemsPrototype[];
  wishlist: WishlistItemsPrototype[];
}

const initialState: InitialStatePrototype = {
  cart: [],
  wishlist: [],
};

export const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    addToCartReducer: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCartReducer: (state, action) => {
      state.cart.filter((item) => {
        return item.image != action.payload.image;
      });
    },
    addToWishlistReducer: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlistReducer: (state, action) => {
      state.wishlist.filter((item) => {
        return item.image != action.payload.image;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCartReducer,
  removeFromCartReducer,
  addToWishlistReducer,
  removeFromWishlistReducer,
} = comicsSlice.actions;

export default comicsSlice.reducer;
