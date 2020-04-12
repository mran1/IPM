import React from 'react';
import {Router,Route, Redirect} from 'react-router-dom';
import {CreateRoomConnector} from './CreateRoom';
import {Provider} from 'react-redux';
import {store} from '../store/index';
import {history} from '../store/history'
import {AuthenticateConnector} from './Authenticate';
import {ErrorConnector} from './Error';

const RouteGuard=(Component)=>({match})=>{
    let type = match.path.split("/");
    
    if (type[1] === "user") {
        let id = match.params.userId;
        return <Component id={id} type={type[1]}/>
    }else if(type[1] === "admin"){
        let id = match.params.adminId;
        return <Component id={id} type={type[1]}/>
    }
    return <Redirect to="/error" />
}

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <Route exact path="/" render={() => <CreateRoomConnector />}></Route>
                <Route exact path="/user/:userId" render={RouteGuard(AuthenticateConnector)}></Route>
                <Route exact path="/admin/:adminId" render={RouteGuard(AuthenticateConnector)}></Route>
                <Route exact path = "/error" render={() => <ErrorConnector />}></Route>
            </div>
        </Provider>
    </Router>
)