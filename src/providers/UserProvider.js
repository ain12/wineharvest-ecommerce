import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase/utils";

export const UserContext = createContext({ user: null })
export const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const { displayName, email } = user
                setUser({
                    displayName,
                    email,
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })
    }, [])
    return (
        <UserContext.Provider value={user}>{!loading && props.children}</UserContext.Provider>
    )
}

