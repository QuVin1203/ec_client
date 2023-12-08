import { useQuery } from "@tanstack/react-query"
import { getUser } from "./services/getUser"
import { IoSettingsSharp } from "react-icons/io5";
import ModalUser from "./ModalUser";
import { useDispatch } from "react-redux";
import { openModal } from "../../components/modal/modalSlice";

import formatCurrency from '../../utils/formatCurrency';




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
                            <th className='bg-slate-700 text-white py-2 text-lg border-[1px]'>Đã dùng</th>
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
                                    <td className='pl-10 py-2 border-[1px]'>{formatCurrency(user.point)}</td>
                                    <td className='pl-10 py-2 border-[1px]'>
                                        <p className='text-red-600 font-medium'>{formatCurrency(user.spent)}</p>
                                    </td>
                                    <td className='pl-10 py-2 border-[1px]'>
                                        <IoSettingsSharp className='cursor-pointer' size='24' onClick={() => dispatch(openModal(user))} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <div className='pt-10 flex space-x-6 items-center'>
                    <p className="text-xl font-bold">Tổng doanh thu</p>
                    <p className='text-2xl font-medium text-red-600'>{data && formatCurrency(data.reduce((acc, item) => acc + item.spent, 0))}</p>
                </div>
            </div>
            <ModalUser />
        </div>
    )
}

export default UserScreen