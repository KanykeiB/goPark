import {GET_USER} from "../types/types";

const initialState = {
    loading: false,
    error: null,
    user: null,
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER.REQUEST:
            return {
                ...state,
                loading: true,
                error:null
            }
        case GET_USER.RECEIVE:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case GET_USER.FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
                default:
                    return state
        }
    }
    export default userReducers