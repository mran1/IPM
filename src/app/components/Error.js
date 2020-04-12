import { connect } from "react-redux"
import React from 'react';
export const Error = () => (
    <div>
        NOT WORKING
    </div>
)
const mapStateToProps = (state) => {return state}

export const ErrorConnector = connect(mapStateToProps)(Error);