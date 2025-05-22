import React, { useState } from 'react';
import {Calendar} from 'lucide-react'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import QuickAccess from './components/QuickAccess';
import MetricCards from './components/MetricCards';
import Charts from './components/CardInsuranceCharts';
import CardStatusChart from './components/CardStatusChart';
import CardRequestsTable from './components/CardRequestsTable';
import CardIncomeChart from './components/CardIncomeChart';

const Dashboard: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  return (
    <div className="relative flex h-screen bg-[#F8FBFF]">
      {/* Sidebar */}
      <Sidebar 
        activeMenuItem={activeMenuItem} 
        setActiveMenuItem={setActiveMenuItem} 
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64 ">
        {/* Header */}
        <Header />
        
        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">

        {/* sub-header */}
        <div className="flex items-center justify-between py-4">
          <div className="">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">
              Hi Nazeer, what would you like to do today?
            </h1>
            <p className="text-sm text-gray-500">
              Last login: 26/11/2024 14:39:58
            </p> 
          </div> 
          <div className="flex items-center justify-center text-sm border-[#D0D5DD] rounded-lg py-2 px-4 border">
              <span className="flex font-semibold pr-2 border-r border-[#D0D5DD] ">
                <Calendar className="pr-2" />
                Today
              </span>
              <span className="text-sm pl-2">11 Nov 2024</span>
          </div>   
        </div>  

          {/* Quick Access */}
          <QuickAccess />
          
          {/* Analytics Section */}
          <div className="mb-8">
            <div className='flex items-center justify-between sapce-x-2'>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Analytics</h2>
            <div className='flex flex-1 bg-gray-100 border-b-2 border-gray-200 '></div>
            </div>
            
            {/* Metric Cards */}
            <MetricCards />
            
            {/* Chart Section */}
            <div className='flex flex-col lg:flex-row gap-6'>
              {/* Left chart */}
              <div className="flex flex-col gap-6">
                {/* Card Requests Table */}
                <div className="">
                  <Charts />
                </div>
                
                {/* Card Requests Chart */}
                <div className="">
                  <CardIncomeChart />
                </div>
              </div>

              {/* Right chart */}
              <div className='flex flex-col gap-6'>
                {/* Card Income Table */}
                <div className="">
                  <CardRequestsTable />
                </div>
                
                {/* Card Status Chart */}
                <div className="flex flex-1">
                  <CardStatusChart />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}; 

export default Dashboard;