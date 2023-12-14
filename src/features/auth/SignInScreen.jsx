import { useDispatch } from "react-redux"
import BaseButton from "../../components/button/BaseButton"
import TextInput from "../../components/input/TextInput"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "./services/signIn"
import { loginSuccess } from "./authSlice"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'
import '../auth/SignIn.css'
import bg from '../auth/Rectangle 2.png'
import user from '../auth/ph_user.svg'
import pass from '../auth/material-symbols_lock-outline.svg'


const SignInScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const mutation = useMutation({
        mutationFn: signIn,
        onSuccess(data) {
            dispatch(loginSuccess(data))
            navigate('/')
        },
        onError() {
            toast.error("email or password invalid")

        }
    })
    const onSubmit = (data) => {
        mutation.mutate(data)
    }
    return (
        // <div className='bg'>
        //     <div><Toaster position="top-center"
        //         reverseOrder={false} /></div>
        //     <div className="bg-content">
        //     <div className="img-left"></div>
        //     <div className='right'>
        //     <p class="USER-LOGIN"><span class="text-wrapper">USER </span> <span class="span">LOGIN</span></p>
        //         <form onSubmit={handleSubmit(onSubmit)}>
        //             <div className='content mt-10 px-8 space-y-8'>
        //                 <div className="email flex items-center space-x-16">
        //                     <p>Email</p>
        //                     <TextInput className='py-2' {...register('email')} />
        //                 </div>
        //                 <div className="flex items-center space-x-[36px]">
        //                     <p>Password</p>
        //                     <TextInput className='py-2' type="password" {...register('password')} />
        //                 </div>
        //             </div>
        //             <div className='text-center mt-8'>
        //                 <BaseButton title="LOGIN" className=/*bg-red-500 py-[6px] px-6 rounded-xl*/'btn-lg' />
        //             </div>
        //         </form>
        //         </div>
        //     </div>
        // </div>
<div class="login">
    <div class="overlap-group-wrapper">
    <div><Toaster position="top-center"
        reverseOrder={false} /></div>
            <div class="overlap-group">
                <div class="rectangle"></div>
                <div class="text-wrapper">LOGIN</div>
                <img class="img" src={bg} alt="background" />
                <p class="USER-LOGIN"><span class="span">USER </span> <span class="text-wrapper-2">LOGIN</span></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="div"><TextInput className='type-email' {...register('email')} /></div>
                    <div class="rectangle-2"><TextInput className='type-pass' type="password" {...register('password')} /></div>
                    <div class="ellipse-2"></div>
                    <div class="ellipse-3"></div>
                    <img class="line" src="img/line-1.svg" />
                    <img class="ph-user" src={user} />
                    <img class="material-symbols" src= {pass} />
                <div class="rectangle-3"><BaseButton title="" className='btn-lg' /></div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default SignInScreen