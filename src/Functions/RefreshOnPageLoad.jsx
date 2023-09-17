import { useEffect } from 'react'

const RefreshOnPageLoad = ({ children }) => {
    useEffect(() => {
        window.location.reload()
    }, []);
  return (
    < >
         {children} 
    </>
  )
}

export default RefreshOnPageLoad