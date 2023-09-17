import React from 'react'
import { Link } from 'react-router-dom'

const ManagersPart = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-5'>
                <h2 className='text-2xl my-2'>All Approved Managers</h2>
                <Link to='/addUser'> <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add Manager</span>
                </button></Link>
            </div>
            <table className="min-w-full divide-y border-2 text-center border-[#eaedff]">
                <thead className="border-2  border-[#eaedff]">
                    <tr className="">
                        <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                            Avatar
                        </th>
                        <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                            Manager's Name
                        </th>
                        <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                            Manager's Email
                        </th>
                        <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                            View and edit profile
                        </th>
                        <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                            Remove / Ban
                        </th>
                    </tr>
                </thead>
                <tbody className=" divide-y">
                    <tr>
                        <td className="px-6 border-2 border-[#eaedff]  py-4 whitespace-nowrap">
                            <img src="product-image.jpg" alt="Product" className="h-10 w-10 rounded-full" />
                        </td>
                        <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Alena</div>
                        </td>
                        <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">socialPro@gmail.com</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border-2 border-[#eaedff] ">
                            <button className="text-green-500 hover:text-green-700">View Profile</button>
                        </td>
                        <td className="border-2 border-[#eaedff]  px-6 py-4 whitespace-nowrap">
                            <button className="text-red-500 hover:text-red-700">Remove</button>
                        </td>
                    </tr>
                    {/* Additional table rows */}
                </tbody>
            </table>
        </div>
    )
}

export default ManagersPart