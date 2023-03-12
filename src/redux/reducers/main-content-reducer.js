import {GET_EVENT, GET_EVENT_BY_ID} from "../types/types";

const initialState = {
    loading: false,
    error: null,
    data: {},
}

const contentReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENT.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_EVENT.RECEIVE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_EVENT.FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_EVENT_BY_ID.REQUEST:
            return {
                ...state,
            }
        case GET_EVENT_BY_ID.RECEIVE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_EVENT_BY_ID.FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default contentReducers