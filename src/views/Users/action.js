import axios from 'axios'
export const GET_ALL_USERS = () => {
  return {
    type: 'GET_ALL_USERS',
    payload: new Promise((resolve, reject) => {
      axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        setTimeout(() => {
          resolve(response.data)
        }, 2000)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export const INSERT_USERS = (payload) => {
  return axios.post('1212', payload).then((response) => {
    return response.data
  }).catch((err) => {
    return err.response.data
  })
}