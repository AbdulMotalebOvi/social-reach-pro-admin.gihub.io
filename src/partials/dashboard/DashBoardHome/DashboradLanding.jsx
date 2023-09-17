import React from 'react'
import WelcomeBanner from '../DashBoardHome/WelcomeBanner'
import FilterButton from '../../../components/DropdownFilter'
import Datepicker from '../../../components/Datepicker'
import DashboardCard01 from '../DashBoardHome/DashboardCard01';
import DashboardCard02 from '../DashBoardHome/DashboardCard02';
import DashboardCard03 from '../DashBoardHome/DashboardCard03';
import DashboardCard04 from '../DashBoardHome/DashboardCard04';
import DashboardCard05 from '../DashBoardHome/DashboardCard05';
import DashboardCard10 from '../DashBoardHome/DashboardCard10';
import DashboardCard11 from '../DashBoardHome/DashboardCard11';
import { Link } from 'react-router-dom';

const DashboradLanding = () => {
    return (
        <>

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                    {/* Filter button */}
                    <FilterButton />
                    {/* Datepicker built with flatpickr */}
                    <Datepicker />
                    {/* Add view button */}
                    <Link to='/addUser' className="btn w-[150px] bg-[#FF5FC0]   text-white">
                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="hidden xs:block ml-2">Add user</span>
                    </Link>
                    <Link to='/addUser' className="btn w-[150px] bg-[#012B6D]  text-white">
                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="hidden xs:block ml-2">Add Manager</span>
                    </Link>
                </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

                {/* Line chart (SocailReachPro Plus) */}
                <DashboardCard01 />
                {/* Line chart (SocailReachPro Advanced) */}
                <DashboardCard02 />
                {/* Line chart (SocailReachPro Professional) */}
                <DashboardCard03 />
                {/* Bar chart (Direct vs Indirect) */}
                <DashboardCard04 />
                {/* Line chart (Real Time Value) */}
                <DashboardCard05 />
                {/* Card (Customers) */}
                <DashboardCard10 />
                {/* Card (Reasons for Refunds) */}
                <DashboardCard11 />

            </div>
        </>
    )
}

export default DashboradLanding