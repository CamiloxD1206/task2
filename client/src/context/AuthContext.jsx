import { createContext,useState,useContext,useEffect}  from "react"
import { registerRequest,loginRequest } from "../api/auth";



export const AuthContext =createContext();

export const  useAuth=()=>{
    const context=useContext(AuthContext);
    if(!context){
        throw new Error('useAuch must be used witbin an AuthProvider');

    }return context


}

export const AuthProvider=({children})=>{
    const[user,setUser]=useState(null)
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    const[error,setErrors]=useState([]);


    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors([error.response.data]);

        }
    }
 //-----------------------------------------------
    const signin=async(user)=>{
try{
    const res=await loginRequest(user);
    console.log(res)
}catch(error){
 if(Array.isArray(error.response.data)){
    return setErrors(error.response.data);
 }
 console.log(error)
 setErrors([error.response.data.message]);

    }
}
//------------------------------------
useEffect(()=>{
    if(error.length>0){
       const timer= setTimeout(() => {
            setErrors([])
        },3000);
        return()=>clearTimeout(timer)
    }
},[error])
return(
    <AuthContext.Provider value={{
        signup,
        signin,
        user,
        isAuthenticated,
        error

    }}
    >
        {children}
    </AuthContext.Provider>
)
}