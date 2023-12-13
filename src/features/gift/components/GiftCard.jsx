/* eslint-disable react/prop-types */
import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import BaseButton from '../../../components/button/BaseButton';
import { useNavigate } from 'react-router-dom';
import ModalConfirm from '../../../components/modal/ModalConfirm';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../components/modal/modalSlice';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteGift } from '../services/deleteGift';

const GiftCard = ({ gift }) => {
    const currentUser = useSelector(state => state.auth.currentUser)
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: (id) => deleteGift(id),
        onSuccess(data) {
            console.log(data)
            queryClient.invalidateQueries()
        },
        onError(err) {
            console.log(err)
        }
    })
    return (
        <div className='shadow-xl '>
            <img src={gift?.image} alt="" className='object-contain max-h-[170px]' />
            <div className='py-2 flex items-center text-lg justify-between px-4'>
                <p className='text-red-500'>Name:<span className='pl-2 font-medium'>{gift?.title}</span></p>
                <p className='text-red-500'>Point : <span className='pl-2 font-medium'>{gift.price}</span></p>
            </div>

            {currentUser?.isAdmin ? (
                <div className='flex py-2 px-4 justify-between'>
                    <BaseButton handleClick={() => navigate(`gift/update/${gift._id}`)} title="Sửa" className='px-4 py-1 bg-brand-500 text-white rounded-md' />
                    <BaseButton handleClick={() => mutation.mutate(gift._id)} title="Xóa" className='px-4 py-1 text-white bg-brand-500 rounded-md' />
                </div>
            ) : (
                <div className='px-3 py-2 flex justify-between'>
                    <div className='flex items-center space-x-2 cursor-pointer hover:text-brand-500 group' onClick={() => navigate(`gift/${gift._id}`)}>
                        <IoIosInformationCircleOutline className='text-slate-700 group-hover:text-brand-500' size='28' />
                        <p>Chi tiết</p>
                    </div>
                    <div>
                        <BaseButton handleClick={() => dispatch(openModal(gift))} title="Đổi quà" className='py-1 px-[10px] rounded-lg text-white bg-brand-500' />
                    </div>
                </div>
            )}


            <ModalConfirm />
        </div>
    )
}

export default GiftCard