import { useContext } from "react"
import { UserContext } from "../../App"
import { auth } from "../../firebase/firebase"

function Header() {
  const { userStatus, setUserStatus } = useContext(UserContext)

  function handleSignOut() {
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
