import {
    createUserRequest,
    createUserSuccess,
    createUserFailure,
} from './User.Actions';
import { userApi } from '../../Utils/API/User.Api';

export const createUser = (email, password, id, userData) => (dispatch) => {
    dispatch(createUserRequest());
    userApi
        .create(email, password, id, userData)
        .then((res) => {
            dispatch(createUserSuccess(res));
        })
        .catch((error) => {
            console.log(error);
            dispatch(createUserFailure(error));
        });
};