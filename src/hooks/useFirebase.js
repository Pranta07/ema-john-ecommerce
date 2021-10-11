import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";

firebaseInitialization();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
        /* .then((result) => {
                //setUser(result.user);
                console.log(result.user);
            })
            .catch((error) => {
                setError(error.message);
            }); */
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return { user, error, handleGoogleSignIn, handleSignOut };
};

export default useFirebase;
