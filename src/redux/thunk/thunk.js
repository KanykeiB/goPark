import http from "../../services/api"


import { setToken, setUserData } from "../../services/token"

// import { authLoginErrorActionCreator, authLoginRequestActionCreator, authLoginSuccessActionCreator, authRegisterErrorActionCreator, authRegisterRequestActionCreator, authRegisterSuccessActionCreator } from "../actions/actions"

import {
    authLoginErrorActionCreator,
    authLoginRequestActionCreator,
    authLoginSuccessActionCreator,
    authRegisterErrorActionCreator,
    authRegisterRequestActionCreator,
    authRegisterSuccessActionCreator,
    getCreatorsByIdFailureActionCreator,
    getCreatorsByIdReceiveActionCreator,
    getCreatorsByIdRequestActionCreator,
    getEventByIdReceiveActionCreator,
    getEventFailureActionCreator,
    getEventReceiveActionCreator,
    getEventRequestActionCreator
} from "../actions/actions"

// ----------------------auth----------------------//
const authRegisterUser = (data) => async (dispatch) => {
    dispatch(authRegisterRequestActionCreator())
    try {
        const res = await http.post("http://127.0.0.1:8000/register/", data)
        dispatch(authRegisterSuccessActionCreator(res.data))
        setUserData(JSON.stringify(res.data))
    } catch (err) {
        dispatch(authRegisterErrorActionCreator(err.response.data.username))
        throw err
    }
}

//----

const authLoginUser = (data) => async (dispatch) => {
    dispatch(authLoginRequestActionCreator())
    try {
        const res = await http.post("http://13.115.195.252/account/token/", data)
        dispatch(authLoginSuccessActionCreator())
        setToken(res.data.token)
    } catch (err) {
        dispatch(authLoginErrorActionCreator(err.response.data.non_field_errors))
        throw err
    }
}

//-----------------get events------------------//

const getEventList = (data) => async (dispatch) => {
    dispatch(getEventRequestActionCreator())
    try {
        const res = await http.get("http://13.115.195.252/shop/")
        dispatch(getEventReceiveActionCreator(res.data))
    }
    catch (err) {
        dispatch(getEventFailureActionCreator(err))
    }
}

const getEventItem = (id) => async (dispatch) => {
    dispatch(getEventRequestActionCreator())
    try {
        const res = await http.get(`http://13.115.195.252/shop/${id}`)
        dispatch(getEventByIdReceiveActionCreator(res.data))
    } catch (err) {
        dispatch(getCreatorsByIdFailureActionCreator(err))
    }
}

const getCreator = (id) => async (dispatch) => {
    dispatch(getCreatorsByIdRequestActionCreator())
    try {
        const res = await http.get(`http://13.115.195.252/shop/${id}`)
        dispatch(getCreatorsByIdReceiveActionCreator(res.data))
    } catch (err) {
        dispatch(getCreatorsByIdFailureActionCreator(err))
    }
}

export default { authRegisterUser, authLoginUser, getEventList, getEventItem, getCreator }