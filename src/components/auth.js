import React, { useEffect, useState, createContext } from 'react'
import firebase from './firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    console.log(firebase.auth())
    firebase.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}