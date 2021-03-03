import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_USERS, INSERT_USERS } from './action'
const Users = () => {
  const dispatch = useDispatch()
  const dataUsers = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(GET_ALL_USERS())
  }, [])

  return(
    <div className="container mt-5 text-center">
      <h3>Users</h3>
      {
        dataUsers.listLoading?(
          <h1>Loading ...</h1>
        ):dataUsers.listError?(
          <h1>{dataUsers.errMessage}</h1>
        ):(
          <div>
            {
              dataUsers.list.map((item, i) => (
                <div key={i}>
                  {item.name}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Users