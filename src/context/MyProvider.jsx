import React, { useState } from 'react'
import MyContext  from './MyContext'


const MyProvider = ({children}) => {
    const [state ,setState] = useState()
    const shared  = {state,setState}
  return (
    <MyContext.Provider value={shared} >
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider