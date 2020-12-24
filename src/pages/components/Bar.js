import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Styled from 'styled-components'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

export default function Bar(props) {
  const [value, setValue] = useState('dashboard')
  return (
    <StyledBottomNavigation  value={value} onChange={(e,v)=>{
      setValue(v)
    }}> 
      <BottomNavigationAction label="dashboard" value="dashboard" component={Link} to="/" icon={<HomeOutlinedIcon/> }/>
      <BottomNavigationAction label="habits" value="habits" component={Link} to="/habits" icon={<ListOutlinedIcon/>}/>
      <BottomNavigationAction label="account" value="account" component={Link} to="/account" icon={<PermIdentityIcon/>}/>
    </StyledBottomNavigation>

  )
}

const StyledBottomNavigation = Styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;

`;