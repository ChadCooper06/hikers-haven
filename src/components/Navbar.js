import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useGlobalState } from "../context/GlobalState";
import Login from './user/Login';
import Register from './user/Register';
import Modal from './Modal';
import AuthService from '../services/auth.service';
import {FaHiking} from 'react-icons/fa'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [ state, dispatch ] = useGlobalState();

  return (
    <div className='header-wrapper'>      
      {
        state &&(
        <>
          <div className='header-title'>
            <h1 className='title'><FaHiking />HIKER'S HAVEN FORUM</h1>
            <div className='header-menu'>
              <Link to='/'>Home</Link>
              <Link to='/Forums/'>Forums</Link>
              <Link to='/Resources/'>Links</Link>
            </div>
          </div>
        </>
        )
      }
      <div className='h-menu'>
        {
          !state.currentUser &&(
            <div className='login'>
              <Link to='/Login'><button 
                className='login-button' 
                onClick={() => {dispatch( Login )}}
                >Login</button></Link>
              <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
              </Modal>            
            </div>
          )
        }
        {
          !state.currentUser &&(
            <div className='register'>
              <Link to='/Register'><button
                className="signup-button" 
                onClick={() => {dispatch( Register )}}
                >Sign-up</button></Link>
              <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
              </Modal>
            </div>
          )
        }
        {
          state.currentUser &&(
            <div className='logout'>
              <button className='logout-button'
                onClick={() => {
                  AuthService.logout()
                  window.location.reload()
                }}
                >Logout
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;
