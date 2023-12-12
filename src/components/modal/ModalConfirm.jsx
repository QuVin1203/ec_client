import React from 'react'
import ModalBase from './ModalBase'
import BaseButton from '../button/BaseButton'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from './modalSlice'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { exchangeGift } from '../../features/gift/services/exchangeGift'
import { loginSuccess, logoutSuccess } from '../../features/auth/authSlice'

const ModalConfirm = () => {
    const productInfo = useSelector(state => state.modal.modalInfo)
    const currentUser = useSelector(state => state.auth.currentUser)
    const queryClient = useQueryClient()

    const dispatch = useDispatch()

    const mutation = useMutation({
        mutationFn: () => exchangeGift(currentUser._id, productInfo._id),
        onSuccess(data) {
            alert("Đổi quà thành công")
            dispatch(closeModal())
            dispatch(loginSuccess(data))
        },
        onError(err) {
            alert(err.response.data)
        }
    })

    const handleExchange = () => {
        mutation.mutate()
    }
    return (
        <ModalBase>
            <p>Bạn có chắc chắn muốn đổi phần quà này không</p>
            <div className=' pt-10 text-right  space-x-6'>
                <BaseButton title='Hủy' type='button' className='px-5 py-2 bg-red-600 text-white rounded-lg' handleClick={() => dispatch(closeModal())} />
                <BaseButton
                    title='Đổi'
                    className='px-5 py-2 bg-slate-700 text-white rounded-lg'
                    type='button'
                    handleClick={() => handleExchange()}
                />
            </div>
        </ModalBase>
    )
}

export default ModalConfirm