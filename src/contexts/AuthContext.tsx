import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { app } from "../services/firebase";

type UserType = {
    id: string,
    name: string;
    avatar: string;
}
  
type AuthContextType = {
    user: UserType | undefined;
    signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderType = {
    children: ReactNode; 
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderType) {
    const [user, setUser] = useState<UserType>()
  
    useEffect(() => {
        const auth = getAuth(app);

        const unSubscribe = onAuthStateChanged( auth, user => {
            if (user) {
                const { displayName, photoURL, uid} = user
        
                if(!displayName || !photoURL) {
                    throw new Error('Missing information from Google account.')
                }
        
                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => {
            unSubscribe();
        }
    }, [])

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        const auth = getAuth(app);

        const result = await signInWithPopup(auth, provider);

        if (result.user) {
            const { displayName, photoURL, uid} = result.user

            if(!displayName || !photoURL) {
                throw new Error('Missing information from Google account.')
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}
