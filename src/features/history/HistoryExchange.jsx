import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useSelector } from 'react-redux'
import { history } from './services/history'

const HistoryExchange = () => {
    const currentUser = useSelector(state => state.auth.currentUser)
    console.log(currentUser._id)
    const { data } = useQuery({ queryKey: ['gifts', currentUser._id], queryFn: () => history(currentUser._id) })
    console.log(data)
    return (
        <div>
            <div>
                <p className='text-3xl font-medium text-center text-brand-500 pt-10'>Lịch sử đổi quà</p>
            </div>
            <div className='text-center'>
                {data && data.map((item, index) => {
                    return (
                        <div key={index} className='flex items-center text-lg justify-center font-medium space-x-4'>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HistoryExchange