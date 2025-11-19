import React, { useEffect, useState } from 'react'
import axios from "../api/axios"
function Feed() {

  const [data,setData] = useState('loaidng..')

  const GetPost = async () =>{
     const {data} = await axios.get("/post");
    if(data){
      setData(data.post)
    }
  };

// console.log(data);

//   useEffect(()=>{
//     GetPost()
//   },[])
  
  return (
    <div className='h-screen w-screen'>Feed</div>
  )
}

export default Feed