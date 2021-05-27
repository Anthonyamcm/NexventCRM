import { firestore, auth } from '../../Firebase/FirebaseInit';
import { databaseProperties } from '../../Firebase/Properties/DatabaseProperties';

export const userApi = {
    fetch: () => {},
    create: async (email, password, userDetails) => {
        let firebaseUser = await auth.createUserWithEmailAndPassword(
            email,
            password,
        );
        let userRef = firestore
            .collection(databaseProperties.Business)
            .doc(firebaseUser.user.uid);

        let user = await userRef.set(
            { ...userDetails, uid: firebaseUser.user.uid },
            { merge: true },
        );
        return user;
    },
};
