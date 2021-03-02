import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReverseText from '../helpers/reverseText'
const Detail = () => {
  const params = useParams()
  const [user, setUser] = useState(null)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.iduser}`).then((response) => {
      // console.log(response.data)
      setTimeout(() => {
        setUser(response.data)
      }, 3000)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <h1>Detail {params.iduser}</h1>
      {
        user===null?(
          <div>Loading</div>
        ):(
          <div>{user.name} - {ReverseText(user.name)}</div>
        )
      }
    </div>
  )
}

export default Detail