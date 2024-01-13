import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Api calling
// export const fethingSingleData = createAsyncThunk(
//   "apisingle",
//   async ({ rejectwithvalue }) => {
//     const res = await axios.get(
//       "http://localhost:4000/api1/v2/product/getproducts"
//     );
//     try {
//       const result = await res.json();
//       return result;
//     } catch (error) {
//       return rejectwithvalue("Error Found" + error);
//     }
//   }
// );

const cartSlice = createSlice({
  name: "eStoreCart",
  initialState: {
    productsCart: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    showMessage: false,
    totalQuantity: 0,
    subTotal: 0,
  },
  reducers: {
    add(state, action) {
      state.productsCart.push(action.payload);
      toast.success(`"${action.payload.title.slice(0, 6)}" is Added To The Cart`, {
            position: "top-right",
            autoClose: 2000,
          });
      // const productToAdd = action.payload;
      // const proInCartIndex = state.productsCart.findIndex(
      //   (item) => item.id === productToAdd.id
      // );

      // if (proInCartIndex !== -1) {
      //   state.productsCart[proInCartIndex] = {
      //     ...state.productsCart[proInCartIndex],
      //     quantity: state.productsCart[proInCartIndex].quantity + 1,
      //   };
      //   toast.info(
      //     `${action.payload.title.slice(0, 5)} Quantity is Increased by 1 in The Cart`,
      //     {
      //       position: "top-right",
      //       autoClose: 2000,
      //     }
      //   );
      // } else {
      //   let tempprod = { ...action.payload, quantity: 1 };
      //   state.productsCart.push(tempprod);
      //   toast.success(`"${action.payload.title}" is Added To The Cart`, {
      //     position: "top-right",
      //     autoClose: 2000,
      //   });
      //   state.showMessage = true;
      // }

      localStorage.setItem("cartItems", JSON.stringify(state.productsCart));
    },

    DecQuantity(state, action) {
      const productIdToIncrease = action.payload;
      const productToIncrease = state.productsCart.find(
        (item) => item.id === productIdToIncrease
      );

      if (productToIncrease) {
        productToIncrease.quantity == 1;
        state.totalQuantity -= 1;
        state.subTotal -= productToIncrease.price;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.productsCart));
      
    },
    calculatingTotal(state) {
      state.subTotal = state.productsCart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      localStorage.setItem("cartItems", JSON.stringify(state.productsCart));
    },
    increaseQuantity(state, action) {
      const productIdToIncrease = action.payload;
      const productToIncrease = state.productsCart.find(
        (item) => item.id === productIdToIncrease
      );

      if (productToIncrease) {
        productToIncrease.quantity += 1;
        state.totalQuantity += 1;
        state.subTotal += productToIncrease.price;
      }
    },
  
    remove(state, action) {
      const productIdToRemove = action.payload;
      const removedProductIndex = state.productsCart.findIndex(
        (item) => item.id === productIdToRemove
      );
    
      if (removedProductIndex !== -1) {
        const removedProduct = state.productsCart[removedProductIndex];
        state.totalQuantity -= removedProduct.quantity;
        state.subTotal -= removedProduct.price * removedProduct.quantity;
    
        state.productsCart = state.productsCart.filter(
          (item) => item.id !== productIdToRemove
        );
      }

      toast.info(`Items is Removed from The Cart`, {
        position: "top-right",
        autoClose: 2000,
      });
      
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fethingSingleData.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fethingSingleData.fulfilled, (state, action) => {
  //       (state.status = "Succesded"), state.data.push(action.payload);
  //     })
  //     .addCase(fethingSingleData.rejected, (state) => {
  //       (state.status = "Failed"), (state.error = state.error.message);
  //     });
  // },
});

export const {
  add,
  remove,
  hideMessage,
  increaseQuantity,
  calculatingTotal,
  DecQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
