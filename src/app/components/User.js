import React from 'react';
import {connect} from 'react-redux';
export const User = () => (
    <div>
        user
    </div>
)
const mapStateToProps = (state)=>(state)

export const UserConnector = connect(mapStateToProps)(User)