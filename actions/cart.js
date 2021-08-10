export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product, quantity=1) =>({
    type: ADD_TO_CART,
    payload: {product,quantity}
})

export const UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY";

export const updateProductQuantity = (productId, quantity=1)=>({

        type: UPDATE_PRODUCT_QUANTITY,
        payload: {productId, quantity}
})

export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export const removeProductFromCart = (productId)=>({
    type: REMOVE_PRODUCT_FROM_CART ,
    payload: productId
})