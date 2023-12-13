import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getGiftById } from '../services/getGiftById'
import BaseButton from '../../../components/button/BaseButton'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../../components/modal/modalSlice'
import ModalConfirm from '../../../components/modal/ModalConfirm'

const GiftDetailScreen = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { data } = useQuery({ queryKey: ['gift', id], queryFn: () => getGiftById(id) })
    console.log(data)
    return (
        <div>
            <div>
                <p className='text-brand-500 text-3xl text-center font-medium pt-6'>Chi tiết phần quà</p>
            </div>
            <div className='grid grid-cols-2 gap-4 px-[260px] pt-8 '>
                <div>
                    <img src={data?.image} alt="" />
                </div>
                <div className='space-y-4'>
                    <p className='text-xl'> {data?.title}</p>
                    <p className='text-xl'>Point : <span>{data?.price}</span></p>
                    <p>{data?.description}</p>
                    <div className='pt-6'>
                        <BaseButton handleClick={() => dispatch(openModal(data))} title="Đổi quà" className='py-2 px-6 bg-brand-500 text-white rounded-xl ' />
                    </div>

                </div>
            </div>
            <ModalConfirm />
        </div>
    )
}

export default GiftDetailScreen