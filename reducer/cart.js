import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART, UPDATE_PRODUCT_QUANTITY } from "../actions/cart";

export default function  cartReducer(state=[],action){
    switch(action.type){
        case ADD_TO_CART: 
            const {product: productToAdd, quantity= 1} = action.payload;
            const prodcutsInCart= [...state];
            let isProductInCart = false;
            for(let i=0;i<prodcutsInCart.length;i++){
                const product = prodcutsInCart[i];
                if(product.id === productToAdd.id){
                    product.quantity = product.quantity + quantity;
                    isProductInCart = true;
                    break;
                } 
            }

            if(!isProductInCart){
                productToAdd.quantity = quantity;
                prodcutsInCart.push(productToAdd);
            }
            return prodcutsInCart;
        case UPDATE_PRODUCT_QUANTITY:
            const{productId, quantity: quantityToSet=1} = action.payload;
            const prodcutsInCarts =[...state];
            for(let i=0; i<prodcutsInCarts.length;i++){
                let product = prodcutsInCarts[i];
                if(product.id === productId){
                    product.quantity = parseInt(quantityToSet);
                    break;
                }
            }
            return prodcutsInCarts;

        case REMOVE_PRODUCT_FROM_CART:
            return state.filter((product) => product.id !== action.payload);
            
        
        default:
            return state;
    }
}