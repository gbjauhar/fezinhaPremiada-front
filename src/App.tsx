import { Outlet } from 'react-router-dom'
import ResetCSS from './assets/global.style'
import { AuthContext } from './context/AuthContext'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [user, setUser] = useLocalStorage("user", null)
  const [cart, setCart] = useLocalStorage("cart", null)
  const [token, setToken] = useLocalStorage("token", null)
  return (
    <AuthContext.Provider value={{user, setUser, setCart, cart, token, setToken}}>
      <ResetCSS />
      <Outlet />
    </AuthContext.Provider>
  )
}

export default App
