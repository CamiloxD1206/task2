import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"


function RegisterPage() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const {signup,isAuthenticated,error:RegisterErrors}=useAuth();
    const navigate=useNavigate()
    useEffect(()=>{
if(isAuthenticated) navigate('/tasks');
    },[isAuthenticated])
    // console.log(user)

    const onSubmit=handleSubmit(async(values)=>{
        signup(values);
   
   
    })


    return(
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            {
          RegisterErrors.map((error,i)=>(
            <div className="bg-red-500 p-2 text-white "key={i}>{error}</div>
          ))
            }
            <form 
            onSubmit={onSubmit}>
                <input placeholder="username"  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md  my-2 " type="text"{...register('username',{required:true})}/>
                {
                    errors.username &&<p className="text-red-500">nombre de usuario requerido</p>
                }

                <input  placeholder="email" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md  my-2 "    type="email"  {...register('email',{required:true})} />
                {
                    errors.email &&<p className="text-red-500">email requerido</p>
                }

                <input   placeholder="password" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md   my-2 "    type="password"  {...register('password',{required:true})}/>
                {
                    errors.password &&<p className="text-red-500">Contraseña requerida</p>
                }

                <button type="submit">Register</button>
            </form>
            <p className="flex gap-x-2 justify-between">
                ya tienes una cuenta?
            <Link to="/login" className="text-sky-500">Inicar sesion</Link>
            </p>
        </div>
    )
}
export default RegisterPage