// import { Link } from "react-router-dom";
// import { useGlobalState } from "../context/GlobalState";

// function NavBar() {
//   const [ state, dispatch ] = useGlobalState();

//   return (
//     <nav>
//       <ul style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-evenly", listStyle: 'none' }}>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {
//           !state.currentUser && (
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           )
//         }
//         {
//           !state.currentUser && (
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//           )
//         }
//         {
//           state.currentUser && (
//             <li>
//               <Link to="/profile">Profile</Link>
//             </li>
//           )
//         }
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

// function Navbar () {
//     const [ state, dispatch ] = useGlobalState();

//     <nav className="nav" expand={false}>
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <div>
//             <Link to="/">
//             <h1>HIKER'S HAVEN FORUM</h1>
//             </Link>
//             <div className="signup-wrapper">
//             <Button
//                 className="signup-button"
//                 onClick={() => {
//                 setIsOpen(true)
//                 signupHandler()}
//                 }>
//                 Sign-up
//             </Button>
//             <div className="login-wrapper">
//                 <Button 
//                     className="login-button"
//                     onClick={() => {
//                     setIsOpen(true)
//                     loginHandler()}
//                     }>
//                     Login
//                 </Button>
//             </div>
//             <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
//                 This is Modal Content!
//             </Modal>
//             </div>
//         </div>
//         <div className="menu">
//             <Link to='/'>Home</Link>
//             <Link to='/forums' >Forums</Link>
//             <Link to='/posts'>Posts</Link>
//             <Link to='/Resources'>Links</Link>
//         </div>
//     </nav>
// }