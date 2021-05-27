import React, { useEffect, useState } from 'react';
import { app, firestore } from '../Firebase/FirebaseInit';
import PropTypes from 'prop-types';
import { databaseProperties } from '../Firebase/Properties/DatabaseProperties';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [ NexventUser, setNexventUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            if (user && user.emailVerified) {
                if (user.emailVerified) setCurrentUser(user);
                else {
                    setCurrentUser(null);
                }
            } else {
                setCurrentUser(null);
            }
        });
    }, []);

    useEffect(() => {
        if (currentUser) {
            var userRef = firestore
                .collection(databaseProperties.Business)
                .doc(currentUser.uid);
            userRef.onSnapshot(
                {
                    includeMetadataChanges: true,
                },
                function (doc) {
                    setNexventUser(doc.data());
                },
            );
        }
    }, [currentUser]);


    return (
        <AuthContext.Provider value={{ currentUser, NexventUser }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};