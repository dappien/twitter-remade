import firebase from 'firebase/compat/app';

import { auth } from '../../firebase';
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType';

export const login = () => async dispatch=> {
    try{
        dispatch({
            type:LOGIN_REQUEST,
        })
        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)
        console.log(res);

        const accessToken = res.credential.accessToken

        const profile = {
            name:res.additionalUserInfo.profile.name,
            photoUrl:res.additionalUserInfo.profile.picture,
        }

        sessionStorage.setItem("twitter-access-token",accessToken)
        sessionStorage.setItem("twitter-user",JSON.stringify(profile))

        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })
        dispatch({
            type:LOAD_PROFILE,
            payload:profile,
        })
    }catch(error){
        console.log(error.message);
        dispatch({
            type:LOGIN_FAIL,
            payload:error.message,
        })
    }
}

export const logout = () => async dispatch=>{
    auth.signOut()
    dispatch({
        type:LOG_OUT,
    })
    sessionStorage.removeItem("twitter-access-token")
    sessionStorage.removeItem("twitter-user")
}