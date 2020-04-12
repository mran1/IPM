import React from 'react';
import {connect} from 'react-redux';
export const Admin = () => (
    <div>
        Admin
    </div>
)
const mapStateToProps = (state)=>(state)

export const AdminConnector = connect(mapStateToProps)(Admin)