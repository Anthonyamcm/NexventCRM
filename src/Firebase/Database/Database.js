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

export const CreateEvent = (databaseObject, NexventUser) => {
    return new Promise((resolve, reject) => {
        let EventsRef = firestore.collection(databaseProperties.Events).doc();
        EventsRef
            .set(
                {
                    ...databaseObject,
                    event_uid: EventsRef.id,
                    business_uid: NexventUser.uid,
                    companyName: NexventUser.companyName,
                    interests: 0,
                    timeStamp: new Date().getTime(),
                },
                {
                    merge: true,
                },
            )
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
};