const GET_EVENT ={
    REQUEST: 'GET_EVENT_REQUEST',
    RECEIVE: 'GET_EVENT_RECEIVE',
    FAILURE: 'GET_EVENT_FAILURE'
}

const GET_EVENT_BY_ID ={
    REQUEST: 'GET_EVENT_BY_ID_REQUEST',
    RECEIVE: 'GET_EVENT_BY_ID_RECEIVE',
    FAILURE: 'GET_EVENT_BY_ID_FAILURE'
}

const GET_CREATOR_BY_ID ={
    REQUEST: 'GET_CREATOR_BY_ID_REQUEST',
    RECEIVE: 'GET_CREATOR_BY_ID_RECEIVE',
    FAILURE: 'GET_CREATOR_BY_ID_FAILURE'
}

const AUTH_LOGIN ={
    REQUEST: "AUTH_LOGIN_REQUEST",
    SUCCESS: "AUTH_LOGIN_SUCCESS",
    ERROR: "AUTH_LOGIN_ERROR"
}

const AUTH_REGISTER ={
    REQUEST: "AUTH_REGISTER_REQUEST",
    SUCCESS: "AUTH_REGISTER_SUCCESS",
    ERROR: "AUTH_REGISTER_ERROR"
}

const AUTH_LOGOUT='AUTH_LOGOUT'


export {
    GET_EVENT,
    GET_EVENT_BY_ID,
    GET_CREATOR_BY_ID,
    AUTH_LOGIN,
    AUTH_REGISTER,
    AUTH_LOGOUT,
}
