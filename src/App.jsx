import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState([])
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setUserData(response.data);

  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading......</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-44 rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-sm'>{elem.author}</h2>
        </a>
      </div>

    })



  }




  return (
    <div className='bg-black h-screen p-10 text-white'>
      <div className='flex h-[80%] flex-wrap gap-2'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserData([])
          }
        }}
          className='bg-green-700 text-m cursor-pointer text-white rounded px-4 py-2 font-semibold'>
          Prev
        </button>
        <button onClick={() => {
          setUserData([])
          setIndex(index + 1)
        }}
          className='bg-green-700 text-m cursor-pointer text-white rounded px-4 py-2 font-semibold'>
          Next
        </button>
      </div>
    </div>

  )
}

export default App
