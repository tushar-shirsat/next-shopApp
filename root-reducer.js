import { combineReducers } from "redux";
import { ourTeamReducer } from "./components/Layout/components/OurTeam/OurTeamReducer";
import shopCategoriesReducer from "./components/Layout/components/ShopCategries/ShopCategories.reducer";
import cartReducer from "./reducer/cart";
import productsReducer from "./reducer/products.reducer";


export const rootReducer = combineReducers({
    teamMembers: ourTeamReducer,
    ShopCategories: shopCategoriesReducer,
    cart: cartReducer,
    products: productsReducer
})