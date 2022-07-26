import { userService } from "../../services/user.service.js"


export function loadUsers(filterBy) {
    return async dispatch => {
        try {
            const users = await userService.getUsers(filterBy)
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}
export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.remove(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
            console.log('UserActions: err in removeUser', err)
        }
    }
}
export function onLogin(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            console.log(user)
            dispatch({
                type: 'SET_USER',
                user
            })
            return user
        } catch (err) {
            console.log('Cannot login', err)
        }
    }
}
export function onSignup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            user.messege = []
            user.friendslist = []
            dispatch({
                type: 'SET_USER',
                user
            })
            return user
        } catch (err) {
            console.log('Cannot signup', err)
        }
    }
}

export function onAddUser(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.addUser(credentials)
            user.messege = []
            user.friendslist = []
            dispatch({
                type: 'ADD_USER',
                user
            })
        } catch (err) {
            console.log('Cannot add user', err)
        }
    }
}

export function onUpdateUser(user) {
    return async (dispatch) => {
        try {
            const updatedUser = await userService.update(user)
            dispatch({
                type: 'SET_USER',
                user: updatedUser
            })
        } catch (err) {
            console.log('Cannot update the user', err)
        }
    }
}
export function onUpdateFriendsAnMsg(user) {
    return async (dispatch) => {
        try {
            const updatedUser = await userService.updateFriendsAndMsg(user)
            dispatch({
                type: 'SET_USER',
                user: updatedUser
            })
        } catch (err) {
            console.log('Cannot update the user', err)
        }
    }
}

export function onLogout() {
    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null
            })
        } catch (err) {
            console.log('Cannot logout', err)
        }
    }
}

export function loadUser(userId) {
    return async (dispatch) => {
        try {
            const user = await userService.getById(userId)
            dispatch({ type: 'SET_USER', user })
            return user
        } catch (err) {
            console.log('Cannot load user', err)
        }
    }
}
