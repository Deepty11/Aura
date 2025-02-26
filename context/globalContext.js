import { createContext, useContext, useEffect, useState } from "react";
import {getCurrentUser} from ".././lib/appwrite"

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
        .then(res => {
            if(res) {
                setIsLoggedIn(true)
                setLoggedInUser(res)
            } else {
                setIsLoggedIn(false)
                setLoggedInUser(null)
            }
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    return <GlobalContext.Provider value={{loggedInUser, isLoggedIn, isLoading, setLoggedInUser, setIsLoggedIn}}>
        {children}
    </GlobalContext.Provider>
}