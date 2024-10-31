import { useContext } from "react"
import { UserContext } from "../../App"
import { auth } from "../../firebase/firebase"

import { useSignOut } from "react-firebase-hooks/auth"

function Header() {
  const { userStatus, setUserStatus } = useContext(UserContext)
  // console.log("calling from the header", userStatus)
  const [signOut] = useSignOut(auth)

  function handleSignOut() {
    signOut()
    setUserStatus(undefined)
  }
  return (
    <>
      <header className="flex justify-between p-3 h-14">
        <h1 className="text-4xl">♾️</h1>
        <nav className="flex gap-8">
          {userStatus && <button onClick={handleSignOut}>Logout</button>}
        </nav>
      </header>
    </>
  )
}

export default Header
