import React from 'react'
import OrderStats from '../components/OrderStats'
import Insights from '../components/Insights'
import OrdersTable from '../components/OrdersTable'

const HomePage = () => {
    return (
        <div className='mt-4'>
            <div className="mx-3 md:mx-8 my-4 py-8 px-0 md:px-3 border rounded-3xl bg-white">
                <div className='flex justify-between items-center px-5'>
                    <h1 className='text-xl md:text-3xl'>At a glance</h1>
                    <select className="px-2 py-1 md:px-4 md:py-2 bg-white shadow-sm outline-none rounded-lg text-sm text-gray-600 border border-[#ccc]">
                        <option value="7">7 days</option>
                        <option value="14">14 days</option>
                        <option value="30">30 days</option>
                        <option value="90">90 days</option>
                    </select>
                </div>

                <OrderStats />
                <Insights />
                <OrdersTable />
            </div>
        </div>
    )
}

export default HomePage