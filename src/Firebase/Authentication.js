import { auth } from './FirebaseInit';

const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
};

const signUp = (email, password) => {
    return new Promise((resolve, reject) => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
};

export { signIn, signUp };