import * as React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Register from '../Register';
import Login from '../Login';
import { logoutUser } from '../../JS/action/authActions';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
// import { toggleFalse } from '../../JS/action/edit';

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state)=>state.authReducer.isAuth);
  const user = useSelector((state)=>state.authReducer.user);

  const logout = ()=>{
    dispatch(logoutUser())
  }

  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='cl'>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
          <Link  to="/"><img className='home1' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47848b83513689.5d3f1746d01d6.jpg' alt='home'/></Link>
          <Link className='cl1' to="/">
            Home</Link>

            <Link className='cl1'  to="/products">
             Products</Link>
             

                    {isAuth && user.role === 1 ? (<Link  className='cl1' to="/dashboard">
                    Dashboard</Link>):(<></>)}
            {isAuth && user.role === 1 ? (<Link  className='cl1' to ="/add"   >            
            Add product</Link>):(<></>)}
            
           <Link className='cl1'  to="/search">
             Search </Link>
          </Typography>
        {!isAuth ? ( <>
        <div> <Register /> </div>
          <div> <Login /> </div></>):(
            <>
            <Button  ><div className='cl2'>{user.name}</div></Button>
            <Button  onClick={logout}><Link  className='cl1'  to="/" >Logout</Link></Button>
            </>)}
            
        </Toolbar>
      </AppBar>
    </Box>
  );
}