const initialState = {
    token : localStorage.getItem('token') ? localStorage.getItem('token') : null,
    user: null,
};
const products = [];
const users = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
            case "REGISTER":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}
export const productsReducer = (state = products, action) => {
    switch (action.type) {
        case "PRODUCTS":
            return action.payload;
        default:
            return state;
    }
}

export const Users = (state=users,action)=>{
    switch (action.type){
        case "GET_USERS":
            return action.payload;
        default :
            return state;
    }

}