import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      const isPresent = state.cart.find((item) => {
        return item.image == action.payload.image;
      });
      if (!isPresent) {
        action.payload.quantity = 1;
        action.payload.price = 10;
        state.cart.push(action.payload);
      } else {
        isPresent.quantity += 1;
        isPresent.price = isPresent.quantity * 10;
      }
    },
    removeFromCartReducer: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.image != action.payload;
      });
    },
    addToWishlistReducer: (state, action) => {
      const isPresent = state.cart.find((item) => {
        return item.image == action.payload.image;
      });
      console.log(isPresent);
      if (!isPresent) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlistReducer: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => {
        return item.image != action.payload;
      });
    },
    updateComicQuantityReducer: (
      state,
      action: PayloadAction<{ image: string; quantity: number }>
    ) => {
      const { image, quantity } = action.payload;
      const item = state.cart.find((item) => {
        return item.image == image;
      });
      if (item) {
        item.quantity = quantity;
        item.price = quantity * 10;
      }
    },
  },
});

export const {
  addToCartReducer,
  removeFromCartReducer,
  addToWishlistReducer,
  removeFromWishlistReducer,
  updateComicQuantityReducer,
} = comicsSlice.actions;

export default comicsSlice.reducer;
