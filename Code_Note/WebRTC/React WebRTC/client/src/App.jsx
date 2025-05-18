import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Room from './pages/Room'
import  SocketProvider   from './context/SocketContext'
import { PeerProvider } from './context/PeerContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SocketProvider>
      <PeerProvider>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/room/:roomId' element={<Room/>}/>
    </Routes>
    </PeerProvider>
    </SocketProvider>
    </>
  )
}

export default App
