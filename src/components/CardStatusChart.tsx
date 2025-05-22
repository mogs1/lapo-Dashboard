import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { cardStatusData } from '../data/dashboardData';

const CardStatusChart: React.FC = () => {
  const totalCards = cardStatusData.reduce((sum, item) => sum + item.value, 0);

  const CustomLegend = () => (
    <div className="flex items-center justify-center space-x-3 mt-6">
      {cardStatusData.map((entry, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">{entry.name}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white w-full rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Card Status Distribution</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>
      </div>
      
      <div className="relative">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={cardStatusData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={90}
                cornerRadius={10}
                paddingAngle={1}
                dataKey="value"
              >
                {cardStatusData.map((entry, index) => (
                  <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500 mb-1">Total Cards</p>
          <p className="text-3xl font-semibold text-gray-900">{totalCards.toLocaleString()}</p>
        </div>
      </div>
      
      <CustomLegend />
    </div>
  );
};

export default CardStatusChart;