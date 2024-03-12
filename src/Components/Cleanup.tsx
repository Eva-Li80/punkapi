import React, { useEffect, useState } from 'react'

const Cleanup = () => {
  const [timeFinish, setTimeFinish] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTimeFinish(true)
    }, 3000)

    return () =>{
      clearTimeout(timeOut)
    }
  }, [])

  return (
    <div>
      {timeFinish && <p> Timeout är klar</p>}
      
      <h1>Komponent med cleanup</h1>
    </div>
  )
}

export default Cleanup
