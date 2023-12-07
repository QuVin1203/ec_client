import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalBase from '../../components/modal/ModalBase'
import BaseButton from '../../components/button/BaseButton'
import TextInput from '../../components/input/TextInput'
import { useForm } from 'react-hook-form'
import { updateUser } from './services/updateUser'
import toast, { Toaster } from 'react-hot-toast'
import { closeModal } from '../../components/modal/modalSlice'


const ModalUser = () => {
    const user = useSelector(state => state.modal.modalInfo)
    console.log(user)
    const currentUser = useSelector(state => state.auth.currentUser)
    const queryClient = useQueryClient()
    const { register, handleSubmit, setValue } = useForm()
    const dispatch = useDispatch()

    const mutation = useMutation({
        mutationFn: (userUpdate) => updateUser(user._id, userUpdate),
        onSuccess(data) {
            toast.success("Cập nhật thành công")
            dispatch(closeModal())
            queryClient.invalidateQueries()
        },
        onError() {
            toast.error("Cập nhật thất bại")
        }

    })
    useEffect(() => {
        if (user) {
            setValue('username', user.username)
            setValue('email', user.email)
            setValue('point', user.point)
        }

    }, [setValue, user])

    const onSubmit = (data) => {
        mutation.mutate(data)
    }
    return (
        <ModalBase>
            <div><Toaster position="top-center"
                reverseOrder={false} /></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-10'>
                        <div className='flex items-center space-x-8'>
                            <p className='text-xl font-medium'>Username</p>
                            <TextInput className='py-2 w-[400px]' {...register('username')} />
                        </div>
                        <div className='flex items-center space-x-[76px]'>
                            <p className='text-xl font-medium'>Email</p>
                            <TextInput className='py-2 w-[400px]' {...register('email')} />
                        </div>
                        <div className='flex items-center space-x-[76px]'>
                            <p className='text-xl font-medium'>Point</p>
                            <TextInput className='py-2 w-[400px]' {...register('point')} />
                        </div>
                    </div>

                    <div className='text-center pt-10 space-x-20'>
                        <BaseButton type='button' handleClick={() => dispatch(closeModal())} title="Hủy" className='bg-slate-700 px-8 py-[6px] rounded-2xl text-lg text-white' />
                        <BaseButton title="Update" className='bg-red-500 px-8 py-[6px] rounded-2xl text-lg text-white' />
                    </div>

                </form>
            </div>
        </ModalBase>
    )
}

export default ModalUser