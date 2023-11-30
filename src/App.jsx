import './App.css'
import MainApp from './MainApp'
import AuthProvider from './provider/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  )
}

export default App
