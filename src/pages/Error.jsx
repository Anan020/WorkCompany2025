import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Error = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    useEffect(()=>{
        if(count <= 0) return navigate('/admin')
        const timeout = setTimeout(()=>{
            setCount(prevCount => prevCount - 1)
        },1000)
        return ()=> clearTimeout(timeout)
    },[count])
  return (
    <div>
      page not found  {count}
    </div>
  )
}

export default Error
