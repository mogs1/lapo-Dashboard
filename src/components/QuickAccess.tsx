import React from 'react';
import {MdCreditCard, MdAddCard, MdKeyboardArrowRight} from 'react-icons/md'
import {BiCreditCardAlt, BiCreditCardFront, } from 'react-icons/bi'


const QuickAccess: React.FC = () => {
  const quickAccessItems = [
    {
      title: 'Manage a Card',
      icon: MdCreditCard,
    },
    {
      title: 'Issue Instant Card',
      icon: BiCreditCardAlt,
    },
    {
      title: 'Issue Personalized Card',
      icon: MdAddCard,
    },
    {
      title: 'Review Card Requests',
      icon: BiCreditCardFront,
    }
  ];

  return (
    <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickAccessItems.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <button
              key={index}
              className="flex items-center space-x-3 p-4 bg-[#F1F7FF] rounded-lg hover:shadow-md transition-all duration-200 text-left group"
            >
              <div className={`w-12 h-12 rounded-full flex bg-blue-800 items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                <Icon size={24} className={` text-white`} />
              </div>
              <div className='flex items-center justify-between space-x-2'>
                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title} 
                </span>
                <MdKeyboardArrowRight size={24} className='text-gray-600' />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickAccess;