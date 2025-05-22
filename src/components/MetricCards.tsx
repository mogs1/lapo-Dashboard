import React from 'react';
import { ArrowUp, AlertCircle } from 'lucide-react';
import { metricsData } from '../data/dashboardData';

const MetricCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metricsData.map((metric, index) => {
        const Icon = metric.icon;
        const isNegative = metric.changeType === 'negative';
        
        return (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className={`w-12 h-12  rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={24} className={`${metric.iconBg}`} />
                </div>
                
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  {metric.title}
                </h3>
                
                <div className='flex items-center justify-between'>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </p>
                
                <div className="flex items-center space-x-1">
                  {!isNegative ? (
                    <>
                      <ArrowUp size={16} className="text-green-500" />
                      <span className="text-sm font-medium text-green-600">
                        {metric.change}
                      </span>
                      <span className="text-sm text-gray-500">
                        {metric.period}
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={16} className="text-orange-500" />
                      <span className="text-sm font-medium text-orange-600">
                        {metric.change}
                      </span>
                    </>
                  )}
                </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricCards;