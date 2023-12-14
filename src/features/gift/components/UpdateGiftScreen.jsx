import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

import { useForm } from "react-hook-form"
import TextInput from "../../../components/input/TextInput"
import BaseButton from "../../../components/button/BaseButton"
import { useEffect } from "react"

import toast, { Toaster } from "react-hot-toast"
import { getGiftById } from "../services/getGiftById"
import { updateGift } from "../services/updateGift"


const UpdateTopicScreen = () => {
    const { id } = useParams()
    const queryClient = useQueryClient()
    const { data } = useQuery({ queryKey: ['topic', id], queryFn: () => getGiftById(id) })
    const { register, handleSubmit, setValue } = useForm()
    const mutation = useMutation({
        mutationFn: (updateData) => updateGift(id, updateData),
        onSuccess() {
            toast.success("Updated topic successfully")
            queryClient.invalidateQueries('topic')
        },
        onError() {
            toast.error('Failed to updated topic')
        }
    })

    useEffect(() => {
        if (data) {
            setValue('name', data.title)
            setValue('image', data.image)
            setValue('price', data.price)
            setValue('description', data.description)
        }

    }, [setValue, data])

    const onSubmit = (data) => {
        mutation.mutate(data)
    }
    console.log(data)
    return (
        <div className='py-6'>
            <div><Toaster position="top-center"
                reverseOrder={false} /></div>
            <p className='py-10 text-center text-2xl font-bold bg-gray-200'>Update Gift</p>
            <div className='pt-10 flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-10'>
                        <div className='flex items-center space-x-20'>
                            <p className='text-xl font-medium'>Name</p>
                            <TextInput className='py-2 w-[400px]' {...register('name')} />
                        </div>
                        <div className='flex items-center space-x-[76px]'>
                            <p className='text-xl font-medium'>Image</p>
                            <TextInput className='py-2 w-[400px]' {...register('image')} />
                        </div>
                        <div className='flex items-center space-x-[88px]'>
                            <p className='text-xl font-medium'>Point</p>
                            <TextInput className='py-2 w-[400px]' {...register('price')} />
                        </div>
                        <div className='flex items-center space-x-[30px]'>
                            <p className='text-xl font-medium'>Description</p>
                            <textarea
                                rows={6}
                                className="px-2 py-2 border-[1px] border-gray-500 bg-gray-200 outline-none w-[400px] rounded-md"
                                {...register('description')} />
                        </div>
                    </div>

                    <div className='text-center pt-10'>
                        <BaseButton title="Update" className='bg-red-500 px-8 py-2 rounded-2xl text-lg text-white' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default UpdateTopicScreen