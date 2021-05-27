import * as types from './User.Types';

const initialState = {
    item: {},
    pending: false,
    error: null,
    success: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                item: action.user,
            };
        case types.GET_USER_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        case types.POST_USER_REQUEST:
            return {
                ...state,
                pending: true,
                error: null,
                success: null,
            };
        case types.POST_USER_SUCCESS:
            return {
                ...state,
                creating: false,
                item: action.user,
                pending: false,
                error: null,
                success: {
                    message: 'User has been created',
                },
            };
        case types.POST_USER_FAILURE:
            return {
                ...state,
                pending: false,
                success: null,
                error: { message: 'Something went wrong creating user' },
            };
        default:
            return state;
    }
};

export default userReducer;