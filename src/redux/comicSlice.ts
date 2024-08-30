import { comicsData } from "@/constant/comicsConstants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Comic {
  name: string;
  desc: string;
  duration: string;
  mini_thumbnail: string;
  thumbnail: string;
  videoLink: string;
  category: string;
}
interface CartItemsPrototype {
  thumbnail: string;
  name: string;
  price: number;
  quantity: number;
}

export interface InitialStatePrototype {
  cart: CartItemsPrototype[];
  wishlist: Comic[];
  comics: Comic[];
  selectedFilter: string;
  currentHoverComic: Comic | null;
}

const initialState: InitialStatePrototype = {
  cart: [],
  wishlist: [],
  comics: comicsData,
  selectedFilter: "",
  currentHoverComic: null,
};

export const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    addToCartReducer: (state, action) => {
      const currComic = action.payload;
      console.log(currComic);
      const isPresent = state.cart.find(
        (item) => item.thumbnail === currComic.thumbnail
      );

      if (!isPresent) {
        const newComic = { ...currComic, quantity: 1, price: 10 };
        state.cart.push(newComic);
      } else {
        isPresent.quantity += 1;
        isPresent.price = isPresent.quantity * 10;
      }
    },
    removeFromCartReducer: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.thumbnail != action.payload;
      });
    },
    addToWishlistReducer: (state, action) => {
      console.log(action.payload);
      const isPresent = state.wishlist.find((item) => {
        return item.thumbnail == action.payload.thumbnail;
      });
      if (!isPresent) {
        console.log("in if");
        const comic = state.comics.find((item) => {
          return item.thumbnail == action.payload;
        });
        console.log(comic);
        if (comic) {
          state.wishlist.push(comic);
        }
      } else {
        console.log("in else");
      }
    },
    removeFromWishlistReducer: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => {
        return item.thumbnail != action.payload;
      });
    },
    updateComicQuantityReducer: (
      state,
      action: PayloadAction<{ image: string; quantity: number }>
    ) => {
      const { image, quantity } = action.payload;
      const item = state.cart.find((item) => {
        return item.thumbnail == image;
      });
      if (item) {
        item.quantity = quantity;
        item.price = quantity * 10;
      }
    },
    updateSelectedFilterReducer: (state, action) => {
      state.selectedFilter = action.payload;
    },
    updateCurrentHoverComicReducer: (
      state,
      action: PayloadAction<Comic | null>
    ) => {
      state.currentHoverComic = action.payload;
    },
  },
});

export const {
  addToCartReducer,
  removeFromCartReducer,
  addToWishlistReducer,
  removeFromWishlistReducer,
  updateComicQuantityReducer,
  updateSelectedFilterReducer,
  updateCurrentHoverComicReducer,
} = comicsSlice.actions;

export default comicsSlice.reducer;
