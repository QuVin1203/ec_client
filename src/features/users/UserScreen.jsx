import { useQuery } from "@tanstack/react-query"
import { getUser } from "./services/getUser"
import { IoSettingsSharp } from "react-icons/io5";
import ModalUser from "./ModalUser";
import { useDispatch } from "react-redux";
import { openModal } from "../../components/modal/modalSlice";



const UserScreen = () => {
    const dispatch = useDispatch()
    const { data } = useQuery({ queryKey: ['users'], queryFn: getUser })
    console.log(data)
    return (
        <div className='mb-20'>
            <div className='mt-10 py-10 bg-gray-200 text-center font-medium text-2xl'>Quản lí người dùng</div>
            <div className='pt-10 mx-[200px]'>
                <table className='table-auto w-full border-2'>
                    <thead>
                        <tr key="">
                            <th className='bg-slate-700 text-white py-2 text-lg border-[1px]'>Username</th>
                            <th className='bg-slate-700 text-white py-2 text-lg border-[1px]'>Email</th>
                            <th className='bg-slate-700 text-white py-2 text-lg border-[1px]'>Admin</th>
                            <th className='bg-slate-700 text-white py-2 text-lg border-[1px]'>Point</th>
                            <th className='bg-slate-700 text-white py-2 text-lg border-[1px]'></th>

                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(user => {
                            return (
                                <tr key={user._id}>
                                    <td className='pl-10 py-2 border-[1px]'>{user.username}</td>
                                    <td className='pl-10 py-2 border-[1px]'>{user.email}</td>
                                    <td className='pl-10 py-2 border-[1px]'>{user.isAdmin ? "true" : "false"}</td>
                                    <td className='pl-10 py-2 border-[1px]'>{user.point}</td>
                                    <td className='pl-10 py-2 border-[1px]'>
                                        <IoSettingsSharp className='cursor-pointer' size='24' onClick={() => dispatch(openModal(user))} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <ModalUser />
        </div>
    )
}

export default UserScreen