
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
  return (
    // GETTTING DATA FROM URL inside userId
    <div>User:{userId}</div>
  )
}

export default User