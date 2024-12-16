
import Login from './components/Login'
import Signup from './components/Signup'

import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import Mobile from './home/Mobile.jsx';
import Desktop from './home/Desktop.jsx';

function App() {
  const [authUser, setAuthUser] = useAuth();
   console.log(authUser)
  return (
    <>
     
     
        <Routes>
       
       <Route path='/' element={authUser? ( <div>
      <div className="desktop-chat overflow-hidden">
        <Desktop />
      </div>
      <div className="mobile-chat overflow-hidden">
        <Mobile />
      </div>
    </div>) : <Navigate to={'/login'}/>  }  />
    <Route path='/login' element={authUser ? <Navigate to={'/'} /> :<Login/>}  />
    <Route path='/signup' element={authUser ? <Navigate to={'/'} /> : <Signup/>}  />

      {/*<Signup></Signup>*/}
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
