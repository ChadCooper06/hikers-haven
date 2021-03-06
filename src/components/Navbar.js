import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useGlobalState } from "../context/GlobalState";
import Login from './user/Login';
import Register from './user/Register';
//import Modal from './Modal';
import AuthService from '../services/auth.service';
import { FaHiking } from 'react-icons/fa';
import { GiCampingTent, GiDirectionSigns, GiCampfire } from 'react-icons/gi';
import { Button } from 'react-bootstrap';


const Navbar = () => {

  //const [isOpen, setIsOpen] = useState(false);

  const [ state, dispatch ] = useGlobalState();

  return (
    <div className='header-wrapper'>      
      { // Shows always
        state &&(
        <>
          <div className='header-title'>
            <h1 className='title'><FaHiking />HIKER'S HAVEN FORUM</h1>
            <div className='header-menu'>
              <Link to='/' className='fs-1' id='Home'><GiCampingTent /></Link>
              <Link to='/Forums/' className='fs-1' id='Forums'><GiCampfire /></Link>
              <Link to='/Resources/' className='fs-1' id='Links'><GiDirectionSigns /></Link>
            </div>
          </div>
        </>
        )
      }
      <div className='h-menu'>
        { // Shows when user is not logged in
          !state.currentUser &&(
            <div className='login'>
              <Link to='/Login'><Button 
                variant='primary'
                className='login-button' 
                onClick={() => {dispatch( Login )}}
                size='sm'
                >Login</Button></Link>        
            </div>
          )
        }
        {
          !state.currentUser &&(
            <div className='register'>
              <Link to='/Register'><Button
                variant='primary'
                className="signup-button" 
                onClick={() => {dispatch( Register )}}
                size='sm'
                >Sign-up</Button></Link>
            </div>
          )
        }
        { // Shows only when user is logged in
          state.currentUser &&(
            <div className='logout'>
              <Button 
                variant='danger'
                className='logout-button'
                onClick={() => {
                  AuthService.logout()
                  window.location.reload()
                }}
                size='sm'
                >Logout
              </Button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;
