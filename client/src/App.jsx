import{BrowserRouter,Routes,Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
function App () {
  return(
  <AuthProvider>
     <BrowserRouter>
   <Routes>
   < Route path='/' element={<h1>Home page</h1>} />
   < Route path='/login' element={<LoginPage />} />
   < Route path='/register' element={<RegisterPage/>} />
   < Route path='/tasks' element={<h1>tasks page</h1>} />
   < Route path='add-tasks' element={<h1>añadir tarea</h1>} />
   < Route path='/tasks/:id' element={<h1>actualizar tarea</h1>} />
   < Route path='/profile' element={<h1>perfil</h1>} />
   </Routes>
   </BrowserRouter>
  </AuthProvider>
  )
  
}
export default App;