import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../reducers/filterReducer"


const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault()
    dispatch(changeFilter(event.target.value))
  }
  
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={filter}/>
    </div>
  )
}

export default Filter