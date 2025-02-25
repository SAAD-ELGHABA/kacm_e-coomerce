export const LogIn = (user)=>{
    return {
        type: 'LOGIN',
        payload: user
    }
}
export const LogOut = ()=>{
    return {
        type: 'LOGOUT'
    }
}  
export const Register = (user)=>{
    return {
        type: 'REGISTER',
        payload: user
    }
}
export const Products = (products)=>{
    return {
        type: 'PRODUCTS',
        payload: products
    }
}