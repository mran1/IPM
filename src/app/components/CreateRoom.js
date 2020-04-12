import React from 'react';
import uuid from 'uuid';
import {constants} from '../constants';
import {createUsers} from '../store/mutations';
import { connect } from 'react-redux';

export const CreateRoom = ({users, onClickCreateRoom}) =>(
    <div>
        {users.userId && users.adminId ? 
        <div>
           <h4>
               Login to below links
           </h4>
           <h5>Admin: {constants.frontend+"/admin/"+users.adminId}</h5>
           <h5>User: {constants.frontend+"/user/"+users.userId}</h5>
        </div>:<button onClick={onClickCreateRoom}>Create Room</button>}
    </div>
)
const mapStateToProps = (state) => {
    return{
        users:state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickCreateRoom:function(){
            let userId = uuid();
            let adminId = uuid();
            dispatch(createUsers(userId, adminId))
        }
    }
}
export const CreateRoomConnector = connect(mapStateToProps, mapDispatchToProps)(CreateRoom)