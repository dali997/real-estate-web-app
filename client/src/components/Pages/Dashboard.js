import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {toggleFalse} from "../../JS/action/edit"
import { Button } from 'semantic-ui-react'


const Dashboard = () => {
    const user = useSelector(state=>state.authReducer.user)
    const dispatch= useDispatch()
    
    return (
        <div>
            {!user ? (<h1>Spinner .....</h1>):(
                <div className='wel1'>
                    <div>
                <h2>Name : {user.name}</h2>
                <hr/>
                <h2>Last Name : {user.lastName}</h2>
                <hr/>
                <h2>User Mail : {user.email}</h2>
                <hr/>
                <h2> Role : {user.role === 1 ? "ADMIN": "CLIENT"}</h2>
                <hr/>
                </div>
                <div className='btn5'>
    
    <Link to ="/add">
      <Button basic color='violet' onClick={()=>dispatch (toggleFalse())}>
          Add Product
        </Button>    
    </Link>
    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard
