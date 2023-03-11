import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, GET_CREATOR_BY_ID, GET_EVENT, GET_EVENT_BY_ID, GET_USER} from "../types/types";

const getEventRequestActionCreator = () => ({
    type: GET_EVENT.REQUEST
})

const getEventReceiveActionCreator = (data) => ({
    type: GET_EVENT.RECEIVE,
    payload: data
})

const getEventFailureActionCreator = (err) => ({
    type: GET_EVENT.FAILURE,
    payload: err
})

const getEventByIdRequestActionCreator = () => ({
    type: GET_EVENT_BY_ID.REQUEST
})

const getEventByIdReceiveActionCreator = (data) => ({
    type: GET_EVENT_BY_ID.RECEIVE,
    payload: data
})

const getEventByIdFailureActionCreator = (err) => ({
    type: GET_EVENT_BY_ID.FAILURE,
    payload: err
})

const getCreatorsByIdRequestActionCreator = () => ({
    type: GET_CREATOR_BY_ID.REQUEST
})

const getCreatorsByIdReceiveActionCreator = (data) => ({
    type: GET_CREATOR_BY_ID.RECEIVE,
    payload: data
})

const getCreatorsByIdFailureActionCreator = (err) => ({
    type: GET_CREATOR_BY_ID.FAILURE,
    payload: err
})

const getUserDataRequestActionCreator = () => ({
    type: GET_USER.REQUEST
})

const getUserDataReceiveActionCreator = (data) => ({
    type: GET_USER.RECEIVE,
    payload: data
})

const getUserDataFailureActionCreator = (err) => ({
    type: GET_USER.FAILURE,
    payload: err
})

const authLoginRequestActionCreator = () => ({
    type: AUTH_LOGIN.REQUEST
})

const authLoginSuccessActionCreator = (data) => ({
    type: AUTH_LOGIN.SUCCESS,
    payload: data
})

const authLoginErrorActionCreator = (err) => ({
    type: AUTH_LOGIN.ERROR,
    payload: err
})


//---

const authRegisterRequestActionCreator = () => ({
    type: AUTH_REGISTER.REQUEST
})

const authRegisterSuccessActionCreator = (data) => ({
    type: AUTH_REGISTER.SUCCESS,
    payload: data
})

const authRegisterErrorActionCreator = (err) => ({
    type: AUTH_REGISTER.ERROR,
    payload: err
})

//---

const authLogoutActionCreator = () => ({
    type: AUTH_LOGOUT
})

export {
    getEventRequestActionCreator,
    getEventReceiveActionCreator,
    getEventFailureActionCreator,

    getEventByIdRequestActionCreator,
    getEventByIdReceiveActionCreator,
    getEventByIdFailureActionCreator,

    getCreatorsByIdRequestActionCreator,
    getCreatorsByIdReceiveActionCreator,
    getCreatorsByIdFailureActionCreator,

    getUserDataRequestActionCreator,
    getUserDataReceiveActionCreator,
    getUserDataFailureActionCreator,

    authLoginRequestActionCreator,
    authLoginSuccessActionCreator,
    authLoginErrorActionCreator,

    authRegisterRequestActionCreator,
    authRegisterSuccessActionCreator,
    authRegisterErrorActionCreator,

    authLogoutActionCreator,
}