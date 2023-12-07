import { useDispatch } from "react-redux"
import BaseButton from "../../components/button/BaseButton"
import TextInput from "../../components/input/TextInput"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "./services/signIn"
import { loginSuccess } from "./authSlice"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'



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
        <div className='pt-20 '>
            <div><Toaster position="top-center"
                reverseOrder={false} /></div>

            <div className=' bg-slate-200 w-[500px] h-[300px] mx-auto'>
                <p className='text-3xl font-medium text-center'>Login</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-10 px-8 space-y-8'>
                        <div className="flex items-center space-x-16">
                            <p>Email</p>
                            <TextInput className='py-2' {...register('email')} />
                        </div>
                        <div className="flex items-center space-x-[36px]">
                            <p>Password</p>
                            <TextInput className='py-2' type="password" {...register('password')} />
                        </div>
                    </div>
                    <div className='text-center mt-8'>
                        <BaseButton title="login" className='bg-red-500 py-[6px] px-6 rounded-xl' />
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignInScreen