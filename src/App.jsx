import {useState,useEffect} from 'react'

function App() {
  const [time,setTime] = useState(new Date());
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(new Date());
    },1000);
    return ()=>clearInterval(interval);
  },[]);
  const formattedTime = time.toLocaleTimeString();
  return (
    <div className=' w-full h-screen bg-gray-500 flex items-center justify-center'>
      <h1 className='text-[300px] font-extrabold'>{formattedTime}</h1>
    </div>
  )
}

export default App
