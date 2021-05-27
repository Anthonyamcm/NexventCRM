import { firestore } from '../FirebaseInit';
import { databaseProperties } from '../Properties/DatabaseProperties';

export const createDBUser = (data, uid) => {
    return new Promise((resolve, reject) => {
        let userRef = firestore
            .collection(databaseProperties.Business)
            .doc(uid);
        userRef
            .set({ ...data, uid }, { merge: true })
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });
};