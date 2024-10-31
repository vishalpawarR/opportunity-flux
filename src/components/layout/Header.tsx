import { useContext } from "react"
import { UserContext } from "../../App"

function Header() {
  const user = useContext(UserContext)
  return (
    <>
      <header className="flex justify-between p-3 h-14">
        <h1 className="text-4xl">♾️</h1>
        <nav className="flex gap-8">
          {user ? <button>Logout</button> : <button>Login</button>}
        </nav>
      </header>
    </>
  )
}

export default Header
