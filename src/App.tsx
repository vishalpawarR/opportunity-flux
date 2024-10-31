import { createContext, useState } from "react"
import { UserCredential } from "firebase/auth"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import Chat from "./components/Chat"
import Login from "./components/Login"

type UserStatusType = UserCredential | undefined

type UserContextType = {
  userStatus: UserStatusType
  setUserStatus: (userStatus: UserStatusType) => void
}

export const UserContext = createContext<UserContextType>({
  userStatus: undefined,
  setUserStatus: () => {},
})

function App() {
  const [userStatus, setUserStatus] = useState<UserStatusType>(undefined)
  console.log("App is calling me", userStatus)
  return (
    <>
      <UserContext.Provider value={{ userStatus, setUserStatus }}>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-grow">{userStatus ? <Chat /> : <Login />}</main>
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App
