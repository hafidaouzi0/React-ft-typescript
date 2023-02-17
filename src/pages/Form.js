import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
export const Form=()=>{

const schema=yup.object().shape({

fullName:yup.string().required("Your Full Name is required!"),
email:yup.string().email().required(),
age:yup.number().positive().integer().min(18).required(),
password:yup.string().min(4).max(22).required(),
confirmPassword:yup.string().oneOf([yup.ref("password"),null],"Passwords Don't Match").required()

})

const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
})

const onSubmit=(data)=>{

    console.log(data)
}

return(
<form onSubmit={handleSubmit(onSubmit)}>
<input type="text" placeholder="Full Name.."  {...register('fullName')}/>
<p className="errP">{errors.fullName?.message}</p>
<input type="text" placeholder="Email.." {...register('email')} />
<p className="errP">{errors.email?.message}</p>
<input type="number" placeholder="Age.." {...register('age')}/>
<p className="errP">{errors.age?.message}</p>
<input type="password" placeholder="Password.." {...register('password')}/>
<p className="errP">{errors.password?.message}</p>
<input type="password" placeholder="Confirm password.." {...register('confirmPassword')} />
<p className="errP">{errors.confirmPassword?.message}</p>
<input type="submit" />
</form>

)

}