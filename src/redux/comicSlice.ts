import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Comic {
  name: string;
  desc: string;
  duration: string;
  thumbnail: string;
  videoLink: string;
  category: string;
}
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
  comics: Comic[];
}

const initialState: InitialStatePrototype = {
  cart: [],
  wishlist: [],
  comics: [
    // GroupSmall = (Age 6-12) GroupMedium = (Age 13-19) GroupLarge = (Age 20+) GroupXLarge = (Elders)
    {
      name: "Bet Your Life",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "2:17",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-09.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/BET_YOUR_LIFE.mp4",
      category: "groupMedium",
    },
    {
      name: "The Cell Life of Soniya",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "2:31",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-12.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/CELL_LIFE_OF_SONIYA_02.mp4",
      category: "groupMedium",
    },
    {
      name: "Choose Wisely",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "4:27",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-08.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/CHOOSE_WISLEY_3.mp4",
      category: "groupMedium",
    },
    {
      name: "Come out of Gaming",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "5:51",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-05.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/COME_OUT_OF_GAMING_02.mp4",
      category: "groupMedium",
    },
    {
      name: "Comic on Divorce",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "2:04",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-07.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/COMIC_ON_DIVORCE_01.mp4",
      category: "groupMedium",
    },
    {
      name: "Don't Fade Away",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "2:54",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-04.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/DONT_FADE_AWAY_02.mp4",
      category: "groupMedium",
    },
    {
      name: "Hungry for Likes Not Life",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "2:10",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-15.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/HUNGRY_FOR_LIKES_NOT_LIFE_01.mp4",
      category: "groupMedium",
    },
    {
      name: "One Way Trip",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "4:09",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-22.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/ONE-WAY-TRIP_1.mp4",
      category: "groupMedium",
    },
    {
      name: "Rishi and Rohit",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "2:20",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-16.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/RISHI+AND+ROHIT.mp4",
      category: "groupMedium",
    },
    {
      name: "Rohan and the Puppies",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "2:09",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-17.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/Rohan+and+the+Puppies_01.mp4",
      category: "groupMedium",
    },
    {
      name: "Tanya's Downfall",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "1:53",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-06.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/TANYA_DOWN-FALL_02.mp4",
      category: "groupMedium",
    },
    {
      name: "How Teenagers Lose Their Jobs Part-1",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "1:13",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-23.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+20%2B/SANKAR_INTERVIEW.mp4",
      category: "groupLarge",
    },
    {
      name: "How Teenagers Lose Their Jobs Part-2",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "0:58",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-24.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+20%2B/SANA_AUDIO_COMIC.mp4",
      category: "groupLarge",
    },
    {
      name: "How Teenagers Lose Their Jobs Part-2",
      desc: "Type '{ name: string; desc: string; }' is missing the following properties from type 'Comic': duration, thumbnail, videoLink, category",
      duration: "0:58",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-24.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+20%2B/SANA_AUDIO_COMIC.mp4",
      category: "groupLarge",
    },
  ],
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
