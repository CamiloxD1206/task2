import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";



function RegisterPage() {
    const {register,handleSubmit}=useForm();
    const {signup,user}=useAuth();
    console.log(user)

    const onSubmit=handleSubmit(async(values)=>{
        signup(values);
   
   
    })


    return(
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form 
            onSubmit={onSubmit}>
                <input placeholder="username"  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md  my-2 " type="text"{...register('username',{required:true})}/>

                <input  placeholder="email" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md  my-2 "    type="email"  {...register('email',{required:true})} />
                <input   placeholder="password" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md   my-2 "    type="password"  {...register('password',{required:true})}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default RegisterPage