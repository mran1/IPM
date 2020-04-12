import {take,put} from 'redux-saga/effects';
import * as mutations from './mutations';
import axios from 'axios'
import {constants} from '../constants'

export function* createUsersSaga(){
    while(true){
        let { userId, adminId } = yield take(mutations.CREATE_USERS);
        const res = yield axios.post(constants.backend + "/createRoom", { userId, adminId });
        console.log("RESPONSE IS ", res.data)
    }

}

export function* startAuthenticateSaga(){
    while(true){
        let {id} = yield take(mutations.START_AUTHENTICATE);
        const res = yield axios.get(constants.backend + "/users");
        let {userId, adminId} = res.data;
        if(adminId === id || userId === id){
            yield put(mutations.authenticated(true))
        }
        else{
            yield put(mutations.authenticated(false))
        }
    }
}