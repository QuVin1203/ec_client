import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../../features/auth/authSlice';

const Header = () => {
    const currentUser = useSelector(state => state.auth.currentUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='py-[50px] px-[160px] bg-brand-500 flex items-center justify-between'>
            <p className='text-3xl cursor-pointer font-medium text-white' onClick={() => navigate('/')}>Give Away</p>

            {currentUser
                ?
                (
                    <div className='flex items-center space-x-6'>
                        <div className="relative group flex items-center space-x-2 cursor-pointer">
                            <FaUser className='text-gray-100' size='24' />
                            <p className='text-lg  text-gray-100'>{currentUser?.username}</p>
                            <div className='absolute hidden group-hover:block bg-gray-200 top-[20px] p-2 space-y-2'>
                                <p className='hover:bg-brand-500 hover:text-white' onClick={() => dispatch(logoutSuccess())}>Logout</p>
                                <p className='hover:bg-brand-500 hover:text-white'>Setting</p>
                            </div>
                        </div>

                        {!currentUser.isAdmin && <p className='text-lg text-gray-100'>Point : {currentUser?.point}</p>}
                        {!currentUser.isAdmin && <p className='text-lg text-white cursor-pointer' onClick={() => navigate('/history')}>Lịch sử đổi quà</p>}
                    </div>
                )
                : (
                    <div className='flex space-x-4 item text-xl text-white'>

                        <Link to={'/sign-up'}>
                            <p>Đăng ký</p>
                        </Link>
                        <Link to={'/sign-in'}>
                            <p>Đăng nhập</p>
                        </Link>
                    </div>
                )
            }

        </div>
    )
}

export default Header