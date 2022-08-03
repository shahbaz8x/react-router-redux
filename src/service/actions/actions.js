import {ADD_TO_CART, REMOVE_TO_CART,GET_ALL_POSTS} from '../constants'
export const addToCart = (data)=> {
    console.log("action",data);
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removeToCart = ()=> {
    console.log("remove");
    return {
        type:REMOVE_TO_CART
    }
}
export const getAllPosts = ()=> {
    return {
        type:GET_ALL_POSTS
    }
}