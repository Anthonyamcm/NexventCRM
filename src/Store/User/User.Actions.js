import * as types from './User.Types';

export const getUserRequest = () => ({ type: types.GET_USER_REQUEST });

export const getUserSuccess = (user) => ({
    type: types.GET_USER_SUCCESS,
    user,
});

export const getUserFailure = (error) => ({
    type: types.GET_USER_FAILURE,
    error,
});

export const createUserRequest = () => ({ type: types.POST_USER_REQUEST });

export const createUserSuccess = (user) => ({
    type: types.POST_USER_SUCCESS,
    user,
});

export const createUserFailure = (error) => ({
    type: types.POST_USER_FAILURE,
    error,
});
