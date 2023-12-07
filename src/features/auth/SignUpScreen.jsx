import { useForm } from "react-hook-form"
import BaseButton from "../../components/button/BaseButton"
import TextInput from "../../components/input/TextInput"
import { useMutation } from "@tanstack/react-query"
import { signUp } from "./services/signUp"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'



const SignUpScreen = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: signUp,
        onSuccess() {

            navigate('/sign-in')
        },
        onError() {
            toast.error("failed to register")

        }
    })
    const onSubmit = (data) => {
        mutation.mutate(data)
    }
    return (
        <div className='pt-20 '>
            <div><Toaster position="top-center"
                reverseOrder={false} /></div>

            <div className=' bg-slate-200 w-[500px] h-[400px] mx-auto'>
                <p className='text-3xl font-medium text-center'>Register</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-10 px-8 space-y-8'>
                        <div className="flex items-center space-x-12">
                            <p>Username</p>
                            <TextInput className='py-2'   {...register('username')} />
                        </div>
                        <div className="flex items-center space-x-[82px]">
                            <p>Email</p>
                            <TextInput className='py-2'  {...register('email')} />
                        </div>
                        <div className="flex items-center space-x-[54px]">
                            <p>Password</p>
                            <TextInput className='py-2' type="password"  {...register('password')} />
                        </div>
                        <div className='flex items-center space-x-4'>
                            <input type="checkbox" {...register('isAdmin')} />
                            <label htmlFor="">Đăng ký với tư cách quản trị viên</label>
                        </div>
                    </div>
                    <div className='text-center mt-8'>
                        <BaseButton title="Register" className='bg-red-500 py-[6px] px-6 rounded-xl' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpScreen