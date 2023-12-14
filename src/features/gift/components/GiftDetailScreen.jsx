import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getGiftById } from '../services/getGiftById'
import BaseButton from '../../../components/button/BaseButton'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../../components/modal/modalSlice'
import ModalConfirm from '../../../components/modal/ModalConfirm'
import '../components/giftdetail.css'
import heart from '../../auth/Favorite.svg'
import line from '../../auth/Line 1.png'

const GiftDetailScreen = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { data } = useQuery({ queryKey: ['gift', id], queryFn: () => getGiftById(id) })
    console.log(data)
    return (
        <div >
            <div className='container'>
                <p className='text-brand-500 text-3xl text-center font-medium pt-6'  id='detail'>CHI TIẾT PHẦN QUÀ</p>
            </div>
            <div className='grid grid-cols-2 gap-4 px-[260px] pt-8 '>
                <div className='picture'>
                    <div>
                        <img src={data?.image} alt="" />
                    </div>
                </div>
                <div className='space-y-4'>
                    <div id='price'>
                        <p className='text-xl' id='name'> {data?.title}</p>
                        <p className='text-xl'>Point : <span>{data?.price}</span></p>
                    </div>
                    <img src={line}/>
                    <p>{data?.description}</p>
                    <div className='pt-6' id='btn-buy'>
                        <BaseButton handleClick={() => dispatch(openModal(data))} title="ĐỔI QUÀ" className='' />
                    </div>
                    <div id='heart'>
                        <img src={heart} alt='yeu thich'/> <p>Thêm vào sản phẩm yêu thích</p>
                    </div>

                </div>
            </div>
            <ModalConfirm />
        </div>
    )
}

export default GiftDetailScreen