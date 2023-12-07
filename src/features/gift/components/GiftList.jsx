import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getList } from '../services/getGift'
import GiftCard from './GiftCard'

const GiftList = () => {
    const { data } = useQuery({ queryKey: ['topics'], queryFn: getList })
    console.log(data)
    return (
        <div className='grid grid-cols-4 gap-8 mt-6'>
            {data && data.map(gift => (
                <div key={gift._id}>
                    <GiftCard gift={gift} />
                </div>
            ))}
        </div>
    )
}

export default GiftList