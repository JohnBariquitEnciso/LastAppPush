import { useEffect} from 'react'
// import { petIncrement, petDecrement, getUsers } from '../actions'
import { getUsers }  from '../actions'
import {useSelector, useDispatch} from 'react-redux'

export const Home = () => {
  // const petCounter = useSelector((state) => state.petCounter)
  // const petFavorite = useSelector((state) => state.petFavorite)  
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)


  useEffect(() => {
    dispatch(getUsers())
  }, []);
  console.log(users)

  return (
    
      <table className="table">
        <thead></thead>
        <tbody>
          {users.map((user) => (
            <tr key= {user.id}>
            <td>{user.id}</td>
            <td>{user.node_id}</td>
            <td>{user.name}</td>
            <td>{user.full_name}</td>
            <td>{user.private ? 'true' : 'false'}</td>
            <td>{user.owner.type}</td>
        
          </tr>
            )) }
        </tbody>
    </table>
    
  )
}

export default Home;

{/* <td> {post.id}</td>
<td> {post.node_id}</td>
<td> {post.name}</td>
<td> {post.full_name}</td>
<td> {post.private ? 'true' : 'false'}</td>
<td> {post.owner.type}</td> */}