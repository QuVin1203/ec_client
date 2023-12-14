import { useForm } from "react-hook-form"
import BaseButton from "../../../components/button/BaseButton"
import TextInput from "../../../components/input/TextInput"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { createGift } from "../services/createGift"


const CreateTopicScreen = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: createGift,
        onSuccess() {
            queryClient.invalidateQueries()
            navigate('/')
        },
        onError(err) {
            console.log(err)
        }
    })

    const onSubmit = (data) => {
        mutation.mutate(data)
    }
    return (
        <div className='pt-6 pb-10'>
            <p className='py-10 text-center text-2xl font-bold bg-gray-200'>Create Gift</p>
            <div className='pt-10 flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-6'>
                        <div className='flex items-center space-x-20'>
                            <p className='text-xl font-medium'>Name</p>
                            <TextInput className='py-2 w-[400px]' {...register('title')} />
                        </div>
                        <div className='flex items-center space-x-[78px]'>
                            <p className='text-xl font-medium'>Image</p>
                            <TextInput className='py-2 w-[400px]' {...register('image')} />
                        </div>
                        <div className='flex items-center space-x-[88px]'>
                            <p className='text-xl font-medium'>Price</p>
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
                        <BaseButton title="Create" className='bg-red-500 px-8 py-2 rounded-2xl text-lg text-white' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CreateTopicScreen