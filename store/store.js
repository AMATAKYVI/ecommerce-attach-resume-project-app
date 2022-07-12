import { configureStore } from '@reduxjs/toolkit';
import cartSlices from './cartSlices';
export default configureStore({
  reducer: {
    cart: cartSlices,
  },
});
