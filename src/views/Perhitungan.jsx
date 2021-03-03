import { useSelector, useDispatch } from 'react-redux'
const Perhitungan = () => {
  const dispatch = useDispatch()
  const dataBasic = useSelector((state) => state.basic)

  const actionAddData = () => {
    return {
      type: "ADD_DATA",
      payload: 10
    }
  }
  const actionReduceData = () => {
    return {
      type: "REDUCE_DATA",
      payload: 10
    }
  }

  
  const addData = () => {
    dispatch(actionAddData())
  }
  const reduceData = () => {
    dispatch(actionReduceData())
  }
  
  return(
    <div className="container mt-5 text-center">
      <h1>Perhitungan</h1>
      <hr/>
      <h1>{dataBasic.count}</h1>
      <button onClick={addData} className="btn btn-success mr-2">Add</button>
      <button onClick={reduceData} className="btn btn-danger mr-2">Reduce</button>
    </div>
  )
}

export default Perhitungan