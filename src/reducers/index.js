import { combineReducers } from "redux";
import UserReducer from "./user";
import RajaOngkirReducer from "./rajaongkir";
import AuthReducer from "./Auth";
import ProfileReducer from "./Profile";
import KategoriReducer from "./kategori";
import ProdukReducer from "./Produk";
import CartReducer from "./Cart";
import PaymentReducer from "./Payment"

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
  ProfileReducer,
  KategoriReducer,
  ProdukReducer,
  CartReducer,
  PaymentReducer
});

export default rootReducer;
