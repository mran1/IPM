import React from 'react';
import {connect} from 'react-redux';
import * as mutations from '../store/mutations';
import {UserConnector} from './User';
import {AdminConnector} from './Admin'

export const Authenticate = ({status, type,  startAuthenticate}) => {
    if(status){
        if(type === "user"){
            return(
                <UserConnector />
            )
        }
        if(type === "admin"){
            return(
                <AdminConnector />
            )
        }
    }else{
        return (
            <div>
                <button onClick={startAuthenticate}>start pointing</button>
            </div>
        )
    }
}
    

const mapStateToProps = (state, ownProps) => {
    return{
        status:state.authenticate.status,
        type:ownProps.type
    }
}
const mapDispatchToProps=(dispatch, ownProps)=>{
    let {type, id} = ownProps;
    return{
        startAuthenticate:function(){
            dispatch(mutations.startAuthenticate(id, type));
        }
    }
}

export const AuthenticateConnector = connect(mapStateToProps, mapDispatchToProps)(Authenticate)