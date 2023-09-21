import {z} from 'zod';
export const registerSchema =z.object({
    username:z.string({
        required_error:"usuario requerido",
    }),
    email:z.string({
        required_error:"email requerido",
    }).email({
        message:'email invalido',
    }),
    password:z.string({
        required_error:"contraseña requerida",
    }).min(6,{
        message:'contraseña minimo de 6 carateres',
    }),

});

export const loginSchema =z.object({
    email:z.string({
        required_error:"email requerido",
    }).email({
        message:'email invalido',
    }),
    password:z.string({
        required_error:"contraseña requerida",
    }),
});