import { UserCredential, AuthError, Auth } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"

import { UserContext } from "../App"
import { useContext } from "react"

type GoogleAuthHook = {
  handleLoginGoogle: () => void
  user: UserCredential | undefined
  loading: boolean
  error: AuthError | undefined
}

function useGoogleAuth(): GoogleAuthHook {
  const { setUserStatus } = useContext(UserContext)
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  function handleLoginGoogle(): void {
    try {
      const check = signInWithGoogle()
      console.log("checking from useGoogle Auth custom hook", check)
      setUserStatus(user)
      console.log("user in try block ", user)
    } catch (err) {
      console.log("error caught wile loggin in", err)
    } finally {
      console.log("finally is called handle login called")
      console.log("user in finally", user, setUserStatus(user))
    }
  }
  return {
    handleLoginGoogle,
    user,
    loading,
    error,
  }
}

export default useGoogleAuth
