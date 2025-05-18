import React,{useMemo, useContext, useEffect} from 'react'
import { io } from 'socket.io-client'
const SocketContext = React.createContext(null)

export const useSocket = () => {
    return useContext(SocketContext)
}


export const SocketProvider = ({children}) => {
  const socket = useMemo(() => io("http://localhost:3001"),[])
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider;