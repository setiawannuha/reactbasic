import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const About = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      // console.log(response.data)
      setUsers(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div className="container text-center mt-5">
      <h1>About</h1>
      <hr/>
      {
        users.map((item, i) => (
          <div key={i}>
            {item.name} <Link to={`/about/${item.id}`}>Detail</Link>
          </div>
        ))
      }
    </div>
  )
}
export default About