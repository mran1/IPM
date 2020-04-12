import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';
import * as mutations from './mutations'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(combineReducers({
    users(users = {userId:null, adminId:null}, action){
        switch(action.type){
            case mutations.CREATE_USERS : return {...users, userId:action.userId, adminId:action.adminId}
        }
        return users;
    },
    authenticate(authenticate={status:false},action){
        switch(action.type){
            case mutations.AUTHENTICATED : return {...authenticate,status:action.status}
        }
        return authenticate;
    }
}), applyMiddleware(createLogger, sagaMiddleware))

for(let i in sagas){
    sagaMiddleware.run(sagas[i])
}