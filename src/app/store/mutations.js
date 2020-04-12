export const CREATE_USERS="CREATE_USERS"
export const START_AUTHENTICATE = "START_AUTHENTICATE"
export const AUTHENTICATED = "AUTHENTICATED"

export const createUsers = (userId, adminId) => {
    return{
        type:CREATE_USERS,
        userId,
        adminId
    }
}

export const startAuthenticate = (id, userType) => {
    return{
        type: START_AUTHENTICATE,
        id,
        userType
    }
}

export const authenticated = (status) => {
    return {
        type: AUTHENTICATED,
        status
    }
}
