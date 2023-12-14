import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../../features/auth/authSlice';
import formatCurrency from '../../utils/formatCurrency';
import logo from '../../Assets/Logo.png'
import './Header.css'

const Header = () => {
    const currentUser = useSelector(state => state.auth.currentUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='py-[12px] px-[160px] bg-brand-500 flex items-center justify-between' id='hide-header'>
            {/* <p className='text-3xl cursor-pointer font-medium text-white' onClick={() => navigate('/')}>Gift Away</p> */}
                <Link to={'http://127.0.0.1:5500/ec_client/src/features/auth/index/index.html'}>
                <img src={logo} className='logo-bg'  alt='logo' /*onClick={() => navigate('../../index.html')}*/  />
                </Link>

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

                        {!currentUser.isAdmin && <p className='text-lg text-gray-100'>Point : {formatCurrency(currentUser?.point)}</p>}
                        {!currentUser.isAdmin && <p className='text-lg text-white cursor-pointer' onClick={() => navigate('/history')}>Lịch sử đổi quà</p>}
                    </div>
                )
                : (
                    <div className='flex space-x-4 item text-xl text-white'>

                        {/* <Link to={'/sign-up'}>
                            <p>Đăng ký</p>
                        </Link> */}
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