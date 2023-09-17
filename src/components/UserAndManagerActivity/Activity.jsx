import React from 'react';
import { Link } from 'react-router-dom';

const Activity = () => {
    // Sample logs data
    const logs = [
        {
            timestamp: '2023-09-11 10:30:00',
            user: 'User 1',
            activity: 'Logged in',
        },
        {
            timestamp: '2023-09-11 11:15:00',
            user: 'User 2',
            activity: 'Updated profile',
        },
        {
            timestamp: '2023-09-11 12:00:00',
            user: 'Manager 1',
            activity: 'Created a new project',
        },
        // Add more log entries here
    ];

    return (
        <div className="container mx-auto mt-8">
            <div className="rounded-lg overflow-hidden">
                <div className='flex justify-between items-center my-5'>
                    <h2 className='text-2xl ml-5 my-2'>Activity Logs</h2>
                    <Link to='/addUser'><button className="btn bg-[#012B6D] hover:bg-indigo-600 w-[120px] text-white">
                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="hidden xs:block ml-2">Add user</span>
                    </button></Link>
                </div>
                <div className="p-4">

                    <table className="min-w-full bg-white divide-y border-2 text-center border-[#eaedff]">
                        <thead className="border-2  border-[#eaedff]">
                            <tr className="">
                                <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                    Timestamp
                                </th>
                                <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                    User/Manager
                                </th>
                                <th scope="col" className="px-6 py-3 font-bold border-2 border-[#eaedff] text-xs text-black uppercase tracking-wider">
                                    Activity
                                </th>

                            </tr>
                        </thead>
                        <tbody className=" divide-y">

                            {logs.map((log, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-white'}>
                                    <td className="px-6 border-2 border-[#eaedff]  py-4 whitespace-nowrap">{log.timestamp}</td>
                                    <td className=" px-6 border-2 border-[#eaedff]  py-4 whitespace-nowrap">{log.user}</td>
                                    <div className='my-3'>
                                        <td className="btn  text-white font-semibold bg-[#19E351]  px-6 border-2   py-3 whitespace-nowrap">{log.activity}</td>
                                    </div>
                                </tr>
                            ))}

                            {/* Additional table rows */}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Activity;
