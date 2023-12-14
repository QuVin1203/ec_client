import React from 'react'
import GiftList from '../gift/components/GiftList'
import BaseButton from '../../components/button/BaseButton'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../home/home.css'


const HomeScreen = () => {
    const currentUser = useSelector(state => state.auth.currentUser)
    const navigate = useNavigate()
    return (
        
        <div>
            <div className='pt-10'>
                <p className="text-brand-500 text-3xl text-center">DANH SÁCH PHẦN QUÀ</p>
            </div>

            {currentUser?.isAdmin && <div className='text-right px-[100px] pt-10 space-x-2'>
                <BaseButton handleClick={() => navigate('/gift/create')} title="Thêm quà" className='py-2 px-7 bg-brand-500 text-white rounded-xl ' />
                <BaseButton handleClick={() => navigate('/users')} title="Quản lí nhân viên" className='py-2 px-7 bg-brand-500 text-white rounded-xl ' />
                <BaseButton handleClick={() => navigate('/sign-up')} title="Tạo tài khoản nhân viên" className='py-2 px-7 bg-brand-500 text-white rounded-xl ' />
                
            </div>}

            <div className='px-[100px] pt-8' id='bottom'>
                <GiftList />
            </div>
        </div>
    )
}

export default HomeScreen